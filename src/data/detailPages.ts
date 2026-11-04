/**
 * ZYNOVATE — Detail page content
 * ------------------------------------------------------------
 * Usage (Next.js):
 *   /services/[slug]/page.tsx  -> const item = services.find(s => s.slug === params.slug)
 *   /products/[slug]/page.tsx  -> const item = products.find(p => p.slug === params.slug)
 *
 * The hero stays shared. Everything below it renders from `item`.
 * Tone follows the live site: practical, honest, no invented clients/stats/pricing.
 */

export type Highlight = { title: string; description: string };
export type Step = { title: string; description: string };
export type Faq = { question: string; answer: string };

export type DetailPage = {
  slug: string;
  title: string;
  eyebrow: string; // small label above title
  tagline: string; // one-line headline under title
  summary: string; // short intro / card text
  overview: string[]; // 2 paragraphs
  highlights: Highlight[]; // "What you get" / "What we build"
  process: Step[]; // how we approach this specific item
  technologies: string[];
  idealFor: string[];
  outcomes: string[]; // what the client walks away with
  faqs: Faq[];
  cta: { heading: string; text: string; button: string };
  seo: { title: string; description: string };
  icon?: string;
};



/* ============================================================
   MEON-STYLE PRODUCT SOLUTIONS — individual detail routes
   ============================================================ */
export type ProductMenuCategory = { title: string; slug: string; items: { title: string; slug: string }[] };
export const productMenuCategories: ProductMenuCategory[] = [
  { title: "KYC SOLUTIONS", slug: "kyc-solutions", items: [
    "Aadhaar eKYC", "Digital KYC", "Corporate KYC", "NRI KYC", "Minor KYC", "Re-KYC", "Account Closure", "Joint Holder KYC",
  ].map(title => ({ title, slug: slugifyProduct(title) })) },
  { title: "ESIGN", slug: "esign", items: ["Aadhaar eSign", "Electronic Signature"].map(title => ({ title, slug: slugifyProduct(title) })) },
  { title: "ONBOARDING SUITE", slug: "onboarding-suite", items: ["Partner Onboarding", "Vendor Onboarding", "Gig Worker Onboarding", "Supplier Onboarding", "Employee Onboarding"].map(title => ({ title, slug: slugifyProduct(title) })) },
  { title: "CONVERSATIONAL AI", slug: "conversational-ai", items: ["WhatsApp Business", "AI Powered Chatbot", "Live Chat"].map(title => ({ title, slug: slugifyProduct(title) })) },
  { title: "CRM", slug: "crm", items: ["Lead Management System", "Sales Pipeline Tracker", "Campaign Management Tool", "Appointment Scheduling", "Ticketing System", "Field Service Management", "Call Centre Solution", "Email Marketing & Automation", "SMS/WhatsApp Marketing"].map(title => ({ title, slug: slugifyProduct(title) })) },
  { title: "BIDDING SOLUTIONS", slug: "bidding-solutions", items: ["E-IPO"].map(title => ({ title, slug: slugifyProduct(title) })) },
  { title: "PLUG & PLAY APIs", slug: "plug-and-play-apis", items: ["Face Verification", "DigiLocker Issuer", "Penny/Reverse Penny Drop", "Aadhaar & PAN Fetch via DigiLocker", "Marksheet Verification", "Driving License Verification", "OCR Verification", "eNACH Integration", "Aadhaar eSign API", "Income Tax PAN API", "Account Aggregator API"].map(title => ({ title, slug: slugifyProduct(title) })) },
];
function slugifyProduct(value: string) {
  return value.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

/* ============================================================
   SERVICES
   ============================================================ */

export const services: DetailPage[] = [
  {
    slug: "web-development",
    title: "Web Development",
    icon: "Globe2",
    eyebrow: "Service / 01",
    tagline: "Fast, purposeful websites and web applications.",
    summary:
      "Websites and web applications shaped around your goals, built to load quickly, read clearly and grow with your business.",
    overview: [
      "Whether you need a company website that explains what you do or a full web application your customers log in to every day, we start from the same question: what should this help people do? Every page, component and interaction is built to serve that answer.",
      "We build with modern, well-supported tools so the site stays fast, accessible and easy to extend. You get clean code, a sensible structure and a handover that lets your team (or ours) keep improving it after launch.",
    ],
    highlights: [
      { title: "Business & Marketing Websites", description: "Clear, fast sites that explain your offer and turn visitors into enquiries." },
      { title: "Web Applications", description: "Logged-in experiences such as dashboards, portals and tools with real functionality behind them." },
      { title: "Responsive by Default", description: "Layouts that work properly on phones, tablets and desktops, not just shrink to fit." },
      { title: "Performance & SEO Foundations", description: "Sensible page speed, semantic structure, metadata and sitemaps so search engines can understand your site." },
      { title: "CMS & Content Management", description: "Editable content so your team can update pages without needing a developer." },
      { title: "Integrations", description: "Connect forms, payments, analytics, CRMs, email tools and third-party APIs." },
    ],
    process: [
      { title: "Understand", description: "We learn your goals, audience and what the site must achieve." },
      { title: "Structure & Design", description: "Page structure and screens you can review before development begins." },
      { title: "Build", description: "Development in working increments, so you see progress along the way." },
      { title: "Test & Launch", description: "Cross-device and edge-case checks, then release and handover." },
    ],
    technologies: ["React", "Next.js", "TypeScript", "JavaScript", "Node.js", "REST APIs", "PostgreSQL", "MongoDB", "AWS"],
    idealFor: ["Startups launching their first site", "Small businesses moving online", "Companies replacing an outdated website", "Teams needing a customer-facing web app"],
    outcomes: [
      "A live, responsive website or web app built around your requirements",
      "A maintainable codebase your team can extend",
      "A clear handover so you know how to run and update it",
    ],
    faqs: [
      { question: "Do you build both simple websites and complex web apps?", answer: "Yes. We take on everything from a focused company website to an application with accounts, dashboards and backend logic. Scope is agreed before we start." },
      { question: "Can you redesign or improve my existing website?", answer: "Yes. We can refresh the design, rebuild on a newer stack, or improve specific parts such as speed, structure and content management." },
      { question: "Will I be able to update content myself?", answer: "If you need it, we can add a content management setup so your team can edit text, images and pages without code." },
      { question: "Do you handle hosting and deployment?", answer: "We can set up deployment and guide you on hosting options, and support the site after launch if you want ongoing help." },
    ],
    cta: {
      heading: "Have a website or web app in mind?",
      text: "Tell us what it needs to do and who it is for. We'll respond within 24 hours.",
      button: "Start a Project",
    },
    seo: {
      title: "Web Development Services | ZYNOVATE",
      description: "ZYNOVATE designs and builds fast, responsive websites and web applications with modern technology, tailored to your business goals.",
    },
  },

  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    icon: "Smartphone",
    eyebrow: "Service / 02",
    tagline: "Mobile experiences designed for the way people use their devices.",
    summary:
      "Mobile apps that feel natural in the hand, from the first idea and screen flow to a release on the app stores.",
    overview: [
      "People use phones in short, focused moments, so a good mobile app has to be quick to understand and easy to use one-handed. We design around real usage first, then engineer the app so it feels responsive and dependable.",
      "We help you decide what belongs in the first release, build it properly, and prepare it for store submission. After launch we can stay on for fixes, improvements and the next set of features.",
    ],
    highlights: [
      { title: "Android & iOS Apps", description: "Apps for the platforms your users are on, with consistent behavior and design." },
      { title: "Cross-platform Builds", description: "A shared codebase where it makes sense, to reach more users with a focused scope." },
      { title: "Account & Onboarding Flows", description: "Sign-up, login and first-run experiences that don't lose people at the door." },
      { title: "Backend & API Connections", description: "Apps connected to reliable services for data, notifications and syncing." },
      { title: "Push Notifications", description: "Timely, relevant messages that bring users back for the right reasons." },
      { title: "Store Release Support", description: "Preparation and guidance for submitting to Google Play and the Apple App Store." },
    ],
    process: [
      { title: "Define the First Release", description: "Decide the core features that make version one useful." },
      { title: "Design the Flows", description: "Screens and navigation you can try before development." },
      { title: "Build & Review", description: "Working builds shared in increments for your feedback." },
      { title: "Test, Release & Support", description: "Device testing, store submission and post-launch care." },
    ],
    technologies: ["React", "TypeScript", "JavaScript", "Node.js", "REST APIs", "FastAPI", "PostgreSQL", "MongoDB", "AWS"],
    idealFor: ["Startups building an MVP app", "Businesses extending their service to mobile", "Teams with an internal field or staff app need", "Founders validating an idea with real users"],
    outcomes: [
      "A tested mobile app ready for store submission",
      "A backend that supports the app as it grows",
      "A clear plan for what comes after version one",
    ],
    faqs: [
      { question: "Should I build for Android, iOS or both?", answer: "It depends on your audience and budget. We'll recommend an approach during planning, often a focused first release and then expansion." },
      { question: "Can you help if I only have an idea?", answer: "Yes. We help shape the idea into a clear feature list and screen flow before any development starts." },
      { question: "Do you also build the backend for the app?", answer: "Yes. We build both the mobile front end and the backend and APIs it depends on." },
      { question: "Will you help with publishing to the stores?", answer: "Yes. We guide the preparation and submission so the release goes smoothly." },
    ],
    cta: {
      heading: "Got an app idea?",
      text: "Share the idea or the problem it solves, and we'll help you plan the first release.",
      button: "Discuss Your App",
    },
    seo: {
      title: "Mobile App Development | ZYNOVATE",
      description: "ZYNOVATE builds Android and iOS mobile apps, from idea and design to store release and ongoing support.",
    },
  },

  {
    slug: "custom-software",
    title: "Custom Software",
    icon: "Blocks",
    eyebrow: "Service / 03",
    tagline: "Software built around the way your business actually works.",
    summary:
      "When off-the-shelf tools force you to work around them, we build software shaped around your workflows and requirements.",
    overview: [
      "Generic software is designed for the average business. If your process is different, you end up with spreadsheets, workarounds and manual steps. Custom software removes that friction by fitting your workflow instead of asking you to change it.",
      "We begin by understanding how your team works today, where time is lost, and what a better system should do. Then we build it in stages so you can use value early and shape it as you learn.",
    ],
    highlights: [
      { title: "Workflow-specific Tools", description: "Software that mirrors your real process, steps, approvals and rules." },
      { title: "Admin Panels & Dashboards", description: "Clear views of data and controls for the people who run the business." },
      { title: "Role-based Access", description: "Different users see and do only what they should." },
      { title: "Reports & Data Views", description: "Searchable, filterable information instead of scattered files." },
      { title: "Integration with Existing Tools", description: "Connect to the systems you already use, so data isn't re-entered." },
      { title: "Legacy System Modernisation", description: "Move old, hard-to-maintain tools to a current, supportable foundation." },
    ],
    process: [
      { title: "Map the Workflow", description: "Document how work flows today and where it breaks down." },
      { title: "Scope in Stages", description: "Agree a first release that delivers value, then plan the rest." },
      { title: "Build & Review", description: "Working increments reviewed with the people who will use them." },
      { title: "Launch & Refine", description: "Release, watch real usage, and adjust." },
    ],
    technologies: ["Python", "Django", "FastAPI", "Node.js", "React", "Next.js", "PostgreSQL", "MySQL", "MongoDB", "Docker", "AWS"],
    idealFor: ["Businesses outgrowing spreadsheets", "Teams with unusual or regulated workflows", "Companies stuck with outdated internal tools", "Operations teams wanting fewer manual steps"],
    outcomes: [
      "Software that matches your process rather than forcing you to adapt",
      "Less manual work and fewer errors",
      "A system you own and can keep extending",
    ],
    faqs: [
      { question: "How is custom software different from a ready-made tool?", answer: "A ready-made tool covers common needs. Custom software is built for your specific workflow, rules and data, so there's less compromise." },
      { question: "Can it connect to the tools we already use?", answer: "In most cases, yes. We build integrations through APIs and data exchange where the other systems allow it." },
      { question: "Can we start small?", answer: "Yes. We recommend a focused first release, then adding features based on real use." },
      { question: "Who owns the software?", answer: "Ownership terms are agreed in writing at the start of the project." },
    ],
    cta: {
      heading: "Working around the wrong software?",
      text: "Describe how your team works today and we'll suggest what a better system could look like.",
      button: "Talk to Us",
    },
    seo: {
      title: "Custom Software Development | ZYNOVATE",
      description: "ZYNOVATE builds custom software around your workflows: admin panels, internal tools, dashboards and integrations.",
    },
  },

  {
    slug: "saas-development",
    title: "SaaS Development",
    icon: "Cloud",
    eyebrow: "Service / 04",
    tagline: "Subscription-ready platforms built to grow with your users.",
    summary:
      "From first MVP to a scalable platform, we build the foundations a SaaS product needs: accounts, billing, dashboards and more.",
    overview: [
      "A SaaS product is more than an app. It needs user accounts, permissions, subscription logic, admin controls and an architecture that can handle more users and features over time. Getting these foundations right early saves expensive rework later.",
      "We have built our own SaaS-style product work, including the Amrut.ai platform, so we understand both the product and engineering sides. We help you scope an MVP, launch it, and build on it as your users give feedback.",
    ],
    highlights: [
      { title: "MVP Development", description: "A focused first version to test your idea with real users quickly." },
      { title: "User Accounts & Authentication", description: "Secure sign-up, login, password handling and session management." },
      { title: "Subscription & Billing Logic", description: "Plans, tiers and payment flows suited to your pricing model." },
      { title: "Multi-user & Team Workspaces", description: "Organisations, roles and permissions for team-based products." },
      { title: "Analytics Dashboards", description: "Clear data views for your users and for you as the operator." },
      { title: "Admin & Operations Panel", description: "Tools to manage users, content, plans and support." },
    ],
    process: [
      { title: "Validate the Idea", description: "Clarify the problem, audience and what the MVP must prove." },
      { title: "Architect for Growth", description: "Structure the platform so new features have a clear place." },
      { title: "Build the Core", description: "Accounts, main workflow, billing and dashboards in working increments." },
      { title: "Launch & Iterate", description: "Release to early users and prioritise improvements from real use." },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Python", "FastAPI", "Django", "Node.js", "PostgreSQL", "MongoDB", "Docker", "AWS"],
    idealFor: ["Founders building a software product", "Businesses turning an internal tool into a product", "Teams moving from a prototype to a production platform", "Existing SaaS products that need new features"],
    outcomes: [
      "A launch-ready SaaS platform with the core foundations in place",
      "An architecture that can grow as users and features increase",
      "A clear roadmap for what comes after launch",
    ],
    faqs: [
      { question: "Can you build an MVP first?", answer: "Yes. We help define the smallest version that proves your idea, then expand based on feedback." },
      { question: "Do you handle payments and subscriptions?", answer: "Yes. We build billing flows and integrate with payment providers suited to your market." },
      { question: "Can you work on an SaaS product we've already started?", answer: "Yes. We can review the current state and either continue building or improve specific areas." },
      { question: "Will the platform scale?", answer: "We design the architecture with growth in mind, and scale infrastructure as your needs increase." },
    ],
    cta: {
      heading: "Building a SaaS product?",
      text: "Share your idea and who it's for. We'll help you scope a first release.",
      button: "Plan Your SaaS",
    },
    seo: {
      title: "SaaS Development Company | ZYNOVATE",
      description: "ZYNOVATE builds scalable SaaS platforms: MVPs, user accounts, subscription billing, dashboards and admin tools.",
    },
  },

  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    icon: "PenTool",
    eyebrow: "Service / 05",
    tagline: "Clear interfaces and considered journeys.",
    summary:
      "Interface and experience design that takes you from early concepts to polished, build-ready screens.",
    overview: [
      "Good design is not decoration. It makes a product easier to understand and quicker to use. We start by understanding who the users are and what they're trying to do, then shape flows and screens that make that path obvious.",
      "Because design and engineering sit within one team, what we design is realistic to build. Nothing gets lost between a mockup and the working product.",
    ],
    highlights: [
      { title: "User Flows & Journeys", description: "Map how people move through your product to reach their goal." },
      { title: "Wireframes", description: "Low-fidelity layouts to agree structure before visual design." },
      { title: "High-fidelity UI Design", description: "Polished screens with typography, colour and spacing worked out." },
      { title: "Clickable Prototypes", description: "Interactive previews so you can feel the product before it's built." },
      { title: "Design Systems", description: "Reusable components and styles for a consistent product." },
      { title: "Redesigns & UX Improvements", description: "Fix confusing or outdated interfaces in existing products." },
    ],
    process: [
      { title: "Research & Goals", description: "Understand users, context and what success looks like." },
      { title: "Flows & Wireframes", description: "Agree structure and navigation first." },
      { title: "Visual Design", description: "Bring the structure to life with a consistent look and feel." },
      { title: "Prototype & Handoff", description: "Test the flow, then hand over build-ready designs." },
    ],
    technologies: ["Figma", "Design systems", "Prototyping", "Responsive design", "Accessibility basics"],
    idealFor: ["Products with confusing or dated interfaces", "Founders who need screens before development", "Teams without an in-house designer", "Businesses planning a redesign"],
    outcomes: [
      "Clear screens and flows you can react to before development",
      "A consistent visual language for your product",
      "Designs that are ready for engineers to build",
    ],
    faqs: [
      { question: "Can you design without building it?", answer: "Yes. We can deliver design only, or continue into development so design and build stay aligned." },
      { question: "Do you provide a clickable prototype?", answer: "Yes, where it helps you validate the flow before development begins." },
      { question: "Can you improve the design of an existing product?", answer: "Yes. We review what exists, find friction points, and redesign the parts that matter most." },
      { question: "Will designs work on mobile and desktop?", answer: "Yes. We design for the screen sizes your users actually use." },
    ],
    cta: {
      heading: "Need your product to look and feel right?",
      text: "Tell us about the product and who uses it. We'll suggest where design can help most.",
      button: "Start a Design Project",
    },
    seo: {
      title: "UI/UX Design Services | ZYNOVATE",
      description: "ZYNOVATE provides UI/UX design: user flows, wireframes, high-fidelity screens, prototypes and design systems.",
    },
  },

  {
    slug: "backend-api-development",
    title: "Backend & API Development",
    icon: "Braces",
    eyebrow: "Service / 06",
    tagline: "Reliable services that keep your product working together.",
    summary:
      "The databases, logic and APIs behind your product, built to be secure, well-structured and ready to scale.",
    overview: [
      "The part of a product users don't see is the part that makes everything work: storing data, applying business rules, handling logins and talking to other systems. A solid backend keeps the product dependable as it grows.",
      "We design clean APIs and data structures, so frontends, mobile apps and third-party tools can all connect reliably. We also help improve backends that have become slow, tangled or hard to change.",
    ],
    highlights: [
      { title: "REST API Design & Development", description: "Well-documented endpoints that your apps and partners can rely on." },
      { title: "Database Design", description: "Structured data models in SQL or NoSQL, chosen to fit the product." },
      { title: "Authentication & Authorisation", description: "Secure login, roles and permissions." },
      { title: "Third-party Integrations", description: "Payments, email, SMS, maps, CRMs and other external services." },
      { title: "Background Jobs & Scheduling", description: "Automated tasks, queues and reports running without manual work." },
      { title: "Deployment & Cloud Setup", description: "Containerised, repeatable deployments on cloud infrastructure." },
    ],
    process: [
      { title: "Model the Data & Rules", description: "Define entities, relationships and business logic." },
      { title: "Design the API", description: "Agree endpoints and contracts before building." },
      { title: "Build & Test", description: "Implement with automated and manual checks on edge cases." },
      { title: "Deploy & Monitor", description: "Release, document and keep an eye on stability." },
    ],
    technologies: ["Python", "Django", "FastAPI", "Node.js", "REST APIs", "PostgreSQL", "MySQL", "MongoDB", "Docker", "AWS", "Git"],
    idealFor: ["Apps that need a reliable backend", "Products with slow or tangled APIs", "Teams integrating several systems", "Businesses exposing data to partners"],
    outcomes: [
      "A secure, documented API your frontends can build on",
      "A data structure designed for growth",
      "Deployment that is repeatable and maintainable",
    ],
    faqs: [
      { question: "Can you build a backend for an app that already exists?", answer: "Yes. We can build a new backend or take over and improve an existing one." },
      { question: "Do you document the APIs?", answer: "Yes. Documentation is part of the handover so other developers can use the API." },
      { question: "Which database will you use?", answer: "We choose between SQL and NoSQL options based on your data and how the product will be used." },
      { question: "Can you fix a slow backend?", answer: "Yes. We review bottlenecks in queries, structure and infrastructure, then improve them." },
    ],
    cta: {
      heading: "Need a backend you can rely on?",
      text: "Tell us what your product needs to store, process and connect to.",
      button: "Discuss Your Backend",
    },
    seo: {
      title: "Backend & API Development | ZYNOVATE",
      description: "ZYNOVATE builds secure, scalable backends and APIs with Python, Node.js, Django and FastAPI.",
    },
  },

  {
    slug: "business-automation",
    title: "Business Automation",
    icon: "Workflow",
    eyebrow: "Service / 07",
    tagline: "Connected processes that reduce repetitive work.",
    summary:
      "We automate the manual, repetitive tasks that slow your team down, so people can focus on work that needs judgment.",
    overview: [
      "Many teams lose hours every week copying data between tools, chasing approvals, sending the same emails and building the same reports. These tasks are predictable, which makes them good candidates for automation.",
      "We look at your processes, find where automation will save the most effort, and build connected workflows that run reliably in the background, with clear visibility for your team.",
    ],
    highlights: [
      { title: "Workflow Automation", description: "Trigger actions automatically when something happens in your process." },
      { title: "Data Sync Between Tools", description: "Keep systems consistent without manual copy and paste." },
      { title: "Automated Notifications", description: "Emails, messages and alerts sent at the right moment." },
      { title: "Approval & Task Flows", description: "Structured steps for requests, reviews and sign-offs." },
      { title: "Scheduled Reports", description: "Reports generated and delivered on a regular schedule." },
      { title: "Document & Data Processing", description: "Reduce manual handling of forms, files and records." },
    ],
    process: [
      { title: "Find the Repetition", description: "Identify tasks that cost the most time and are good to automate." },
      { title: "Design the Workflow", description: "Define triggers, steps, rules and exceptions." },
      { title: "Build & Connect", description: "Implement and connect your systems." },
      { title: "Monitor & Improve", description: "Watch results and refine as your process changes." },
    ],
    technologies: ["Python", "Node.js", "FastAPI", "REST APIs", "PostgreSQL", "MongoDB", "Docker", "AWS"],
    idealFor: ["Teams buried in manual admin", "Businesses using many disconnected tools", "Operations needing consistent, repeatable processes", "Companies wanting fewer human errors"],
    outcomes: [
      "Less repetitive manual work",
      "Fewer errors from re-entering data",
      "Processes that run consistently and are easy to track",
    ],
    faqs: [
      { question: "Which tasks are best to automate?", answer: "Repetitive, rule-based tasks that happen often, such as data entry, notifications, reporting and routine approvals." },
      { question: "Will automation replace my team?", answer: "No. It removes repetitive work so people can spend time on tasks that need judgment and care." },
      { question: "Can you work with the tools we already use?", answer: "In most cases, yes, wherever those tools offer APIs or data export." },
      { question: "What happens if something fails?", answer: "We build in error handling and visibility so issues are caught and can be resolved quickly." },
    ],
    cta: {
      heading: "Spending too much time on repetitive work?",
      text: "Describe a process that slows your team down and we'll suggest how to automate it.",
      button: "Automate a Process",
    },
    seo: {
      title: "Business Automation Services | ZYNOVATE",
      description: "ZYNOVATE builds business automation: connected workflows, data sync, notifications and reporting.",
    },
  },

  {
    slug: "maintenance-support",
    title: "Maintenance & Support",
    icon: "Wrench",
    eyebrow: "Service / 08",
    tagline: "Ongoing care to keep your product dependable.",
    summary:
      "After launch, software still needs attention. We keep your product updated, stable and ready for what comes next.",
    overview: [
      "Releasing a product is the beginning. Dependencies need updating, issues appear with real usage, and users ask for improvements. Without regular care, products slowly become slower, less secure and harder to change.",
      "We can support products we built and those built by others. We start by understanding the current state, then agree a support approach that fits your needs, whether that's fixes when needed or regular ongoing improvements.",
    ],
    highlights: [
      { title: "Bug Fixes & Issue Resolution", description: "Investigate and fix problems found in real use." },
      { title: "Updates & Dependency Care", description: "Keep libraries and frameworks current for stability and security." },
      { title: "Performance Improvements", description: "Find and resolve slow pages, queries and processes." },
      { title: "Feature Additions", description: "Build the next slice of work as your product evolves." },
      { title: "Monitoring & Health Checks", description: "Keep an eye on uptime and errors so problems are spotted early." },
      { title: "Backups & Deployment Support", description: "Safe release practices and recovery plans." },
    ],
    process: [
      { title: "Review the Product", description: "Understand the codebase, hosting and known issues." },
      { title: "Agree a Support Approach", description: "Choose scope and how requests will be handled." },
      { title: "Maintain & Improve", description: "Fix, update and enhance on an agreed rhythm." },
      { title: "Report & Plan", description: "Share what's been done and what's next." },
    ],
    technologies: ["React", "Next.js", "TypeScript", "Python", "Django", "FastAPI", "Node.js", "PostgreSQL", "MongoDB", "Docker", "AWS", "Git"],
    idealFor: ["Businesses whose developer has moved on", "Teams without in-house engineers", "Products that need regular updates", "Companies wanting dependable post-launch care"],
    outcomes: [
      "A stable, up-to-date product",
      "A dependable team to call when something goes wrong",
      "Steady improvements instead of one-off fixes",
    ],
    faqs: [
      { question: "Can you maintain an app you didn't build?", answer: "Yes. We review the existing code and setup first, then agree what we can support." },
      { question: "Do you offer one-time fixes as well as ongoing support?", answer: "Yes. Support can be ongoing or arranged for specific needs." },
      { question: "Can you add new features during support?", answer: "Yes. We can handle new features as part of ongoing work." },
      { question: "How do I report an issue?", answer: "We agree a clear channel during setup so issues are tracked and handled in order." },
    ],
    cta: {
      heading: "Need someone to look after your product?",
      text: "Tell us what you have and what's going wrong. We'll tell you how we can help.",
      button: "Get Support",
    },
    seo: {
      title: "Software Maintenance & Support | ZYNOVATE",
      description: "ZYNOVATE provides software maintenance and support: bug fixes, updates, performance, monitoring and new features.",
    },
  },
];

/* ============================================================
   PRODUCTS
   Note: matches your site's wording. These are kinds of
   products ZYNOVATE can build, not a catalogue of items for sale.
   ============================================================ */

export const products: DetailPage[] = [
  {
    slug: "saas-platforms",
    title: "SaaS Platforms",
    eyebrow: "Product / 01",
    tagline: "Tools people can return to, subscribe to and grow with.",
    summary:
      "Subscription-based software platforms designed for repeat use, steady growth and long-term value.",
    overview: [
      "A good SaaS platform solves one problem well enough that people come back to it regularly. It is designed around repeat use: clear onboarding, useful dashboards and features that become more valuable the longer someone uses them.",
      "We build SaaS platforms with the foundations in place from the start: accounts, plans, permissions and an architecture ready to grow. Our work on Amrut.ai, an AI visibility and SEO platform, is an example of this approach.",
    ],
    highlights: [
      { title: "Account & Workspace Management", description: "Individual users, teams and organisations." },
      { title: "Subscription Plans", description: "Free, trial and paid tiers matched to your model." },
      { title: "Dashboards & Insights", description: "Clear data presentation for daily use." },
      { title: "Admin Controls", description: "Manage users, plans and content." },
      { title: "API & Integrations", description: "Let the platform connect to other tools." },
      { title: "Scalable Architecture", description: "Built so new features and more users are manageable." },
    ],
    process: [
      { title: "Shape the Product", description: "Define the user, problem and MVP." },
      { title: "Design the Experience", description: "Onboarding, dashboards and core flows." },
      { title: "Build the Platform", description: "Core features in increments." },
      { title: "Launch & Grow", description: "Release and improve from usage." },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Python", "FastAPI", "Django", "PostgreSQL", "MongoDB", "Docker", "AWS"],
    idealFor: ["Founders with a software product idea", "Companies productising an internal tool", "Niche tools for a specific industry", "Teams moving from MVP to full platform"],
    outcomes: [
      "A subscription-ready platform",
      "A product experience designed for return use",
      "A base to build features on",
    ],
    faqs: [
      { question: "Can you build the platform from only an idea?", answer: "Yes. We help turn the idea into a scoped MVP and then build it." },
      { question: "Is there an example of a SaaS platform you built?", answer: "Yes. Amrut.ai is an AI visibility platform built by ZYNOVATE. See our Works page for more." },
      { question: "Can the platform grow after launch?", answer: "Yes. We structure the build so later features have a clear place to land." },
    ],
    cta: {
      heading: "Have a SaaS idea?",
      text: "Share it with us and we'll help you shape and build the first version.",
      button: "Start a Conversation",
    },
    seo: {
      title: "SaaS Platforms | ZYNOVATE",
      description: "ZYNOVATE builds subscription-ready SaaS platforms with accounts, dashboards, billing and scalable architecture.",
    },
  },

  {
    slug: "business-tools",
    title: "Business Tools",
    eyebrow: "Product / 02",
    tagline: "Practical software that makes daily work more effective.",
    summary:
      "Focused tools that solve specific business tasks, from quotes and bookings to inventory and reporting.",
    overview: [
      "Not every business needs a large platform. Often the best improvement is one well-made tool that handles a daily task smoothly: creating quotes, tracking orders, managing bookings or generating reports.",
      "We build these tools to be simple to learn, fast to use and fitted to the way your business works, so adoption is natural and the time saved is immediate.",
    ],
    highlights: [
      { title: "Quote & Invoice Tools", description: "Generate and track quotes and invoices." },
      { title: "Booking & Scheduling", description: "Let customers or staff book time without back-and-forth." },
      { title: "Inventory & Order Tracking", description: "Know what you have and where orders stand." },
      { title: "Customer & Lead Management", description: "Keep contacts and follow-ups in one place." },
      { title: "Reporting Tools", description: "Turn business data into readable reports." },
      { title: "Calculators & Utilities", description: "Small tools that remove repeated calculations." },
    ],
    process: [
      { title: "Pick the Task", description: "Focus on the daily job that costs most time." },
      { title: "Design Simply", description: "A clear, fast interface." },
      { title: "Build & Test with Users", description: "Check it works for your team." },
      { title: "Launch & Refine", description: "Adjust based on real use." },
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", "MySQL", "MongoDB"],
    idealFor: ["Small and medium businesses", "Service companies", "Teams using spreadsheets for core tasks", "Shops and distributors"],
    outcomes: [
      "A tool that fits one job well",
      "Less time spent on routine admin",
      "Cleaner records and fewer mistakes",
    ],
    faqs: [
      { question: "Can a small tool be built for a small budget?", answer: "A tightly scoped tool is often a good way to start. Budget and scope are discussed up front." },
      { question: "Can I use it on my phone?", answer: "Yes. Tools are designed to work across devices." },
      { question: "Can we add features later?", answer: "Yes. We build it so it can expand as your needs change." },
    ],
    cta: {
      heading: "Which task would you like to make easier?",
      text: "Tell us the job that takes the most time. We'll suggest a tool to simplify it.",
      button: "Describe Your Need",
    },
    seo: {
      title: "Custom Business Tools | ZYNOVATE",
      description: "ZYNOVATE builds practical business tools: quotes, bookings, inventory, lead management and reporting.",
    },
  },

  {
    slug: "internal-applications",
    title: "Internal Applications",
    eyebrow: "Product / 03",
    tagline: "Purpose-built spaces for teams, processes and operations.",
    summary:
      "Private applications designed for your own team, to manage work, data and operations in one place.",
    overview: [
      "Internal applications are used by your people every day, so they need to be quick, clear and reliable. A well-designed internal app replaces scattered spreadsheets, email threads and chat messages with one organised system.",
      "We build these around your actual operations, with the roles, permissions and reports your team needs, and we make them straightforward to maintain as your organisation changes.",
    ],
    highlights: [
      { title: "Team Dashboards", description: "A shared view of work, status and key numbers." },
      { title: "Admin & Back-office Panels", description: "Manage records, users and settings." },
      { title: "Role-based Access", description: "Right information for the right people." },
      { title: "Request & Approval Workflows", description: "Structured processes with a clear trail." },
      { title: "HR & Operations Tools", description: "Staff records, leave, tasks and processes." },
      { title: "Secure Authentication", description: "Company-appropriate login and access." },
    ],
    process: [
      { title: "Learn the Operation", description: "Talk to the people who do the work." },
      { title: "Design for Daily Use", description: "Efficient screens for frequent tasks." },
      { title: "Build in Stages", description: "Start with the most valuable module." },
      { title: "Roll Out & Support", description: "Train, launch and refine." },
    ],
    technologies: ["React", "Next.js", "TypeScript", "Python", "Django", "Node.js", "PostgreSQL", "MySQL", "Docker", "AWS"],
    idealFor: ["Operations and admin teams", "Growing companies with scattered tools", "Organisations needing access control", "Teams replacing paper or spreadsheet processes"],
    outcomes: [
      "One organised place for team work",
      "Clear visibility across operations",
      "A secure system with appropriate access",
    ],
    faqs: [
      { question: "Can the app be private to our company?", answer: "Yes. Internal apps are built with controlled access for your team only." },
      { question: "Can it replace our spreadsheets?", answer: "Yes. We move data and processes into a structured system." },
      { question: "Can it be built in phases?", answer: "Yes. We usually start with the most valuable module and expand." },
    ],
    cta: {
      heading: "Ready to organise your team's work?",
      text: "Tell us how your team works today and where it gets messy.",
      button: "Plan an Internal App",
    },
    seo: {
      title: "Internal Applications | ZYNOVATE",
      description: "ZYNOVATE builds internal applications: dashboards, admin panels, workflows and role-based tools for teams.",
    },
  },

  {
    slug: "automation-products",
    title: "Automation Products",
    eyebrow: "Product / 04",
    tagline: "Connected workflows that give valuable time back.",
    summary:
      "Products that run repetitive work automatically, so your team spends less time on routine tasks.",
    overview: [
      "Automation products take a repeated process and make it run by itself: collecting data, sending messages, updating records and producing reports. The value is time returned to your team, every day.",
      "We build automation as dependable products, with clear status, controls and error handling, so you can trust them and see exactly what they're doing.",
    ],
    highlights: [
      { title: "Workflow Builders", description: "Define triggers, steps and conditions." },
      { title: "Scheduled Jobs", description: "Tasks that run at set times without anyone starting them." },
      { title: "Data Collection & Processing", description: "Gather, clean and organise information automatically." },
      { title: "Notifications & Alerts", description: "Messages sent when something needs attention." },
      { title: "Activity Logs", description: "A visible record of what ran and when." },
      { title: "Integrations", description: "Connect the tools your process relies on." },
    ],
    process: [
      { title: "Identify the Process", description: "Choose the workflow worth automating." },
      { title: "Design Rules & Exceptions", description: "Plan what happens in normal and unusual cases." },
      { title: "Build & Connect", description: "Implement and link your tools." },
      { title: "Monitor", description: "Track runs and improve reliability." },
    ],
    technologies: ["Python", "FastAPI", "Node.js", "REST APIs", "PostgreSQL", "MongoDB", "Docker", "AWS"],
    idealFor: ["Teams with repetitive routines", "Businesses connecting multiple tools", "Operations needing regular reporting", "Companies wanting fewer manual errors"],
    outcomes: [
      "Hours of routine work removed",
      "Consistent, repeatable processes",
      "Visibility into what's running",
    ],
    faqs: [
      { question: "What kind of process can be automated?", answer: "Repetitive, rule-based tasks like data collection, notifications, syncing and reporting." },
      { question: "Can I see what the automation did?", answer: "Yes. We include activity logs and status views." },
      { question: "What if it fails?", answer: "We build error handling and alerts so problems are visible and fixable." },
    ],
    cta: {
      heading: "What would you like to stop doing by hand?",
      text: "Describe the routine and we'll explore how it can run automatically.",
      button: "Explore Automation",
    },
    seo: {
      title: "Automation Products | ZYNOVATE",
      description: "ZYNOVATE builds automation products: workflows, scheduled jobs, data processing, alerts and integrations.",
    },
  },

  {
    slug: "customer-facing-platforms",
    title: "Customer-facing Platforms",
    eyebrow: "Product / 05",
    tagline: "Useful, intuitive digital touchpoints for your customers.",
    summary:
      "Portals, storefronts and apps your customers use directly, designed to be simple, trustworthy and easy.",
    overview: [
      "Customers judge a business partly by how easy it is to deal with online. A good customer-facing platform lets them find information, place orders, book services or get support without friction.",
      "We design and build these platforms to be clear and fast, with the account, payment and communication features that suit your business, and the backend your team needs to manage it all.",
    ],
    highlights: [
      { title: "Customer Portals", description: "Accounts where customers see orders, documents and history." },
      { title: "Online Storefronts", description: "Catalogues, carts and order flows." },
      { title: "Booking Platforms", description: "Self-service appointments and reservations." },
      { title: "Support & Enquiry Flows", description: "Easy ways for customers to reach you." },
      { title: "Secure Accounts & Payments", description: "Trustworthy login and payment experiences." },
      { title: "Admin Back-end", description: "Tools for your team to manage content and customers." },
    ],
    process: [
      { title: "Know the Customer", description: "Understand what they need to do and where they struggle." },
      { title: "Design Simply", description: "Clear journeys with little friction." },
      { title: "Build & Integrate", description: "Features, payments and your back-office tools." },
      { title: "Launch & Improve", description: "Watch real usage and refine." },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "Python", "Django", "PostgreSQL", "MongoDB", "AWS"],
    idealFor: ["E-commerce businesses", "Service providers", "Education and healthcare organisations", "Real estate and listing businesses"],
    outcomes: [
      "A platform customers find easy to use",
      "Fewer support questions",
      "A back-end that makes management simple",
    ],
    faqs: [
      { question: "Can customers log in and see their own data?", answer: "Yes. We build secure accounts with individual data views." },
      { question: "Can you integrate payments?", answer: "Yes, with payment providers suited to your market." },
      { question: "Will it work on mobile?", answer: "Yes. Platforms are designed to work well on phones and desktops." },
    ],
    cta: {
      heading: "Want to make life easier for your customers?",
      text: "Tell us what your customers need to do online.",
      button: "Plan Your Platform",
    },
    seo: {
      title: "Customer-facing Platforms | ZYNOVATE",
      description: "ZYNOVATE builds customer portals, storefronts and booking platforms that are simple, secure and easy to use.",
    },
  },

  {
    slug: "custom-digital-products",
    title: "Custom Digital Products",
    eyebrow: "Product / 06",
    tagline: "Distinct ideas shaped into functional, lasting products.",
    summary:
      "If your idea doesn't fit a standard category, we help you shape it into a real, working product.",
    overview: [
      "Some of the best ideas don't fit a template. They combine different features, serve a niche audience or try something new. These need more thinking up front, and a team willing to work through the details with you.",
      "We take your idea from a rough concept to a working product: clarifying the problem, shaping the scope, designing the experience and building something people can actually use.",
    ],
    highlights: [
      { title: "Idea Shaping & Scoping", description: "Turn a concept into a clear plan and feature list." },
      { title: "Prototyping", description: "Quickly test the idea before committing to a full build." },
      { title: "Web, Mobile & Backend", description: "All parts of the product from one team." },
      { title: "Niche & Industry-specific Products", description: "Tools built for a particular audience." },
      { title: "Iterative Development", description: "Learn from early use and improve." },
      { title: "Long-term Evolution", description: "Support to keep the product growing." },
    ],
    process: [
      { title: "Understand the Idea", description: "Who it's for and why it matters." },
      { title: "Plan the First Version", description: "Choose what to build first." },
      { title: "Design & Build", description: "Create the product in reviewable increments." },
      { title: "Launch & Evolve", description: "Learn from use and keep improving." },
    ],
    technologies: ["React", "Next.js", "TypeScript", "JavaScript", "Python", "Node.js", "Django", "FastAPI", "PostgreSQL", "MongoDB", "AWS", "Docker"],
    idealFor: ["First-time founders", "Innovators with unusual ideas", "Businesses exploring a new product line", "Teams wanting a prototype before investing"],
    outcomes: [
      "A clear plan for your product",
      "A working first version",
      "A team to grow it with",
    ],
    faqs: [
      { question: "My idea is rough. Can you still help?", answer: "Yes. Shaping rough ideas into a clear scope is part of what we do." },
      { question: "Can you start with a prototype?", answer: "Yes. A prototype is a practical way to test before a full build." },
      { question: "Do you keep supporting the product afterwards?", answer: "Yes. We can stay on for fixes and new features after launch." },
    ],
    cta: {
      heading: "Have an idea worth building?",
      text: "Share it, however rough. We'll help you find the right first step.",
      button: "Share Your Idea",
    },
    seo: {
      title: "Custom Digital Products | ZYNOVATE",
      description: "ZYNOVATE turns unique ideas into working digital products, from scoping and prototyping to launch and evolution.",
    },
  },
];

// Generate consistent individual pages for every solution in the mega-menu.
const solutionPages: DetailPage[] = productMenuCategories.flatMap((category) => [
  {
    slug: category.slug,
    title: category.title.replace(/\b\w/g, (letter) => letter.toUpperCase()),
    eyebrow: "Product solutions / Category",
    tagline: `A connected ${category.title.toLowerCase()} solution, designed around your workflow.`,
    summary: `Explore ZYNOVATE ${category.title.toLowerCase()} solutions, designed to make digital processes clearer, faster and easier to manage.`,
    overview: [
      `Our ${category.title.toLowerCase()} solutions help organisations replace fragmented manual processes with secure, straightforward digital experiences. Each implementation is shaped around your users, business rules and operational requirements.`,
      "We work with you to define the right scope, connect the systems you already use and build a solution that can evolve as your needs change.",
    ],
    highlights: category.items.slice(0, 6).map((item) => ({ title: item.title, description: `A tailored ${item.title.toLowerCase()} workflow with clear user journeys, useful status visibility and integrations where required.` })),
    process: [
      { title: "Understand requirements", description: "Map users, workflows, business rules and integration needs." },
      { title: "Design the experience", description: "Plan clear screens and simple journeys for each user type." },
      { title: "Build & integrate", description: "Develop the solution and connect required services and APIs." },
      { title: "Test & launch", description: "Validate key scenarios, deploy and support the rollout." },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "REST APIs", "PostgreSQL", "MongoDB", "AWS"],
    idealFor: ["Banks and financial services", "Growing businesses", "Operations and customer support teams", "Organisations modernising manual workflows"],
    outcomes: ["A workflow designed around your requirements", "Better visibility for users and administrators", "A maintainable solution that can grow"],
    faqs: [
      { question: "Can the solution be customised for our process?", answer: "Yes. We scope the workflow, roles, validations and integrations around your actual requirements." },
      { question: "Can it connect with our existing software?", answer: "Where suitable APIs or integration methods are available, we can connect the solution with your existing systems." },
      { question: "Will it work on mobile and desktop?", answer: "We design responsive experiences for the devices your users need." },
    ],
    cta: { heading: `Discuss your ${category.title.toLowerCase()} requirement`, text: "Tell us about your workflow and we'll help plan the right solution.", button: "Discuss Your Requirement" },
    seo: { title: `${category.title} Solutions | ZYNOVATE`, description: `Explore custom ${category.title.toLowerCase()} software solutions by ZYNOVATE.` },
  },
  ...category.items.map((item) => ({
    slug: item.slug,
    title: item.title,
    eyebrow: `Product solution / ${category.title}`,
    tagline: `${item.title} designed for clear, secure and efficient digital workflows.`,
    summary: `A tailored ${item.title.toLowerCase()} solution to simplify processes, improve visibility and create a better experience for your users.`,
    overview: [
      `${item.title} can help reduce repetitive steps, improve the consistency of information and give users a more straightforward way to complete important tasks. ZYNOVATE shapes each implementation around your organisation's workflow, users and operational rules.`,
      "From the first requirements discussion through design, development, integration and launch, we focus on a solution that is practical to use and straightforward to maintain.",
    ],
    highlights: [
      { title: "Workflow tailored to your needs", description: `User journeys and business rules designed around your ${item.title.toLowerCase()} process.` },
      { title: "Role-based access", description: "Appropriate access for administrators, teams, partners and end users." },
      { title: "Centralised dashboard", description: "A clear view of records, progress, statuses and actions." },
      { title: "Integration-ready", description: "Connect supported third-party services and existing business systems." },
      { title: "Responsive experience", description: "Designed to work across desktop, tablet and mobile devices." },
      { title: "Reporting & audit trail", description: "Useful records and status history to support day-to-day operations." },
    ],
    process: [
      { title: "Requirement discovery", description: "Understand your users, process, rules and expected outcomes." },
      { title: "UX & solution design", description: "Create the screen flows, data structure and integration plan." },
      { title: "Development & integration", description: "Build the application and connect the required services." },
      { title: "Quality checks & launch", description: "Test important scenarios, deploy and assist with handover." },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "REST APIs", "PostgreSQL", "MongoDB", "AWS"],
    idealFor: ["Financial institutions and service providers", "Businesses with growing operational needs", "Teams replacing manual processes", "Organisations seeking a custom digital workflow"],
    outcomes: ["A solution aligned with your business process", "A clearer experience for users and administrators", "A scalable foundation for future improvements"],
    faqs: [
      { question: `Can ${item.title} be customised?`, answer: "Yes. Features, approval rules, user roles and integrations can be scoped to your requirements." },
      { question: "Can you integrate third-party APIs?", answer: "Yes, subject to the provider's API availability, access permissions and technical requirements." },
      { question: "How do we get started?", answer: "Share your current process and key requirements. We can then recommend an initial scope and implementation plan." },
    ],
    cta: { heading: `Build your ${item.title} solution`, text: "Share your requirements and let's discuss the right approach for your organisation.", button: "Talk to Our Team" },
    seo: { title: `${item.title} | ZYNOVATE`, description: `Custom ${item.title.toLowerCase()} solution development by ZYNOVATE.` },
  }))
]);
products.push(...solutionPages);

/* Helpers */
export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
