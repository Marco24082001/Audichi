import type { Lesson } from "@/data/lessons";
import Link from "next/link";

type LessonCardProps = {
  lesson: Lesson;
};

export function LessonCard({ lesson }: LessonCardProps) {
  const sourceLabel =
    lesson.source.charAt(0).toUpperCase() + lesson.source.slice(1);
  const typeSet = new Set((lesson.questions ?? []).map((question) => question.type));
  const typeLabel =
    typeSet.size > 0
      ? Array.from(typeSet)
          .map((type) =>
            type
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")
          )
          .join(" / ")
      : "Mixed";

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
      <h3 className="text-base font-semibold leading-6 text-slate-900">
        {lesson.title}
      </h3>
      <div className="mt-4 flex items-center gap-2 text-xs font-medium">
        {lesson.level ? (
          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-700">
            {lesson.level}
          </span>
        ) : null}
        <span className="rounded-full bg-blue-100 px-2.5 py-1 text-blue-700">
          {typeLabel}
        </span>
        <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-emerald-700">
          {sourceLabel}
        </span>
      </div>
      <Link
        href={`/practice/${lesson.id}`}
        className="mt-5 inline-flex rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
      >
        Start Practice
      </Link>
    </article>
  );
}
