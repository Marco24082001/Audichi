import { Footer } from "@/components/Footer";
import { LessonCard } from "@/components/LessonCard";
import { Navbar } from "@/components/Navbar";
import { lessons, type LessonSource } from "@/data/lessons";

type LessonsPageProps = {
  searchParams: Promise<{
    source?: string;
    grade?: string;
    unit?: string;
    review?: string;
    topic?: string;
    level?: string;
  }>;
};

function normalizeSource(source?: string): LessonSource | undefined {
  if (!source) return undefined;
  const normalized = source.toLowerCase();
  if (normalized === "textbook" || normalized === "sgk") return "textbook";
  if (normalized === "workbook" || normalized === "sbt") return "workbook";
  if (normalized === "library") return "library";
  return undefined;
}

export default async function LessonsPage({ searchParams }: LessonsPageProps) {
  const params = await searchParams;
  const source = normalizeSource(params.source);
  const grade = params.grade ? Number(params.grade) : undefined;
  const unit = params.unit ? Number(params.unit) : undefined;
  const review = params.review ? Number(params.review) : undefined;
  const topic = params.topic?.toLowerCase();
  const level = params.level?.toUpperCase();

  const filteredLessons = lessons.filter((lesson) => {
    const matchesSource = source ? lesson.source === source : true;
    const matchesGrade =
      typeof grade === "number" && !Number.isNaN(grade)
        ? lesson.grade === grade
        : true;
    const matchesUnit =
      typeof unit === "number" && !Number.isNaN(unit) ? lesson.unit === unit : true;
    const matchesReview =
      typeof review === "number" && !Number.isNaN(review)
        ? lesson.review === review
        : true;
    const matchesTopic = topic ? lesson.topic === topic : true;
    const matchesLevel = level ? lesson.level === level : true;
    return (
      matchesSource &&
      matchesGrade &&
      matchesUnit &&
      matchesReview &&
      matchesTopic &&
      matchesLevel
    );
  });

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />
      <main className="mx-auto w-full max-w-[1100px] flex-1 px-4 py-12 sm:px-6">
        <section>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Listening Lessons
          </h1>
          <p className="mt-3 text-slate-600">
            Practice listening with interactive exercises.
          </p>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-700">
            Active Filters
          </h2>
          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            {source ? (
              <span className="rounded-full bg-blue-100 px-3 py-1 font-medium text-blue-700">
                Source: {source}
              </span>
            ) : null}
            {grade ? (
              <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-700">
                Grade: {grade}
              </span>
            ) : null}
            {unit ? (
              <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-700">
                Unit: {unit}
              </span>
            ) : null}
            {review ? (
              <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-700">
                Review: {review}
              </span>
            ) : null}
            {topic ? (
              <span className="rounded-full bg-emerald-100 px-3 py-1 font-medium text-emerald-700">
                Topic: {topic}
              </span>
            ) : null}
            {level ? (
              <span className="rounded-full bg-purple-100 px-3 py-1 font-medium text-purple-700">
                Level: {level}
              </span>
            ) : null}
            {!source && !grade && !unit && !review && !topic && !level ? (
              <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-700">
                No filters
              </span>
            ) : null}
          </div>
        </section>

        <section className="mt-8">
          <div className="mb-4 text-sm text-slate-600">
            Showing {filteredLessons.length} lesson
            {filteredLessons.length === 1 ? "" : "s"}
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredLessons.map((lesson) => (
              <LessonCard key={lesson.id} lesson={lesson} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
