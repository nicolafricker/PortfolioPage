const App = {
  data() {
    return {};
  },
  template: `
    <div class="app">

      <!-- Hero Section -->
      <section class="hero">
        <div class="hero__inner">
          <span class="hero__label">Portfolio</span>
          <h1 class="hero__name">Nicola<br>Fricker</h1>
          <div class="hero__divider"></div>
          <p class="hero__tagline">Designer &amp; Developer</p>
        </div>
        <a href="#about" class="hero__scroll-hint" aria-label="Scroll to about section">
          <span class="hero__scroll-arrow"></span>
        </a>
      </section>

      <!-- About Section -->
      <section id="about" class="about">
        <div class="about__inner">

          <!-- Photo -->
          <div class="about__photo-wrap">
            <div class="about__photo-placeholder" aria-label="Profile photo">
              <svg class="about__photo-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="24" r="12" stroke="#888C79" stroke-width="2"/>
                <path d="M8 56c0-13.255 10.745-24 24-24s24 10.745 24 24" stroke="#888C79" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <p class="about__photo-hint">Add your photo here</p>
            </div>
          </div>

          <!-- Text -->
          <div class="about__content">
            <h2 class="about__heading">About Me</h2>
            <div class="about__body">
              <p class="about__placeholder">
                This is where your story goes. Tell visitors who you are, what you do,
                and what drives your work. Share your background, skills, and what makes
                your perspective unique.
              </p>
              <p class="about__placeholder">
                You can talk about your experience, your passions, or the kind of
                projects you love to work on. Keep it personal and authentic.
              </p>
            </div>
          </div>

        </div>
      </section>

      <footer class="footer">
        <p>&copy; 2026 Nicola Fricker</p>
      </footer>

    </div>
  `
};
