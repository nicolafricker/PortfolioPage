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
      <video
        class="hero__video"
        autoplay
        loop
        muted
        playsinline
        @canplay="heroVideoLoaded = true"
      >
        <source :src="baseUrl + '/video/GithubPortfolioPageHeroComp.mp4'" type="video/mp4" />
      </video>

      <div class="hero__video-overlay"></div>
      <div v-if="!heroVideoLoaded" class="hero__video-placeholder">...</div>

      <div class="hero__corner hero__corner--tl" aria-hidden="true">
        <span class="hero__corner-line"
          ><strong>Curious</strong> · Analytical</span
        >
        <span class="hero__corner-line"
          ><strong>Forward&thinsp;Thinking</strong></span
        >
      </div>
      <div class="hero__corner hero__corner--tr" aria-hidden="true">
        <span class="hero__corner-line"
          ><strong>Bern</strong> · Switzerland</span
        >
        <span class="hero__corner-line">28 · <strong>BFH</strong></span>
      </div>
      <div class="hero__corner hero__corner--bl" aria-hidden="true">
        <span class="hero__corner-line"
          ><strong>Solution&thinsp;Oriented</strong></span
        >
        <span class="hero__corner-line"
          >Creative · <strong>Flexible</strong></span
        >
      </div>
      <div class="hero__corner hero__corner--br" aria-hidden="true">
        <span class="hero__corner-line"
          ><strong>Team&thinsp;Player</strong></span
        >
        <span class="hero__corner-line">Precise · <strong>Driven</strong></span>
      </div>

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
          <span>IT ANALYST</span><span class="ticker__sep">◆</span>
          <span>DEVELOPER</span><span class="ticker__sep">◆</span>
          <span>PHOTO</span><span class="ticker__sep">◆</span> <span>VIDEO</span
          ><span class="ticker__sep">◆</span> <span>SPORT</span
          ><span class="ticker__sep">◆</span> <span>DIGITAL BUSINESS</span
          ><span class="ticker__sep">◆</span> <span>STUDENT</span
          ><span class="ticker__sep">◆</span>
        </div>
        <div class="marquee-row__inner marquee-row__inner--sm">
          <span>IT ANALYST</span><span class="ticker__sep">◆</span>
          <span>DEVELOPER</span><span class="ticker__sep">◆</span>
          <span>PHOTO</span><span class="ticker__sep">◆</span> <span>VIDEO</span
          ><span class="ticker__sep">◆</span> <span>SPORT</span
          ><span class="ticker__sep">◆</span> <span>DIGITAL BUSINESS</span
          ><span class="ticker__sep">◆</span> <span>STUDENT</span
          ><span class="ticker__sep">◆</span>
        </div>
      </div>
    </div>

    <!-- ─── About ──────────────────────────────────────────── -->
    <section id="about" class="about">
      <div class="about__photo-wrap">
        <img :src="baseUrl + '/img/Me.JPEG'" class="about__photo" alt="Nicola Fricker" />
      </div>

      <div class="about__content">
        <div class="about__glass reveal reveal--d1">
          <span class="about__label">About Me</span>
          <div class="about__body">
            <p class="about__text">
              I'm Nicola, 28. My path into IT began with a woodworking
              apprenticeship, writing CNC programs in vocational school sparked
              my interest in technology.
            </p>
            <p class="about__text">
              After working as an Application Developer and graduating from HF
              Technik Mittelland, I found myself drawn increasingly to the
              bigger picture — the processes, the stakeholders, and the space
              between technical implementation and business needs. That pull led
              me toward a Business IT Analyst role, where I now work as the link
              between domain experts and development teams. I currently study
              Digital Business &amp; AI at BFH to deepen that direction further.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Work section ───────────────────────────────────── -->
    <section id="work" class="work">
      <div class="work__header reveal">
        <h2 class="work__title">Work</h2>
        <p class="work__sub">IT Projects &amp; Development</p>
      </div>

      <!-- UI Update: flip cards, front shows summary, click reveals full text on back -->
      <div class="work__grid">
        <!-- Project 1 -->
        <article
          class="project-card reveal reveal--d1"
          @click="expandedCards[0] = !expandedCards[0]"
          @keyup.enter="expandedCards[0] = !expandedCards[0]"
          tabindex="0"
          :aria-label="
            expandedCards[0] ? 'Close project details' : 'Open project details'
          "
        >
          <div class="project-card__front" v-show="!expandedCards[0]">
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
            <p class="project-card__summary">
              Designed and implemented a device management module for Pegasus,
              an enterprise provisioning system, enabling users to create,
              configure, and remove device pools across multiple environments.
            </p>
            <span class="project-card__flip-hint" aria-hidden="true"
              >Details ↗</span
            >
          </div>

          <div class="project-card__back" v-show="expandedCards[0]">
            <div class="project-card__meta">
              <span class="project-card__number">01</span>
              <div class="project-card__tags">
                <span class="tech-tag tech-tag--csharp">C#</span>
                <span class="tech-tag tech-tag--sql">SQL</span>
                <span class="tech-tag tech-tag--azure">Azure DevOps</span>
                <span class="tech-tag tech-tag--scrum">Scrum</span>
              </div>
            </div>
            <p class="project-card__desc">
              Pegasus is an enterprise provisioning system that replaced its
              predecessor AIS, automating the onboarding of users into office
              automation environments, including the creation of user accounts,
              profiles, mailboxes, and network shares. A key missing capability
              was device management. I designed and implemented an interactive
              workflow that allows end users to create and manage device pools,
              modify their configuration, and remove devices as needed.
              Requirements were gathered directly with stakeholders, design
              drafts were reviewed iteratively, and the implementation was
              coordinated across multiple teams.
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
            <span
              class="project-card__flip-hint project-card__flip-hint--back"
              aria-hidden="true"
              >← Back</span
            >
          </div>
        </article>

        <!-- Project 2 -->
        <article
          class="project-card reveal reveal--d2"
          @click="expandedCards[1] = !expandedCards[1]"
          @keyup.enter="expandedCards[1] = !expandedCards[1]"
          tabindex="0"
          :aria-label="
            expandedCards[1] ? 'Close project details' : 'Open project details'
          "
        >
          <div class="project-card__front" v-show="!expandedCards[1]">
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
            <p class="project-card__summary">
              Built ALM, an internal document management system that guides
              users through the full document lifecycle: creation with unique
              identifiers, versioning, and archiving across physical and digital
              structures.
            </p>
            <span class="project-card__flip-hint" aria-hidden="true"
              >Details ↗</span
            >
          </div>

          <div class="project-card__back" v-show="expandedCards[1]">
            <div class="project-card__meta">
              <span class="project-card__number">02</span>
              <div class="project-card__tags">
                <span class="tech-tag tech-tag--razor">Razor Pages</span>
                <span class="tech-tag tech-tag--docker">Docker</span>
                <span class="tech-tag tech-tag--kubernetes">Kubernetes</span>
                <span class="tech-tag tech-tag--ef">Entity Framework</span>
              </div>
            </div>
            <p class="project-card__desc">
              ALM is an internal document management system built to handle both
              physical and digital filing structures within the organization. It
              guides users through creating new documents with unambiguous
              identifiers, locating existing ones, creating new versions, and
              archiving documents that have reached the end of their lifecycle.
              The system reflects the real-world folder and project hierarchies
              of the company, making document governance accessible to all
              employees regardless of their technical background.
            </p>
            <div class="project-card__learnings">
              <span class="project-card__learnings-label">What I learned</span>
              <p class="project-card__learnings-text">
                Designing for a broad, non-technical user base demands a strong
                focus on usability and intuitive workflows. This project
                deepened my experience with containerized deployments using
                Docker and Kubernetes, and reinforced the value of Entity
                Framework for maintainable data access layers.
              </p>
            </div>
            <span
              class="project-card__flip-hint project-card__flip-hint--back"
              aria-hidden="true"
              >← Back</span
            >
          </div>
        </article>

        <!-- Project 3 -->
        <article
          class="project-card reveal reveal--d3"
          @click="expandedCards[2] = !expandedCards[2]"
          @keyup.enter="expandedCards[2] = !expandedCards[2]"
          tabindex="0"
          :aria-label="
            expandedCards[2] ? 'Close project details' : 'Open project details'
          "
        >
          <div class="project-card__front" v-show="!expandedCards[2]">
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
            <p class="project-card__summary">
              Developed the application layer of a full-stack IoT demonstrator
              from LoRaWAN device connection to data visualization, with
              bidirectional remote configuration over The Things Network.
            </p>
            <span class="project-card__flip-hint" aria-hidden="true"
              >Details ↗</span
            >
          </div>

          <div class="project-card__back" v-show="expandedCards[2]">
            <div class="project-card__meta">
              <span class="project-card__number">03</span>
              <div class="project-card__tags">
                <span class="tech-tag tech-tag--lora">LoRaWAN</span>
                <span class="tech-tag tech-tag--nodered">Node-RED</span>
                <span class="tech-tag tech-tag--docker">Docker</span>
                <span class="tech-tag tech-tag--razor">Razor Pages</span>
              </div>
            </div>
            <p class="project-card__desc">
              Developed as a blueprint for future IoT solutions, this
              demonstrator covers the full data path from sensor hardware to
              visualization. Built in close collaboration with embedded hardware
              engineers who designed the physical device, my responsibility
              covered the application layer: establishing the device connection,
              receiving and processing incoming data, and presenting it in a
              clear interface. Communication runs bidirectionally, allowing the
              device to be configured remotely through the application.
            </p>
            <div class="project-card__learnings">
              <span class="project-card__learnings-label">What I learned</span>
              <p class="project-card__learnings-text">
                Integrating hardware and software across a multi-component IoT
                stack requires precise coordination and thorough error handling
                at every layer. Working with LoRaWAN, The Things Network, and
                Node-RED gave me hands-on experience bridging low-level
                communication protocols with web-based application development.
              </p>
            </div>
            <span
              class="project-card__flip-hint project-card__flip-hint--back"
              aria-hidden="true"
              >← Back</span
            >
          </div>
        </article>
      </div>
    </section>

    <!-- ─── Skills section ─────────────────────────────────── -->
    <section id="skills" class="skills">
      <div class="skills__header reveal">
        <h2 class="skills__title">Tech Stack</h2>
        <p class="skills__sub">Tools &amp; Technologies I work with</p>
      </div>

      <div class="skills__grid reveal reveal--d1">
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
          <i class="devicon-nodejs-plain skill-item__icon"></i>
          <span class="skill-item__label">Node-RED</span>
        </div>
      </div>

      <div class="skills__chart-wrap reveal reveal--d2">
        <span class="skills__chart-label">Proficiency Overview</span>
        <canvas id="skillsRadar" class="skills__radar"></canvas>
      </div>

      <div v-if="ghLanguages" class="treemap-wrap reveal reveal--d3">
        <span class="skills__chart-label">GitHub Languages</span>
        <div class="treemap">
          <div
            v-for="row in treemapRows"
            :key="row.map(r => r.lang).join()"
            class="treemap__row"
            :style="{ flex: row.reduce((a, b) => a + b.pct, 0) + '' }"
          >
            <div
              v-for="item in row"
              :key="item.lang"
              class="treemap__cell"
              :class="{ 'treemap__cell--accent': item.isAccent }"
              :style="{ flex: item.pct + '', backgroundColor: item.color }"
            >
              <span class="treemap__lang">{{ item.lang }}</span>
              <span class="treemap__pct">{{ item.pctLabel }}%</span>
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="ghLangLoading" class="treemap-wrap reveal reveal--d3">
        <span class="skills__chart-label">GitHub Languages</span>
        <div class="treemap treemap--loading">
          <div class="skills__loading">Loading...</div>
        </div>
      </div>
    </section>

    <!-- ─── Methods & Strengths ────────────────────────────── -->
    <section id="methods" class="methods">
      <div class="methods__header reveal">
        <h2 class="methods__title">Methods &amp; Strengths</h2>
        <p class="methods__sub">Bridging technology and business</p>
      </div>

      <div class="methods__body reveal reveal--d1">
        <!-- Left column: Methods & Tools -->
        <div class="methods__col">
          <div class="methods__group">
            <span class="methods__group-label"
              >Architecture &amp; Infrastructure</span
            >
            <div class="methods__tags">
              <span class="method-tag">REST</span>
              <span class="method-tag">Helm</span>
            </div>
          </div>

          <div class="methods__group">
            <span class="methods__group-label">Quality &amp; Process</span>
            <div class="methods__tags">
              <span class="method-tag">Testing</span>
              <span class="method-tag">Agile</span>
              <span class="method-tag">Scrum</span>
              <span class="method-tag">Kanban</span>
              <span class="method-tag">Hermes</span>
            </div>
          </div>

          <div class="methods__group">
            <span class="methods__group-label">Platforms &amp; Tools</span>
            <div class="methods__tags">
              <span class="method-tag">Azure</span>
              <span class="method-tag">Azure DevOps</span>
              <span class="method-tag">SSMS</span>
              <span class="method-tag">PowerBI</span>
              <span class="method-tag">GitHub</span>
              <span class="method-tag">Visual Studio</span>
              <span class="method-tag">Visual Studio Code</span>
              <span class="method-tag">Jira</span>
              <span class="method-tag">Confluence</span>
              <span class="method-tag">Figma</span>
            </div>
          </div>
        </div>

        <!-- Right column: Strengths -->
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
              <span class="strength-item__label"
                >Solution &amp; Team Oriented</span
              >
            </div>
            <div class="strength-item">
              <span class="strength-item__number">04</span>
              <span class="strength-item__label"
                >Analytical &amp; Forward Thinking</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Media section ──────────────────────────────────── -->
    <section id="media" class="media">
      <div class="media__header reveal">
        <h2 class="media__title">Photography</h2>
        <p class="media__sub">Nature, Urban &amp; Cars</p>
      </div>

      <div class="media-gallery reveal reveal--d1">
        <figure
          v-for="photo in mediaPhotos"
          :key="photo.jpg"
          class="media-gallery__item"
        >
          <picture>
            <source :srcset="baseUrl + photo.webp" type="image/webp" />
            <img
              :src="baseUrl + photo.jpg"
              :alt="photo.alt"
              class="media-gallery__image"
              :style="
                photo.objectPosition
                  ? { objectPosition: photo.objectPosition }
                  : {}
              "
            />
          </picture>
        </figure>
      </div>
    </section>

    <!-- ─── Spotify ─────────────────────────────────────────── -->
    <section class="spotify-section">
      <span class="spotify__label">Something Personal</span>
      <h2 class="spotify__title">Currently on Repeat</h2>
      <iframe
        class="spotify__embed"
        src="https://open.spotify.com/embed/track/1w5r3hEoLfLaltoXj1AwW4?utm_source=generator&theme=0"
        frameborder="0"
        allow="
          autoplay;
          clipboard-write;
          encrypted-media;
          fullscreen;
          picture-in-picture;
        "
        loading="lazy"
      />
    </section>

    <!-- ─── Footer ─────────────────────────────────────────── -->
    <footer class="footer">
      <div class="footer__inner">
        <!-- Left: Identity -->
        <div class="footer__col footer__col--identity">
          <span class="footer__name">Nicola Fricker</span>
          <div class="footer__links">
            <a
              href="https://github.com/nicolafricker"
              target="_blank"
              rel="noopener"
              class="footer__link"
              aria-label="GitHub"
              >GitHub</a
            >
            <span class="footer__link-sep">◆</span>
            <a
              href="https://www.linkedin.com/in/nicola-fricker-0674a5294/"
              target="_blank"
              rel="noopener"
              class="footer__link"
              aria-label="LinkedIn"
              >LinkedIn</a
            >
          </div>
          <div class="footer__meta">
            <span>Bern, Switzerland</span>
            <span>✉ nicola.fricker@bfh.ch</span>
          </div>
        </div>

        <!-- Divider -->
        <div class="footer__divider" aria-hidden="true"></div>

        <!-- Right: Contact form -->
        <div class="footer__col footer__col--contact">
          <span class="footer__section-label">Get in Touch</span>

          <div class="footer__form">
            <div class="footer__form-row">
              <div class="footer__field">
                <label class="footer__label" for="footer-name">Name</label>
                <input
                  id="footer-name"
                  class="footer__input"
                  :class="{ 'footer__input--error': contactErrors.name }"
                  type="text"
                  placeholder="Your name"
                  v-model="contactForm.name"
                />
                <span v-if="contactErrors.name" class="footer__error">{{ contactErrors.name }}</span>
              </div>
              <div class="footer__field">
                <label class="footer__label" for="footer-email">Email</label>
                <input
                  id="footer-email"
                  class="footer__input"
                  :class="{ 'footer__input--error': contactErrors.email }"
                  type="email"
                  placeholder="your@email.com"
                  v-model="contactForm.email"
                />
                <span v-if="contactErrors.email" class="footer__error">{{ contactErrors.email }}</span>
              </div>
            </div>
            <div class="footer__field">
              <label class="footer__label" for="footer-message">Message</label>
              <textarea
                id="footer-message"
                class="footer__textarea"
                :class="{ 'footer__textarea--error': contactErrors.message }"
                rows="4"
                placeholder="What's on your mind?"
                v-model="contactForm.message"
              ></textarea>
              <span v-if="contactErrors.message" class="footer__error">{{ contactErrors.message }}</span>
            </div>
            <div class="footer__form-actions">
              <button
                class="footer__submit"
                @click="submitContact"
                :disabled="contactSent"
              >
                <span v-if="!contactSent">Send Message</span>
                <span v-else>Message Sent ✓</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="footer__bar">
        <p class="footer__copy">
          &copy; 2026 Nicola Fricker. All rights reserved.
        </p>
      </div>
    </footer>

    <!-- ─── Mobile Bottom Navigation ───────────────────────── -->
    <!-- UI Update: sticky bottom nav for mobile, 5 visible section anchors (≤900px) -->
    <nav class="mobile-nav" aria-label="Main navigation">
      <a
        v-for="item in mobileNavItems"
        :key="item.id"
        :href="'#' + item.id"
        class="mobile-nav__item"
        :class="{ 'mobile-nav__item--active': activeSection === item.id }"
        :aria-label="'Go to ' + item.label + ' section'"
        :aria-current="activeSection === item.id ? 'true' : undefined"
      >
        <span class="mobile-nav__dot" aria-hidden="true">◆</span>
        <span class="mobile-nav__label">{{ item.label }}</span>
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      baseUrl: import.meta.env.BASE_URL.replace(/\/$/, ''),
      isDark: false,
      heroVideoLoaded: false,
      activeSection: "about",
      expandedCards: { 0: false, 1: false, 2: false },
      contactForm: {
        name: "",
        email: "",
        message: "",
      },
      contactSent: false,
      contactErrors: { name: "", email: "", message: "" },
      mobileNavItems: [
        { id: "about", label: "About" },
        { id: "work", label: "Work" },
        { id: "skills", label: "Skills" },
        { id: "methods", label: "Methods" },
        { id: "media", label: "Media" },
      ],
      mediaPhotos: [
        {
          webp: "/img/Work/nature-01.webp",
          jpg: "/img/Work/nature-01.jpg",
          alt: "Nature photo 1",
        },
        {
          webp: "/img/Work/nature-02.webp",
          jpg: "/img/Work/nature-02.jpg",
          alt: "Nature photo 2",
        },
        {
          webp: "/img/Work/nature-03.webp",
          jpg: "/img/Work/nature-03.jpg",
          alt: "Nature photo 3",
        },
        {
          webp: "/img/Work/720-01.webp",
          jpg: "/img/Work/720-01.jpg",
          alt: "Work photo 1",
          objectPosition: "center 70%",
        },
        {
          webp: "/img/Work/nature-04.webp",
          jpg: "/img/Work/nature-04.jpg",
          alt: "Nature photo 4",
        },
        {
          webp: "/img/Work/nature-05.webp",
          jpg: "/img/Work/nature-05.jpg",
          alt: "Nature photo 5",
        },
        {
          webp: "/img/Work/720-02.webp",
          jpg: "/img/Work/720-02.jpg",
          alt: "Work photo 2",
          objectPosition: "center 40%",
        },
        {
          webp: "/img/Work/nature-06.webp",
          jpg: "/img/Work/nature-06.jpg",
          alt: "Nature photo 6",
        },
        {
          webp: "/img/Work/nature-07.webp",
          jpg: "/img/Work/nature-07.jpg",
          alt: "Nature photo 7",
        },
        {
          webp: "/img/Work/nature-08.webp",
          jpg: "/img/Work/nature-08.jpg",
          alt: "Nature photo 8",
        },
        {
          webp: "/img/Work/tt-01.webp",
          jpg: "/img/Work/tt-01.jpg",
          alt: "Work photo 3",
        },
        {
          webp: "/img/Work/nature-09.webp",
          jpg: "/img/Work/nature-09.jpg",
          alt: "Nature photo 9",
        },
      ],
      skillsData: {
        labels: [
          "Creativity",
          "Analytical\nThinking",
          "Flexibility",
          "Team\nOriented",
          "Solution\nFocused",
          "Forward\nThinking",
        ],
        values: [85, 90, 80, 88, 85, 82],
      },
      radarChart: null,
      ghLanguages: null,
      ghLangLoading: true,
    };
  },

  computed: {
    treemapRows() {
      if (!this.ghLanguages) return [];

      const lightPalette = [
        "#C8201A", "#c5c0b8", "#b8c2c8", "#c4b8c4", "#bcc0a8",
        "#c8c4b4", "#b0b8b0", "#c0b4a8", "#a8b4c0", "#bab0b0",
      ];
      const darkPalette = [
        "#FF3019", "#2e2e2e", "#262e34", "#302a30", "#2a2c26",
        "#2e2c28", "#242a24", "#2c2824", "#242830", "#2a2626",
      ];
      const palette = this.isDark ? darkPalette : lightPalette;

      const items = this.ghLanguages.map((l, i) => ({
        lang: l.lang,
        pct: l.pct,
        pctLabel: Math.round(l.pct * 10) / 10,
        color: palette[i] || palette[palette.length - 1],
        isAccent: i === 0,
      }));

      const rows = [];
      let i = 0;
      const len = items.length;
      // Row 1: top 2-3 large items, Row 2+: remaining items
      if (len <= 3) {
        rows.push(items);
      } else {
        // First row: items until cumulative >= 55% or 3 items
        let cumulative = 0;
        let firstRowEnd = 0;
        while (firstRowEnd < len && firstRowEnd < 3) {
          cumulative += items[firstRowEnd].pct;
          firstRowEnd++;
          if (cumulative >= 55) break;
        }
        rows.push(items.slice(0, firstRowEnd));
        // Remaining items in second row
        if (firstRowEnd < len) {
          rows.push(items.slice(firstRowEnd));
        }
      }
      return rows;
    },
  },

  mounted() {
    // Apply system colour scheme preference
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    this.isDark = prefersDark;
    document.documentElement.setAttribute(
      "data-theme",
      prefersDark ? "dark" : "light",
    );

    this.$nextTick(() => {
      this.renderRadarChart();
      this.initObservers();
    });

    this.fetchGhLanguages();
  },

  watch: {
    isDark(val) {
      document.documentElement.setAttribute(
        "data-theme",
        val ? "dark" : "light",
      );
      if (this.radarChart) {
        this.radarChart.destroy();
        this.radarChart = null;
        this.$nextTick(() => this.renderRadarChart());
      }
    },
  },

  methods: {
    initObservers() {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("reveal--visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08 },
      );
      document
        .querySelectorAll(".reveal")
        .forEach((el) => revealObserver.observe(el));

      const navObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) this.activeSection = entry.target.id;
          });
        },
        { rootMargin: "-20% 0px -55% 0px", threshold: 0 },
      );
      this.mobileNavItems.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) navObserver.observe(el);
      });
    },

    fetchGhLanguages() {
      this.ghLangLoading = true;
      const CACHE_KEY = "portfolio_gh_langs";
      const CACHE_TTL = 60 * 60 * 1000;

      try {
        const cached = JSON.parse(localStorage.getItem(CACHE_KEY));
        if (cached && Date.now() - cached.ts < CACHE_TTL) {
          this.ghLanguages = cached.data;
          this.ghLangLoading = false;
          return;
        }
      } catch (_) {}

      fetch("https://api.github.com/users/nicolafricker/repos?per_page=100&sort=updated")
        .then((res) => {
          if (!res.ok) throw new Error(res.status);
          return res.json();
        })
        .then((repos) => {
          const langRequests = repos.map((repo) =>
            fetch(`https://api.github.com/repos/nicolafricker/${repo.name}/languages`)
              .then((r) => (r.ok ? r.json() : {}))
              .catch(() => ({}))
          );
          return Promise.allSettled(langRequests);
        })
        .then((results) => {
          const totals = {};
          results.forEach((r) => {
            if (r.status !== "fulfilled") return;
            Object.entries(r.value).forEach(([lang, bytes]) => {
              totals[lang] = (totals[lang] || 0) + bytes;
            });
          });

          const grandTotal = Object.values(totals).reduce((a, b) => a + b, 0);
          if (!grandTotal) throw new Error("no data");

          const sorted = Object.entries(totals)
            .map(([lang, bytes]) => ({ lang, pct: (bytes / grandTotal) * 100 }))
            .sort((a, b) => b.pct - a.pct);

          const main = [];
          let otherPct = 0;
          sorted.forEach((item) => {
            if (item.pct >= 2) main.push(item);
            else otherPct += item.pct;
          });
          if (otherPct > 0) main.push({ lang: "Other", pct: otherPct });

          this.ghLanguages = main;
          localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), data: main }));
          this.ghLangLoading = false;
        })
        .catch(() => {
          this.ghLangLoading = false;
        });
    },

    renderRadarChart() {
      const canvas = document.getElementById("skillsRadar");
      if (!canvas) return;

      const accent = this.isDark ? "#FF3019" : "#C8201A";
      const textColor = this.isDark ? "#a0a0a0" : "#5a5a5a";
      const gridColor = this.isDark
        ? "rgba(244,243,239,0.12)"
        : "rgba(10,10,10,0.10)";

      import("chart.js")
        .then(
          ({
            Chart,
            RadarController,
            RadialLinearScale,
            PointElement,
            LineElement,
            Filler,
            Tooltip,
          }) => {
            Chart.register(
              RadarController,
              RadialLinearScale,
              PointElement,
              LineElement,
              Filler,
              Tooltip,
            );
            if (this.radarChart) {
              this.radarChart.destroy();
            }
            this.radarChart = new Chart(canvas, {
              type: "radar",
              data: {
                labels: this.skillsData.labels,
                datasets: [
                  {
                    label: "Proficiency",
                    data: this.skillsData.values,
                    backgroundColor: this.isDark
                      ? "rgba(255,48,25,0.12)"
                      : "rgba(200,32,26,0.10)",
                    borderColor: accent,
                    borderWidth: 1.5,
                    pointBackgroundColor: accent,
                    pointRadius: 3,
                  },
                ],
              },
              options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                  legend: { display: false },
                  tooltip: { callbacks: { label: (ctx) => ` ${ctx.raw}%` } },
                },
                scales: {
                  r: {
                    min: 0,
                    max: 100,
                    ticks: { stepSize: 25, display: false },
                    grid: { color: gridColor },
                    angleLines: { color: gridColor },
                    pointLabels: {
                      color: textColor,
                      font: (ctx) => {
                        const bold = [
                          "Creativity",
                          "Analytical\nThinking",
                          "Solution\nFocused",
                        ];
                        const isBold = bold.some((l) =>
                          ctx.label.includes(l.split("\n")[0]),
                        );
                        return {
                          family:
                            "'Barlow Condensed', 'Arial Narrow', sans-serif",
                          size: isBold ? 14 : 12,
                          weight: isBold ? "900" : "600",
                        };
                      },
                      padding: (ctx) => {
                        const topBottom = ["Creativity", "Forward\nThinking"];
                        return topBottom.some((l) =>
                          ctx.label.includes(l.split("\n")[0]),
                        )
                          ? 10
                          : 4;
                      },
                    },
                  },
                },
              },
            });
          },
        )
        .catch(() => {});
    },

    submitContact() {
      const errors = { name: "", email: "", message: "" };
      let valid = true;

      if (!this.contactForm.name.trim()) {
        errors.name = "Name is required";
        valid = false;
      }
      if (!this.contactForm.email.trim()) {
        errors.email = "Email is required";
        valid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.contactForm.email)) {
        errors.email = "Please enter a valid email";
        valid = false;
      }
      if (!this.contactForm.message.trim()) {
        errors.message = "Message is required";
        valid = false;
      }

      this.contactErrors = errors;
      if (!valid) return;

      this.contactSent = true;
      setTimeout(() => {
        this.contactSent = false;
        this.contactForm = { name: "", email: "", message: "" };
        this.contactErrors = { name: "", email: "", message: "" };
      }, 4000);
    },
  },
};
</script>
