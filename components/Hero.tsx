import Link from "next/link";

export function Hero() {
  return (
    <section className="px-4 py-16 text-center sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
          English Listening Practice
        </p>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Tuning your ears to the world
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
          Practice English listening through dictation, gap-fill, and
          interactive exercises.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/lessons"
            className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Start Learning
          </Link>
          <Link
            href="/lessons"
            className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-blue-600 hover:text-blue-700"
          >
            Browse Lessons
          </Link>
        </div>
      </div>
    </section>
  );
}
