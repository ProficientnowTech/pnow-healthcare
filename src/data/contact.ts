import type { ContactRequestPayload } from "@/lib/contact";

type ContactFieldConfig = {
  label: string;
  name: keyof ContactRequestPayload;
  type: string;
  placeholder: string;
  required?: boolean;
};

export const contactInfo = {
  salesEmail: "info@pnowhealthcare.com",
  businessHours: "Monday–Friday, 8am–7pm CT",
  address: "1449 S Michigan Ave STE 13294, Chicago, IL 60605",
 
};

export const contactFormFields: ContactFieldConfig[] = [
  { label: "First Name", name: "firstName", type: "text", placeholder: "Jane", required: true },
  { label: "Last Name", name: "lastName", type: "text", placeholder: "Doe", required: true },
  { label: "Email", name: "email", type: "email", placeholder: "jane@pnowhealtcare.com", required: true },
  { label: "Phone", name: "phone", type: "tel", placeholder: "Your phone (optional)" },
];
