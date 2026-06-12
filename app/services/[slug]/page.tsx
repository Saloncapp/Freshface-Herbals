import { notFound } from "next/navigation";
import RitualDetail from "@/components/services/RitualDetail";
import { serviceCategories } from "@/data/services";

const services = serviceCategories.flatMap((category) => category.services);
const serviceEntries = serviceCategories.flatMap((category) =>
  category.services.map((service) => ({
    service,
    categoryLabel: category.label,
  }))
);

interface ServiceDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }));
}

export function generateMetadata({ params }: ServiceDetailPageProps) {
  const service = services.find((item) => item.id === params.slug);

  if (!service) {
    return {
      title: "Service Not Found | Fresh Face Herbals",
    };
  }

  return {
    title: `${service.name} | Fresh Face Herbals`,
    description: service.description,
  };
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const entry = serviceEntries.find((item) => item.service.id === params.slug);

  if (!entry) {
    notFound();
  }

  return (
    <RitualDetail
      service={entry.service}
      categoryLabel={entry.categoryLabel}
    />
  );
}
