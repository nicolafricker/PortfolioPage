<template>
  <div class="app">

    <!-- ─── Fixed theme toggle ─────────────────────────────── -->
    <div class="theme-bar">
      <label class="toggle" :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
        <input type="checkbox" v-model="isDark" class="toggle__input" />
        <span class="toggle__track">
          <span class="toggle__thumb"></span>
        </span>
        <span class="toggle__icon toggle__icon--light">☀</span>
        <span class="toggle__icon toggle__icon--dark">☾</span>
      </label>
    </div>

    <!-- ─── Hero ───────────────────────────────────────────── -->
    <section class="hero">

      <!-- Background marquee rows -->
      <div class="hero__bg-marquee" aria-hidden="true">

        <div class="marquee-row marquee-row--fwd">
          <div class="marquee-row__inner hero-marquee">
            <span>NICOLA FRICKER</span><span>NICOLA FRICKER</span><span>NICOLA FRICKER</span><span>NICOLA FRICKER</span>
          </div>
          <div class="marquee-row__inner hero-marquee">
            <span>NICOLA FRICKER</span><span>NICOLA FRICKER</span><span>NICOLA FRICKER</span><span>NICOLA FRICKER</span>
          </div>
        </div>

        <div class="marquee-row marquee-row--rev">
          <div class="marquee-row__inner hero-marquee">
            <span>APPLICATION DEVELOPER</span><span>APPLICATION DEVELOPER</span><span>APPLICATION DEVELOPER</span>
          </div>
          <div class="marquee-row__inner hero-marquee">
            <span>APPLICATION DEVELOPER</span><span>APPLICATION DEVELOPER</span><span>APPLICATION DEVELOPER</span>
          </div>
        </div>

        <div class="marquee-row marquee-row--fwd marquee-row--slow">
          <div class="marquee-row__inner hero-marquee">
            <span>DIGITAL BUSINESS</span><span>DIGITAL BUSINESS</span><span>DIGITAL BUSINESS</span><span>DIGITAL BUSINESS</span>
          </div>
          <div class="marquee-row__inner hero-marquee">
            <span>DIGITAL BUSINESS</span><span>DIGITAL BUSINESS</span><span>DIGITAL BUSINESS</span><span>DIGITAL BUSINESS</span>
          </div>
        </div>

        <div class="marquee-row marquee-row--rev">
          <div class="marquee-row__inner hero-marquee">
            <span>BERN SWITZERLAND</span><span>BERN SWITZERLAND</span><span>BERN SWITZERLAND</span><span>BERN SWITZERLAND</span>
          </div>
          <div class="marquee-row__inner hero-marquee">
            <span>BERN SWITZERLAND</span><span>BERN SWITZERLAND</span><span>BERN SWITZERLAND</span><span>BERN SWITZERLAND</span>
          </div>
        </div>

        <div class="marquee-row marquee-row--fwd marquee-row--fast">
          <div class="marquee-row__inner hero-marquee">
            <span>NICOLA FRICKER</span><span>NICOLA FRICKER</span><span>NICOLA FRICKER</span><span>NICOLA FRICKER</span>
          </div>
          <div class="marquee-row__inner hero-marquee">
            <span>NICOLA FRICKER</span><span>NICOLA FRICKER</span><span>NICOLA FRICKER</span><span>NICOLA FRICKER</span>
          </div>
        </div>

      </div>

      <!-- Foreground hero content -->
      <div class="hero__inner">
        <span class="hero__eyebrow">Portfolio</span>
        <h1 class="hero__name">Nicola<br>Fricker</h1>
        <p class="hero__tagline">Application Developer &amp; Digital Business Student</p>
      </div>

      <a href="#about" class="hero__scroll" aria-label="Scroll to about section">
        <span class="hero__scroll-arrow"></span>
      </a>

    </section>

    <!-- ─── Ticker divider ─────────────────────────────────── -->
    <div class="ticker" aria-hidden="true">
      <div class="marquee-row marquee-row--fwd">
        <div class="marquee-row__inner marquee-row__inner--sm">
          <span>PROJECTS</span><span class="ticker__dot">◆</span>
          <span>PHOTOGRAPHY</span><span class="ticker__dot">◆</span>
          <span>VIDEO</span><span class="ticker__dot">◆</span>
          <span>DEVELOPMENT</span><span class="ticker__dot">◆</span>
          <span>DESIGN</span><span class="ticker__dot">◆</span>
          <span>PROJECTS</span><span class="ticker__dot">◆</span>
          <span>PHOTOGRAPHY</span><span class="ticker__dot">◆</span>
          <span>VIDEO</span><span class="ticker__dot">◆</span>
          <span>DEVELOPMENT</span><span class="ticker__dot">◆</span>
          <span>DESIGN</span><span class="ticker__dot">◆</span>
        </div>
        <div class="marquee-row__inner marquee-row__inner--sm">
          <span>PROJECTS</span><span class="ticker__dot">◆</span>
          <span>PHOTOGRAPHY</span><span class="ticker__dot">◆</span>
          <span>VIDEO</span><span class="ticker__dot">◆</span>
          <span>DEVELOPMENT</span><span class="ticker__dot">◆</span>
          <span>DESIGN</span><span class="ticker__dot">◆</span>
          <span>PROJECTS</span><span class="ticker__dot">◆</span>
          <span>PHOTOGRAPHY</span><span class="ticker__dot">◆</span>
          <span>VIDEO</span><span class="ticker__dot">◆</span>
          <span>DEVELOPMENT</span><span class="ticker__dot">◆</span>
          <span>DESIGN</span><span class="ticker__dot">◆</span>
        </div>
      </div>
    </div>

    <!-- ─── About ──────────────────────────────────────────── -->
    <section id="about" class="about">
      <div class="about__inner">

        <div class="about__photo-wrap">
          <div class="about__photo-placeholder" aria-label="Profile photo placeholder">
            <svg class="about__photo-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="24" r="12" stroke-width="2"/>
              <path d="M8 56c0-13.255 10.745-24 24-24s24 10.745 24 24" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <p class="about__photo-hint">Add your photo here</p>
          </div>
        </div>

        <div class="about__content">
          <span class="about__label">About Me</span>
          <h2 class="about__heading">Nicola<br>Fricker</h2>
          <div class="about__body">
            <p class="about__text">
              I'm Nicola, 28 years old and based in Bern, Switzerland.
              My path into IT started with a woodworking apprenticeship, where I first discovered
              my passion for technology through writing CNC programs in vocational school.
            </p>
            <p class="about__text">
              From there I made a deliberate shift into the field, completing an apprenticeship
              as an Application Developer, followed by a degree at the Höhere Fachschule für Technik
              Mittelland in Biel. I'm currently studying Digital Business and AI at the
              Bern University of Applied Sciences.
            </p>
            <p class="about__text">
              Outside of work and studies, I'm passionate about staying active — at the gym,
              boxing, or jogging. Photography and videography give me a creative outlet and a
              sharp eye for detail and visual storytelling.
            </p>
          </div>
        </div>

      </div>
    </section>

    <!-- ─── Media / Work section ───────────────────────────── -->
    <section class="media">

      <div class="media__bg-marquee" aria-hidden="true">
        <div class="marquee-row marquee-row--rev">
          <div class="marquee-row__inner marquee-row__inner--lg">
            <span>WORK</span><span>MEDIA</span><span>WORK</span><span>MEDIA</span><span>WORK</span><span>MEDIA</span>
          </div>
          <div class="marquee-row__inner marquee-row__inner--lg">
            <span>WORK</span><span>MEDIA</span><span>WORK</span><span>MEDIA</span><span>WORK</span><span>MEDIA</span>
          </div>
        </div>
      </div>

      <div class="media__header">
        <h2 class="media__title">Work &amp;<br>Media</h2>
        <p class="media__sub">Video, photography &amp; projects</p>
      </div>

      <div class="media__grid">

        <div class="media__item media__item--wide">
          <div class="video-placeholder">
            <div class="video-placeholder__play">▶</div>
            <p class="video-placeholder__label">Video Reel</p>
          </div>
        </div>

        <div class="media__item">
          <div class="video-placeholder">
            <div class="video-placeholder__play">▶</div>
            <p class="video-placeholder__label">Project Film</p>
          </div>
        </div>

        <div class="media__item">
          <div class="photo-placeholder">
            <p class="photo-placeholder__label">Photography</p>
          </div>
        </div>

        <div class="media__item">
          <div class="photo-placeholder">
            <p class="photo-placeholder__label">Photography</p>
          </div>
        </div>

      </div>
    </section>

    <!-- ─── Footer ─────────────────────────────────────────── -->
    <footer class="footer">
      <p class="footer__copy">&copy; 2026 Nicola Fricker</p>
      <p class="footer__location">Bern, Switzerland</p>
    </footer>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isDark: false,
    };
  },
  watch: {
    isDark(val) {
      document.documentElement.setAttribute('data-theme', val ? 'dark' : 'light');
    },
  },
  mounted() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.isDark = prefersDark;
    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
  },
};
</script>
