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

      <!-- Background video (place your file at public/video/hero.mp4) -->
      <video
        class="hero__video"
        autoplay
        loop
        muted
        playsinline
        @canplay="heroVideoLoaded = true"
      >
        <source src="/video/GithubPortfolioPageHeroComp.mp4" type="video/mp4" />
      </video>

      <!-- Dark overlay so text stays legible over any video -->
      <div class="hero__video-overlay"></div>

      <!-- Shown only while no video file is present -->
      <div v-if="!heroVideoLoaded" class="hero__video-placeholder">
        <span class="hero__video-placeholder__icon">▶</span>
        <p class="hero__video-placeholder__label">Hero Video</p>
        <code class="hero__video-placeholder__path">public/video/hero.mp4</code>
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

      <!-- Portrait photo — fills the right portion of the section -->
      <div class="about__photo-wrap">
        <img src="/img/Me.JPEG" class="about__photo" alt="Nicola Fricker" />
      </div>

      <!-- Text with semi-transparent glass box overlapping the photo -->
      <div class="about__content">
        <div class="about__glass">
          <span class="about__label">About Me</span>
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

    <!-- ─── Work section ───────────────────────────────────── -->
    <section id="work" class="work">

      <div class="work__bg-marquee" aria-hidden="true">
        <div class="marquee-row marquee-row--rev">
          <div class="marquee-row__inner marquee-row__inner--lg">
            <span>WORK</span><span>DEV</span><span>BUILD</span><span>CODE</span><span>WORK</span><span>DEV</span><span>BUILD</span><span>CODE</span>
          </div>
          <div class="marquee-row__inner marquee-row__inner--lg">
            <span>WORK</span><span>DEV</span><span>BUILD</span><span>CODE</span><span>WORK</span><span>DEV</span><span>BUILD</span><span>CODE</span>
          </div>
        </div>
      </div>

      <div class="work__header">
        <h2 class="work__title">Work</h2>
        <p class="work__sub">IT Projects &amp; Development</p>
      </div>

      <div class="work__grid">

        <!-- Project 01 -->
        <article class="project-card">
          <div class="project-card__meta">
            <span class="project-card__number">01</span>
            <div class="project-card__tags">
              <span class="tech-tag tech-tag--csharp">C#</span>
              <span class="tech-tag tech-tag--dotnet">.NET</span>
              <span class="tech-tag tech-tag--vs">Visual Studio</span>
            </div>
          </div>
          <h3 class="project-card__name">Project Title</h3>
          <p class="project-card__desc">Short description of what this project does, its goals, and the problem it solves.</p>
          <div class="project-card__learnings">
            <span class="project-card__learnings-label">What I learned</span>
            <p class="project-card__learnings-text">Key technologies, patterns, and skills picked up during this project.</p>
          </div>
        </article>

        <!-- Project 02 -->
        <article class="project-card">
          <div class="project-card__meta">
            <span class="project-card__number">02</span>
            <div class="project-card__tags">
              <span class="tech-tag tech-tag--js">JavaScript</span>
              <span class="tech-tag tech-tag--vue">Vue.js</span>
              <span class="tech-tag tech-tag--vscode">VS Code</span>
            </div>
          </div>
          <h3 class="project-card__name">Project Title</h3>
          <p class="project-card__desc">Short description of what this project does, its goals, and the problem it solves.</p>
          <div class="project-card__learnings">
            <span class="project-card__learnings-label">What I learned</span>
            <p class="project-card__learnings-text">Key technologies, patterns, and skills picked up during this project.</p>
          </div>
        </article>

        <!-- Project 03 -->
        <article class="project-card">
          <div class="project-card__meta">
            <span class="project-card__number">03</span>
            <div class="project-card__tags">
              <span class="tech-tag tech-tag--sql">SQL</span>
              <span class="tech-tag tech-tag--azure">Azure</span>
              <span class="tech-tag tech-tag--csharp">C#</span>
            </div>
          </div>
          <h3 class="project-card__name">Project Title</h3>
          <p class="project-card__desc">Short description of what this project does, its goals, and the problem it solves.</p>
          <div class="project-card__learnings">
            <span class="project-card__learnings-label">What I learned</span>
            <p class="project-card__learnings-text">Key technologies, patterns, and skills picked up during this project.</p>
          </div>
        </article>

      </div>
    </section>

    <!-- ─── Media section ──────────────────────────────────── -->
    <section id="media" class="media">

      <div class="media__bg-marquee" aria-hidden="true">
        <div class="marquee-row marquee-row--rev">
          <div class="marquee-row__inner marquee-row__inner--lg">
            <span>MEDIA</span><span>PHOTO</span><span>VIDEO</span><span>MEDIA</span><span>PHOTO</span><span>VIDEO</span>
          </div>
          <div class="marquee-row__inner marquee-row__inner--lg">
            <span>MEDIA</span><span>PHOTO</span><span>VIDEO</span><span>MEDIA</span><span>PHOTO</span><span>VIDEO</span>
          </div>
        </div>
      </div>

      <div class="media__header">
        <h2 class="media__title">Media</h2>
        <p class="media__sub">Photography &amp; Video</p>
      </div>

      <!-- 3 photo subjects -->
      <div class="photo-subjects">

        <div class="photo-subject">
          <div class="photo-subject__frame photo-placeholder">
            <p class="photo-placeholder__label">Coming Soon</p>
          </div>
          <h3 class="photo-subject__name">Urban</h3>
          <p class="photo-subject__desc">City architecture, street life, and the geometry of built environments.</p>
        </div>

        <div class="photo-subject">
          <div class="photo-subject__frame photo-placeholder">
            <p class="photo-placeholder__label">Coming Soon</p>
          </div>
          <h3 class="photo-subject__name">Landscape</h3>
          <p class="photo-subject__desc">Mountains, forests, and the quiet drama of natural light.</p>
        </div>

        <div class="photo-subject">
          <div class="photo-subject__frame photo-placeholder">
            <p class="photo-placeholder__label">Coming Soon</p>
          </div>
          <h3 class="photo-subject__name">Portrait</h3>
          <p class="photo-subject__desc">People, expression, and the story behind a face.</p>
        </div>

      </div>

      <!-- Showreel video — end of page -->
      <div class="showreel">
        <div class="showreel__header">
          <span class="showreel__label">Showreel</span>
        </div>
        <div class="video-placeholder showreel__player">
          <div class="video-placeholder__play">▶</div>
          <p class="video-placeholder__label">Best of — Coming Soon</p>
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
      heroVideoLoaded: false,
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
