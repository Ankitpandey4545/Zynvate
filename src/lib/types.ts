export type ImageAsset = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  credit?: string;
  isPlaceholder?: boolean;
};

export type NavLink = { label: string; href: string };

export type Placeholderable = { isPlaceholder?: boolean };

export type Service = Placeholderable & { title: string; description: string; icon: string; slug?: string };
export type Product = Placeholderable & { title: string; description: string; slug?: string };
export type Project = Placeholderable & {
  id: string;
  title: string;
  category: string;
  slug?: string;
  tagline?: string;
  summary?: string;
  does?: string[];
  features?: { title: string; items: string[]; screenshot: ImageAsset }[];
  role?: string[];
  capabilities?: string[];
  url?: string;
  client?: string;
  year?: string;
  industry?: string;
  scope?: string;
  stats?: Array<{ value: string; label: string }>;
  engines?: string[];
  seo?: { title: string; description: string };
  screenshots?: { cover: ImageAsset; dashboard: ImageAsset; mobile: ImageAsset; about: ImageAsset; tools: ImageAsset };
};
export type Technology = { name: string; group: string; brand: string; logo: string };
export type WhyUsItem = { title: string; description: string; signal: string };
export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  command: string;
  output: string;
};
export type Industry = Placeholderable & { title: string; focus?: string; image?: ImageAsset };
export type Testimonial = Placeholderable & { quote: string; role: string };
export type Faq = { question: string; answer: string };
export type Stat = { value: string; label: string };
export type TeamMember = { name: string; role: string; image?: ImageAsset; email?: string };
export type SocialLink = Placeholderable & { label: string; href: string };
