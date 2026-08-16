# Eliezer Assunção de Paulo — Portfolio

Source code for my personal portfolio site, built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS 4**.

[LinkedIn](https://www.linkedin.com/in/eliezersoftwareenginner/) · [GitHub](https://github.com/eliezer-dev-software-enginner) · [Blog](https://blog-do-eliezer.vercel.app/)

## About me

I'm a fullstack software engineer with 6+ years of experience shipping real applications end to end — from the database to the UI, and from the first commit to the users who pay for it. I work across desktop, web, mobile, and backend, and I've spent a good part of that time building my own frameworks and tools instead of just consuming other people's.

I don't just write code and hand it off — with **Plics SW** (see below) I've handled the whole lifecycle: development, support, and organic growth (content, community, distribution), all without paid ads. That gives me a practical sense of what actually works in production, not just in theory.

## Notable work

### Products
- **[Plics SW](https://plics-sw-webpage.vercel.app/)** — a desktop, offline-first ERP for small businesses (stock, finance, customers, service orders), built on my own Megalodonte framework, with SQLite for persistence, for Windows and Linux. Has real paying customers and an organic support/growth ecosystem I built from scratch.
- **[Estoky](https://estoky-one.vercel.app)** — a fully client-side stock manager (Next.js/React), no backend or signup required, with CSV export and full responsiveness.
- **Comanda Real** — a restaurant ordering/POS SaaS: a Vue 3 + Nuxt 3 frontend (thermal-printer integration, PDF export) backed by a Spring Boot 4 microservice for WhatsApp notifications over RabbitMQ.
- **Résumé Generator** — a Node.js/TypeScript backend that automates tailoring a résumé per job posting, integrating Gemini and Grok.
- **Realtec Processador** — a JavaFX desktop app built for a technical interview: CSV bank-ledger processing with balance calculation and inconsistency detection.

### Frameworks & tools I built
- **[Megalodonte](https://github.com/eliezer-dev-software-enginner)** — my own JavaFX application framework: declarative UI, reactive state (`State`/`ComputedState`), routing, and theming, split into modular packages (`megalodonte-base`, `-components`, `-reactivity`, `-router`, `-theme`). It's the foundation Plics SW and several of my other desktop apps are built on.
- **[Coesion JavaFX](https://github.com/eliezerBrasilian/Coesion-JavaFX)** — an open-source toolset for rapid JavaFX desktop development, including automated scripts to package production-ready `.exe`/`.msi` installers.
- **scene2d-suite** — a set of libGDX Scene2D tools I built (`hud-creator-gdx`, `scene2d-hud-loader`, `atlas-animator-gdx`, `gdx-skins`): a visual, drag-and-drop HUD/UI editor that exports to JSON, plus the runtime loader that turns that JSON into real Scene2D actors.
- **[Find-Process](https://github.com/eliezer-dev-software-enginner/find-process)** — a small Windows utility (JavaFX/Megalodonte) to find and kill processes locked on a given port, replacing manual terminal commands.
- **ftp-file-pusher**, **ngrok-up**, **simple-clipboard** — smaller Java/JavaFX utilities I built to speed up my own dev/QA workflow (pushing files over TCP, managing ngrok tunnels, clipboard handling across Megalodonte apps).
- **pix-payment** — a standalone Node.js/TypeScript library for Pix payments, published on GitHub and consumed as a dependency in my own products.

### Automation & bots
- A Telegram bot that mirrors **G1 news** to a channel every 3 hours, and another that checks **domain availability** on request — both Python.
- A WhatsApp automation pipeline (Node.js, RabbitMQ, Evolution API) with dedicated services for inbound webhooks, personal DM auto-replies, and YouTube-link auto-responses in groups.
- A company-scraping pipeline (Python/Node) that collects, cleans, and reaches out to leads over WhatsApp, chained through RabbitMQ.

### Game dev
- Building the same 2D/isometric game ("Roz") in parallel on two engines — **Godot** (GDScript) and **libGDX** (Java, Android + desktop) — to compare workflows, plus a set of libGDX practice exercises.

## Tech stack

| Area | Technologies |
|---|---|
| Languages | Java, TypeScript, JavaScript, Python, Kotlin, GDScript |
| Frontend | React, Next.js, Vue 3, Nuxt 3, React Native, Tailwind CSS |
| Desktop | JavaFX (via my own Megalodonte framework), SQLite |
| Backend | Node.js, NestJS, Spring Boot, Express |
| Data & messaging | PostgreSQL, SQLite, Firebase, RabbitMQ, Kafka |
| DevOps | Docker, Docker Compose |
| Mobile / Game dev | React Native, libGDX, Godot, Android (Kotlin) |
| Payments | Mercado Pago, Pix |
| Testing | Jest |

## How I work

I move fluidly between writing code by hand and working with AI coding agents, depending on what the task calls for — I don't treat AI as a shortcut that skips understanding the system. On projects like the Plics SW website and Comanda Real, I keep explicit process files (`AGENTS.md`, `AI_RULES.md`, `DECISIONS.md`, `CONTEXT.md`) that define approved stack, conventions, and require agents to explain a plan before editing — the same discipline I'd want from a human collaborator. That means AI-assisted work in my projects is reviewed, constrained, and logged, not copy-pasted.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result. The page auto-updates as you edit `app/page.tsx`.

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # lint the project
```

## Contact

- [LinkedIn](https://www.linkedin.com/in/eliezersoftwareenginner/)
- [GitHub](https://github.com/eliezer-dev-software-enginner)
- [WhatsApp](https://wa.link/2gsv2z)
- [Blog](https://blog-do-eliezer.vercel.app/)
