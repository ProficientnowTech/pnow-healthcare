type SpecialtyDetailSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type SpecialtyDetail = {
  slug: string;
  name: string;
  heroTitle: string;
  heroSubtitle: string;
  summary: string;
  keyPoints: string[];
  sections: SpecialtyDetailSection[];
};

export const specialtyDetails: SpecialtyDetail[] = [
  {
    slug: "primary-care",
    name: "Primary Care",
    heroTitle: "Primary Care Medical Coding Services",
    heroSubtitle:
      "Supporting the foundation of U.S. healthcare through accurate medical coding.",
    summary:
      "Primary care is the first touchpoint for preventive care, chronic condition management, and routine visits. High-volume encounters require documentation-driven coding that keeps operations compliant and predictable.",
    keyPoints: [
      "Evaluation & Management accuracy grounded in provider documentation",
      "High-volume workflow support with QA before delivery",
      "HIPAA-compliant processes with executed BAAs",
    ],
    sections: [
      {
        title: "What Is Primary Care?",
        paragraphs: [
          "Primary care covers ongoing, comprehensive healthcare for individuals and families, including preventive services, diagnosis, and chronic disease management.",
          "Over half of outpatient visits in the U.S. occur in primary care settings, making efficient documentation and coding essential to keep operations moving.",
        ],
      },
      {
        title: "Why Medical Coding Is Critical",
        bullets: [
          "E/M services with multiple diagnoses per visit",
          "Chronic condition documentation and preventive care",
          "Documentation inconsistencies can create delays, denials, and compliance risk",
        ],
        paragraphs: [
          "Coding translates provider documentation into standardized codes so day-to-day operations stay consistent, compliant, and audit-ready.",
        ],
      },
      {
        title: "How Primary Care Coding Works",
        bullets: [
          "Review provider documentation for each visit",
          "Assign E/M levels based on MDM or time",
          "Capture accurate ICD-10 diagnoses",
          "Ensure documentation supports all reported services",
          "Apply CMS and payer requirements without assumptions",
        ],
      },
      {
        title: "Real-World Primary Care Impact",
        bullets: [
          "Hundreds of millions of annual visits spanning chronic and preventive care",
          "Coding reliability reduces rework and keeps schedules predictable",
          "Accurate coding supports operational clarity as patient volumes scale",
        ],
      },
      {
        title: "How We Support Primary Care Practices",
        bullets: [
          "Documentation-driven coding only—no extrapolation",
          "Specialty-aligned coders for family and internal medicine workflows",
          "E/M accuracy with current CMS guidance",
          "High-volume support without sacrificing turnaround",
          "Structured QA before delivery",
        ],
      },
      {
        title: "Operational Benefits",
        bullets: [
          "Less claim rework and follow-up",
          "Consistent documentation standards",
          "Better internal reporting and compliance readiness",
        ],
      },
      {
        title: "Who We Support",
        bullets: [
          "Family medicine and internal medicine practices",
          "Community health centers",
          "Multispecialty provider groups and outpatient clinics",
        ],
      },
      {
        title: "Why Choose ProficientNow Health Care",
        bullets: [
          "Specialty-focused coders with strong E/M discipline",
          "Predictable turnaround and QA-backed accuracy",
          "HIPAA-compliant workflows aligned to your volumes",
        ],
      },
      {
        title: "Get Started",
        paragraphs: [
          "Tell us about your volume, workflow, and documentation approach so we can align coding support quickly and compliantly.",
        ],
      },
    ],
  },
  {
    slug: "internal-medicine",
    name: "Internal Medicine",
    heroTitle: "Internal Medicine Medical Coding Services",
    heroSubtitle:
      "Supporting complex patient care through accurate and compliant medical coding.",
    summary:
      "Internal medicine manages complex patient populations with multiple diagnoses and long-term care. Detailed documentation, higher-complexity E/M, and payer-specific rules require disciplined coding.",
    keyPoints: [
      "Documentation-driven coding for multi-diagnosis encounters",
      "E/M accuracy for higher-complexity visits",
      "Structured QA to prevent denials and rework",
    ],
    sections: [
      {
        title: "What Is Internal Medicine?",
        paragraphs: [
          "Internal medicine focuses on prevention, diagnosis, and management of adult diseases, often coordinating care across specialties.",
          "Visits frequently involve chronic disease management and complex histories, making accurate coding foundational to operations.",
        ],
      },
      {
        title: "Why Medical Coding Is Critical",
        bullets: [
          "Multiple chronic conditions captured in a single visit",
          "Higher-level E/M services and extensive documentation",
          "Without structure, practices face rework, delays, and audit risk",
        ],
      },
      {
        title: "How Internal Medicine Coding Works",
        bullets: [
          "Detailed review of provider documentation",
          "E/M levels set by medical decision-making or time",
          "Accurate ICD-10 capture for all documented conditions",
          "CMS and payer rules applied without assumptions",
        ],
      },
      {
        title: "Real-World Impact",
        bullets: [
          "Millions of chronic care encounters yearly in the U.S.",
          "Reliable coding underpins long-term care coordination and stability",
          "Consistency reduces administrative friction as complexity grows",
        ],
      },
      {
        title: "How We Support Internal Medicine Practices",
        bullets: [
          "Documentation-driven coding with no over- or under-coding",
          "Coders trained in adult medicine workflows",
          "E/M accuracy for high-complexity visits",
          "Multi-diagnosis capture aligned to documentation",
          "Batch-level QA prior to delivery",
        ],
      },
      {
        title: "Operational Benefits",
        bullets: [
          "Less rework and fewer denials",
          "Consistent documentation standards",
          "Predictable turnaround and audit readiness",
        ],
      },
      {
        title: "Who We Support",
        bullets: [
          "Internal medicine clinics and adult primary care",
          "Multispecialty groups and outpatient clinics",
          "Hospital-affiliated internal medicine practices",
        ],
      },
      {
        title: "Why Choose ProficientNow Health Care",
        bullets: [
          "Specialty-focused coders experienced in complex documentation",
          "Fast, predictable turnaround with QA controls",
          "HIPAA-compliant workflows with strong privacy controls",
        ],
      },
      {
        title: "Get Started",
        paragraphs: [
          "Share your documentation workflows and volume targets so we can configure coding pods that keep pace with your practice.",
        ],
      },
    ],
  },
  {
    slug: "urgent-care",
    name: "Urgent Care",
    heroTitle: "Urgent Care Medical Coding Services",
    heroSubtitle:
      "Supporting high-volume care through accurate and timely medical coding.",
    summary:
      "Urgent care centers rely on fast, accurate coding across varied visit types. High volumes and payer-specific rules require disciplined E/M, procedure, and modifier application.",
    keyPoints: [
      "High-volume workflows without sacrificing accuracy",
      "E/M, procedures, and modifiers aligned to documentation",
      "Same-day or next-day turnaround options",
    ],
    sections: [
      {
        title: "What Is Urgent Care?",
        paragraphs: [
          "Urgent care centers treat non-life-threatening conditions with extended hours and walk-in visits.",
          "High visit volumes and varied presentations make efficient documentation and coding essential.",
        ],
      },
      {
        title: "Why Medical Coding Is Critical",
        bullets: [
          "Predominantly E/M services with same-day procedures",
          "High pace increases risk of backlogs and denials",
          "Payer-specific requirements demand consistency",
        ],
      },
      {
        title: "How Urgent Care Coding Works",
        bullets: [
          "Review provider documentation for each encounter",
          "Assign E/M levels via MDM or time",
          "Code procedures and diagnostic services performed",
          "Apply modifiers only when documentation supports them",
          "Align to CMS and payer rules without assumptions",
        ],
      },
      {
        title: "Real-World Impact",
        bullets: [
          "Tens of millions of visits annually across U.S. urgent care centers",
          "Accurate coding prevents claim backlogs and documentation drift",
          "Reliable workflows stabilize operations during volume spikes",
        ],
      },
      {
        title: "How We Support Urgent Care Clinics",
        bullets: [
          "High-volume coding capacity with consistent QA",
          "E/M accuracy informed by current CMS guidance",
          "Procedure and modifier precision tied to documentation",
          "Fast turnaround calibrated to client needs",
        ],
      },
      {
        title: "Operational Benefits",
        bullets: [
          "Reduced rework and denials",
          "Consistent documentation standards",
          "Predictable throughput that eases clinical burden",
        ],
      },
      {
        title: "Who We Support",
        bullets: [
          "Independent urgent care clinics",
          "Multi-location urgent care networks",
          "Urgent care departments in health systems",
        ],
      },
      {
        title: "Why Choose ProficientNow Health Care",
        bullets: [
          "Urgent care-focused coders with modifier expertise",
          "Fast, predictable turnaround with QA checks",
          "HIPAA-compliant workflows and secure access controls",
        ],
      },
      {
        title: "Get Started",
        paragraphs: [
          "Tell us your visit volumes and documentation workflows so we can align capacity and turnaround to your peaks.",
        ],
      },
    ],
  },
  {
    slug: "emergency-medicine",
    name: "Emergency Medicine",
    heroTitle: "Emergency Department Medical Coding Services",
    heroSubtitle:
      "Supporting high-acuity care through accurate and time-sensitive medical coding.",
    summary:
      "Emergency Departments handle complex, time-sensitive encounters that demand precise E/M, diagnosis, and procedure coding for both facility and professional services.",
    keyPoints: [
      "High-acuity coding expertise with strong E/M discipline",
      "Facility and professional support with QA controls",
      "Turnaround aligned to rapid ED workflows",
    ],
    sections: [
      {
        title: "What Is Emergency Department Care?",
        paragraphs: [
          "EDs deliver immediate care for trauma, cardiac events, neurological symptoms, and pediatric emergencies.",
          "With more than 130 million annual visits in the U.S., ED encounters pair high complexity with high volume.",
        ],
      },
      {
        title: "Why Medical Coding Is Critical",
        bullets: [
          "Complex E/M level selection and multiple diagnoses",
          "Facility and professional coding requirements",
          "High audit scrutiny and compliance exposure",
        ],
      },
      {
        title: "How ED Coding Works",
        bullets: [
          "Review ED documentation for each encounter",
          "Set E/M levels based on MDM or time",
          "Capture all documented diagnoses accurately",
          "Code procedures performed during the visit",
          "Apply CMS and payer-specific guidelines",
        ],
      },
      {
        title: "Real-World Impact",
        bullets: [
          "Reliable coding supports ED stability during surges",
          "Accurate coding lowers rework and protects turnaround",
          "Operational clarity lets clinicians focus on care delivery",
        ],
      },
      {
        title: "How We Support Emergency Departments",
        bullets: [
          "Coders experienced in emergency medicine documentation",
          "E/M accuracy for higher-complexity encounters",
          "Facility and professional coding based on client needs",
          "Turnaround tuned to rapid emergency workflows",
          "Structured QA before delivery",
        ],
      },
      {
        title: "Operational Benefits",
        bullets: [
          "Reduced denials and documentation inconsistencies",
          "Predictable workflows and audit readiness",
          "Lower administrative burden on clinical staff",
        ],
      },
      {
        title: "Who We Support",
        bullets: [
          "Hospital-based and freestanding EDs",
          "Health system emergency care units",
          "Academic and community hospitals",
        ],
      },
      {
        title: "Why Choose ProficientNow Health Care",
        bullets: [
          "Specialty-focused ED coders with QA oversight",
          "Accurate E/M, procedure, and diagnosis coding",
          "HIPAA-compliant workflows and secure access",
        ],
      },
      {
        title: "Get Started",
        paragraphs: [
          "Share your ED volumes and documentation flow so we can configure an agile coding pod with the right turnaround targets.",
        ],
      },
    ],
  },
  {
    slug: "orthopedics",
    name: "Orthopedics",
    heroTitle: "Orthopedics Medical Coding Services",
    heroSubtitle:
      "Supporting musculoskeletal care through accurate and compliant medical coding.",
    summary:
      "Orthopedic services pair procedural complexity with detailed documentation. Accurate CPT, ICD-10, and modifier application keeps surgical and clinical workflows compliant.",
    keyPoints: [
      "Subspecialty orthopedic coders focused on procedural detail",
      "Modifier and global period awareness",
      "Structured QA for implants and device tracking",
    ],
    sections: [
      {
        title: "What Is Orthopedic Care?",
        paragraphs: [
          "Orthopedics covers diagnosis and treatment for bones, joints, muscles, ligaments, and tendons.",
          "High surgical volumes and sports medicine cases demand precise documentation and coding.",
        ],
      },
      {
        title: "Why Medical Coding Is Critical",
        bullets: [
          "Surgical and procedural complexity with frequent modifiers",
          "Global surgery periods and bundled services",
          "Payer-specific musculoskeletal rules and audit scrutiny",
        ],
      },
      {
        title: "How Orthopedic Coding Works",
        bullets: [
          "Review clinic notes and operative reports",
          "Assign accurate E/M levels for office visits",
          "Code procedures directly from operative documentation",
          "Apply modifiers only when documentation supports them",
          "Follow CMS and payer orthopedic guidelines",
        ],
      },
      {
        title: "Real-World Impact",
        bullets: [
          "Accurate coding supports high-volume surgical and clinic schedules",
          "Consistency reduces rework tied to implants and device rules",
          "Compliance stability lowers audit exposure",
        ],
      },
      {
        title: "How We Support Orthopedic Practices",
        bullets: [
          "Specialty-trained orthopedic coders",
          "Procedure and modifier accuracy tied to operative notes",
          "Global period awareness to avoid errors",
          "Scalable support for outpatient visits and surgeries",
          "Structured QA on every batch",
        ],
      },
      {
        title: "Operational Benefits",
        bullets: [
          "Lower denials and fewer documentation gaps",
          "Predictable turnaround and workflow stability",
          "Reduced administrative burden on surgical teams",
        ],
      },
      {
        title: "Who We Support",
        bullets: [
          "Orthopedic clinics and specialty practices",
          "Sports medicine practices",
          "ASCs and hospital-based orthopedic departments",
        ],
      },
      {
        title: "Why Choose ProficientNow Health Care",
        bullets: [
          "Orthopedic-specific expertise across surgical and non-surgical services",
          "Fast, predictable turnaround with QA controls",
          "HIPAA-compliant workflows with secure access",
        ],
      },
      {
        title: "Get Started",
        paragraphs: [
          "Share your orthopedic volume and operative documentation style so we can align coders and QA to your environment.",
        ],
      },
    ],
  },
  {
    slug: "radiology",
    name: "Radiology",
    heroTitle: "Radiology Medical Coding Services",
    heroSubtitle:
      "Supporting diagnostic accuracy through precise and compliant medical coding.",
    summary:
      "Radiology coding demands attention to modality details, laterality, contrast, and component billing. Accurate reporting keeps imaging workflows efficient and audit-ready.",
    keyPoints: [
      "Diagnostic and interventional expertise with component billing",
      "Attention to contrast, laterality, and guidance details",
      "Structured QA for high-volume imaging environments",
    ],
    sections: [
      {
        title: "What Is Radiology?",
        paragraphs: [
          "Radiology spans diagnostic and interventional imaging—X-ray, CT, MRI, ultrasound, nuclear medicine, and more.",
          "Millions of annual studies require precise documentation and coding to support patient care coordination.",
        ],
      },
      {
        title: "Why Medical Coding Is Critical",
        bullets: [
          "High-cost diagnostic procedures with technical and professional components",
          "Laterality, contrast, and bundling rules",
          "Frequent payer audits and scrutiny",
        ],
      },
      {
        title: "How Radiology Coding Works",
        bullets: [
          "Review radiology reports and provider documentation",
          "Assign accurate CPT/HCPCS codes",
          "Apply modifiers when supported by documentation",
          "Capture laterality and contrast requirements",
          "Assign ICD-10 diagnoses from documented indications",
        ],
      },
      {
        title: "Real-World Impact",
        bullets: [
          "Reliable coding reduces rework and protects component billing accuracy",
          "Consistent workflows keep imaging throughput stable",
          "Accurate coding supports compliance and financial clarity",
        ],
      },
      {
        title: "How We Support Radiology Practices",
        bullets: [
          "Radiology-trained coders for diagnostic and interventional studies",
          "Component billing accuracy driven by documentation",
          "Attention to laterality, contrast, and procedural specifics",
          "Scalable support for hospital-based and outpatient imaging",
          "QA checks before delivery",
        ],
      },
      {
        title: "Operational Benefits",
        bullets: [
          "Reduced denials and faster reconciliation",
          "Consistent documentation standards",
          "Predictable turnaround for routine and high-demand volumes",
        ],
      },
      {
        title: "Who We Support",
        bullets: [
          "Independent radiology practices and imaging centers",
          "Hospital-based radiology departments",
          "Teleradiology providers and multispecialty groups",
        ],
      },
      {
        title: "Why Choose ProficientNow Health Care",
        bullets: [
          "Radiology-specific coding expertise across modalities",
          "Accurate CPT, HCPCS, and ICD-10 coding with QA",
          "HIPAA-compliant workflows and secure access",
        ],
      },
      {
        title: "Get Started",
        paragraphs: [
          "Tell us about your imaging mix and report structure so we can align coders to your modality and volume needs.",
        ],
      },
    ],
  },
  {
    slug: "cardiology",
    name: "Cardiology",
    heroTitle: "Cardiology Medical Coding Services",
    heroSubtitle:
      "Supporting complex cardiovascular care through accurate and compliant medical coding.",
    summary:
      "Cardiology involves detailed diagnostics, interventional services, and chronic condition management. Precise coding safeguards operational stability across high-cost procedures and ongoing care.",
    keyPoints: [
      "Diagnostic and interventional expertise with component awareness",
      "Modifier and bundling accuracy for cardiology services",
      "QA-backed turnaround tuned to procedural schedules",
    ],
    sections: [
      {
        title: "What Is Cardiology Care?",
        paragraphs: [
          "Cardiology manages conditions of the heart and vascular system across office visits, diagnostics, and invasive procedures.",
          "High-cost services and detailed documentation demand precise coding for stability and compliance.",
        ],
      },
      {
        title: "Why Medical Coding Is Critical",
        bullets: [
          "Complex diagnostics and interventional procedures",
          "Bundled and unbundled service rules with modifiers",
          "Strict payer and regulatory scrutiny",
        ],
      },
      {
        title: "How Cardiology Coding Works",
        bullets: [
          "Review visit documentation and procedural reports",
          "Assign accurate CPT/HCPCS codes",
          "Apply modifiers and component billing when supported",
          "Capture ICD-10 diagnoses from documented conditions",
          "Follow CMS and payer-specific cardiology guidance",
        ],
      },
      {
        title: "Real-World Impact",
        bullets: [
          "Accurate coding supports high-volume diagnostic and procedural care",
          "Reliability reduces rework tied to device and drug rules",
          "Stable workflows keep teams focused on patient coordination",
        ],
      },
      {
        title: "How We Support Cardiology Practices",
        bullets: [
          "Cardiology-trained coders for office, diagnostic, and interventional services",
          "Component and modifier accuracy tied to documentation",
          "Scalable support for routine visits and cath lab schedules",
          "QA review before delivery",
        ],
      },
      {
        title: "Operational Benefits",
        bullets: [
          "Reduced denials and fewer documentation gaps",
          "Predictable turnaround that matches procedural cadence",
          "Audit readiness and compliance stability",
        ],
      },
      {
        title: "Who We Support",
        bullets: [
          "Cardiology clinics and specialty practices",
          "Hospital-based cardiology departments",
          "Heart and vascular centers and multispecialty groups",
        ],
      },
      {
        title: "Why Choose ProficientNow Health Care",
        bullets: [
          "Cardiology-specific coding expertise",
          "Accurate CPT, HCPCS, and ICD-10 coding with QA",
          "HIPAA-compliant workflows with secure access",
        ],
      },
      {
        title: "Get Started",
        paragraphs: [
          "Tell us about your cardiology volumes and procedural mix so we can align coding support to your environment.",
        ],
      },
    ],
  },
  {
    slug: "dermatology",
    name: "Dermatology",
    heroTitle: "Dermatology Medical Coding Services",
    heroSubtitle:
      "Supporting medical and procedural dermatology through accurate medical coding.",
    summary:
      "Dermatology blends E/M visits with biopsies, excisions, and lesion treatments. Correct coding requires modifier awareness and precise lesion documentation.",
    keyPoints: [
      "E/M and procedure accuracy for office and surgical visits",
      "Modifier expertise to separate distinct services",
      "QA-backed workflows for high-volume outpatient care",
    ],
    sections: [
      {
        title: "What Is Dermatology Care?",
        paragraphs: [
          "Dermatology manages conditions of the skin, hair, and nails across medical and procedural services.",
          "High outpatient volumes pair office visits with procedures, demanding precise coding and documentation.",
        ],
      },
      {
        title: "Why Medical Coding Is Critical",
        bullets: [
          "Frequent combination of E/M and procedures",
          "Modifier usage to distinguish separate services",
          "Detailed lesion documentation and measurements",
          "Payer-specific dermatology rules",
        ],
      },
      {
        title: "How Dermatology Coding Works",
        bullets: [
          "Review visit notes, procedural documentation, and pathology reports when applicable",
          "Assign E/M levels supported by documentation",
          "Code biopsies, excisions, and lesion treatments accurately",
          "Apply modifiers only when supported by documentation",
          "Follow CMS and payer dermatology guidelines",
        ],
      },
      {
        title: "Real-World Impact",
        bullets: [
          "Accurate coding reduces denials and rework",
          "Reliable workflows support high-volume clinics",
          "Compliance stability protects against audit risk",
        ],
      },
      {
        title: "How We Support Dermatology Practices",
        bullets: [
          "Specialty-trained dermatology coders",
          "Accurate E/M and procedure coding tied to documentation",
          "Modifier expertise to distinguish separate services",
          "Scalable support for medical and procedural schedules",
          "Structured QA on every batch",
        ],
      },
      {
        title: "Operational Benefits",
        bullets: [
          "Reduced claim rework and faster resolution",
          "Consistent documentation standards",
          "Predictable turnaround for busy clinics",
        ],
      },
      {
        title: "Who We Support",
        bullets: [
          "Dermatology clinics and specialty practices",
          "Medical and cosmetic dermatology programs",
          "Hospital-based dermatology departments",
        ],
      },
      {
        title: "Why Choose ProficientNow Health Care",
        bullets: [
          "Dermatology-specific coding expertise",
          "Accurate E/M, procedure, and diagnosis coding with QA",
          "HIPAA-compliant workflows and privacy focus",
        ],
      },
      {
        title: "Get Started",
        paragraphs: [
          "Share your dermatology volumes and procedure mix so we can align coders to your clinic schedules.",
        ],
      },
    ],
  },
  {
    slug: "gastroenterology",
    name: "Gastroenterology",
    heroTitle: "Gastroenterology Medical Coding Services",
    heroSubtitle:
      "Supporting diagnostic and therapeutic GI care with accurate medical coding.",
    summary:
      "Gastroenterology involves diagnostic and therapeutic endoscopy with varied payer rules. Accurate coding keeps ASC and hospital workflows compliant and predictable.",
    keyPoints: [
      "Endoscopy and therapeutic procedure accuracy",
      "Modifier and bundling awareness for GI services",
      "Scalable support for ASC and hospital settings",
    ],
    sections: [
      {
        title: "What Is Gastroenterology Care?",
        paragraphs: [
          "Gastroenterology covers diagnostic and therapeutic GI procedures, endoscopic services, and related visits.",
          "Procedural complexity and payer variation make coding discipline essential for both ASC and hospital-based services.",
        ],
      },
      {
        title: "Why Medical Coding Is Critical",
        bullets: [
          "Diagnostic and therapeutic procedures with detailed documentation needs",
          "Modifier application for bundled and unbundled services",
          "Payer-specific requirements across ASC and hospital settings",
        ],
      },
      {
        title: "How Gastroenterology Coding Works",
        bullets: [
          "Review endoscopy and procedure documentation",
          "Assign accurate CPT codes for diagnostic and therapeutic cases",
          "Apply modifiers only when documentation supports them",
          "Capture ICD-10 diagnoses aligned to documented indications",
          "Follow CMS and payer GI guidelines",
        ],
      },
      {
        title: "Real-World Impact",
        bullets: [
          "Accurate coding keeps GI schedules moving without denials",
          "Consistency supports both outpatient ASC and hospital volumes",
          "Compliance stability protects against rework and audits",
        ],
      },
      {
        title: "How We Support GI Practices",
        bullets: [
          "Coders experienced in diagnostic and therapeutic GI procedures",
          "Modifier and bundle awareness tied to documentation",
          "Support for ASC and hospital-based workflows",
          "QA checks prior to delivery",
        ],
      },
      {
        title: "Operational Benefits",
        bullets: [
          "Reduced denials and administrative back-and-forth",
          "Predictable turnaround for procedure-heavy schedules",
          "Consistent documentation standards across locations",
        ],
      },
      {
        title: "Who We Support",
        bullets: [
          "Gastroenterology practices",
          "Endoscopy centers and ASCs",
          "Hospital-based GI departments",
        ],
      },
      {
        title: "Why Choose ProficientNow Health Care",
        bullets: [
          "GI-specific coding expertise with ASC and hospital experience",
          "Accurate CPT and ICD-10 coding with QA controls",
          "HIPAA-compliant workflows and secure access",
        ],
      },
      {
        title: "Get Started",
        paragraphs: [
          "Tell us about your procedure mix and documentation style so we can align coding support to your GI programs.",
        ],
      },
    ],
  },
  {
    slug: "psychiatry-behavioral-health",
    name: "Psychiatry / Behavioral Health",
    heroTitle: "Psychiatry & Behavioral Health Medical Coding Services",
    heroSubtitle:
      "Supporting mental and behavioral health services through accurate medical coding.",
    summary:
      "Behavioral health relies on time-based coding, psychotherapy services, and strict privacy obligations. Accurate, confidential coding keeps operations stable and compliant.",
    keyPoints: [
      "Time-based E/M and psychotherapy accuracy",
      "Confidentiality-focused workflows and privacy controls",
      "QA-backed turnaround for outpatient and hospital settings",
    ],
    sections: [
      {
        title: "What Is Psychiatry & Behavioral Health Care?",
        paragraphs: [
          "Behavioral health covers psychiatric evaluations, medication management, psychotherapy, and follow-up care.",
          "Growing outpatient and inpatient demand makes precise, confidential coding essential.",
        ],
      },
      {
        title: "Why Medical Coding Is Critical",
        bullets: [
          "Time-based E/M and psychotherapy services",
          "Detailed documentation requirements",
          "Strict payer and regulatory scrutiny with heightened privacy needs",
        ],
      },
      {
        title: "How Behavioral Health Coding Works",
        bullets: [
          "Review psychiatric evaluations and therapy notes",
          "Assign E/M and psychotherapy codes accurately",
          "Apply time-based coding rules where required",
          "Capture ICD-10 diagnoses from documented conditions",
          "Follow CMS and payer-specific behavioral health guidelines",
        ],
      },
      {
        title: "Real-World Impact",
        bullets: [
          "Reliable coding supports long-term patient management",
          "Consistency reduces rework tied to privacy-sensitive documentation",
          "Stable workflows free clinicians to focus on patient support",
        ],
      },
      {
        title: "How We Support Behavioral Health Practices",
        bullets: [
          "Coders experienced in psychiatric and behavioral health standards",
          "Accurate time-based coding and psychotherapy support",
          "Confidentiality-focused workflows",
          "Scalable support for outpatient and hospital-based services",
          "Structured QA before delivery",
        ],
      },
      {
        title: "Operational Benefits",
        bullets: [
          "Reduced denials and compliance-related rework",
          "Consistent documentation standards",
          "Predictable turnaround and audit readiness",
        ],
      },
      {
        title: "Who We Support",
        bullets: [
          "Psychiatry clinics and specialty practices",
          "Behavioral health centers and substance use programs",
          "Hospital-based behavioral health departments",
        ],
      },
      {
        title: "Why Choose ProficientNow Health Care",
        bullets: [
          "Behavioral health-specific coding expertise",
          "Accurate E/M, psychotherapy, and diagnosis coding with QA",
          "HIPAA-compliant workflows with strong privacy emphasis",
        ],
      },
      {
        title: "Get Started",
        paragraphs: [
          "Tell us about your behavioral health volumes and documentation approach so we can align a privacy-focused coding pod.",
        ],
      },
    ],
  },
  {
    slug: "surgery-asc",
    name: "Surgery & ASC",
    heroTitle:
      "Surgery & Ambulatory Surgery Center (ASC) Medical Coding Services",
    heroSubtitle:
      "Supporting surgical precision through accurate and compliant medical coding.",
    summary:
      "Surgical and ASC services require meticulous coding across operative reports, modifiers, and global periods. Accurate coding safeguards efficiency, compliance, and revenue integrity.",
    keyPoints: [
      "Procedure, diagnosis, and modifier accuracy grounded in operative notes",
      "Global surgery awareness to avoid bundled-service errors",
      "QA-backed workflows for inpatient and outpatient surgeries",
    ],
    sections: [
      {
        title: "What Are Surgical & ASC Services?",
        paragraphs: [
          "Surgical services span inpatient and outpatient care, while ASCs deliver same-day surgical care across multiple specialties.",
          "Procedural complexity and payer rules demand accurate documentation and coding to keep schedules moving.",
        ],
      },
      {
        title: "Why Medical Coding Is Critical",
        bullets: [
          "Detailed operative reports and procedure descriptions",
          "Global surgery periods and bundled services",
          "Frequent modifier usage and specialty-specific payer rules",
        ],
      },
      {
        title: "How Surgery & ASC Coding Works",
        bullets: [
          "Review operative reports and clinical notes",
          "Assign accurate CPT and HCPCS codes",
          "Apply modifiers supported by documentation",
          "Account for global surgery rules and bundled services",
          "Assign ICD-10 diagnoses from documented indications",
        ],
      },
      {
        title: "Real-World Impact",
        bullets: [
          "Accurate coding reduces denials tied to modifiers and bundles",
          "Consistency keeps high-volume surgical schedules on track",
          "Compliance stability lowers audit exposure",
        ],
      },
      {
        title: "How We Support Surgical Programs",
        bullets: [
          "Coders experienced in operative documentation across specialties",
          "Modifier accuracy and device tracking grounded in op notes",
          "Global period awareness to minimize errors",
          "Scalable support for outpatient and hospital-based surgeries",
          "QA checks before delivery",
        ],
      },
      {
        title: "Operational Benefits",
        bullets: [
          "Reduced denials and payment delays",
          "Improved workflow predictability",
          "Lower administrative burden on surgical teams",
        ],
      },
      {
        title: "Who We Support",
        bullets: [
          "Ambulatory Surgery Centers (ASCs)",
          "Hospital-based surgical departments",
          "Specialty surgical practices and outpatient facilities",
        ],
      },
      {
        title: "Why Choose ProficientNow Health Care",
        bullets: [
          "Surgical and ASC coding expertise across specialties",
          "Accurate procedure, diagnosis, and modifier coding with QA",
          "HIPAA-compliant workflows and secure access",
        ],
      },
      {
        title: "Get Started",
        paragraphs: [
          "Share your surgical volumes, specialties, and documentation format so we can align coders and QA to your teams.",
        ],
      },
    ],
  },
  {
    slug: "hospitals-clinics",
    name: "Hospitals & Clinics",
    heroTitle: "Hospitals & Clinics Medical Coding Services",
    heroSubtitle:
      "Supporting large-scale healthcare operations through accurate and compliant medical coding.",
    summary:
      "Hospitals and clinics manage diverse departments, high volumes, and strict regulatory oversight. Standardized coding keeps inpatient, outpatient, and specialty services consistent and audit-ready.",
    keyPoints: [
      "Multi-department support across inpatient and outpatient settings",
      "Standardized coding practices with QA controls",
      "Scalable pods that adjust to seasonal and volume changes",
    ],
    sections: [
      {
        title: "What Are Hospital & Clinic Services?",
        paragraphs: [
          "Hospitals and clinics deliver inpatient, outpatient, emergency, diagnostic, and specialty services at scale.",
          "Hundreds of millions of annual encounters require consistent documentation and coding to maintain operational stability.",
        ],
      },
      {
        title: "Why Medical Coding Is Critical",
        bullets: [
          "Multiple departments and service lines with different requirements",
          "Inpatient and outpatient coding needs with high volumes",
          "Facility and professional considerations under payer oversight",
        ],
      },
      {
        title: "How Hospital & Clinic Coding Works",
        bullets: [
          "Review inpatient and outpatient documentation",
          "Assign ICD-10, CPT, and HCPCS codes accurately",
          "Support E/M coding with proper diagnosis and procedure reporting",
          "Apply CMS and payer-specific guidelines consistently",
        ],
      },
      {
        title: "Real-World Impact",
        bullets: [
          "Accurate coding reduces backlogs and denials across departments",
          "Consistency keeps multi-location operations aligned",
          "Reliability lowers administrative friction and audit exposure",
        ],
      },
      {
        title: "How We Support Hospitals & Clinics",
        bullets: [
          "Coding support across inpatient, outpatient, emergency, and specialties",
          "Scalable workforce model for spikes and growth",
          "Standardized practices across facilities and departments",
          "Structured QA on every batch",
        ],
      },
      {
        title: "Operational Benefits",
        bullets: [
          "Reduced rework and faster resolution",
          "Improved turnaround and predictability across service lines",
          "Audit readiness and compliance stability",
        ],
      },
      {
        title: "Who We Support",
        bullets: [
          "Acute care and community hospitals",
          "Outpatient and multispecialty clinics",
          "Health systems and provider networks",
        ],
      },
      {
        title: "Why Choose ProficientNow Health Care",
        bullets: [
          "Broad coding expertise across care settings",
          "Accurate inpatient and outpatient coding with QA controls",
          "HIPAA-compliant workflows with secure, role-based access",
        ],
      },
      {
        title: "Get Started",
        paragraphs: [
          "Outline your organizational structure and documentation workflows so we can embed dedicated pods that mirror your operations.",
        ],
      },
    ],
  },
];
