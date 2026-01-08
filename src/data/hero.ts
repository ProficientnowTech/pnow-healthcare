import { BarChart3, CheckCircle2, Shield, Zap } from "lucide-react";

export const heroStats = [
  { label: "Coding Accuracy (QA verified)", value: "95%+" },
  { label: "Average TAT", value: "24hrs" },
  { label: "Years Experience", value: "15+" },
] as const;

export const heroMetrics = [
  {
    label: "Accuracy Rate",
    value: "95%+",
    helper: "QA-verified baseline (>=95%) across all specialties",
  },
  { label: "Avg. Turnaround", value: "24h", helper: "Fast processing times" },
  { label: "Compliance Score", value: "100%", helper: "Full HIPAA adherence" },
] as const;

export const floatingIcons = [
  { Icon: Shield, delay: 0, x: "8%", y: "25%" },
  { Icon: Zap, delay: 0.15, x: "80%", y: "15%" },
  { Icon: BarChart3, delay: 0.3, x: "12%", y: "70%" },
  { Icon: CheckCircle2, delay: 0.45, x: "86%", y: "65%" },
] as const;
