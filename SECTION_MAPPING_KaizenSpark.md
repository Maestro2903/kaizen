# Section Mapping Plan: Osmo → KaizenSpark Tech Pvt Ltd

Conversion plan for turning the current Osmo marketing site into a landing page for **KaizenSpark Tech Pvt Ltd**. No code changes in this document — mapping only.

---

## Mapping Overview

| # | Current section (Osmo)     | New section role (KaizenSpark) |
|---|---------------------------|---------------------------------|
| 0 | Under-nav bar             | Announcement / Marquee strip   |
| 1 | Home Hero                 | Identity Hero                  |
| 2 | Reel                      | Founder Story                  |
| 3 | Intro                     | Trust & Social Proof           |
| 4 | Platform (db)             | Technology Capabilities        |
| 5 | Product Slider            | Service Stack                  |
| 6 | Info                      | Why KaizenSpark                |
| 7 | Testimonial               | Trust & Social Proof (quotes)  |
| 8 | Pricing-home              | Pricing                        |
| 9 | Made                      | Case Studies                  |
|10 | Shapes-section            | Process + Final CTA            |
|11 | Footer                    | Footer (company)              |

---

## 1. Identity Hero

| Field | Details |
|-------|---------|
| **Current section** | `.home-hero` (Hero) |
| **New section role** | **Identity Hero** — Company name, tagline, and core value proposition for KaizenSpark Tech Pvt Ltd. |
| **Content changes required** | • **Headline**: Replace “Dev Toolkit” / “Built to Flex” with KaizenSpark identity (e.g. company name + tagline such as “Continuous Innovation, Delivered” or similar).<br>• **Central icon**: Swap Osmo logo SVG for KaizenSpark logo or icon.<br>• **Description line**: Replace “Platform packed with Webflow & HTML resources…” with one line describing KaizenSpark (e.g. “Technology solutions and digital products that help businesses improve continuously”).<br>• **Highlighted terms**: Change from “Webflow”, “HTML”, “icons”, “easings”, “course” to terms relevant to KaizenSpark (e.g. “software”, “consulting”, “automation”, “innovation”).<br>• **Radial marquee**: Replace resource cards with **capability/tech highlights** or **client logos** or **service pillars** (images + short labels). Same circular layout; different copy and assets. |
| **Components that can be reused** | • Full `.home-hero` layout and structure.<br>• `.home-hero__title-row`, `.home-hero__description-row`, `.home-hero__marquee-row`.<br>• `.padding-hero`, `.home-hero__bg`, `.home-hero__bg-line`.<br>• Heading hooks: `data-load-heading`, `data-load-icon`, `data-load-reveal`.<br>• **Radial marquee**: `.radial-marquee`, `data-radial-marquee`, `data-radial-marquee-rotate`, `data-radial-marquee-accelerate`; reuse `.radial-marquee__card` / `.radial-marquee__card-inner` for items (swap image/video and label).<br>• Typography classes: `h-xl`, `h-m`, `.home-hero__description-p`, `.home-hero__description-highlight`, `is--round`. |

---

## 2. Founder Story

| Field | Details |
|-------|---------|
| **Current section** | `.reel` (Reel) |
| **New section role** | **Founder Story** — Short video or visual story about KaizenSpark’s founders or “why we exist.” |
| **Content changes required** | • **Labels**: Change “Play” / “Reel” to “Watch” / “Our Story” (or “Founder Story”).<br>• **Video**: Replace Osmo reel with KaizenSpark founder/culture video (same aspect ratio and player behavior).<br>• **Overlay text**: Replace “Osmo in use” / “00:48” with e.g. “Our story” / “[new duration]” or remove duration.<br>• **Scribble**: Change “See what it can do!” to something like “Why we build” or “Our journey.”<br>• **Player**: If keeping full-screen reel player, rebrand; otherwise reuse as inline or modal video only. |
| **Components that can be reused** | • Full `.reel` section layout and container.<br>• `.reel__content`, `data-player-control-open="reel"`, `data-reel-row`.<br>• `.reel__visual`, `data-reel-visual`, `.reel__visual-text` (data-reel-visual-text).<br>• `.reel__circle` (data-reel-circle), `.reel__scribble` (data-reel-scribble), `.scribble` text.<br>• Video element with `data-video-lazy`, `data-video-src`, `data-video-status`, `.cover-video`.<br>• Line/divider and “Play”/“Reel” label spans; just change copy.<br>• All reel-related GSAP/ScrollTrigger behavior. |

---

## 3. Trust & Social Proof

| Field | Details |
|-------|---------|
| **Current section** | `.intro` (Intro) + `.testimonial` (Testimonial) |
| **New section role** | **Trust & Social Proof** — “Who trusts us” (logos/faces) and client/partner quotes. |
| **Content changes required** | **From Intro:**<br>• **Join faces**: Replace “Join 2K+ others” with “Trusted by X+ companies” or “Clients & partners” and swap face images for client logos or partner avatars.<br>• **About card**: Replace “Created by Dennis & Ilja” with “Founded by [Founder names]” or remove; if kept, point to Founder Story or About modal with KaizenSpark founders.<br>• **Vertical slider**: Replace “Latest updates from Osmo” with **“What our clients say”** — reuse as testimonial quote slider (quote + name + role + optional photo).<br>**From Testimonial:**<br>• **Globe/copy**: Change “Connect Worldwide” to “Global reach” or “Trusted worldwide” and keep or simplify globe/map.<br>• **Quotes**: Replace Osmo testimonials with KaizenSpark client/partner quotes; keep same structure (quote + name + title/company).<br>• **Map pins**: Optional — keep for “where we work” or remove; update `data-slide-map` / `data-testimonial-map` if needed. |
| **Components that can be reused** | • **Intro**: `.intro`, `.intro__row`, `.intro__small-col` / `.intro__large-col`; `.join-faces__wrap`, `.join-faces__image-row`, `.join-faces__list`; `.about-card` (optional), `.about-card__text`, `.about-card__controls`, `.about-card__img-w`, `data-rotate-layer`, `data-modal-trigger`; **vertical slider**: `.latest-resources-slider` → rename to testimonial slider, keep `data-vertical-slider`, `data-autoplay`, `data-fade-slides`, `.vertical-slider__list`, `.vertical-slider__item`, `.vertical-slider__bullets`, prev/next buttons.<br>• **Testimonial**: `.testimonial`, `.testimonial-row`, `.testimonial-col__small` / `.testimonial-col__large`; `.testimonial-globe__*`, `.testimonial-wrap`, `.vertical-slider__*` (same slider component); `.testimonial-item`, `.testimonial-item__info`, `.testimonial-item__info-img`; `data-slide-map`, `data-testimonial-map`, `data-autoplay-indicator` (globe progress).<br>• **Cards in slider**: Reuse `.resource-card`-style blocks for “quote cards” (title = quote, category = name/role) or use `.testimonial-item` only.<br>• Tags: `.tag`, `.eyebrow` for roles/companies. |

---

## 4. Technology Capabilities

| Field | Details |
|-------|---------|
| **Current section** | `.db` (Platform) |
| **New section role** | **Technology Capabilities** — What KaizenSpark builds with (stack, platforms, methods). |
| **Content changes required** | • **Title**: Replace “The platform” with “Our technology” or “How we build”; replace “(The Vault)” scribble with “(Capabilities)” or similar.<br>• **Body copy**: Replace vault/dashboard narrative with 1–2 sentences on KaizenSpark’s tech stack, engineering practices, or platforms (e.g. cloud, AI, automation).<br>• **Hero media**: Replace dashboard preview image/video with a **capability visual** (e.g. tech stack diagram, platform screenshot, or abstract “how we work” graphic).<br>• **CTA**: Change “About the Vault” to “Our approach” or “View capabilities” (link to anchor or page). |
| **Components that can be reused** | • Full `.db` section and container structure.<br>• `.db__top-row`, `.db__top-title`, `.db__top-scribble`, `.db__top-description`.<br>• `.db__content`, `.db__back`, `.db-visual`, `.db__bottom-row`, `.db__bottom-description`.<br>• `.scribble`, `.scribble-arrow`, typography (`h-xxl`, `h-m`, `p-l`).<br>• Image/video block: `.db-visual__before`, `.cover-image`, `.cover-video`, `data-video-lazy`, `data-video-src`.<br>• `.button-row`, `.button` (CTA); `data-button-rotate-hover`, etc. |

---

## 5. Service Stack

| Field | Details |
|-------|---------|
| **Current section** | `.product-slider` (Product Slider) |
| **New section role** | **Service Stack** — KaizenSpark’s main service offerings (e.g. Software Development, Consulting, DevOps, Support) in a carousel. |
| **Content changes required** | • **Headline**: Replace “A growing toolkit for creative developers” with e.g. “Services that scale with you” or “What we offer.”<br>• **Subline**: Replace “Access everything with a single membership” with one line on breadth of services or “One partner, full stack.”<br>• **Control buttons**: Replace “The Vault”, “Page Transition Course”, “Icons”, “Easings”, “Community” with **service names** (e.g. Software Development, Cloud & DevOps, Consulting, Support, Innovation Lab).<br>• **Cards**: Replace each product card with a **service card** — same layout: visual (image/video), title, short description, optional tag (“Core” / “Enterprise”), CTA “Learn more” or “Get in touch.”<br>• Remove or repurpose “Easings”-style disabled/WIP card if not needed. |
| **Components that can be reused** | • Full `.product-slider` section and `.gsap-slider` wrapper.<br>• **GSAP slider**: `data-gsap-slider-init`, `data-gsap-slider-rotate`, `data-gsap-slider-loop`, `data-gsap-slider-center`; `data-gsap-slider-collection`, `data-gsap-slider-list`, `data-gsap-slider-item`, `data-gsap-slider-item-status`; control buttons with `data-gsap-slider-control`, `data-gsap-slider-control-status`.<br>• **Product cards**: `.product-card`, `.product-card__before`, `.product-card__bg` or `__ptc-preview`, `.product-card__content`, `.product-card__tags`, `.product-card__center-content`, `.product-card__icon`, `.product-card__title`, `.product-card__text`, `.product-card__btn`; modifiers `is--electric`, `is--black`, `is--purple` for visual variety.<br>• `.product-slider__nav`, `.product-slider__text-row`, `.product-slider__title`, `.product-slider__text`; `.product-slider__fade`.<br>• Decorative SVG circle; `data-cursor-zone` on collection.<br>• Tags: `.tag`, `.eyebrow` for service labels. |

---

## 6. Why KaizenSpark

| Field | Details |
|-------|---------|
| **Current section** | `.info` (Info Section) |
| **New section role** | **Why KaizenSpark** — Reasons to choose KaizenSpark (benefits, differentiators). |
| **Content changes required** | • **Scribble**: Change “Why Osmo?” to “Why KaizenSpark?”<br>• **Title**: Replace “Level up your game and join a community…” with a headline on why clients choose KaizenSpark (e.g. “We combine expertise with a relentless focus on improvement”).<br>• **Bullet list**: Replace the three Osmo benefits with **three KaizenSpark differentiators** (e.g. “Build faster and better” → “Ship with confidence”; “Speed up your process” → “Reduce time to market”; “A living and growing system” → “Continuous improvement built in”). Adjust subtext to match.<br>• **Trusted-by strip**: Replace “Trusted by Industry Giants” with “Trusted by [sector] leaders” or “Clients & partners”; replace logo marquee images with KaizenSpark client/partner logos. |
| **Components that can be reused** | • Full `.info` section layout: `.info__wrap`, `.info__small-col`, `.info__large-col`.<br>• `.info__scribble`, `.info__title`, `.info__list`, `.info__li`, `.info__li-title`, `.info__graphic` (micrographic in small col).<br>• **Trusted-by**: `.trustedby-wrap`, `.tag-row`, `.trustedby-row`, `.trustedby-marquee` with `data-css-marquee="auto"`; same marquee structure, new logos.<br>• Typography: `h-ml`, `p-l`, `p-m`, `u--fw-medium`; tags with `data-wf--button-theme--variant`.<br>• Scribble arrow SVG. |

---

## 7. Process (New / From Shapes-Section)

| Field | Details |
|-------|---------|
| **Current section** | `.shapes-section` (Shapes Section) — repurposed for Process + final CTA. |
| **New section role** | **Process** — How KaizenSpark works (e.g. Discover → Design → Build → Improve) plus final CTA. |
| **Content changes required** | • **Process**: Add a simple step flow (e.g. 4 columns or a horizontal timeline). Copy can be minimal: step number/icon + title + one line. Reuse existing row/column layout from `.shapes-section__row`, `.shapes-section__col`; add new content blocks for steps.<br>• **CTA**: Replace “Join Osmo” / “FAQ” with “Get in touch” / “Our process” or “Contact us” / “Careers”; keep button row pattern.<br>• **Micrographic**: Replace or keep as brand shape; optional “KaizenSpark” wordmark in last column. |
| **Components that can be reused** | • `.shapes-section`, `.shapes-section__row`, `.shapes-section__col`, `.shapes-section__col.is--last`.<br>• `.button-row`, `.button` (data-button-rotate-hover, data-outseta-type removed or repurposed for contact).<br>• Typography and spacing; optional line/divider elements. |

---

## 8. Pricing

| Field | Details |
|-------|---------|
| **Current section** | `.pricing-home` (Pricing) |
| **New section role** | **Pricing** — KaizenSpark pricing or engagement models (e.g. project-based, retainer, enterprise). |
| **Content changes required** | • **Toggle**: Replace “For Individuals” / “For Teams” with KaizenSpark’s pricing segments (e.g. “Startups” / “Enterprise”, or “Project” / “Retainer”); update `data-pricing-button` and `data-pricing-section-status` if segment names change.<br>• **Plan cards**: Replace Osmo plans (Subscription, Lifetime, Team) with KaizenSpark offerings (e.g. “Starter”, “Growth”, “Enterprise” or “Project”, “Retainer”, “Dedicated team”). Update titles, price/copy, and CTAs (“Get started”, “Contact sales”).<br>• **Scribble/graphic**: Update copy and optional micrographic to match brand.<br>• **Footer CTA**: “View full pricing” → “See all options” or “Talk to us”; link to pricing page or contact. |
| **Components that can be reused** | • Full `.pricing-home` section and dark theme (`data-theme-section="dark"`).<br>• Toggle: `.pricing-home__button-row`, `.button` with `data-pricing-button="solo"|"team"` (values can stay or become e.g. `startup` / `enterprise`).<br>• Plan cards: existing card layout (title, price, features list, CTA button); reuse structure and `.button` component.<br>• `.pricing-home__graphic`, `.pricing-home__scribble`; scribble arrow SVG.<br>• All pricing-toggle JS behavior. |

---

## 9. Case Studies

| Field | Details |
|-------|---------|
| **Current section** | `.made` (Made with Osmo) |
| **New section role** | **Case Studies** — “Built with KaizenSpark” or “Client success stories”; showcase projects with optional video. |
| **Content changes required** | • **Title**: Replace “Made” / “with” / “Osmo” with “Built” / “with” / “KaizenSpark” or “Client success stories.”<br>• **Cards**: Replace Osmo showcase sites with **KaizenSpark case studies** — client/project name, thumbnail or short video, “X deliverables” or “X outcomes” instead of “X Resources Used,” and “Visit site” or “Read case study” link.<br>• **Authors**: Replace designer/agency credits with client name and optional quote or role (e.g. “Client: Acme Corp”).<br>• **Modal**: Reuse showcase modal for **case study detail** (project name, client, challenge, solution, results, link to full case study or live site). Update `data-res-used-*` bindings to case study data (title, count → metrics, item-title, item-link, etc.). |
| **Components that can be reused** | • Full `.made` section and `.flick-group` (data-flick-cards-init, data-flick-cards-collection, data-flick-cards-list, data-flick-cards-item).<br>• **Flick cards**: `.flick-card`, `.flick-card__bg`, `.flick-card__media`, `.showcase-card` (Bunny HLS or static image); `.flick-card__info`, `.flick-card__click` (data-modal-trigger="showcase"), `.flick-card__bottom` (author/client tag).<br>• **Data bindings**: `data-res-used="title"`, `data-res-used="count"`, `data-res-used="site-url"`, `data-res-used="author-url-1"`, `data-res-used="author-name-1"`, etc. — repurpose for case study title, metrics, client link, client name.<br>• **Showcase modal**: `.modal__item[data-modal-target="showcase"]` → case study detail modal; reuse `.used-hero`, `.used-credits`, `.used-resources`, `.used-resource-card`, `.used-bottom` (“Visit site” → “Read case study” / “Visit site”); keep `data-res-used-update` and content slots.<br>• Video: keep `data-player-src` (HLS) or use static images per case; `data-bunny-thumbnail-init` optional. |

---

## 10. Announcement Strip (Under-Nav)

| Field | Details |
|-------|---------|
| **Current section** | `.under-nav-bar` |
| **New section role** | **Announcement / Marquee strip** — One rotating message (e.g. “Now serving clients in 10+ countries” or a product launch). |
| **Content changes required** | • Replace “New: Page Transition Course” with KaizenSpark announcement (one short line).<br>• Replace Osmo icon SVG with KaizenSpark logo or remove; keep one repeated item for seamless loop. |
| **Components that can be reused** | • `.under-nav-bar`, `.nav-marquee`, `.marquee-css` (data-css-marquee), `.marquee-css__list` (data-css-marquee-list="nav"), `.marquee-css__item`; inline `style="animation-duration: 30s"` (adjust if needed).<br>• `.eyebrow.is--nav-marquee`; SVG slot for logo. |

---

## 11. Footer

| Field | Details |
|-------|---------|
| **Current section** | `footer.footer` |
| **New section role** | **Footer** — KaizenSpark contact, links, legal, newsletter (optional). |
| **Content changes required** | • **Newsletter**: Keep or replace with “Stay updated” / “Get in touch”; update form mapping for KaizenSpark (Outseta or other provider).<br>• **Accordion columns**: Rename “Product”, “Community”, “Membership” to e.g. “Services”, “Company”, “Connect”; update links (services, about, case studies, contact, careers, pricing).<br>• **“About Osmo”** → “About us” or “Our story”; keep modal trigger or link to About page.<br>• **Legal**: Replace Osmo legal links with KaizenSpark (Terms, Privacy, etc.).<br>• **Creator links**: Replace Dennis/Ilja with company socials or remove.<br>• **Login/Join**: Replace with “Contact” / “Get a quote” or remove if no auth. |
| **Components that can be reused** | • Full `footer.footer`, `.footer-inner`, `.footer-top__row`, `.footer-top__links`, `.footer-top__buttons`.<br>• **Newsletter**: `.form-group`, `.form.is--newsletter`, `data-form-validate`, `data-o-email-form`, `data-submit`, `.form-field-row`, `.form-submit-btn`, `.radiocheck-group`; success/error notifications.<br>• **Accordion**: `data-accordion-css-init`, `data-accordion-close-siblings`, `data-accordion-status`, `data-accordion-toggle`; `.footer-link__col`, `.footer-link__col-top`, `.footer-link__col-bottom`, `.footer-link__col-ul`.<br>• Buttons: `.button`, `.button.tag`; legal link row.<br>• Bottom logo/credits row. |

---

## 12. Modals & Nav (Summary)

| Current | New role | Content changes | Reuse |
|---------|----------|------------------|--------|
| **About modal** | **About / Founders** | Replace Dennis & Ilja with KaizenSpark founders; stats (e.g. “X+ projects”, “X years”); gallery → company/team images; CTAs → Contact / Careers. | Full `.modal__item[data-modal-target="about"]`, `.about-hero`, `.about-stats`, `.about-gallery`, `.modal-footer`; `.about-item`, profile images, social buttons. |
| **Showcase modal** | **Case study detail** | See Case Studies above. | Full modal structure; `.used-hero`, `.used-credits`, `.used-resources`, `.used-resource-card`, `.used-bottom`. |
| **Lifetime modal** | **Optional** | Repurpose for “Enterprise” or “Partnership” detail, or remove. | Structure reusable for any long-form overlay. |
| **Nav** | **KaizenSpark nav** | Logo → KaizenSpark; “Our Products” → “Services”; “Explore” → “Company” or “Work”; “Pricing” stays; nav banner → featured service or announcement; Login/Join → Contact / Get quote (or remove). | Full `.nav`, `.nav-bar`, mega menu structure, `.nav-banner`; update links and labels only. |

---

## Component Reuse Summary

| Component | Use in KaizenSpark |
|-----------|--------------------|
| **Buttons** (`.button`, `.square-button`, `.button.tag`) | All CTAs, nav, footer, modals; change copy and optional `data-outseta-type`. |
| **Tags / Pills** (`.tag`, `.eyebrow`) | Service labels, “NEW”, client names, roles, stats. |
| **Vertical slider** | Trust & Social Proof quotes; same data attributes and bullets/arrows. |
| **GSAP product slider** | Service Stack; same carousel and control buttons. |
| **Radial marquee** | Identity Hero capability/logo loop; same DOM and GSAP hooks. |
| **Flick cards + showcase modal** | Case Studies; same card and modal, new data bindings. |
| **Reel block** | Founder Story video; same layout and player trigger. |
| **CSS marquee** | Under-nav announcement; trusted-by logos in Why KaizenSpark. |
| **Accordion** | Footer link columns; same behavior. |
| **Forms** | Newsletter or contact; same validation and submit pattern. |
| **Pricing toggle + cards** | Pricing section; same toggle and card layout. |
| **About card** | Optional “Founders” teaser; same tilt and modal trigger. |

---

## Suggested Page Order (KaizenSpark)

1. Under-nav bar (announcement)
2. Identity Hero (ex-Hero)
3. Founder Story (ex-Reel)
4. Trust & Social Proof (ex-Intro + Testimonial)
5. Technology Capabilities (ex-Platform)
6. Service Stack (ex-Product Slider)
7. Why KaizenSpark (ex-Info)
8. Process + CTA (ex-Shapes-section)
9. Pricing (ex-Pricing-home)
10. Case Studies (ex-Made)
11. Footer

This order keeps narrative flow: who you are → who’s behind it → who trusts you → how you build → what you offer → why you → how you work → what it costs → proof → contact.
