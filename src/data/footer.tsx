import { Facebook, Instagram, Mail } from "lucide-react";

export const footerColumns = [
  {
    heading: "Solutions",
    links: [
      { label: "Medical Coding Services", href: "/services#medical-coding" },
      { label: "Dedicated Team Model", href: "/services#dedicated-team" },
      { label: "HIPAA Compliance", href: "/compliance" },
      { label: "Contact Sales", href: "/contact" },
    ],
  },
  {
    heading: "Expertise",
    links: [
      { label: "E/M Coding (Office & Clinic Visits)", href: "/services" },
      { label: "Emergency Department (ED) Coding", href: "/services" },
      { label: "HCC & Risk Adjustment Coding", href: "/services" },
      { label: "Radiology Coding", href: "/services" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "HIPAA Privacy Policy", href: "/legal/hipaa-privacy-policy" },
      { label: "Data Security Policy", href: "/legal/data-security-policy" },
      { label: "Terms & Conditions", href: "/legal/terms-and-conditions" },
      { label: "Disclaimer", href: "/legal/disclaimer" },
    ],
  },
] as const;

export const contactItems = [
  {
    label: "info@pnowhealthcare.com",
    icon: Mail,
  },
] as const;

export const socialLinks = [
  {
    label: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/proficientnow.healthcare/",
  },
  {
    label: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/share/1AGrwg9NbM/?mibextid=wwXIfr",
  },
] as const;
