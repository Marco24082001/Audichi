import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import Link from "next/link";

const topics = [
  { name: "Environment", slug: "environment" },
  { name: "Gender Equality", slug: "gender-equality" },
  { name: "School Life", slug: "school-life" },
  { name: "World Heritages", slug: "world-heritages" },
  { name: "Travel", slug: "travel" },
  { name: "Independent Life", slug: "independent-life" },
  { name: "Family Life", slug: "family-life" },
  { name: "Music & Entertainment", slug: "music-entertainment" },
  { name: "Digital World", slug: "digital-world" },
  { name: "Community Work", slug: "community-work" },
  { name: "Healthy Living", slug: "healthy-living" },
  { name: "Future Careers", slug: "future-careers" },
];

export default function LibraryTopicPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />
      <main className="mx-auto w-full max-w-[1100px] flex-1 px-4 py-12 sm:px-6">
        <section>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Listen by Topic
          </h1>
          <p className="mt-3 text-slate-600">
            Pick a topic to explore library listening lessons.
          </p>
        </section>

        <section className="mt-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic) => (
              <Link
                key={topic.slug}
                href={`/lessons?source=library&topic=${topic.slug}`}
                className="rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <h2 className="text-lg font-semibold text-slate-900">
                  {topic.name}
                </h2>
                <span className="mt-4 inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                  View Lessons
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
