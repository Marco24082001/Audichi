import Link from "next/link";
import type { ReactNode } from "react";

type CategoryCardProps = {
  href: string;
  icon: ReactNode;
  title: string;
  description: string;
};

export function CategoryCard({
  href,
  icon,
  title,
  description,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
    >
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-slate-900 transition-colors group-hover:text-blue-700">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </Link>
  );
}
