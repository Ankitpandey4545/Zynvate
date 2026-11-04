"use client";

import { useState } from "react";
import {
  Activity,
  ArrowRight,
  Check,
  CheckCircle2,
  Clock,
  Code,
  Copy,
  Cpu,
  Database,
  ExternalLink,
  FileText,
  Laptop,
  Layers,
  Lock,
  Play,
  RefreshCw,
  Server,
  Shield,
  Sliders,
  Smartphone,
  Sparkles,
  Terminal,
  Users,
  Zap,
} from "lucide-react";
import {
  WebDev3D,
  MobileDev3D,
  CustomSoftware3D,
  Saas3D,
  UIUX3D,
  Backend3D,
  Automation3D,
  Maintenance3D,
} from "@/components/sections/services/Service3DGraphics";
import {
  SaasPlatforms3D,
  BusinessTools3D,
  InternalApps3D,
  AutomationProducts3D,
  CustomerFacing3D,
  CustomDigital3D,
} from "./Product3DGraphics";
import { getPageVisual } from "@/data/pageVisuals";
import { ActionButton } from "@/components/ui/ActionButton";
import { cn } from "@/lib/utils";

interface VisualShowcaseWidgetProps {
  slug: string;
  title: string;
  type: "service" | "product";
}

export function VisualShowcaseWidget({ slug, title, type }: VisualShowcaseWidgetProps) {
  // Web Dev State
  const [deviceView, setDeviceView] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [activeCodeTab, setActiveCodeTab] = useState<"preview" | "code">("preview");

  // Mobile App State
  const [mobileScreen, setMobileScreen] = useState<"onboarding" | "feed" | "profile">("feed");

  // Custom Software / SaaS State
  const [activeRole, setActiveRole] = useState<"admin" | "manager" | "operator">("admin");
  const [saasTier, setSaasTier] = useState<"growth" | "scale">("growth");

  // API State
  const [apiEndpoint, setApiEndpoint] = useState<string>("GET /api/v1/status");
  const [apiCopied, setApiCopied] = useState(false);

  // Business Tools Calculator State
  const [quoteUsers, setQuoteUsers] = useState<number>(15);
  const [quoteModules, setQuoteModules] = useState<number>(3);

  // Automation State
  const [automationRunning, setAutomationRunning] = useState(true);

  return (
    <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-[2.5rem] border border-[#E9DFD5] bg-gradient-to-b from-white via-[#FCF9F6] to-[#F7EFE7] p-6 shadow-[0_24px_60px_-15px_rgba(122,68,38,0.08)] sm:p-8 md:p-10">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 size-80 rounded-full bg-[#EAD6C3]/40 blur-3xl" />

      {/* Render tailored showcase depending on slug */}
      {slug === "web-development" && (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#EADCCC] pb-4">
            <div className="flex items-center gap-2">
              <span className="flex size-3 rounded-full bg-[#E17A47]" />
              <span className="flex size-3 rounded-full bg-[#E8B87C]" />
              <span className="flex size-3 rounded-full bg-[#82B29A]" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">zynovate.studio/app-preview</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setDeviceView("desktop")}
                className={cn(
                  "flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors",
                  deviceView === "desktop" ? "bg-primary text-white" : "bg-white text-muted-foreground hover:bg-secondary",
                )}
              >
                <Laptop className="size-3.5" /> Desktop
              </button>
              <button
                type="button"
                onClick={() => setDeviceView("mobile")}
                className={cn(
                  "flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors",
                  deviceView === "mobile" ? "bg-primary text-white" : "bg-white text-muted-foreground hover:bg-secondary",
                )}
              >
                <Smartphone className="size-3.5" /> Mobile
              </button>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
            {/* Interactive Browser Canvas */}
            <div
              className={cn(
                "relative mx-auto overflow-hidden rounded-2xl border border-[#EDE0D4] bg-white p-5 shadow-md transition-all duration-300",
                deviceView === "mobile" ? "max-w-xs" : "w-full",
              )}
            >
              <div className="flex items-center justify-between border-b border-border/40 pb-3">
                <div className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-foreground">Next.js App Engine</span>
                </div>
                <span className="rounded-md bg-primary/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-primary">
                  100% Responsive
                </span>
              </div>

              <div className="mt-4 space-y-3">
                <div className="h-20 rounded-xl bg-gradient-to-r from-primary/15 via-[#F5ECE3] to-primary/10 p-4 flex flex-col justify-center">
                  <span className="font-mono text-[10px] text-primary uppercase font-bold tracking-wider">Fast & Fluid Architecture</span>
                  <p className="text-xs font-semibold text-foreground mt-1">Rendered with Next.js 15 App Router & TypeScript</p>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="rounded-lg bg-secondary/70 p-3">
                    <p className="text-[10px] text-muted-foreground">LCP Speed</p>
                    <p className="font-mono text-sm font-bold text-emerald-600">0.65s</p>
                  </div>
                  <div className="rounded-lg bg-secondary/70 p-3">
                    <p className="text-[10px] text-muted-foreground">SEO Indexing</p>
                    <p className="font-mono text-sm font-bold text-primary">100/100</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Stats & Clay Graphic */}
            <div className="relative flex flex-col justify-between space-y-4">
              <div className="rounded-2xl border border-primary/15 bg-white/80 p-5 backdrop-blur-sm">
                <p className="font-mono text-xs uppercase tracking-wider text-primary font-semibold">Verified Architecture</p>
                <ul className="mt-3 space-y-2 text-xs text-foreground/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-primary shrink-0" /> Server-side rendered for instant search indexing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-primary shrink-0" /> Zero bloat code with semantic HTML & WCAG AA standards
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-primary shrink-0" /> Seamless custom CMS & API integrations
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-end">
                <div className="size-36">
                  <WebDev3D className="size-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {slug === "mobile-app-development" && (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#EADCCC] pb-4">
            <span className="font-mono text-xs text-muted-foreground">iOS & Android Cross-Platform Engine</span>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 border border-emerald-200">
                <Check className="size-3" /> Store Ready
              </span>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            {/* Phone Screen Mockup */}
            <div className="relative mx-auto w-full max-w-sm rounded-[2.5rem] border-[6px] border-[#382216] bg-[#FAF6F2] p-4 shadow-xl">
              {/* Phone Dynamic Island */}
              <div className="mx-auto h-4 w-28 rounded-full bg-[#382216]" />

              {/* Notification Toast */}
              <div className="mt-3 rounded-2xl border border-primary/20 bg-white/95 p-3 shadow-md backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="grid size-6 place-items-center rounded-lg bg-primary text-white">
                      <Sparkles className="size-3" />
                    </div>
                    <span className="text-[11px] font-bold text-foreground">ZYNOVATE App Sync</span>
                  </div>
                  <span className="font-mono text-[9px] text-muted-foreground">now</span>
                </div>
                <p className="mt-1 text-[11px] text-foreground/80">Real-time sync complete: 0ms latency.</p>
              </div>

              {/* In-app Screen Content */}
              <div className="mt-4 space-y-3 rounded-2xl bg-white p-4 shadow-xs">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-foreground">Welcome Back</p>
                    <p className="text-[10px] text-muted-foreground">Your account is active</p>
                  </div>
                  <span className="size-8 rounded-full bg-primary/10 grid place-items-center text-primary font-bold text-xs">
                    ZY
                  </span>
                </div>
                <div className="rounded-xl bg-[#F5ECE3] p-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-foreground">Push Notifications</span>
                    <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold text-white">Active</span>
                  </div>
                  <p className="mt-1 text-[10px] text-muted-foreground">60fps native gestures & offline-first storage</p>
                </div>
              </div>

              {/* Screen switcher */}
              <div className="mt-4 flex justify-around border-t border-border/50 pt-2 text-[10px] text-muted-foreground">
                <span className="font-bold text-primary">Overview</span>
                <span>Workflows</span>
                <span>Account</span>
              </div>
            </div>

            {/* Mobile Highlights & 3D Vector */}
            <div className="space-y-4">
              <div className="rounded-2xl border border-primary/15 bg-white p-5">
                <p className="font-mono text-xs uppercase tracking-wider text-primary font-semibold">Store Submissions Handled</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  From Apple Developer Account certificates to Google Play Console compliance, we guide the entire submission pipeline so your app launches without delays.
                </p>
                <div className="mt-4 flex gap-2">
                  <span className="rounded-lg bg-secondary px-2.5 py-1 text-[11px] font-semibold text-foreground">Apple App Store</span>
                  <span className="rounded-lg bg-secondary px-2.5 py-1 text-[11px] font-semibold text-foreground">Google Play</span>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="size-36">
                  <MobileDev3D className="size-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {slug === "custom-software" && (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#EADCCC] pb-4">
            <span className="font-mono text-xs text-muted-foreground">Workflow-Specific Architecture</span>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-muted-foreground">Role Simulator:</span>
              <button
                type="button"
                onClick={() => setActiveRole("admin")}
                className={cn(
                  "rounded-md px-2.5 py-1 text-xs font-medium transition-colors",
                  activeRole === "admin" ? "bg-primary text-white" : "bg-white text-muted-foreground",
                )}
              >
                Admin
              </button>
              <button
                type="button"
                onClick={() => setActiveRole("operator")}
                className={cn(
                  "rounded-md px-2.5 py-1 text-xs font-medium transition-colors",
                  activeRole === "operator" ? "bg-primary text-white" : "bg-white text-muted-foreground",
                )}
              >
                Staff
              </button>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
            {/* Custom Admin Panel Mockup */}
            <div className="rounded-2xl border border-[#EDE0D4] bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between border-b border-border/40 pb-3">
                <div className="flex items-center gap-2">
                  <Shield className="size-4 text-primary" />
                  <span className="text-xs font-bold text-foreground">Custom Operations Engine</span>
                </div>
                <span className="font-mono text-[10px] text-muted-foreground">
                  Role: <strong className="text-primary uppercase">{activeRole}</strong>
                </span>
              </div>

              <div className="mt-4 space-y-3">
                <div className="rounded-xl border border-border/50 bg-[#F9F5F0] p-3">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span>Order & Approvals Pipeline</span>
                    <span className="text-emerald-600 font-mono">100% Automated</span>
                  </div>
                  <div className="mt-2 grid grid-cols-3 gap-2 text-center text-[10px]">
                    <div className="rounded-md bg-white p-2 shadow-xs">
                      <p className="text-muted-foreground">Received</p>
                      <p className="font-bold text-foreground">24</p>
                    </div>
                    <div className="rounded-md bg-white p-2 shadow-xs">
                      <p className="text-muted-foreground">In Review</p>
                      <p className="font-bold text-primary">8</p>
                    </div>
                    <div className="rounded-md bg-white p-2 shadow-xs">
                      <p className="text-muted-foreground">Dispatched</p>
                      <p className="font-bold text-emerald-600">62</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-secondary/60 p-3 text-xs">
                  <p className="font-semibold text-foreground">Legacy Spreadsheet Replacement</p>
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    Direct database relational queries eliminate 100% of copy-paste duplicate errors.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between space-y-4">
              <div className="rounded-2xl border border-primary/15 bg-white p-5">
                <p className="font-mono text-xs uppercase tracking-wider text-primary font-semibold">Full IP Ownership</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  You own the codebase, the databases, and the infrastructure. No monthly per-seat licensing traps or vendor lock-in.
                </p>
              </div>
              <div className="flex justify-end">
                <div className="size-36">
                  <CustomSoftware3D className="size-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {(slug === "saas-development" || slug === "saas-platforms") && (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#EADCCC] pb-4">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-emerald-500" />
              <span className="font-mono text-xs font-semibold text-foreground">Multi-Tenant Cloud Workspace</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-muted-foreground">Tier:</span>
              <button
                type="button"
                onClick={() => setSaasTier("growth")}
                className={cn(
                  "rounded-md px-2.5 py-1 text-xs font-medium transition-colors",
                  saasTier === "growth" ? "bg-primary text-white" : "bg-white text-muted-foreground",
                )}
              >
                Growth
              </button>
              <button
                type="button"
                onClick={() => setSaasTier("scale")}
                className={cn(
                  "rounded-md px-2.5 py-1 text-xs font-medium transition-colors",
                  saasTier === "scale" ? "bg-primary text-white" : "bg-white text-muted-foreground",
                )}
              >
                Enterprise
              </button>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
            {/* SaaS Metrics Dashboard */}
            <div className="rounded-2xl border border-[#EDE0D4] bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between border-b border-border/40 pb-3">
                <div className="flex items-center gap-2">
                  <Users className="size-4 text-primary" />
                  <span className="text-xs font-bold text-foreground">Active Subscribers</span>
                </div>
                <span className="font-mono text-xs font-bold text-emerald-600">
                  {saasTier === "growth" ? "1,240 Organizations" : "8,500+ Organizations"}
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-[#FAF5F0] p-3">
                  <p className="text-[10px] text-muted-foreground">Monthly Recurring Revenue</p>
                  <p className="font-mono text-base font-bold text-foreground">
                    {saasTier === "growth" ? "$24,500" : "$98,400"}
                  </p>
                  <span className="text-[10px] text-emerald-600 font-semibold">+18% this month</span>
                </div>
                <div className="rounded-xl bg-[#FAF5F0] p-3">
                  <p className="text-[10px] text-muted-foreground">Automated Churn</p>
                  <p className="font-mono text-base font-bold text-foreground">0.7%</p>
                  <span className="text-[10px] text-muted-foreground">Industry avg: 3.2%</span>
                </div>
              </div>

              <div className="mt-3 rounded-xl border border-primary/20 bg-primary/5 p-3 text-xs">
                <p className="font-semibold text-primary">Built-in Foundations</p>
                <p className="mt-1 text-[11px] text-foreground/75">
                  Stripe billing webhooks, SSO / Auth0 login, team invites, and tiered permission limits ready from Day 1.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between space-y-4">
              <div className="rounded-2xl border border-primary/15 bg-white p-5">
                <p className="font-mono text-xs uppercase tracking-wider text-primary font-semibold">Real Work: Amrut.ai</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  We engineered the Amrut.ai visibility platform from scratch — proving our architectural model under real user workloads.
                </p>
              </div>
              <div className="flex justify-end">
                <div className="size-36">
                  {slug === "saas-development" ? <Saas3D className="size-full" /> : <SaasPlatforms3D className="size-full" />}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {slug === "ui-ux-design" && (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#EADCCC] pb-4">
            <span className="font-mono text-xs text-muted-foreground">Design System & Wireframe Canvas</span>
            <div className="flex items-center gap-2">
              <span className="size-3 rounded-full bg-[#7A4426]" title="Primary Clay" />
              <span className="size-3 rounded-full bg-[#EDE4DB]" title="Warm Neutral" />
              <span className="size-3 rounded-full bg-[#2B1A10]" title="Deep Espresso" />
              <span className="font-mono text-xs text-muted-foreground ml-2">Figma Token Palette</span>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
            {/* Interactive Design System Preview */}
            <div className="rounded-2xl border border-[#EDE0D4] bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between border-b border-border/40 pb-3">
                <div className="flex items-center gap-2">
                  <Sliders className="size-4 text-primary" />
                  <span className="text-xs font-bold text-foreground">Interactive Component Tokens</span>
                </div>
                <span className="font-mono text-[10px] text-primary font-semibold">Build-Ready Handoff</span>
              </div>

              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between rounded-xl bg-secondary/50 p-3 text-xs">
                  <div>
                    <p className="font-semibold text-foreground">Interactive Buttons</p>
                    <p className="text-[10px] text-muted-foreground">Hover, active, focused, disabled</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-primary px-3 py-1 text-[11px] font-medium text-white shadow-xs">
                      Primary
                    </span>
                    <span className="rounded-full border border-primary/20 bg-white px-3 py-1 text-[11px] font-medium text-primary">
                      Ghost
                    </span>
                  </div>
                </div>

                <div className="rounded-xl border border-dashed border-[#DFCCBB] p-3 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-foreground">Zero Guesswork Handoff</span>
                    <span className="font-mono text-[10px] text-emerald-600 font-bold">1:1 Engineered</span>
                  </div>
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    Because our design and engineering sit in the same room, screen specifications translate directly into production code.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between space-y-4">
              <div className="rounded-2xl border border-primary/15 bg-white p-5">
                <p className="font-mono text-xs uppercase tracking-wider text-primary font-semibold">Clickable Prototypes</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Experience user flows and interactions on real devices before writing a single line of backend logic.
                </p>
              </div>
              <div className="flex justify-end">
                <div className="size-36">
                  <UIUX3D className="size-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {slug === "backend-api-development" && (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#EADCCC] pb-4">
            <span className="font-mono text-xs text-muted-foreground">REST & GraphQL Endpoints</span>
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-emerald-600 font-bold">
              <span className="size-2 rounded-full bg-emerald-500 animate-ping" /> HTTP 200 OK
            </span>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
            {/* Live API Console */}
            <div className="rounded-2xl border border-[#382216] bg-[#1E140F] p-4 text-white shadow-lg">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <Terminal className="size-4 text-primary-foreground" />
                  <span className="font-mono text-xs font-semibold text-white/90">API Playground</span>
                </div>
                <span className="font-mono text-[10px] text-emerald-400">Response: 14ms</span>
              </div>

              <div className="mt-3 flex items-center justify-between rounded-lg bg-black/40 px-3 py-2 font-mono text-xs text-white/80">
                <span>
                  <strong className="text-emerald-400">GET</strong> /api/v1/services/status
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setApiCopied(true);
                    setTimeout(() => setApiCopied(false), 1500);
                  }}
                  className="text-white/60 hover:text-white"
                >
                  {apiCopied ? <Check className="size-3.5 text-emerald-400" /> : <Copy className="size-3.5" />}
                </button>
              </div>

              <pre className="mt-3 rounded-lg bg-black/60 p-3 font-mono text-[11px] text-emerald-300 overflow-x-auto leading-relaxed">
{`{
  "status": "healthy",
  "database": "PostgreSQL connected",
  "auth_session": "active",
  "security": "TLS 1.3 / OAuth2",
  "latency_ms": 14
}`}
              </pre>
            </div>

            <div className="flex flex-col justify-between space-y-4">
              <div className="rounded-2xl border border-primary/15 bg-white p-5">
                <p className="font-mono text-xs uppercase tracking-wider text-primary font-semibold">Security & Documentation</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Every endpoint comes with OpenAPI/Swagger docs, role-based JWT authentication, rate limiting, and automated unit test suites.
                </p>
              </div>
              <div className="flex justify-end">
                <div className="size-36">
                  <Backend3D className="size-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {(slug === "business-automation" || slug === "automation-products") && (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#EADCCC] pb-4">
            <span className="font-mono text-xs text-muted-foreground">Workflow Automation Pipeline</span>
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-xs font-semibold text-foreground">Pipeline: RUNNING</span>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
            {/* Visual Node Workflow */}
            <div className="rounded-2xl border border-[#EDE0D4] bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between border-b border-border/40 pb-3">
                <span className="text-xs font-bold text-foreground">Automated Event Trigger</span>
                <span className="font-mono text-[10px] text-primary font-semibold">Saved ~52 hrs/mo</span>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-3 rounded-xl border border-border/70 bg-[#FBF8F5] p-3 text-xs">
                  <span className="grid size-7 place-items-center rounded-lg bg-primary text-white font-bold text-[10px]">
                    01
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">Trigger: New Enquiry or Data Event</p>
                    <p className="text-[10px] text-muted-foreground">Webhook fires automatically on submission</p>
                  </div>
                </div>

                <div className="flex justify-center text-primary">
                  <ArrowRight className="size-4 rotate-90" />
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-border/70 bg-[#FBF8F5] p-3 text-xs">
                  <span className="grid size-7 place-items-center rounded-lg bg-[#DEBAA2] text-[#382216] font-bold text-[10px]">
                    02
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">Sync & Normalize</p>
                    <p className="text-[10px] text-muted-foreground">PostgreSQL update & PDF report generation</p>
                  </div>
                </div>

                <div className="flex justify-center text-primary">
                  <ArrowRight className="size-4 rotate-90" />
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-emerald-300 bg-emerald-50/60 p-3 text-xs">
                  <span className="grid size-7 place-items-center rounded-lg bg-emerald-600 text-white font-bold text-[10px]">
                    03
                  </span>
                  <div>
                    <p className="font-semibold text-emerald-900">Notify Team & Dispatch Response</p>
                    <p className="text-[10px] text-emerald-700">Instant notification via email / WhatsApp API</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between space-y-4">
              <div className="rounded-2xl border border-primary/15 bg-white p-5">
                <p className="font-mono text-xs uppercase tracking-wider text-primary font-semibold">Reliable Background Queues</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  With retry mechanisms, fallback alert channels, and execution audit logs, tasks never disappear or fail silently.
                </p>
              </div>
              <div className="flex justify-end">
                <div className="size-36">
                  {slug === "business-automation" ? <Automation3D className="size-full" /> : <AutomationProducts3D className="size-full" />}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {slug === "maintenance-support" && (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#EADCCC] pb-4">
            <span className="font-mono text-xs text-muted-foreground">24/7 Stability & Health Monitoring</span>
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-emerald-600 font-bold">
              <span className="size-2 rounded-full bg-emerald-500" /> 99.98% Service Uptime
            </span>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
            {/* System Health Dashboard */}
            <div className="rounded-2xl border border-[#EDE0D4] bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between border-b border-border/40 pb-3">
                <div className="flex items-center gap-2">
                  <Activity className="size-4 text-emerald-600" />
                  <span className="text-xs font-bold text-foreground">Infrastructure Telemetry</span>
                </div>
                <span className="font-mono text-[10px] text-muted-foreground">Checked 1m ago</span>
              </div>

              <div className="mt-4 space-y-3">
                <div className="rounded-xl bg-[#FAF5F0] p-3 text-xs">
                  <div className="flex items-center justify-between font-semibold">
                    <span>Automated Daily Backups</span>
                    <span className="text-emerald-600 font-mono">Encrypted & Verified</span>
                  </div>
                  <p className="mt-1 text-[10px] text-muted-foreground">Point-in-time recovery enabled across all databases.</p>
                </div>

                <div className="rounded-xl bg-[#FAF5F0] p-3 text-xs">
                  <div className="flex items-center justify-between font-semibold">
                    <span>Security & Dependency Patches</span>
                    <span className="text-primary font-mono">Up to date</span>
                  </div>
                  <p className="mt-1 text-[10px] text-muted-foreground">Zero known CVE vulnerabilities detected.</p>
                </div>

                <div className="rounded-xl border border-primary/20 bg-primary/5 p-3 text-xs">
                  <p className="font-semibold text-primary">Clear SLA & Priority Escalation</p>
                  <p className="mt-1 text-[11px] text-foreground/75">
                    Direct developer channel with designated response windows.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between space-y-4">
              <div className="rounded-2xl border border-primary/15 bg-white p-5">
                <p className="font-mono text-xs uppercase tracking-wider text-primary font-semibold">Continuous Evolution</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Maintenance is more than fixing bugs. We regularly upgrade runtimes, optimize slow queries, and roll out feature enhancements.
                </p>
              </div>
              <div className="flex justify-end">
                <div className="size-36">
                  <Maintenance3D className="size-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {slug === "business-tools" && (
        <div className="space-y-6">
          <figure className="overflow-hidden rounded-2xl border border-[#EDE0D4]">
            <img
              src={getPageVisual("business-tools").story.src}
              alt={getPageVisual("business-tools").story.alt}
              width={getPageVisual("business-tools").story.width}
              height={getPageVisual("business-tools").story.height}
              className="h-52 w-full object-cover sm:h-64"
              loading="lazy"
            />
          </figure>
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#EADCCC] pb-4">
            <span className="font-mono text-xs text-muted-foreground">Custom Business Tool Interface</span>
            <span className="rounded-md bg-primary/10 px-2 py-0.5 font-mono text-[11px] font-semibold text-primary">
              High Adoption
            </span>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
            {/* Interactive Tool Demo */}
            <div className="rounded-2xl border border-[#EDE0D4] bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between border-b border-border/40 pb-3">
                <span className="text-xs font-bold text-foreground">Live Quote & Booking Estimator</span>
                <span className="font-mono text-[10px] text-muted-foreground">Real-time calculate</span>
              </div>

              <div className="mt-4 space-y-4 text-xs">
                <div>
                  <div className="flex justify-between text-muted-foreground mb-1">
                    <span>Team Members:</span>
                    <strong className="text-foreground">{quoteUsers} users</strong>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="50"
                    value={quoteUsers}
                    onChange={(e) => setQuoteUsers(Number(e.target.value))}
                    className="w-full accent-[#7A4426]"
                  />
                </div>

                <div className="rounded-xl bg-[#FAF5F0] p-4 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase font-bold">Estimated Time Saved</p>
                    <p className="font-mono text-lg font-bold text-primary">{quoteUsers * 4} Hours / month</p>
                  </div>
                  <ActionButton label="Generate PDF" size="sm" icon={null} />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between space-y-4">
              <div className="rounded-2xl border border-primary/15 bg-white p-5">
                <p className="font-mono text-xs uppercase tracking-wider text-primary font-semibold">Zero Clutter UX</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Designed so staff and clients can complete quotes, bookings, or stock inventory in under 60 seconds.
                </p>
              </div>
              <div className="flex justify-end">
                <div className="size-36">
                  <BusinessTools3D className="size-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {slug === "internal-applications" && (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#EADCCC] pb-4">
            <span className="font-mono text-xs text-muted-foreground">Operations Control Center</span>
            <span className="font-mono text-xs text-emerald-600 font-bold">Role-Based Access: SECURE</span>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
            {/* Operations View */}
            <div className="rounded-2xl border border-[#EDE0D4] bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between border-b border-border/40 pb-3">
                <span className="text-xs font-bold text-foreground">Approval Queues & Audit Trail</span>
                <span className="font-mono text-[10px] text-primary">Pending: 3</span>
              </div>

              <div className="mt-4 space-y-2 text-xs">
                <div className="flex items-center justify-between rounded-xl bg-secondary/50 p-3">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-emerald-500" />
                    <span>Purchase Requisition #482</span>
                  </div>
                  <span className="font-mono font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md text-[10px]">Approved</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-secondary/50 p-3">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-amber-500" />
                    <span>Employee Onboarding Record</span>
                  </div>
                  <span className="font-mono font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-md text-[10px]">Pending Signoff</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between space-y-4">
              <div className="rounded-2xl border border-primary/15 bg-white p-5">
                <p className="font-mono text-xs uppercase tracking-wider text-primary font-semibold">Private & Scalable</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Custom permissions keep financial and internal data strictly compartmentalized across your leadership and staff.
                </p>
              </div>
              <div className="flex justify-end">
                <div className="size-36">
                  <InternalApps3D className="size-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {slug === "customer-facing-platforms" && (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#EADCCC] pb-4">
            <span className="font-mono text-xs text-muted-foreground">Customer Self-Service Hub</span>
            <span className="font-mono text-xs text-primary font-semibold">Frictionless Touchpoint</span>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
            {/* Customer Portal Preview */}
            <div className="rounded-2xl border border-[#EDE0D4] bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between border-b border-border/40 pb-3">
                <span className="text-xs font-bold text-foreground">Customer Account Overview</span>
                <span className="font-mono text-[10px] text-emerald-600 font-bold">Verified User</span>
              </div>

              <div className="mt-4 space-y-3 text-xs">
                <div className="rounded-xl bg-[#FAF5F0] p-3">
                  <p className="text-[10px] text-muted-foreground">Recent Order Status</p>
                  <div className="mt-1 flex items-center justify-between font-semibold">
                    <span>Order #ZY-9182</span>
                    <span className="text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded text-[10px]">Processing</span>
                  </div>
                </div>

                <div className="rounded-xl border border-dashed border-primary/30 p-3 text-center">
                  <p className="font-medium text-foreground">Instant Invoices & Document Downloads</p>
                  <p className="mt-0.5 text-[10px] text-muted-foreground">Zero customer support emails needed for routine data retrieval</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between space-y-4">
              <div className="rounded-2xl border border-primary/15 bg-white p-5">
                <p className="font-mono text-xs uppercase tracking-wider text-primary font-semibold">Trust & Conversion</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Fast page loads and simple booking/order flows turn one-time visitors into repeat long-term customers.
                </p>
              </div>
              <div className="flex justify-end">
                <div className="size-36">
                  <CustomerFacing3D className="size-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {slug === "custom-digital-products" && (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#EADCCC] pb-4">
            <span className="font-mono text-xs text-muted-foreground">Bespoke Product Engineering Blueprint</span>
            <span className="font-mono text-xs text-primary font-semibold">Concept to Code</span>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
            {/* Custom Blueprint Preview */}
            <div className="rounded-2xl border border-[#EDE0D4] bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between border-b border-border/40 pb-3">
                <span className="text-xs font-bold text-foreground">Product Roadmap Milestones</span>
                <span className="font-mono text-[10px] text-emerald-600 font-bold">Sprint Cycles</span>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
                <div className="rounded-xl border border-primary/20 bg-primary/5 p-3">
                  <p className="font-mono text-[10px] text-primary font-bold">Phase 1</p>
                  <p className="mt-1 font-semibold text-foreground">Proof of Concept</p>
                </div>
                <div className="rounded-xl border border-[#E4D1BF] bg-[#FDFBF8] p-3">
                  <p className="font-mono text-[10px] text-muted-foreground font-bold">Phase 2</p>
                  <p className="mt-1 font-semibold text-foreground">Production MVP</p>
                </div>
                <div className="rounded-xl border border-[#E4D1BF] bg-[#FDFBF8] p-3">
                  <p className="font-mono text-[10px] text-muted-foreground font-bold">Phase 3</p>
                  <p className="mt-1 font-semibold text-foreground">Scale & Evolve</p>
                </div>
              </div>

              <div className="mt-3 rounded-xl bg-secondary/50 p-3 text-xs text-muted-foreground">
                We take unconventional ideas, shape the technical architecture, and deliver working software ready for real market feedback.
              </div>
            </div>

            <div className="flex flex-col justify-between space-y-4">
              <div className="rounded-2xl border border-primary/15 bg-white p-5">
                <p className="font-mono text-xs uppercase tracking-wider text-primary font-semibold">Agile & Pragmatic</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Build only what is necessary to validate the model, then scale on real demand.
                </p>
              </div>
              <div className="flex justify-end">
                <div className="size-36">
                  <CustomDigital3D className="size-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
