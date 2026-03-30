"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

type DropdownItem = {
  label: string;
  href?: string;
  comingSoon?: boolean;
};

type DropdownNavProps = {
  label: string;
  items: DropdownItem[];
  pathname: string;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
};

function isActive(pathname: string, href?: string) {
  if (!href) return false;
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

function DropdownNav({
  label,
  items,
  pathname,
  open,
  onOpen,
  onClose,
}: DropdownNavProps) {
  const hasActiveChild = items.some((item) => isActive(pathname, item.href));

  return (
    <div className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <button
        type="button"
        className={`inline-flex items-center gap-1 rounded-md px-2 py-1 text-sm font-medium transition-colors ${
          hasActiveChild
            ? "text-blue-700"
            : "text-slate-700 hover:text-blue-700"
        }`}
      >
        {label}
        <span className="text-xs text-slate-400">▾</span>
      </button>
      {open ? (
        <div className="absolute top-full left-0 z-50 min-w-56 pt-2">
          <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
            {items.map((item) => {
              const itemIsActive = isActive(pathname, item.href);
              if (item.comingSoon) {
                return (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-slate-400"
                  >
                    <span>{item.label}</span>
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-500">
                      Coming Soon
                    </span>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href ?? "#"}
                  onClick={onClose}
                  className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                    itemIsActive
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<"textbook" | "workbook" | "library" | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleOpenMenu = (menu: "textbook" | "workbook" | "library") => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setOpenMenu(menu);
  };

  const handleCloseMenu = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
    closeTimerRef.current = setTimeout(() => {
      setOpenMenu(null);
      closeTimerRef.current = null;
    }, 140);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-sm">
      <div className="mx-auto flex h-16 w-full max-w-[1100px] items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-xl font-bold tracking-tight text-blue-700">
          Audichi
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          <Link
            href="/"
            className={`rounded-md px-2 py-1 text-sm font-medium transition-colors ${
              pathname === "/"
                ? "text-blue-700"
                : "text-slate-700 hover:text-blue-700"
            }`}
          >
            Home
          </Link>

          <DropdownNav
            label="Textbook"
            pathname={pathname}
            open={openMenu === "textbook"}
            onOpen={() => handleOpenMenu("textbook")}
            onClose={handleCloseMenu}
            items={[
              { label: "Grade 10", href: "/textbook/grade-10" },
              { label: "Grade 11", comingSoon: true },
              { label: "Grade 12", comingSoon: true },
            ]}
          />

          <DropdownNav
            label="Workbook"
            pathname={pathname}
            open={openMenu === "workbook"}
            onOpen={() => handleOpenMenu("workbook")}
            onClose={handleCloseMenu}
            items={[
              { label: "Grade 10", href: "/workbook/grade-10" },
              { label: "Grade 11", comingSoon: true },
              { label: "Grade 12", comingSoon: true },
            ]}
          />

          <DropdownNav
            label="Library"
            pathname={pathname}
            open={openMenu === "library"}
            onOpen={() => handleOpenMenu("library")}
            onClose={handleCloseMenu}
            items={[
              { label: "Listen by Topic", href: "/library/topic" },
              { label: "Listen by Level", href: "/library/level" },
            ]}
          />
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-blue-600 hover:text-blue-700"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
