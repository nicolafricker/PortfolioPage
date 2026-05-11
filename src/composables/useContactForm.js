import { ref } from "vue";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../firebase.js";

export function useContactForm() {
  const submitting = ref(false);
  const success = ref(false);
  const error = ref("");

  async function submitContactForm({ name, message }) {
    submitting.value = true;
    success.value = false;
    error.value = "";

    try {
      const currentUser = auth.currentUser;
      if (!currentUser) throw new Error("Not authenticated");

      await addDoc(collection(db, "contactMessages"), {
        name: name.trim(),
        email: currentUser.email,
        message: message.trim(),
        createdAt: serverTimestamp(),
        userAgent: navigator.userAgent,
      });

      success.value = true;
    } catch (err) {
      if (err.code === "permission-denied") {
        error.value =
          "Message could not be sent — permission denied. Please try again.";
      } else if (!navigator.onLine) {
        error.value = "You appear to be offline. Please check your connection.";
      } else {
        error.value = "Something went wrong. Please try again.";
      }
    } finally {
      submitting.value = false;
    }
  }

  function resetForm() {
    success.value = false;
    error.value = "";
  }

  return { submitting, success, error, submitContactForm, resetForm };
}
