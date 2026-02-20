<template>
  <div class="app">

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero__inner">
        <span class="hero__label">Portfolio</span>
        <h1 class="hero__name">Nicola<br>Fricker</h1>
        <div class="hero__divider"></div>
        <p class="hero__tagline">Application Developer &amp; Digital Business Student</p>
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
            <p class="about__text">
              I'm Nicola, 28 years old and based in Bern, Switzerland.
              My path into IT started with a woodworking apprenticeship, where I first discovered
              my passion for technology through writing CNC programs in vocational school.
              From there I made a deliberate shift into the field, completing an apprenticeship
              as an Application Developer, followed by a degree at the Höhere Fachschule für Technik Mittelland in Biel.
              I'm currently studying Digital Business and AI at the Bern University of Applied Sciences.
            </p>
            <p class="about__text">
              Outside of work and studies, I'm passionate about staying active.
              You'll find me at the gym, boxing, or out jogging.
              I also have a creative side through photography and videography,
              which gives me a good eye for detail and visual storytelling.
            </p>
          </div>
        </div>

      </div>
    </section>

    <footer class="footer">
      <p>&copy; 2026 Nicola Fricker</p>
    </footer>

  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>
