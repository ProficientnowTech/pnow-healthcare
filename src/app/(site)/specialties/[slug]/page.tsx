import { SpecialtyDetailView } from "@/components/pages/specialty-detail-view";
import { specialtyDetails } from "@/data/specialty-details";
import { notFound } from "next/navigation";

type SpecialtyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return specialtyDetails.map((specialty) => ({ slug: specialty.slug }));
}

export default async function SpecialtyDetailPage({
  params,
}: SpecialtyPageProps) {
  const { slug } = await params;
  const specialty = specialtyDetails.find((item) => item.slug === slug);

  if (!specialty) {
    notFound();
  }

  return <SpecialtyDetailView specialty={specialty} />;
}
