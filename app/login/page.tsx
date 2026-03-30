import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />
      <main className="mx-auto flex w-full max-w-[1100px] flex-1 items-center justify-center px-4 py-16 sm:px-6">
        <section className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-bold text-slate-900">Login</h1>
          <p className="mt-2 text-sm text-slate-600">Welcome back to Audichi.</p>

          <form className="mt-6 space-y-4">
            <label className="block text-sm">
              <span className="mb-1 block font-medium text-slate-700">Email</span>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-500"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium text-slate-700">Password</span>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-500"
              />
            </label>

            <button
              type="button"
              className="w-full rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Login
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}
