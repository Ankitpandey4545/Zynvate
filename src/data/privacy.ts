export type PrivacyPolicySection = {
  number: string;
  title: string;
  paragraphs?: string[];
  subsections?: Array<{
    title: string;
    paragraphs?: string[];
    items?: string[];
    footer?: string;
  }>;
  items?: string[];
  intro?: string;
  footer?: string;
  contact?: Array<{ label: string; value: string; href?: string }>;
};

export const privacyPolicy: {
  eyebrow: string;
  title: string;
  intro: string;
  context: string;
  agreement: string;
  sections: PrivacyPolicySection[];
} = {
  eyebrow: "Legal · Privacy",
  title: "Privacy Policy",
  intro:
    "At Zynovate, we value your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how Zynovate collects, uses, stores, and protects information when you visit our website, use our services, or interact with us.",
  context:
    "Zynovate provides technology, artificial intelligence, automation, digital marketing, and related business solutions. This Privacy Policy applies to information collected directly from individuals as well as information provided by businesses, organizations, or their authorized representatives.",
  agreement:
    "By accessing or using our website and services, you acknowledge that you have read and understood this Privacy Policy and agree to the collection and use of information as described below.",
  sections: [
    {
      number: "01",
      title: "Information We Collect",
      intro:
        "Depending on how you interact with Zynovate, we may collect certain information, including:",
      subsections: [
        {
          title: "Personal Information",
          paragraphs: [
            "When you contact us, request information, submit an inquiry, or use our services, we may collect information such as:",
          ],
          items: [
            "Full name",
            "Email address",
            "Phone number",
            "Company or organization name",
            "Job title or designation",
            "Business address",
            "Information provided through contact or inquiry forms",
            "Any other information you voluntarily provide to us",
          ],
        },
        {
          title: "Technical and Usage Information",
          paragraphs: [
            "When you access our website, certain information may be collected automatically, including:",
          ],
          items: [
            "IP address",
            "Browser type and version",
            "Device type",
            "Operating system",
            "Pages visited",
            "Time and date of visits",
            "Referring website or source",
            "Website interactions and usage patterns",
            "Other technical or diagnostic information",
          ],
          footer:
            "This information helps us understand how visitors use our website and improve its functionality and performance.",
        },
      ],
    },
    {
      number: "02",
      title: "Cookies and Tracking Technologies",
      paragraphs: [
        "Zynovate may use cookies and similar technologies to improve website functionality, understand visitor behavior, analyze website traffic, and provide a better user experience.",
        "Cookies are small data files stored on your device when you visit a website. You may configure your browser to block or delete cookies. However, disabling certain cookies may affect the functionality or availability of some features of our website.",
        "We may also use analytics and advertising technologies provided by third-party platforms where applicable.",
      ],
    },
    {
      number: "03",
      title: "How We Use Your Information",
      intro: "The information collected by Zynovate may be used for purposes including:",
      items: [
        "Providing and delivering our services",
        "Responding to inquiries and requests",
        "Communicating with you regarding our services",
        "Understanding customer requirements",
        "Improving our website, products, and services",
        "Developing and improving AI, automation, and technology solutions",
        "Analyzing website usage and performance",
        "Providing customer support",
        "Sending relevant business communications, where permitted",
        "Detecting, preventing, and addressing technical or security issues",
        "Maintaining the security and integrity of our systems",
        "Complying with applicable legal and regulatory requirements",
      ],
      footer:
        "We will use personal information only for legitimate business purposes and in accordance with applicable laws.",
    },
    {
      number: "04",
      title: "Sharing of Information",
      paragraphs: [
        "Zynovate does not sell or rent your personal information to third parties.",
        "We may share information with trusted service providers, technology partners, hosting providers, analytics providers, or other third parties when reasonably necessary to operate our business, provide our services, maintain our website, or fulfill legitimate business requirements.",
        "We may also disclose information when required by applicable law, legal proceedings, governmental authorities, or when necessary to protect the rights, safety, property, or security of Zynovate, our users, or others.",
      ],
    },
    {
      number: "05",
      title: "Data Security",
      paragraphs: [
        "Zynovate takes reasonable technical and organizational measures to protect personal information against unauthorized access, alteration, disclosure, loss, misuse, or destruction.",
        "We regularly review our security practices and internal procedures to help maintain the confidentiality and integrity of the information entrusted to us.",
        "However, no method of transmitting or storing information electronically can be guaranteed to be completely secure. Therefore, while we take reasonable steps to protect your information, we cannot guarantee absolute security.",
      ],
    },
    {
      number: "06",
      title: "Data Retention",
      paragraphs: [
        "We retain personal information only for as long as reasonably necessary to fulfill the purposes for which it was collected, provide our services, maintain business records, resolve disputes, comply with legal obligations, and enforce our agreements.",
        "When personal information is no longer required, we may securely delete, anonymize, or otherwise dispose of it in accordance with applicable requirements.",
      ],
    },
    {
      number: "07",
      title: "Your Privacy Rights",
      intro:
        "Depending on applicable law, you may have certain rights regarding your personal information, including the right to:",
      items: [
        "Request access to personal information we hold about you",
        "Request correction of inaccurate or incomplete information",
        "Request deletion of your personal information where legally permitted",
        "Withdraw consent where processing is based on consent",
        "Object to or request restriction of certain processing activities",
        "Raise concerns regarding our handling of your personal information",
      ],
      footer:
        "To exercise any applicable rights, you may contact us using the details provided below.",
    },
    {
      number: "08",
      title: "Third-Party Websites and Services",
      paragraphs: [
        "Our website or communications may contain links to third-party websites, platforms, or services.",
        "Zynovate is not responsible for the privacy practices, security, or content of third-party websites. We encourage you to review the privacy policies of those websites before providing them with your personal information.",
      ],
    },
    {
      number: "09",
      title: "Children's Privacy",
      paragraphs: [
        "Our website and services are not intended to knowingly collect personal information from children without appropriate consent.",
        "If we become aware that personal information has been collected from a child in circumstances where such collection is not permitted, we will take reasonable steps to delete the information.",
      ],
    },
    {
      number: "10",
      title: "Changes to This Privacy Policy",
      paragraphs: [
        "Zynovate may update this Privacy Policy from time to time to reflect changes in our services, business practices, technology, or applicable legal requirements.",
        "When changes are made, the updated version will be published on this page along with the revised effective date. We encourage you to review this Privacy Policy periodically.",
      ],
    },
    {
      number: "11",
      title: "Contact Us",
      intro:
        "If you have questions about this Privacy Policy, want to understand how your personal information is handled, or wish to exercise an applicable privacy right, please contact Zynovate using the information below:",
      contact: [
        { label: "Company", value: "Zynovate" },
        { label: "Website", value: "zynovate.in", href: "https://zynovate.in" },
        { label: "Email", value: "info@zynovate.in", href: "mailto:info@zynovate.in" },
      ],
      footer:
        "We will make reasonable efforts to respond to privacy-related requests within the time period required under applicable law.",
    },
  ],
};
