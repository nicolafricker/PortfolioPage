<template>
  <div class="app">
    <!-- ─── Desktop anchor nav ──────────────────────────────── -->
    <nav class="anchor-nav" aria-label="Section navigation">
      <a
        v-for="item in mobileNavItems"
        :key="'anchor-' + item.id"
        :href="'#' + item.id"
        class="anchor-nav__item"
        :class="{ 'anchor-nav__item--active': activeSection === item.id }"
        :aria-current="activeSection === item.id ? 'location' : undefined"
        @click.prevent="anchorNavClick(item.id)"
      >
        <span class="anchor-nav__dot" aria-hidden="true"></span>
        <span class="anchor-nav__label">{{ item.label }}</span>
      </a>
    </nav>

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
        <span class="toggle__icon toggle__icon--light"
          ><svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg
        ></span>
        <span class="toggle__icon toggle__icon--dark"
          ><svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg
        ></span>
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
        <source
          :src="baseUrl + '/video/GithubPortfolioPageHeroComp.mp4'"
          type="video/mp4"
        />
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
          >Calm · <strong>Mindful living</strong></span
        >
      </div>
      <div class="hero__corner hero__corner--br" aria-hidden="true">
        <span class="hero__corner-line"
          ><strong>Creative&thinsp;Mind</strong></span
        >
        <span class="hero__corner-line"
          >Technology · <strong>Driven</strong></span
        >
      </div>

      <div class="hero__inner">
        <span class="hero__eyebrow">Portfolio</span>
        <h1 class="hero__name">Nicola<br />Fricker</h1>
        <p class="hero__tagline">Digital Business · Photo & Motion</p>
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
        <img
          :src="baseUrl + '/img/Me.JPEG'"
          class="about__photo"
          alt="Nicola Fricker"
        />
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
              bigger picture: the processes, the stakeholders, and the space
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
              >Details</span
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
              >Back</span
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
              Designed and built an internal document management system covering
              the full document lifecycle, from creation with unique
              identifiers through versioning to archiving, bridging physical and
              digital filing structures.
            </p>
            <span class="project-card__flip-hint" aria-hidden="true"
              >Details</span
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
              ALM (Artefact Lifecycle Management) is an internal document
              management system built to handle both physical and digital filing
              structures within the organization. It guides users through
              creating new documents with unambiguous identifiers, locating
              existing ones, creating new versions, and archiving documents that
              have reached the end of their lifecycle. The system reflects the
              real-world folder and project hierarchies of the company, making
              document governance accessible to all employees regardless of
              their technical background.
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
              >Back</span
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
              >Details</span
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
              >Back</span
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

      <div v-if="ghLanguages" class="treemap-wrap reveal reveal--d3">
        <span class="skills__chart-label">GitHub Languages</span>
        <canvas id="ghTreemap" class="treemap-canvas"></canvas>
      </div>
      <div v-else-if="ghLangLoading" class="treemap-wrap reveal reveal--d3">
        <span class="skills__chart-label">GitHub Languages</span>
        <div class="treemap-loading">
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

    <!-- ─── Contact section ───────────────────────────────── -->
    <section id="contact" class="contact-section">
      <div class="contact-section__inner">
        <div class="contact-section__header reveal">
          <span class="contact-section__label">Get in Touch</span>
          <h2 class="contact-section__title">Contact</h2>
        </div>

        <div class="contact-section__body reveal reveal--d1">
          <!-- Auth Loading State -->
          <div v-if="authLoading" class="auth-widget">
            <div class="auth-widget__loading">
              <span class="auth-widget__spinner"></span>
              <span class="auth-widget__loading-text">Loading...</span>
            </div>
          </div>

          <!-- Auth Widget — Not authenticated -->
          <div v-else-if="!isAuthenticated" class="auth-widget">
            <p class="auth-widget__info">
              Please verify your email to send a message.
            </p>

            <div v-if="!linkSent" class="auth-widget__form">
              <div class="footer__field">
                <label class="footer__label" for="auth-email">Email</label>
                <input
                  id="auth-email"
                  class="footer__input"
                  :class="{ 'footer__input--error': authError }"
                  type="email"
                  placeholder="your@email.com"
                  v-model="authEmail"
                  @keyup.enter="handleSendMagicLink"
                />
                <span v-if="authError" class="footer__error">{{ authError }}</span>
              </div>
              <div class="footer__form-actions">
                <button
                  class="footer__submit"
                  @click="handleSendMagicLink"
                  :disabled="!authEmail.trim()"
                >
                  Verify Email
                </button>
              </div>
            </div>

            <div v-else class="auth-widget__sent">
              <svg
                class="auth-widget__icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <polyline points="22,4 12,13 2,4" />
              </svg>
              <p class="auth-widget__sent-text">
                Check your inbox! Click the link to verify.
              </p>
              <button
                class="auth-widget__resend"
                @click="linkSent = false"
              >
                Send again
              </button>
            </div>
          </div>

          <!-- Contact Form — Authenticated -->
          <div v-else class="footer__form">
            <div class="auth-widget__verified">
              <span>Verified as <strong>{{ user.email }}</strong></span>
              <button class="auth-widget__logout" @click="logout">Logout</button>
            </div>

            <!-- Success state -->
            <div v-if="contactSuccess" class="contact-success">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <p class="contact-success__text">Message sent! I'll be in touch.</p>
              <button class="auth-widget__resend" @click="resetContactForm">
                Send another
              </button>
            </div>

            <!-- Error state -->
            <p v-else-if="contactError" class="footer__error contact-error">
              {{ contactError }}
              <button class="auth-widget__resend" @click="resetContactForm">
                Try again
              </button>
            </p>

            <!-- Idle / submitting -->
            <template v-else>
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
                <span v-if="contactErrors.name" class="footer__error">{{
                  contactErrors.name
                }}</span>
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
                <span v-if="contactErrors.message" class="footer__error">{{
                  contactErrors.message
                }}</span>
              </div>
              <div class="footer__form-actions">
                <button
                  class="footer__submit"
                  @click="handleSubmitContact"
                  :disabled="submitting"
                >
                  <span v-if="!submitting">Send Message</span>
                  <span v-else class="contact-submit-sending">
                    <span class="auth-widget__spinner"></span>
                    Sending&hellip;
                  </span>
                </button>
              </div>
            </template>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Footer ─────────────────────────────────────────── -->
    <footer class="footer">
      <div class="footer__inner">
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
          <span
            ><svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              style="vertical-align: -2px; margin-right: 4px"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <polyline points="22,4 12,13 2,4" /></svg
            >nicola.fricker@bfh.ch</span
          >
        </div>
      </div>

      <div class="footer__bar">
        <p class="footer__copy">
          &copy; 2026 Nicola Fricker. All rights reserved.
        </p>
      </div>
    </footer>

    <!-- ─── Mobile Bottom Navigation ───────────────────────── -->
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
        <svg
          v-if="item.id === 'contact'"
          class="mobile-nav__icon"
          aria-hidden="true"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <polyline points="22,4 12,13 2,4" />
        </svg>
        <span v-else class="mobile-nav__dot" aria-hidden="true">◆</span>
        <span class="mobile-nav__label">{{ item.label }}</span>
      </a>
    </nav>
  </div>
</template>

<script>
import { useAuth } from "../composables/useAuth.js";
import { useContactForm } from "../composables/useContactForm.js";

export default {
  name: "App",
  setup() {
    const {
      user,
      isAuthenticated,
      authLoading,
      authError,
      linkSent,
      sendMagicLink,
      completeMagicLinkSignIn,
      logout,
    } = useAuth();

    const { submitting, success, error: contactError, submitContactForm, resetForm } =
      useContactForm();

    return {
      user,
      isAuthenticated,
      authLoading,
      authError,
      linkSent,
      sendMagicLink,
      completeMagicLinkSignIn,
      logout,
      submitting,
      contactSuccess: success,
      contactError,
      submitContactForm,
      resetContactForm: resetForm,
    };
  },
  data() {
    return {
      baseUrl: import.meta.env.BASE_URL.replace(/\/$/, ""),
      isDark: true,
      heroVideoLoaded: false,
      activeSection: "about",
      expandedCards: { 0: false, 1: false, 2: false },
      authEmail: "",
      contactForm: {
        name: "",
        message: "",
      },
      contactErrors: { name: "", message: "" },
      mobileNavItems: [
        { id: "about", label: "About" },
        { id: "work", label: "Work" },
        { id: "skills", label: "Skills" },
        { id: "media", label: "Media" },
        { id: "contact", label: "Contact" },
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
      ghLanguages: null,
      ghLangLoading: true,
      treemapChart: null,
    };
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

    this.completeMagicLinkSignIn();

    this.$nextTick(() => {
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
      if (this.treemapChart) {
        this.treemapChart.destroy();
        this.treemapChart = null;
        this.$nextTick(() => this.renderTreemap());
      }
    },
    user(newUser) {
      if (newUser && newUser.email) {
        this.contactForm.email = newUser.email;
      }
    },
    ghLanguages() {
      this.$nextTick(() => {
        const el = this.$el.querySelector(
          ".treemap-wrap.reveal:not(.reveal--visible)",
        );
        if (el) {
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  entry.target.classList.add("reveal--visible");
                  observer.unobserve(entry.target);
                  // Render after the reveal transition finishes so canvas has dimensions
                  setTimeout(() => this.renderTreemap(), 600);
                }
              });
            },
            { threshold: 0.08 },
          );
          observer.observe(el);
        } else {
          // Already visible (e.g. theme re-render)
          this.renderTreemap();
        }
      });
    },
  },

  methods: {
    anchorNavClick(id) {
      this.activeSection = id;
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    },
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
        if (
          cached &&
          Date.now() - cached.ts < CACHE_TTL &&
          Array.isArray(cached.data) &&
          cached.data.length &&
          cached.data[0].bytes != null
        ) {
          this.ghLanguages = cached.data;
          this.ghLangLoading = false;
          return;
        }
      } catch (_) {}

      fetch(
        "https://api.github.com/users/nicolafricker/repos?per_page=100&sort=updated",
      )
        .then((res) => {
          if (!res.ok) throw new Error(res.status);
          return res.json();
        })
        .then((repos) => {
          const langRequests = repos.map((repo) =>
            fetch(
              `https://api.github.com/repos/nicolafricker/${repo.name}/languages`,
            )
              .then((r) => (r.ok ? r.json() : {}))
              .catch(() => ({})),
          );
          return Promise.allSettled(langRequests);
        })
        .then((results) => {
          const totals = {};
          const exclude = ["Jupyter Notebook"];
          results.forEach((r) => {
            if (r.status !== "fulfilled") return;
            Object.entries(r.value).forEach(([lang, bytes]) => {
              if (exclude.includes(lang)) return;
              totals[lang] = (totals[lang] || 0) + bytes;
            });
          });

          const grandTotal = Object.values(totals).reduce((a, b) => a + b, 0);
          if (!grandTotal) throw new Error("no data");

          const sorted = Object.entries(totals)
            .map(([lang, bytes]) => ({
              lang,
              bytes,
              pct: (bytes / grandTotal) * 100,
            }))
            .sort((a, b) => b.pct - a.pct);

          const main = [];
          let otherPct = 0;
          let otherBytes = 0;
          sorted.forEach((item) => {
            if (item.pct >= 2) main.push(item);
            else {
              otherPct += item.pct;
              otherBytes += item.bytes;
            }
          });
          if (otherPct > 0)
            main.push({ lang: "Other", bytes: otherBytes, pct: otherPct });

          this.ghLanguages = main;
          localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({ ts: Date.now(), data: main }),
          );
          this.ghLangLoading = false;
        })
        .catch(() => {
          this.ghLangLoading = false;
        });
    },

    renderTreemap() {
      const canvas = document.getElementById("ghTreemap");
      if (!canvas || !this.ghLanguages) return;

      const lightPalette = [
        "#C8201A",
        "#c5c0b8",
        "#b8c2c8",
        "#c4b8c4",
        "#bcc0a8",
        "#c8c4b4",
        "#b0b8b0",
        "#c0b4a8",
        "#a8b4c0",
        "#bab0b0",
      ];
      const darkPalette = [
        "#FF3019",
        "#2e2e2e",
        "#262e34",
        "#302a30",
        "#2a2c26",
        "#2e2c28",
        "#242a24",
        "#2c2824",
        "#242830",
        "#2a2626",
      ];
      const palette = this.isDark ? darkPalette : lightPalette;
      const textColor = this.isDark ? "#a0a0a0" : "#5a5a5a";
      const data = this.ghLanguages;

      Promise.all([import("chart.js"), import("chartjs-chart-treemap")])
        .then(([chartjs, treemapPlugin]) => {
          const { Chart, Tooltip, LinearScale } = chartjs;
          const { TreemapController, TreemapElement } = treemapPlugin;
          Chart.register(Tooltip, LinearScale);
          Chart.register(TreemapController, TreemapElement);

          if (this.treemapChart) this.treemapChart.destroy();

          this.treemapChart = new Chart(canvas, {
            type: "treemap",
            data: {
              datasets: [
                {
                  tree: data,
                  key: "bytes",
                  labels: {
                    display: true,
                    overflow: "fit",
                    formatter: (ctx) => {
                      const item = ctx.raw._data;
                      if (!item) return "";
                      const pct = Math.round(item.pct * 10) / 10;
                      return [item.lang, `${pct}%`];
                    },
                    font: {
                      family: "'Barlow Condensed', 'Arial Narrow', sans-serif",
                      weight: 700,
                      size: 12,
                    },
                    color: (ctx) => {
                      const idx = ctx.dataIndex;
                      return idx === 0 ? "#fff" : textColor;
                    },
                  },
                  spacing: 1,
                  borderWidth: 0,
                  backgroundColor: (ctx) => {
                    const idx = ctx.dataIndex;
                    return palette[idx] || palette[palette.length - 1];
                  },
                },
              ],
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: { display: false },
                tooltip: {
                  titleFont: {
                    family: "'Barlow Condensed', 'Arial Narrow', sans-serif",
                  },
                  bodyFont: {
                    family: "'Barlow Condensed', 'Arial Narrow', sans-serif",
                  },
                  callbacks: {
                    title: () => "",
                    label: (ctx) => {
                      const item = ctx.raw._data;
                      if (!item) return "";
                      const pct = Math.round(item.pct * 10) / 10;
                      return ` ${item.lang}: ${pct}%`;
                    },
                  },
                },
              },
            },
          });
        })
        .catch(() => {});
    },

    handleSendMagicLink() {
      if (this.authEmail.trim()) {
        this.sendMagicLink(this.authEmail.trim());
      }
    },

    async handleSubmitContact() {
      const errors = { name: "", message: "" };
      let valid = true;

      if (!this.contactForm.name.trim()) {
        errors.name = "Name is required";
        valid = false;
      }
      if (!this.contactForm.message.trim()) {
        errors.message = "Message is required";
        valid = false;
      }

      this.contactErrors = errors;
      if (!valid) return;

      await this.submitContactForm({
        name: this.contactForm.name,
        message: this.contactForm.message,
      });

      if (this.contactSuccess) {
        this.contactForm = { name: "", message: "" };
        this.contactErrors = { name: "", message: "" };
      }
    },
  },
};
</script>
