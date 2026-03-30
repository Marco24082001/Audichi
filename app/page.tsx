import { CategoryCard } from "@/components/CategoryCard";
import { Footer } from "@/components/Footer";
import { HeroSlider } from "@/components/HeroSlider";
import { LessonCard } from "@/components/LessonCard";
import { Navbar } from "@/components/Navbar";
import { featuredLessons } from "@/data/lessons";

function BookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M4 6.5A2.5 2.5 0 0 1 6.5 4H20v14H6.5A2.5 2.5 0 0 0 4 20.5V6.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="M7 7h10M7 11h10M7 15h6" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function HeadphoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M4 12a8 8 0 0 1 16 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <rect x="3" y="12" width="4" height="7" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <rect x="17" y="12" width="4" height="7" rx="2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function LibraryIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path d="M4 20h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M6 18V8l3-2v12M11 18V6l3-2v14M16 18V9l3-2v11" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.8" />
      <path d="M20 20l-4.2-4.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

const categories = [
  {
    title: "Textbook",
    description: "Practice listening exercises from textbooks.",
    href: "/lessons?source=textbook",
    icon: <BookIcon />,
  },
  {
    title: "Workbook",
    description: "Additional listening exercises from workbook.",
    href: "/lessons?source=workbook",
    icon: <HeadphoneIcon />,
  },
  {
    title: "Topic Library",
    description: "Practice listening by topics and CEFR levels.",
    href: "/lessons?source=library",
    icon: <LibraryIcon />,
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />
      <main className="flex-1">
        <div className="mx-auto w-full max-w-[1100px]">
          <HeroSlider />

          <section id="categories" className="px-4 py-12 sm:px-6">
            <h2 className="text-2xl font-bold text-slate-900">Main Categories</h2>
            <p className="mt-2 text-slate-600">
              Choose a learning path that fits your class material and level.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {categories.map((category) => (
                <CategoryCard
                  key={category.title}
                  href={category.href}
                  icon={category.icon}
                  title={category.title}
                  description={category.description}
                />
              ))}
            </div>
          </section>

          <section className="px-4 py-12 sm:px-6">
            <h2 className="text-2xl font-bold text-slate-900">Search Lessons</h2>
            <div className="relative mt-5">
              <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-slate-400">
                <SearchIcon />
              </span>
              <input
                type="text"
                placeholder="Search lessons by unit, topic, or level..."
                className="w-full rounded-xl border border-slate-300 bg-white py-3 pr-4 pl-12 text-sm text-slate-800 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-500"
              />
            </div>
          </section>

          <section id="featured" className="px-4 py-12 sm:px-6">
            <h2 className="text-2xl font-bold text-slate-900">Featured Lessons</h2>
            <p className="mt-2 text-slate-600">
              Start with handpicked listening exercises for quick daily practice.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {featuredLessons.map((lesson) => (
                <LessonCard key={lesson.id} lesson={lesson} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
