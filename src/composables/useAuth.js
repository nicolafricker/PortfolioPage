import { ref, computed } from "vue";
import {
  onAuthStateChanged,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase.js";

const user = ref(null);
const authLoading = ref(true);
const authError = ref("");
const linkSent = ref(false);

const isAuthenticated = computed(() => !!user.value);

// Listen for auth state changes
onAuthStateChanged(auth, (firebaseUser) => {
  user.value = firebaseUser;
  authLoading.value = false;
});

async function sendMagicLink(email) {
  authError.value = "";
  linkSent.value = false;

  const actionCodeSettings = {
    url: window.location.origin + window.location.pathname,
    handleCodeInApp: true,
  };

  try {
    await sendSignInLinkToEmail(auth, email, actionCodeSettings);
    window.localStorage.setItem("emailForSignIn", email);
    linkSent.value = true;
  } catch (error) {
    if (error.code === "auth/invalid-email") {
      authError.value = "Please enter a valid email address.";
    } else if (error.code === "auth/too-many-requests") {
      authError.value = "Too many requests. Please try again later.";
    } else {
      authError.value = "Failed to send verification link. Please try again.";
    }
  }
}

async function completeMagicLinkSignIn() {
  if (!isSignInWithEmailLink(auth, window.location.href)) {
    return;
  }

  authLoading.value = true;
  authError.value = "";

  let email = window.localStorage.getItem("emailForSignIn");
  if (!email) {
    email = window.prompt("Please enter your email to confirm sign-in:");
  }

  if (!email) {
    authLoading.value = false;
    return;
  }

  try {
    await signInWithEmailLink(auth, email, window.location.href);
    window.localStorage.removeItem("emailForSignIn");
    window.history.replaceState({}, "", window.location.pathname);
  } catch (error) {
    if (
      error.code === "auth/expired-action-code" ||
      error.code === "auth/invalid-action-code"
    ) {
      authError.value =
        "This verification link has expired or is invalid. Please request a new one.";
    } else if (error.code === "auth/invalid-email") {
      authError.value = "The email address does not match. Please try again.";
    } else {
      authError.value = "Sign-in failed. Please request a new verification link.";
    }
    authLoading.value = false;
  }
}

async function logout() {
  try {
    await signOut(auth);
    user.value = null;
    linkSent.value = false;
    authError.value = "";
  } catch (error) {
    authError.value = "Failed to sign out. Please try again.";
  }
}

export function useAuth() {
  return {
    user,
    isAuthenticated,
    authLoading,
    authError,
    linkSent,
    sendMagicLink,
    completeMagicLinkSignIn,
    logout,
  };
}
