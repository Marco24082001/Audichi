import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-4 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-bold text-blue-700">Audichi</p>
          <p className="text-sm text-slate-600">Tuning your ears to the world</p>
        </div>
        <div className="flex items-center gap-5 text-sm text-slate-600">
          <Link href="#" className="transition-colors hover:text-blue-700">
            About
          </Link>
          <Link href="#" className="transition-colors hover:text-blue-700">
            Contact
          </Link>
          <Link href="#" className="transition-colors hover:text-blue-700">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
