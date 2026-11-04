// TODO: replace with client content
export const contact = {
  email: "info@zynovate.in",
  phone: "+91 88009 04734",
  location: "Noida Sector 2 B-10, Uttar Pradesh, 201301",
  mapUrl:
    "https://www.google.com/maps/place/28%C2%B035'07.2%22N+77%C2%B018'48.1%22E/@28.5853354,77.3107819,17z/data=!3m1!4b1!4m4!3m3!8m2!3d28.5853354!4d77.3133568?hl=en&entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D",
  isPlaceholder: false,
  projectTypes: [
    "Custom website",
    "Web application",
    "Mobile app",
    "SaaS product",
    "Custom software",
    "Existing app maintenance",
    "Not sure yet",
  ],
  budgetRanges: [
    "Not sure yet",
    "Under 5,000 USD",
    "5,000–15,000 USD",
    "15,000–40,000 USD",
    "Over 40,000 USD",
  ],
};

export const countryCodes = [
  { label: "India", code: "+91" },
  { label: "United States", code: "+1" },
  { label: "United Kingdom", code: "+44" },
  { label: "United Arab Emirates", code: "+971" },
  { label: "Australia", code: "+61" },
  { label: "Singapore", code: "+65" },
] as const;

export const contactIntro = {
  eyebrow: "10 / Contact",
  title: "Start a project.",
  description: "Tell us what you want to build, improve, or automate.",
  response: "We'll get back to you within 24 hours.",
};

export const contactPlaceholderNotice =
  "Email, phone, and location below are placeholders until the live details are added.";

export const contactChannels = {
  email: "Email",
  phone: "Phone",
  location: "Location",
  follow: "Follow us",
};

export const contactSteps = [
  {
    title: "Discuss",
    description: "Share your ideas and requirements.",
    icon: "MessageCircle",
  },
  {
    title: "Plan",
    description: "Get expert recommendations.",
    icon: "Network",
  },
  {
    title: "Build",
    description: "Turn your idea into reality.",
    icon: "Rocket",
  },
] as const;

export const contactFormCopy = {
  title: "Send us a message",
  intro:
    "Share a few details about your project. Your budget range is a starting point, not a quote.",
  name: { label: "Name", placeholder: "Your name" },
  email: { label: "Email", placeholder: "you@example.com" },
  phone: { label: "Mobile number", placeholder: "+91 88009 04734" },
  projectType: { label: "Project type", placeholder: "Select project type" },
  budget: { label: "Budget range", placeholder: "Select budget range" },
  message: {
    label: "Message",
    placeholder: "Tell us about your project, goals, timeline, or any specific requirements...",
    max: 1000,
  },
  consent: "I agree to be contacted about my project and receive relevant updates.",
  submit: "Start a Project",
  formLabel: "Project inquiry",
};

export const contactCall = {
  title: "Prefer a call?",
  intro: "Pick a suitable date and time for a quick call. (Optional)",
  weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  previousMonth: "Previous month",
  nextMonth: "Next month",
  timeLabel: "Select time (IST)",
  slots: [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
  ],
  noteTitle: "Can't find a suitable time?",
  noteBody: "No problem, just send the form and we'll coordinate directly over email.",
};

export const contactErrors = {
  name: "Enter your name.",
  email: "Enter a valid email.",
  projectType: "Choose a project type.",
  budget: "Choose a budget range.",
  message: "Tell us a little about the project.",
  messageLength: "Keep the message under 1000 characters.",
  consent: "Agree to be contacted so we can reply about your project.",
};

export const contactSuccess = {
  eyebrow: "Draft ready",
  title: "Your Gmail draft is ready.",
  body: "Gmail opened with your message prepared. Review it, then click Send to reach us.",
  again: "Write another",
};
