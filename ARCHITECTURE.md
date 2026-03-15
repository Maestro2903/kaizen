# Osmo Website — Architecture & Developer Reference

Foundation documentation for understanding and rewriting the current single-file marketing site. Use this as the source of truth when rebuilding the site.

---

## 1. Overall Page Architecture

### High-Level Structure

```
html[data-wf-domain, data-wf-page, data-wf-site]
└── head
│   ├── Meta, SEO, JSON-LD
│   ├── Webflow shared CSS (cdn.prod.website-files.com)
│   ├── Inline scripts (redirects, Outseta config, Plausible)
│   └── Outseta, Plausible scripts
└── body.body[data-barba="wrapper"]
    └── .global (repeated: one wraps main content, one wraps about modal)
        ├── .embed-css (Slater CSS: variables, marketing, components, outseta-styling)
        ├── .transition (page transition overlay)
        ├── .nav (global nav + mega menu)
        ├── .cursor (custom cursor)
        ├── main.main[data-barba="container", data-barba-namespace="home", data-page-theme]
        │   ├── .under-nav-bar (marquee strip)
        │   ├── <section> blocks (hero, reel, intro, db, product-slider, info, testimonial, pricing, made, shapes-section)
        │   └── footer.footer
        ├── .modal__group (modals: showcase, lifetime, about — in different .global instances)
        └── .embed-js (Barba, GSAP, Lenis, hls.js, Slater marketing.js)
    + jQuery, Webflow site JS (bottom of body)
```

### Design Principles

- **Single-page marketing**: One HTML document; content is section-based. Barba.js provides SPA-like transitions when navigating to other pages.
- **Webflow export + custom stack**: Markup and base styles come from Webflow; behavior is extended with GSAP, Lenis, Barba, and a custom Slater bundle.
- **Data-driven behavior**: Most interactivity is wired via `data-*` attributes; the Slater/Webflow JS reads these and attaches GSAP timelines, scroll handlers, and DOM updates.
- **Theme awareness**: Sections use `data-theme-section="light"|"dark"`; nav uses `data-nav-theme`, `data-marketing-theme`; cursor zones use `data-cursor-zone` for context-specific cursor styling.

---

## 2. Section Breakdown

All main content lives inside `<main class="main">`. Sections appear in this order:

| Order | Section Class | Theme | Purpose |
|-------|----------------|-------|---------|
| — | `.under-nav-bar` | — | Top marquee: “New: Page Transition Course” + Osmo icon (CSS marquee). |
| 1 | `.home-hero` | light | Hero: “Dev Toolkit / Built to Flex”, description, radial resource marquee. |
| 2 | `.reel` | light | Video reel teaser (“Play / Reel”, “Osmo in use 00:48”); opens reel player. |
| 3 | `.intro` | light | “Join 2K+ others” faces, “Created by Dennis & Ilja” about card, latest resources vertical slider. |
| 4 | `.db` | light | “The platform (The Vault)”, dashboard preview image/video, CTA. |
| 5 | `.product-slider` | light | “A growing toolkit” + GSAP product carousel (Vault, PTC, Icons, Easings, Community). |
| 6 | `.info` | light | “Why Osmo?” benefits list + “Trusted by” logo marquee. |
| 7 | `.testimonial` | light | “Connect Worldwide” globe + vertical quote slider with map highlights. |
| 8 | `.pricing-home` | dark | Pricing teaser: solo/team toggle, plan cards, “View full pricing”. |
| 9 | `.made` | dark | “Made with Osmo” — flick/carousel of showcase cards (Bunny HLS). |
| 10 | `.shapes-section` | light | Final CTA strip + “Join Osmo” / “FAQ” buttons. |
| 11 | `footer.footer` | light | Newsletter form, accordion link columns, legal, social, login/join. |

### Modals (outside main, inside `.global`)

- **Showcase modal** (`data-modal-target="showcase"`): Project detail — used resources, credits, “Visit site”. Opened from “Made with Osmo” flick cards.
- **Lifetime modal** (`data-modal-target="lifetime"`): Lifetime membership content.
- **About modal** (`data-modal-target="about"`): “A platform by…” (Dennis & Ilja), stats, gallery, CTAs. Opened from intro about card and footer “About Osmo”.

Modal structure:

- `.modal__group` → `.modal__bg` + `.modal__item[data-modal-target="…"]` → `.modal` → `.modal__close` + content sections.

---

## 3. Navigation Structure

### Top Bar (`.nav-bar__top`)

- **Left**: Menu toggle (`.nav-menu` with `data-nav-toggle="toggle"`), hamburger + “Menu” label.
- **Center**: Logo (`.nav-logo`) → `index.html` (home).
- **Right**: Login (`.nav-bar__login-button`, `data-outseta-type="login"`), Join (`.nav-bar__signup-button`, `data-outseta-type="join"`).
- **Bottom**: `.nav-bar__line` (visual separator).

### Mega Menu (`.nav-bar__bottom`)

- **Column “Our Products”** (`.nav-bar__bottom-col.is--products`): The Vault, Page Transition Course (tag NEW), Icon Library, Community; small list: Easings (WIP, disabled).
- **Column “Explore”**: Osmo Showcase, Collection (with `data-resources-total` count), Pricing; socials (LinkedIn, Instagram, X); mobile-only Login/Join buttons.
- **Column “Ad”** (`.is--ad`): `.nav-banner` — Page Transition Course promo card with thumbnail video and “More info” button.

### Under-Nav Marquee

- `.under-nav-bar` → `.nav-marquee` → `.marquee-css[data-css-marquee]` with duplicate `.marquee-css__list[data-css-marquee-list="nav"]`; items: “New: Page Transition Course” + Osmo icon SVG. Animated via CSS (e.g. `animation-duration: 30s`).

### Footer Navigation

- **Newsletter**: Form with `data-o-email-form`, Outseta mapping, `data-form-validate`, `data-submit`.
- **Accordion columns** (`data-accordion-css-init`, `data-accordion-close-siblings`): Product, Community, Membership; each column has `data-accordion-status`, toggle via `data-accordion-toggle`.
- **Links**: Same product/explore/membership links as nav; “About Osmo” opens about modal (`data-modal-trigger="about"`); Support uses `data-o-support="1"`.
- **Legal**: Licensing, Terms, Privacy, Cookies (tag-style buttons).
- **Creator links**: Dennis / Ilja personal sites.
- **Login / Join**: Same Outseta hooks as header.

---

## 4. CSS Systems Used

### Sources

- **Webflow shared**: `https://cdn.prod.website-files.com/.../osmo-v2.shared.3cfb29011.min.css` — layout, typography, Webflow utilities.
- **Slater (in `.embed-css`)**:  
  - `45154.css`  
  - `45446.css` (variables)  
  - `45511.css` (marketing)  
  - `45156.css` (components; comment references outseta-styling).

### Naming Conventions

- **BEM-like**: Block__element (e.g. `nav-bar__top`, `reel__content`). Modifiers: `is--` (e.g. `is--products`, `is--rounded`, `is--quote`).
- **Webflow**: `w-inline-block`, `w-dyn-list`, `w-dyn-items`, `w-dyn-item`, `w-form`, `w--current`.
- **Utility**: `u--fw-460`, `u--color-electric`, `u--rel`; responsive: `md--hide`, `sm--hide`, `show--tablet`, `mobile--small`.

### Theming

- **Section**: `data-theme-section="light"|"dark"` on sections/footer.
- **Buttons/tags**: `data-wf--button-theme--variant` on `.button-bg` (e.g. `neutral-525`, `electric`, `purple`, `neutral-200`, `light-10`, `dark-10`, `coral`, `neutral-800`, `neutral-600`, `neutral-300`).
- **Variants**: Component-level classes like `data-wf--resources-card--variant="slider"`, `data-wf--under-nav-bar--variant="lightning"`, `data-wf--padding-hero--variant="nav-large"`, `data-wf--join-others--variant="light-borders"`.

### Layout Patterns

- **Containers**: `.container`, `.container.is--m`, `.container.is--md-m`, `.container.is--full-tablet` for width/padding.
- **Rows/columns**: Flex/grid-style rows (e.g. `.intro__row`, `.intro__small-col` / `.intro__large-col`; `.footer-top__row`).
- **Decorative**: `__before`, `__bg`, `__line` elements for overlays and dividers.

---

## 5. JavaScript Libraries and Behavior

### Script Load Order (bottom of body)

1. **jQuery 3.5.1** (Webflow dependency).
2. **Barba core** `@2.10.3` — page transitions.
3. **Barba prefetch** `@2.2.0` — prefetch links.
4. **GSAP 3.13.0** + **Draggable**, **InertiaPlugin**, **ScrollTrigger**, **SplitText**, **CustomEase**, **Observer**.
5. **Lenis 1.3.1** — smooth scroll.
6. **hls.js 1.6.11** — HLS video (reel, showcase).
7. **Slater marketing** `55554.js` — site-specific behavior (sliders, cursor, modals, video lazy-load, etc.).
8. **Webflow site JS** `osmo-v2.a0aa6ca1....js` — Webflow interactions.

### Head Scripts

- **Feature detection**: Adds `w-mod-js` and `w-mod-touch` to `<html>`.
- **Redirects**: Post-logout redirect from `/`; `/no-access` → `/preview/?resource=slug` when referrer is `/resource/...`.
- **Outseta**: `o_options` (domain, auth, nocode, taxIdTypes, etc.); script loaded with `data-options="o_options"`.
- **Plausible**: Queue + `Transaction` event on Outseta `signup`.

### Behavioral Responsibilities (by layer)

- **Barba**: Wrapper on `body`, container on `main`; namespace `home`; transitions use `.transition` overlay.
- **Lenis**: Smooth scroll; `data-lenis-prevent` on nav bottom inner to avoid scroll inside menu.
- **GSAP (via Slater/Webflow)**: Radial marquee, vertical sliders, product carousel, reel scribble/circle, “Made with Osmo” flick cards, scroll-triggered reveals, button hover effects.
- **Slater 55554.js**: Vertical slider init, GSAP slider init, CSS marquee init, video lazy-load (`data-video-src` swap), cursor logic, modal open/close, accordion, form validation, pricing toggle, testimonial map/slider sync, showcase/Bunny player.
- **Outseta**: Login/join links (`data-outseta-type`), newsletter form, support widget (`data-o-support`), protected links.

---

## 6. Reusable UI Components

### Buttons

- **Primary/secondary**: `.button` with `.button-bg` (theme via `data-wf--button-theme--variant`) and `.button-label__wrap` (multiple `.button-label` for hover clone). Optional: `data-button-rotate`, `data-button-rotate-hover`, `data-size` (e.g. `full`), `data-shape` (e.g. `round`), `data-responsive`.
- **Icon-only**: `.square-button` — `.button-bg` + `.button-icon__wrap` (two `.button-icon` for hover). Used for socials, slider arrows.
- **Tag-style**: `.button.tag` — same structure as button, used for legal/creator links and small CTAs.
- **Close**: `.button.is--close-btn` with `.button-close__circle` and “Close” label; `data-modal-close="about"` (or target id).

### Tags / Pills

- **Structure**: `.tag` → `.button-bg` (variant) + `.eyebrow` (and optional `.button-label__wrap` for hover). Optional `data-shape="round"`.
- **Use**: Category labels, “NEW”, “WIP”, “soon”, “X days ago”, membership labels.

### Cards

- **Resource card** (`.resource-card`): Optional variant `data-wf--resources-card--variant="slider"`. Inner: `.resource-card__start` (tags, title, category), `.resource-card__end` (`.resource-visual`: image + video with `data-video-lazy`).
- **Product card** (`.product-card`): Modifiers `is--electric`, `is--black`, `is--purple`, `is--neutral-400`, `is--disabled`. Inner: `__before`, `__bg` or `__ptc-preview`, `__content` (tags, icon, title, text, button).
- **Flick/showcase card** (`.flick-card`): `.flick-card__bg`, `.flick-card__media` (showcase-card with Bunny HLS), `.flick-card__info` (title, res-used count), `.flick-card__click` (`data-modal-trigger="showcase"`), `.flick-card__bottom` (author tag(s)).
- **Nav banner** (`.nav-banner`): Promo block with tags, title, thumbnail video, “More info” button.
- **About card** (`.about-card`): Text (“Created by”), name rows, “About us” button, image stack with `data-rotate-layer` / `data-rotate-marker`; `data-modal-trigger="about"`.

### Sliders

- **Vertical slider**: Parent with `data-vertical-slider`; list `data-vertical-slider-list`, items `data-vertical-slider-item`; bullets `data-vertical-slider-bullet="active"|"not-active"`; buttons `data-prev` / `data-next`, `data-cursor="prev"|"next"`. Optional `data-autoplay`, `data-autoplay-duration`, `data-fade-slides`. Used in intro (latest resources), testimonial (quotes).
- **GSAP product slider**: Container `data-gsap-slider-init`, `data-gsap-slider-rotate`, `data-gsap-slider-loop`, `data-gsap-slider-center`; collection `data-gsap-slider-collection`; list `data-gsap-slider-list`; items `data-gsap-slider-item`, `data-gsap-slider-item-status="inview"|"not-active"`; controls `data-gsap-slider-control="1"|"2"|…`, `data-gsap-slider-control-status="active"|"not-active"`.
- **Flick cards** (“Made with Osmo”): `data-flick-cards-init`, `data-flick-cards-collection`, `data-flick-cards-list`, `data-flick-cards-item`, `data-flick-cards-item-status`.
- **CSS marquee**: `data-css-marquee` (optional inline `style="animation-duration: …"`), `data-css-marquee-list` (e.g. `"nav"`); used in under-nav bar and trusted-by logos (`data-css-marquee="auto"`).
- **Radial marquee**: `data-radial-marquee`, `data-radial-marquee-accelerate`, `data-radial-marquee-rotate` on list; items are radial cards with image/video.

### Modals

- **Wrapper**: `.modal__group` with `data-modal-wrap`, `aria-hidden="true"`.
- **Backdrop**: `.modal__bg` with `data-modal-bg`.
- **Panel**: `.modal__item` with `data-modal-target="showcase"|"lifetime"|"about"`, `data-modal-status="not-active"|"active"`.
- **Content**: `.modal` → `.modal__close` (button with `data-modal-close="<target>"`) + sections.
- **Triggers**: `data-modal-trigger="about"|"showcase"` on buttons/cards.

### Forms

- **Newsletter**: `.form.is--newsletter` with `data-o-email-form`, `data-mapping` (JSON), `data-form-validate`; fields `data-validate`; submit `data-submit`; radiocheck `data-radiocheck-group`.
- **Validation**: `data-validate="name"` etc.; notifications via `.w-form-done` / `.w-form-fail`.

### Accordion

- **Container**: `data-accordion-css-init`, `data-accordion-close-siblings="true"`.
- **Item**: `data-accordion-status="not-active"|"active"`; toggle `data-accordion-toggle` on header.

### Other

- **Join faces**: `.join-faces__wrap` with variant `data-wf--join-others--variant`.
- **Profile picture**: `.profile-picture` with `data-wf--profile-picture--variant`, `data-res-used="author-img-1"` etc. in modals.
- **Pricing toggle**: `data-pricing-button="solo"|"team"`, `data-pricing-section-status="solo"` on section.

---

## 7. Animation Systems

### GSAP (via Slater/Webflow)

- **Page transition**: Barba leave/enter; `.transition` overlay shown/hidden (likely GSAP or Barba hooks).
- **Hero**: `data-load-heading`, `data-load-icon`, `data-load-reveal` — entrance animations for H1, icon, description.
- **Radial marquee**: Continuous rotation of `data-radial-marquee-rotate` list; optional acceleration on `data-radial-marquee-accelerate`.
- **Reel**: `data-reel-visual`, `data-reel-circle`, `data-reel-scribble` — parallax or motion on scroll/hover; reel player open via `data-player-control-open="reel"`.
- **About card**: `data-rotate-layer` (multiple layers), `data-rotate-marker` — 3D or parallax tilt; `data-autoplay-indicator` on SVG (dash offset for progress?).
- **Vertical sliders**: Translate Y + fade; bullets and prev/next update state; optional autoplay from `data-autoplay-duration`.
- **Product slider**: GSAP-driven rotation/stack of cards; control buttons switch active slide.
- **Flick cards**: Draggable/inertia carousel; items get `data-flick-cards-item-status`.
- **Testimonial**: Quote slides + map highlights (`data-slide-map`, `data-testimonial-map`) and globe progress (`data-autoplay-indicator` on circle).
- **Button hover**: Duplicate labels in `.button-label__wrap` used for sliding/rotating text effect; `data-button-rotate-hover` / `data-button-rotate` drive GSAP tweens.
- **Underline links**: `data-underline-link` — animated underline on hover.

### CSS

- **Marquees**: `data-css-marquee` — keyframe animation on list; duration can be inline style.
- **Transitions**: Standard transitions on hover/focus for buttons, tags, links (color, transform, opacity).

### Video

- **Lazy load**: All preview videos have `src="index.html"` (or empty), `data-video-src` (real URL), `data-video-status="not-loaded"`, `data-video-lazy`. JS swaps `src` and sets status when in view or hover.
- **Showcase/Bunny**: `data-player-src` (HLS), `data-player-autoplay="custom"`, `data-player-quality="full"`, `data-bunny-thumbnail-init`, `data-player-status="idle"` — HLS.js + custom player logic.

### Cursor

- **Custom cursor**: `.cursor` with `.cursor-bubble` (arrow + “Drag” label). `data-cursor-zone="light"|"neutral-600"` on sections sets cursor context; `data-cursor="prev"|"next"` on slider buttons for arrow state.

---

## 8. Data Attributes Controlling Behavior

### Routing / Transitions

| Attribute | Element | Values | Purpose |
|-----------|---------|--------|---------|
| `data-barba` | body, main | `wrapper`, `container` | Barba page transition scope. |
| `data-barba-namespace` | main | e.g. `home` | Page namespace for transitions. |
| `data-barba-p` | links, buttons | (present) | Prefetch / use Barba for navigation. |
| `data-barba-prevent` | link | (present) | Prevent Barba (e.g. Support # link). |
| `data-page-theme` | main | `light` | Page-level theme. |
| `data-transition-theme` | .transition | `light` | Overlay theme. |

### Nav

| Attribute | Element | Values | Purpose |
|-----------|---------|--------|---------|
| `data-nav-toggle` | .nav-menu, .nav__bg | `toggle`, `close` | Open/close mega menu. |
| `data-nav-status` | .nav | `not-active`, (active) | Menu open state. |
| `data-nav-theme` | .nav | `light` | Nav bar theme. |
| `data-nav-bar-height` | .nav-bar__top | (measured) | JS may set height. |
| `data-marketing-theme` | .nav | `dark` | Marketing area theme. |
| `data-scrolling-started` | .nav | `false` | Scroll state. |
| `data-scrolling-direction` | .nav | `down`, `up` | Scroll direction. |
| `data-resources-total` | .nav-bar__big-span-number | (number) | Collection count. |
| `data-lenis-prevent` | .nav-bar__bottom-inner | (present) | Disable Lenis in menu. |

### Buttons / CTA

| Attribute | Element | Values | Purpose |
|-----------|---------|--------|---------|
| `data-button-rotate` | .button | (present) | Enable rotate animation. |
| `data-button-rotate-hover` | .button | (present) | Hover state. |
| `data-outseta-type` | a | `login`, `join` | Outseta auth action. |
| `data-size` | .button | `full`, `` | Button size. |
| `data-shape` | .button, .tag | `round`, `square`, `` | Pill shape. |
| `data-wf--button-theme--variant` | .button-bg | See §4 | Visual theme. |

### Sliders

| Attribute | Element | Values | Purpose |
|-----------|---------|--------|---------|
| `data-vertical-slider` | wrapper | (present) | Vertical slider init. |
| `data-vertical-slider-list` | list | (present) | Slider list. |
| `data-vertical-slider-item` | item | (present) | Slide. |
| `data-vertical-slider-bullet` | bullet | `active`, `not-active` | Bullet state. |
| `data-autoplay` | slider | `true` | Autoplay. |
| `data-autoplay-duration` | slider | e.g. `3000`, `4000` | Interval ms. |
| `data-fade-slides` | slider | (present) | Fade transition. |
| `data-slide-map` | testimonial item | `UK`, `VNM`, etc. | Map highlight key. |
| `data-gsap-slider-init` | .gsap-slider | (present) | GSAP slider init. |
| `data-gsap-slider-rotate` | .gsap-slider | e.g. `20` | Rotation. |
| `data-gsap-slider-loop` | .gsap-slider | `true` | Loop. |
| `data-gsap-slider-center` | .gsap-slider | `true` | Center active. |
| `data-gsap-slider-collection` | collection | (present) | Collection ref. |
| `data-gsap-slider-list` | list | (present) | List ref. |
| `data-gsap-slider-item` | item | (present) | Card. |
| `data-gsap-slider-item-status` | item | `inview`, `not-active` | Visibility. |
| `data-gsap-slider-control` | button | `1`–`5` | Slide index. |
| `data-gsap-slider-control-status` | button | `active`, `not-active` | Active state. |
| `data-flick-cards-init` | .flick-group | (present) | Flick init. |
| `data-flick-cards-collection` | collection | (present) | Flick list ref. |
| `data-flick-cards-list` | list | (present) | List. |
| `data-flick-cards-item` | item | (present) | Card. |
| `data-flick-cards-item-status` | item | (set by JS) | State. |

### Marquees

| Attribute | Element | Values | Purpose |
|-----------|---------|--------|---------|
| `data-css-marquee` | .marquee-css | `"auto"` or (present) | CSS marquee init. |
| `data-css-marquee-list` | list | e.g. `nav` | List identifier. |
| `data-radial-marquee` | .radial-marquee | (present) | Radial init. |
| `data-radial-marquee-accelerate` | collection | (present) | Acceleration. |
| `data-radial-marquee-rotate` | list | (present) | Rotating list. |

### Video / Media

| Attribute | Element | Values | Purpose |
|-----------|---------|--------|---------|
| `data-video-lazy` | video | (present) | Lazy-load. |
| `data-video-src` | video | URL | Real source. |
| `data-video-status` | video | `not-loaded`, (loaded) | State. |
| `data-player-control-open` | .reel__content | `reel` | Open reel player. |
| `data-player-src` | .showcase-card | HLS URL | Bunny/HLS source. |
| `data-player-autoplay` | .showcase-card | `custom` | Autoplay rule. |
| `data-player-status` | .showcase-card | `idle`, … | Player state. |
| `data-bunny-thumbnail-init` | .showcase-card | (present) | Thumbnail init. |

### Modals

| Attribute | Element | Values | Purpose |
|-----------|---------|--------|---------|
| `data-modal-wrap` | .modal__group | (present) | Modal container. |
| `data-modal-bg` | .modal__bg | (present) | Backdrop. |
| `data-modal-target` | .modal__item | `showcase`, `lifetime`, `about` | Modal id. |
| `data-modal-status` | .modal__item | `not-active`, `active` | Open state. |
| `data-modal-trigger` | button, card | `about`, `showcase` | Open modal. |
| `data-modal-close` | button | `about`, etc. | Close modal. |
| `data-res-used-update` | showcase modal item | (present) | Update content from card. |

### Reel / About / Misc

| Attribute | Element | Values | Purpose |
|-----------|---------|--------|---------|
| `data-reel-row` | .reel__content | (present) | Reel row ref. |
| `data-reel-visual` | .reel__visual | (present) | Video block. |
| `data-reel-visual-text` | .reel__visual-text | (present) | Overlay text. |
| `data-reel-circle` | .reel__circle | (present) | Circle graphic. |
| `data-reel-scribble` | .reel__scribble | (present) | Scribble graphic. |
| `data-about-intro-card` | .about-card | `dennis` | About card id. |
| `data-about-img-wrap` | .about-card__img-w | (present) | Image container. |
| `data-rotate-layer` | .about-card__img-layer | (present) | Tilt layer. |
| `data-rotate-marker` | .about-card__img-rotate | (present) | Tilt trigger. |
| `data-autoplay-indicator` | SVG circle | (number) | Progress (e.g. dash). |
| `data-cursor-zone` | section/slider | `light`, `neutral-600` | Cursor theme. |
| `data-cursor` | slider button | `prev`, `next` | Cursor arrow. |
| `data-hover` | links, buttons | (present) | Hover effect. |
| `data-underline-link` | span, a | (present), `alt` | Underline animation. |
| `data-disabled` | .nav-bar__small-a | (present) | Disabled link. |
| `data-pricing-button` | button | `solo`, `team` | Pricing tab. |
| `data-pricing-section-status` | .pricing-home | `solo` | Visible plan set. |
| `data-accordion-css-init` | .footer-link__row | (present) | Accordion init. |
| `data-accordion-close-siblings` | .footer-link__row | `true` | One open at a time. |
| `data-accordion-status` | .footer-link__col | `not-active`, `active` | Open state. |
| `data-accordion-toggle` | .footer-link__col-top | (present) | Toggle. |
| `data-form-validate` | form | (present) | Validation. |
| `data-validate` | field group | `name`, `` | Field rule. |
| `data-submit` | submit btn | (present) | Submit handler. |
| `data-radiocheck-group` | .radiocheck-group | (present) | Checkbox group. |
| `data-testimonial-map` | img | `UK`, `NL`, etc. | Map region. |
| `data-res-used` | various | e.g. `title`, `count`, `item-link` | Showcase modal content binding. |
| `data-res-used-slug` | item | slug | Resource slug. |
| `data-res-used-data` | flick item | (present) | Data binding. |
| `data-res-used-activate` | .flick-card__click | (present) | Open showcase modal. |
| `data-button-wrap` | .vertical-slider__buttons | (present) | Button container ref. |
| `data-wf--*` | various | variant names | Webflow/Slater style variants. |

---

## 9. Clean Architecture Map

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ html                                                                         │
│  ├ head: meta, Webflow CSS, Slater CSS (embed-css), inline scripts,         │
│  │       Outseta, Plausible                                                  │
│  └ body[data-barba=wrapper]                                                  │
│     └ .global (1)                                                            │
│         ├ .embed-css (Slater: 45154, 45446, 45511, 45156)                    │
│         ├ .transition[data-transition-theme]                                  │
│         ├ .nav[data-nav-*, data-marketing-theme]                              │
│         │   ├ .nav__bg[data-nav-toggle=close]                                 │
│         │   └ .nav-bar                                                       │
│         │       ├ .nav-bar__top (logo, menu, login/join)                      │
│         │       └ .nav-bar__bottom (mega: products, explore, ad banner)       │
│         ├ .cursor (bubble, drag label)                                       │
│         ├ main.main[data-barba=container, data-page-theme]                   │
│         │   ├ .under-nav-bar (marquee)                                        │
│         │   ├ .home-hero          → radial-marquee, load headings            │
│         │   ├ .reel               → player-control-open, reel visuals         │
│         │   ├ .intro              → join-faces, about-card, vertical slider   │
│         │   ├ .db                 → vault CTA, dashboard media                │
│         │   ├ .product-slider     → gsap-slider, product cards                │
│         │   ├ .info               → benefits, trustedby marquee               │
│         │   ├ .testimonial        → vertical quote slider, globe map          │
│         │   ├ .pricing-home       → pricing toggle, plan cards                │
│         │   ├ .made               → flick-cards, showcase cards (Bunny HLS)   │
│         │   ├ .shapes-section     → final CTA                                 │
│         │   └ footer.footer       → newsletter, accordion, legal, login/join  │
│         └ .modal__group (1)                                                   │
│             ├ .modal__bg                                                     │
│             ├ .modal__item[target=showcase] → used-hero, used-credits,       │
│             │                                 used-resources, used-bottom    │
│             └ .modal__item[target=lifetime] → lifetime content               │
│     └ .global (2)                                                            │
│         └ .modal__group (2)                                                  │
│             └ .modal__item[target=about] → about-hero, about-stats,           │
│                                            about-gallery, modal-footer        │
│     └ .embed-js: Barba, GSAP+plugins, Lenis, hls.js, Slater 55554.js        │
│     └ script: jQuery, Webflow osmo-v2.*.js                                   │
└─────────────────────────────────────────────────────────────────────────────┘

Component dependency flow (conceptual):
  Slater 55554.js
    → reads data-* (sliders, modals, cursor, video, accordion, pricing, forms)
    → uses GSAP (ScrollTrigger, timelines, Draggable, etc.)
    → uses Lenis for scroll
    → may use Barba hooks for transition overlay
  Webflow JS
    → interactions, possibly form submit, dynamic bindings
  Outseta
    → login/join, newsletter, support
  Barba
    → body/main, prefetch, transition overlay
```

---

## Quick Reference: Key Class Names by Area

| Area | Key classes |
|------|-------------|
| **Layout** | `.global`, `.container`, `.container.is--m`, `.main` |
| **Nav** | `.nav`, `.nav-bar`, `.nav-bar__top`, `.nav-bar__bottom`, `.nav-menu`, `.nav-logo`, `.nav-banner`, `.nav-marquee` |
| **Hero** | `.home-hero`, `.padding-hero`, `.radial-marquee`, `.radial-marquee__card` |
| **Reel** | `.reel`, `.reel__content`, `.reel__visual`, `.reel__circle`, `.reel__scribble` |
| **Intro** | `.intro`, `.join-faces__wrap`, `.about-card`, `.latest-resources-slider`, `.vertical-slider__*` |
| **Platform** | `.db`, `.db__top-row`, `.db-visual` |
| **Products** | `.product-slider`, `.gsap-slider`, `.gsap-slider__collection`, `.product-card` |
| **Info** | `.info`, `.info__list`, `.trustedby-wrap`, `.trustedby-marquee` |
| **Testimonial** | `.testimonial`, `.testimonial-row`, `.testimonial-globe__*`, `.testimonial-item` |
| **Pricing** | `.pricing-home`, `.pricing-home__button-row` |
| **Made** | `.made`, `.flick-group`, `.flick-card`, `.showcase-card` |
| **Footer** | `.footer`, `.footer-inner`, `.footer-top__*`, `.footer-link__col`, `.form.is--newsletter` |
| **Modals** | `.modal__group`, `.modal__bg`, `.modal__item`, `.modal`, `.modal__close` |
| **Shared** | `.button`, `.button-bg`, `.button-label__wrap`, `.tag`, `.eyebrow`, `.line`, `.scribble` |

Use this document as the single reference when rewriting the site: replicate or simplify these sections, components, data attributes, and script roles in the new stack.
