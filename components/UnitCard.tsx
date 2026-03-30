import Link from "next/link";

type UnitCardProps = {
  unitNumber: number;
  unitTitle: string;
  href: string;
};

export function UnitCard({ unitNumber, unitTitle, href }: UnitCardProps) {
  return (
    <article className="cursor-pointer rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
      <p className="text-sm font-semibold text-blue-700">Unit {unitNumber}</p>
      <h3 className="mt-2 text-lg font-bold leading-6 text-slate-900">
        {unitTitle}
      </h3>
      <Link
        href={href}
        className="mt-5 inline-flex rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
      >
        View Lessons
      </Link>
    </article>
  );
}
