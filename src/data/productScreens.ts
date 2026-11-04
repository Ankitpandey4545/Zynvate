export type ScreenTone = "good" | "brand" | "muted";

export type ProductScreen = {
  app: string;
  nav: string[];
  title: string;
  badge: string;
  kpis: { label: string; value: string }[];
  chartLabel: string;
  bars: number[];
  rows: { label: string; meta: string; status: string; tone: ScreenTone }[];
  phone: {
    title: string;
    heroLabel: string;
    heroValue: string;
    heroNote: string;
    action: string;
    tabs: string[];
  };
};

/** Illustrative app screens drawn inside the product mockups. Figures are sample data, not client metrics. */
export const productScreens: Record<string, ProductScreen> = {
  "saas-platforms": {
    app: "Workspace",
    nav: ["Overview", "Customers", "Plans", "Billing"],
    title: "Subscription overview",
    badge: "Live",
    kpis: [
      { label: "Monthly revenue", value: "₹4.8L" },
      { label: "Active users", value: "2,418" },
      { label: "Churn", value: "1.9%" },
    ],
    chartLabel: "Sign-ups per week",
    bars: [38, 46, 42, 58, 64, 61, 72, 80, 76, 88],
    rows: [
      { label: "Growth plan", meta: "1,204 seats", status: "Popular", tone: "brand" },
      { label: "Scale plan", meta: "642 seats", status: "Upgrading", tone: "good" },
      { label: "Starter plan", meta: "572 seats", status: "Trial", tone: "muted" },
    ],
    phone: {
      title: "My workspace",
      heroLabel: "Current plan",
      heroValue: "Growth",
      heroNote: "18 of 25 seats in use",
      action: "Invite teammate",
      tabs: ["Home", "Team", "Billing"],
    },
  },
  "business-tools": {
    app: "QuoteDesk",
    nav: ["Quotes", "Invoices", "Bookings", "Stock"],
    title: "Today at a glance",
    badge: "Synced",
    kpis: [
      { label: "Quotes sent", value: "128" },
      { label: "Invoiced", value: "₹6.2L" },
      { label: "Bookings", value: "46" },
    ],
    chartLabel: "Quotes accepted",
    bars: [30, 44, 36, 52, 48, 60, 57, 66, 70, 74],
    rows: [
      { label: "Quote #1042", meta: "Sharma Interiors", status: "Sent", tone: "brand" },
      { label: "Invoice #887", meta: "Kapoor Traders", status: "Paid", tone: "good" },
      { label: "Booking · Thu 11:00", meta: "Site visit", status: "Booked", tone: "muted" },
    ],
    phone: {
      title: "New quote",
      heroLabel: "Quote total",
      heroValue: "₹42,500",
      heroNote: "3 items · GST included",
      action: "Send quote",
      tabs: ["Quotes", "Clients", "More"],
    },
  },
  "internal-applications": {
    app: "OpsHub",
    nav: ["Dashboard", "Requests", "People", "Reports"],
    title: "Operations dashboard",
    badge: "Admin",
    kpis: [
      { label: "Open requests", value: "23" },
      { label: "Approved", value: "112" },
      { label: "On leave", value: "4" },
    ],
    chartLabel: "Requests closed",
    bars: [52, 48, 60, 55, 68, 62, 70, 66, 74, 78],
    rows: [
      { label: "Purchase request #482", meta: "Finance", status: "Approved", tone: "good" },
      { label: "Leave · R. Verma", meta: "HR", status: "Pending", tone: "brand" },
      { label: "Laptop request", meta: "IT", status: "Queued", tone: "muted" },
    ],
    phone: {
      title: "Approvals",
      heroLabel: "Waiting on you",
      heroValue: "3 requests",
      heroNote: "Oldest submitted 2h ago",
      action: "Review now",
      tabs: ["Inbox", "Team", "Profile"],
    },
  },
  "automation-products": {
    app: "FlowRun",
    nav: ["Workflows", "Runs", "Alerts", "Connections"],
    title: "Automation runs",
    badge: "Running",
    kpis: [
      { label: "Runs today", value: "1,284" },
      { label: "Success rate", value: "99.2%" },
      { label: "Hours saved", value: "36" },
    ],
    chartLabel: "Runs per hour",
    bars: [60, 72, 68, 80, 76, 84, 90, 86, 92, 88],
    rows: [
      { label: "Daily sales report", meta: "Every day · 08:00", status: "Done", tone: "good" },
      { label: "Lead sync to CRM", meta: "Every 15 min", status: "Running", tone: "brand" },
      { label: "Invoice reminders", meta: "Mondays", status: "Scheduled", tone: "muted" },
    ],
    phone: {
      title: "Workflow status",
      heroLabel: "Lead sync to CRM",
      heroValue: "Running",
      heroNote: "214 records synced today",
      action: "View activity log",
      tabs: ["Flows", "Alerts", "Logs"],
    },
  },
  "customer-facing-platforms": {
    app: "Storefront",
    nav: ["Orders", "Customers", "Catalogue", "Support"],
    title: "Store overview",
    badge: "Online",
    kpis: [
      { label: "Orders", value: "312" },
      { label: "Customers", value: "1,940" },
      { label: "Rating", value: "4.8" },
    ],
    chartLabel: "Orders this week",
    bars: [40, 52, 48, 64, 58, 72, 84, 78, 70, 90],
    rows: [
      { label: "Order #ZY-9182", meta: "2 items · ₹3,240", status: "Shipped", tone: "good" },
      { label: "Order #ZY-9181", meta: "1 item · ₹1,150", status: "Packing", tone: "brand" },
      { label: "Return #R-204", meta: "Size exchange", status: "Requested", tone: "muted" },
    ],
    phone: {
      title: "My orders",
      heroLabel: "Order #ZY-9182",
      heroValue: "Arriving Friday",
      heroNote: "Out for delivery from Noida hub",
      action: "Track order",
      tabs: ["Shop", "Orders", "Account"],
    },
  },
  "custom-digital-products": {
    app: "Roadmap",
    nav: ["Overview", "Features", "Sprints", "Feedback"],
    title: "Product roadmap",
    badge: "Sprint 6",
    kpis: [
      { label: "Phase", value: "MVP" },
      { label: "Features shipped", value: "18" },
      { label: "Beta users", value: "240" },
    ],
    chartLabel: "Features delivered",
    bars: [10, 18, 26, 32, 40, 48, 56, 64, 70, 78],
    rows: [
      { label: "Proof of concept", meta: "Phase 1", status: "Done", tone: "good" },
      { label: "Production MVP", meta: "Phase 2", status: "In progress", tone: "brand" },
      { label: "Scale & evolve", meta: "Phase 3", status: "Planned", tone: "muted" },
    ],
    phone: {
      title: "Beta app",
      heroLabel: "Your feedback",
      heroValue: "12 ideas",
      heroNote: "4 already in this sprint",
      action: "Share an idea",
      tabs: ["Home", "Ideas", "Profile"],
    },
  },
};

export const getProductScreen = (slug: string): ProductScreen =>
  productScreens[slug] ?? productScreens["saas-platforms"]!;
