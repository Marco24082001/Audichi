import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { UnitCard } from "@/components/UnitCard";
import { grade10LessonFlow } from "@/data/units";
import Link from "next/link";

export default function Grade10WorkbookPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />
      <main className="mx-auto w-full max-w-[1100px] flex-1 px-4 py-12 sm:px-6">
        <section>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Grade 10 Workbook
          </h1>
          <p className="mt-3 text-slate-600">
            Practice additional listening exercises.
          </p>
        </section>

        <section className="mt-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {grade10LessonFlow.map((item) =>
              item.kind === "unit" ? (
                <UnitCard
                  key={`unit-${item.unit}`}
                  unitNumber={item.unit}
                  unitTitle={item.title}
                  href={`/lessons?source=workbook&grade=10&unit=${item.unit}`}
                />
              ) : (
                <Link
                  key={`review-${item.review}`}
                  href={`/lessons?source=workbook&grade=10&review=${item.review}`}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <p className="text-sm font-semibold text-blue-700">{item.title}</p>
                  <p className="mt-2 text-sm text-slate-600">
                    Extra workbook practice for review sections.
                  </p>
                  <span className="mt-4 inline-flex rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700">
                    View Lessons
                  </span>
                </Link>
              )
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
