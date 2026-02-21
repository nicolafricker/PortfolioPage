<template>
  <div class="app">
    <!-- ─── Fixed theme toggle ─────────────────────────────── -->
    <div class="theme-bar">
      <label
        class="toggle"
        :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
      >
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
        <h1 class="hero__name">Nicola<br />Fricker</h1>
        <p class="hero__tagline">
          IT Business Analyst &amp; Digital Business Student
        </p>
      </div>

      <a
        href="#about"
        class="hero__scroll"
        aria-label="Scroll to about section"
      >
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
              I'm Nicola, 28 years old and based in Bern, Switzerland. My path
              into IT started with a woodworking apprenticeship, where I first
              discovered my passion for technology through writing CNC programs
              in vocational school.
            </p>
            <p class="about__text">
              After completing my apprenticeship as an Application Developer and
              a degree at the Höhere Fachschule für Technik Mittelland in Biel,
              I moved into a role as a Business IT Analyst. Working at the
              interface between technical and business requirements showed me
              how much impact well-placed software decisions can have on an
              organization. That shift in perspective is what drives me today.
            </p>
            <p class="about__text">
              To deepen that understanding, I am currently studying Digital
              Business and AI at the Bern University of Applied Sciences,
              building on my technical foundation with business knowledge and
              exploring the practical applications of AI in modern enterprises.
            </p>
            <p class="about__text">
              Outside of work and studies, I stay active at the gym, boxing, and
              jogging. Photography and videography give me a creative outlet and
              a sharp eye for detail and visual storytelling.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Work section ───────────────────────────────────── -->
    <section id="work" class="work">
      <div class="work__header">
        <h2 class="work__title">Work</h2>
        <p class="work__sub">IT Projects &amp; Development</p>
      </div>

      <div class="work__grid">
        <!-- Project 1 -->
        <article class="project-card">
          <div class="project-card__meta">
            <span class="project-card__number">01</span>
            <div class="project-card__tags">
              <span class="tech-tag tech-tag--csharp">C#</span>
              <span class="tech-tag tech-tag--sql">SQL</span>
              <span class="tech-tag tech-tag--azure">Azure DevOps</span>
              <span class="tech-tag tech-tag--scrum">Scrum</span>
            </div>
          </div>
          <h3 class="project-card__name">
            Device Management for a Provisioning System
          </h3>
          <p class="project-card__desc">
            Pegasus is an enterprise provisioning system that replaced its
            predecessor AIS, automating the onboarding of users into office
            automation environments, including the creation of user accounts,
            profiles, mailboxes, and network shares. A key missing capability
            was device management. I designed and implemented an interactive
            workflow that allows end users to create and manage device pools,
            modify their configuration, and remove devices as needed.
            Requirements were gathered directly with stakeholders, design drafts
            were reviewed iteratively, and the implementation was coordinated
            across multiple teams. The feature was delivered across several
            platforms and environments, adding significant architectural
            complexity.
          </p>
          <div class="project-card__learnings">
            <span class="project-card__learnings-label">What I learned</span>
            <p class="project-card__learnings-text">
              Working within a large, established system requires careful
              attention to backward compatibility and process integrity. Close
              collaboration with stakeholders and fellow developers, combined
              with structured agile practices, was essential to delivering a
              solution that met both technical and user expectations.
            </p>
          </div>
        </article>

        <!-- Project 2 -->
        <article class="project-card">
          <div class="project-card__meta">
            <span class="project-card__number">02</span>
            <div class="project-card__tags">
              <span class="tech-tag tech-tag--razor">Razor Pages</span>
              <span class="tech-tag tech-tag--docker">Docker</span>
              <span class="tech-tag tech-tag--kubernetes">Kubernetes</span>
              <span class="tech-tag tech-tag--ef">Entity Framework</span>
            </div>
          </div>
          <h3 class="project-card__name">Document Management System</h3>
          <p class="project-card__desc">
            ALM is an internal document management system built to handle both
            physical and digital filing structures within the organization. It
            guides users through creating new documents with unambiguous
            identifiers, locating existing ones, creating new versions, and
            archiving documents that have reached the end of their lifecycle.
            The system reflects the real-world folder and project hierarchies of
            the company, making document governance accessible to all employees
            regardless of their technical background.
          </p>
          <div class="project-card__learnings">
            <span class="project-card__learnings-label">What I learned</span>
            <p class="project-card__learnings-text">
              Designing for a broad, non-technical user base demands a strong
              focus on usability and intuitive workflows. This project deepened
              my experience with containerized deployments using Docker and
              Kubernetes, and reinforced the value of Entity Framework for
              maintainable data access layers.
            </p>
          </div>
        </article>

        <!-- Project 3 -->
        <article class="project-card">
          <div class="project-card__meta">
            <span class="project-card__number">03</span>
            <div class="project-card__tags">
              <span class="tech-tag tech-tag--lora">LoRaWAN</span>
              <span class="tech-tag tech-tag--nodered">Node-RED</span>
              <span class="tech-tag tech-tag--docker">Docker</span>
              <span class="tech-tag tech-tag--razor">Razor Pages</span>
            </div>
          </div>
          <h3 class="project-card__name">LoRa IoT Demonstrator</h3>
          <p class="project-card__desc">
            Developed as a blueprint for future IoT solutions, this demonstrator
            covers the full data path from sensor hardware to visualization.
            Built in close collaboration with embedded hardware engineers who
            designed the physical device, my responsibility covered the
            application layer: establishing the device connection, receiving and
            processing incoming data, and presenting it in a clear interface.
            Communication runs bidirectionally, allowing the device to be
            configured remotely through the application.
          </p>
          <div class="project-card__learnings">
            <span class="project-card__learnings-label">What I learned</span>
            <p class="project-card__learnings-text">
              Integrating hardware and software across a multi-component IoT
              stack requires precise coordination and thorough error handling at
              every layer. Working with LoRaWAN, The Things Network, and
              Node-RED gave me hands-on experience bridging low-level
              communication protocols with web-based application development.
            </p>
          </div>
        </article>
      </div>
    </section>

    <!-- ─── Skills section ─────────────────────────────────── -->
    <section id="skills" class="skills">
      <div class="skills__header">
        <h2 class="skills__title">Tech Stack</h2>
        <p class="skills__sub">Tools &amp; Technologies I work with</p>
      </div>

      <div class="skills__grid">
        <div class="skill-item">
          <i class="devicon-csharp-plain skill-item__icon"></i>
          <span class="skill-item__label">C#</span>
        </div>

        <div class="skill-item">
          <i class="devicon-dot-net-plain skill-item__icon"></i>
          <span class="skill-item__label">.NET</span>
        </div>

        <div class="skill-item">
          <i class="devicon-microsoftsqlserver-plain skill-item__icon"></i>
          <span class="skill-item__label">SQL Server</span>
        </div>

        <div class="skill-item">
          <i class="devicon-docker-plain skill-item__icon"></i>
          <span class="skill-item__label">Docker</span>
        </div>

        <div class="skill-item">
          <i class="devicon-kubernetes-plain skill-item__icon"></i>
          <span class="skill-item__label">Kubernetes</span>
        </div>

        <div class="skill-item">
          <i class="devicon-azure-plain skill-item__icon"></i>
          <span class="skill-item__label">Azure DevOps</span>
        </div>

        <div class="skill-item">
          <i class="devicon-html5-plain skill-item__icon"></i>
          <span class="skill-item__label">HTML</span>
        </div>

        <div class="skill-item">
          <i class="devicon-css3-plain skill-item__icon"></i>
          <span class="skill-item__label">CSS</span>
        </div>

        <div class="skill-item">
          <i class="devicon-vuejs-plain skill-item__icon"></i>
          <span class="skill-item__label">Vue.js</span>
        </div>

        <div class="skill-item">
          <i class="devicon-git-plain skill-item__icon"></i>
          <span class="skill-item__label">Git</span>
        </div>

        <div class="skill-item">
          <i class="devicon-visualstudio-plain skill-item__icon"></i>
          <span class="skill-item__label">Visual Studio</span>
        </div>

        <div class="skill-item">
          <i class="devicon-nodejs-plain skill-item__icon"></i>
          <span class="skill-item__label">Node-RED</span>
        </div>
      </div>
    </section>

    <!-- ─── Methods & Strengths ────────────────────────────── -->
    <section id="methods" class="methods">
      <div class="methods__header">
        <h2 class="methods__title">Methods & Strengths</h2>
        <p class="methods__sub">Bridging technology and business</p>
      </div>

      <div class="methods__body">
        <!-- Linke Spalte: Methoden & Tools -->
        <div class="methods__col">
          <div class="methods__group">
            <span class="methods__group-label"
              >Architecture & Infrastructure</span
            >
            <div class="methods__tags">
              <span class="method-tag">REST</span>
              <span class="method-tag">Docker</span>
              <span class="method-tag">Kubernetes</span>
              <span class="method-tag">Helm</span>
            </div>
          </div>

          <div class="methods__group">
            <span class="methods__group-label">Quality & Process</span>
            <div class="methods__tags">
              <span class="method-tag">Testing</span>
              <span class="method-tag">Agile</span>
              <span class="method-tag">Scrum</span>
              <span class="method-tag">Kanban</span>
              <span class="method-tag">Hermes</span>
            </div>
          </div>

          <div class="methods__group">
            <span class="methods__group-label">Platforms & Tools</span>
            <div class="methods__tags">
              <span class="method-tag">Azure</span>
              <span class="method-tag">Azure DevOps</span>
              <span class="method-tag">SSMS</span>
              <span class="method-tag">PowerBI</span>
              <span class="method-tag">GitHub</span>
              <span class="method-tag">SharePoint</span>
            </div>
          </div>
        </div>

        <!-- Rechte Spalte: Stärken -->
        <div class="methods__col methods__col--strengths">
          <span class="methods__group-label">Strengths</span>
          <div class="methods__strengths">
            <div class="strength-item">
              <span class="strength-item__number">01</span>
              <span class="strength-item__label">Flexibility</span>
            </div>
            <div class="strength-item">
              <span class="strength-item__number">02</span>
              <span class="strength-item__label">Creativity</span>
            </div>
            <div class="strength-item">
              <span class="strength-item__number">03</span>
              <span class="strength-item__label">Solution & Team Oriented</span>
            </div>
            <div class="strength-item">
              <span class="strength-item__number">04</span>
              <span class="strength-item__label"
                >Analytical & Forward Thinking</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Media section ──────────────────────────────────── -->
    <section id="media" class="media">
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
          <p class="photo-subject__desc">
            City architecture, street life, and the geometry of built
            environments.
          </p>
        </div>

        <div class="photo-subject">
          <div class="photo-subject__frame photo-placeholder">
            <p class="photo-placeholder__label">Coming Soon</p>
          </div>
          <h3 class="photo-subject__name">Landscape</h3>
          <p class="photo-subject__desc">
            Mountains, forests, and the quiet drama of natural light.
          </p>
        </div>

        <div class="photo-subject">
          <div class="photo-subject__frame photo-placeholder">
            <p class="photo-placeholder__label">Coming Soon</p>
          </div>
          <h3 class="photo-subject__name">Portrait</h3>
          <p class="photo-subject__desc">
            People, expression, and the story behind a face.
          </p>
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
  name: "App",
  data() {
    return {
      isDark: false,
      heroVideoLoaded: false,
    };
  },
  watch: {
    isDark(val) {
      document.documentElement.setAttribute(
        "data-theme",
        val ? "dark" : "light",
      );
    },
  },
  mounted() {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    this.isDark = prefersDark;
    document.documentElement.setAttribute(
      "data-theme",
      prefersDark ? "dark" : "light",
    );
  },
};
</script>
