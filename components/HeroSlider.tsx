"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    image: "/images/image-slider-1.jpg",
    alt: "Students learning English together",
  },
  {
    id: 2,
    image: "/images/image-slider-2.jpg",
    alt: "Listening practice with headphones",
  },
  {
    id: 3,
    image: "/images/image-slider-3.jpg",
    alt: "Classroom study and collaboration",
  },
];

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToPrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % slides.length);

  return (
    <section className="relative overflow-hidden rounded-2xl px-4 pt-6 sm:px-6 sm:pt-8">
      <div className="relative h-[450px] overflow-hidden rounded-2xl">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <Image src={slide.image} alt={slide.alt} fill className="object-cover" priority={index === 0} />
          </div>
        ))}

        <div className="absolute inset-0 bg-slate-900/45" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            Tuning your ears to the world
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-slate-100 sm:text-lg">
            Practice English listening through interactive exercises.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/lessons"
              className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Start Learning
            </Link>
            <Link
              href="/lessons"
              className="rounded-full border border-white/80 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20"
            >
              Browse Lessons
            </Link>
          </div>
        </div>

        <button
          type="button"
          onClick={goToPrev}
          className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full bg-white/85 p-2 text-slate-700 shadow transition-colors hover:bg-white"
          aria-label="Previous slide"
        >
          ←
        </button>
        <button
          type="button"
          onClick={goToNext}
          className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full bg-white/85 p-2 text-slate-700 shadow transition-colors hover:bg-white"
          aria-label="Next slide"
        >
          →
        </button>

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                index === currentIndex ? "bg-white" : "bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
