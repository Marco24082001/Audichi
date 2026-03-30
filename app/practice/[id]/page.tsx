"use client";

import { AudioPlayer } from "@/components/AudioPlayer";
import { ExerciseRenderer } from "@/components/ExerciseRenderer";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ResultPanel } from "@/components/ResultPanel";
import { lessons, type LessonQuestion } from "@/data/lessons";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useMemo, useState } from "react";

function defaultQuestions(): LessonQuestion[] {
  return [
    {
      type: "multiple-choice",
      question: "Choose the best answer based on the audio.",
      options: ["A", "B", "C", "D"],
      answer: "A",
    },
    {
      type: "gap-fill",
      question: "Fill in the missing word: We ____ English every day.",
      answer: "study",
    },
    {
      type: "dictation",
      question: "Type what you hear.",
      answer: "sample answer",
    },
  ];
}

export default function PracticePage() {
  const params = useParams<{ id: string }>();
  const lesson = lessons.find((item) => item.id === params.id);
  const questions = useMemo(
    () =>
      lesson?.questions && lesson.questions.length > 0
        ? lesson.questions
        : defaultQuestions(),
    [lesson]
  );

  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [correctness, setCorrectness] = useState<boolean[] | null>(null);

  if (!lesson) {
    return (
      <div className="flex min-h-screen flex-col bg-slate-50">
        <Navbar />
        <main className="mx-auto w-full max-w-[900px] flex-1 px-4 py-12 sm:px-6">
          <h1 className="text-3xl font-extrabold text-slate-900">Lesson not found</h1>
          <Link
            href="/lessons"
            className="mt-6 inline-flex rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Back to Lessons
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const checkAnswers = () => {
    const evaluation = questions.map((question, index) => {
      const userValue = (answers[index] ?? "").trim().toLowerCase();
      const answerValue = question.answer.trim().toLowerCase();
      return userValue === answerValue;
    });
    setCorrectness(evaluation);
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />
      <main className="mx-auto w-full max-w-[900px] flex-1 px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          {lesson.title}
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Questions: <span className="font-medium">{questions.length}</span>
        </p>

        <section className="mt-6">
          <AudioPlayer audioUrl={lesson.audioUrl ?? "/audio/default.mp3"} />
        </section>

        <section className="mt-6">
          <ExerciseRenderer
            questions={questions}
            answers={answers}
            onAnswerChange={(index, value) =>
              setAnswers((prev) => ({ ...prev, [index]: value }))
            }
          />
        </section>

        <button
          type="button"
          onClick={checkAnswers}
          className="mt-6 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
        >
          Check Answers
        </button>

        {correctness ? (
          <section className="mt-6">
            <ResultPanel
              questions={questions}
              answers={answers}
              correctness={correctness}
            />
          </section>
        ) : null}
      </main>
      <Footer />
    </div>
  );
}
