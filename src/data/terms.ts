import { contact } from "@/data/contact";

export type TermsSection = {
  number: string;
  title: string;
  paragraphs?: string[];
  items?: string[];
  intro?: string;
  footer?: string;
  contact?: Array<{ label: string; value: string; href?: string }>;
};

export const termsAndConditions: {
  eyebrow: string;
  title: string;
  intro: string;
  agreement: string;
  sections: TermsSection[];
} = {
  eyebrow: "Legal · Terms",
  title: "Terms and Conditions",
  intro:
    "Welcome to Zynovate Private Limited. These Terms and Conditions govern your access to and use of our website, https://zynovate.in, and the products and services offered by Zynovate Private Limited. By accessing our website or engaging with our services, you agree to comply with these Terms and Conditions.",
  agreement:
    "By using our website or services, you acknowledge that you have read and understood these Terms and Conditions.",
  sections: [
    {
      number: "01",
      title: "About Zynovate Private Limited",
      paragraphs: [
        "Zynovate Private Limited is a technology-oriented company providing IT solutions, digital services, software products, AI Visibility solutions, and related business services. We may also work with authorized vendors, technology partners, and service providers to deliver products and services to customers.",
      ],
    },
    {
      number: "02",
      title: "Use of Website",
      paragraphs: [
        "Users agree to use this website only for lawful purposes. You must not misuse the website, attempt unauthorized access, introduce malicious software, or engage in any activity that may affect the website's security, functionality, or availability.",
      ],
    },
    {
      number: "03",
      title: "Products and Services",
      paragraphs: [
        "Zynovate Private Limited may offer technology products, software solutions, AI Visibility services, digital solutions, consulting, and other business services. The availability, scope, features, pricing, and delivery timelines of these services may vary depending on the product, service agreement, or customer requirements.",
        "Specific product or service commitments will be governed by the applicable proposal, quotation, order form, or written agreement.",
      ],
    },
    {
      number: "04",
      title: "Pricing and Payments",
      paragraphs: [
        "All prices, payment schedules, applicable taxes, and payment terms will be communicated to customers through the relevant quotation, invoice, proposal, or service agreement.",
        "Customers agree to make payments according to the mutually agreed payment terms. Any advance payments, recurring fees, instalments, or other charges will be specified in the relevant agreement.",
        "Where applicable, delays in payment may result in the suspension or delay of services, subject to the applicable agreement and law.",
      ],
    },
    {
      number: "05",
      title: "Customer Responsibilities",
      paragraphs: [
        "Customers must provide accurate information, necessary documents, approvals, access credentials, and other materials reasonably required for service delivery.",
        "Customers are responsible for ensuring that any information or materials they provide can lawfully be used for the intended purpose. Delays caused by incomplete information, missing approvals, or failure to cooperate may affect delivery timelines.",
      ],
    },
    {
      number: "06",
      title: "Vendor and Third-Party Services",
      paragraphs: [
        "Zynovate Private Limited may collaborate with third-party vendors, technology providers, and business partners to provide certain products or services.",
        "Third-party products and services may be subject to separate terms, licensing conditions, warranties, pricing policies, and service-level commitments. Zynovate will communicate relevant conditions where applicable.",
        "Unless expressly agreed in writing, Zynovate does not control the independent operations, policies, or availability of third-party platforms.",
      ],
    },
    {
      number: "07",
      title: "Intellectual Property Rights",
      paragraphs: [
        "All website content, including text, graphics, logos, designs, and other materials owned by Zynovate Private Limited, is protected by applicable intellectual property laws.",
        "Users may not reproduce, distribute, modify, publish, or commercially exploit our proprietary materials without prior written permission, except as permitted by law.",
        "Ownership and usage rights relating to customer deliverables, software, and licensed third-party products will be determined by the applicable written agreement.",
      ],
    },
    {
      number: "08",
      title: "Confidentiality and Data Protection",
      paragraphs: [
        "Zynovate Private Limited will handle personal information in accordance with its Privacy Policy and applicable laws.",
        "Customers and business partners must protect confidential information shared during business discussions or service delivery and must not disclose it to unauthorized parties, except where disclosure is legally required or otherwise authorized.",
        "Any additional confidentiality obligations will be governed by the relevant agreement.",
      ],
    },
    {
      number: "09",
      title: "Service Availability and Modifications",
      paragraphs: [
        "We aim to provide reliable services but do not guarantee uninterrupted or error-free website access at all times. Services may be updated, modified, suspended, or discontinued when reasonably necessary, subject to applicable contractual obligations and law.",
        "Where a change materially affects an existing customer agreement, the applicable agreement will govern.",
      ],
    },
    {
      number: "10",
      title: "Limitation of Liability",
      paragraphs: [
        "To the extent permitted by applicable law, Zynovate Private Limited will not be liable for indirect, incidental, special, or consequential losses arising from the use of the website or services.",
        "Nothing in these Terms excludes or limits liability that cannot legally be excluded or limited. Any additional liability limitations will be subject to the applicable written agreement and applicable law.",
      ],
    },
    {
      number: "11",
      title: "Indemnification",
      paragraphs: [
        "To the extent permitted by law, users may be responsible for losses, claims, or expenses arising from their unlawful use of the website, infringement of third-party rights, or material breach of these Terms.",
        "This clause does not apply to the extent such losses result from our own acts or omissions for which we cannot lawfully exclude responsibility.",
      ],
    },
    {
      number: "12",
      title: "Suspension and Termination",
      paragraphs: [
        "We may restrict or suspend access to the website or services in cases of misuse, security risks, unlawful activity, or material breach of applicable terms, subject to applicable law and any contractual notice requirements.",
        "Termination of paid services, outstanding payments, refunds, and other obligations will be governed by the applicable service agreement and law.",
      ],
    },
    {
      number: "13",
      title: "External Links",
      paragraphs: [
        "Our website may contain links to third-party websites or platforms for convenience. We are not responsible for the content, security, availability, or privacy practices of external websites that we do not control.",
        "Users should review the relevant third-party terms and privacy policies before using those services.",
      ],
    },
    {
      number: "14",
      title: "Changes to These Terms",
      paragraphs: [
        "Zynovate Private Limited may update these Terms and Conditions from time to time. Updated terms will be published on this page with a revised effective date, where applicable.",
        "Your continued use of the website after changes take effect will be subject to the updated terms, to the extent permitted by law.",
      ],
    },
    {
      number: "15",
      title: "Governing Law and Jurisdiction",
      paragraphs: [
        "These Terms and Conditions will be governed by the laws of India. Disputes will be subject to the jurisdiction of the competent courts in Noida, Uttar Pradesh, subject to applicable law.",
      ],
    },
    {
      number: "16",
      title: "Contact Information",
      intro:
        "For questions, concerns, or requests relating to these Terms and Conditions, please contact us:",
      contact: [
        { label: "Company Name", value: "Zynovate Private Limited" },
        { label: "Website", value: "zynovate.in", href: "https://zynovate.in" },
        { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
        {
          label: "Registered Office",
          value: contact.location,
          href: contact.mapUrl,
        },
      ],
    },
  ],
};
