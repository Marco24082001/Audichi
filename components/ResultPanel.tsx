"use client";

import type { LessonQuestion } from "@/data/lessons";

type ResultPanelProps = {
  questions: LessonQuestion[];
  answers: Record<number, string>;
  correctness: boolean[];
};

type DiffPart = {
  text: string;
  isCorrect: boolean;
};

function buildWordDiff(userAnswer: string, correctAnswer: string): DiffPart[] {
  const userWords = userAnswer.trim().split(/\s+/).filter(Boolean);
  const answerWords = correctAnswer.trim().split(/\s+/).filter(Boolean);
  const maxLength = Math.max(userWords.length, answerWords.length);
  const parts: DiffPart[] = [];

  for (let index = 0; index < maxLength; index += 1) {
    const userWord = userWords[index] ?? "";
    const answerWord = answerWords[index] ?? "";
    const isCorrect = userWord.toLowerCase() === answerWord.toLowerCase();
    parts.push({
      text: userWord || "(missing)",
      isCorrect,
    });
  }

  return parts;
}

export function ResultPanel({
  questions,
  answers,
  correctness,
}: ResultPanelProps) {
  const score = correctness.filter(Boolean).length;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-bold text-slate-900">
        Score: {score} / {questions.length}
      </h3>
      <div className="mt-4 space-y-3">
        {questions.map((question, index) => (
          <div
            key={`${question.question}-${index}`}
            className={`rounded-lg border px-3 py-2 text-sm ${
              correctness[index]
                ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                : "border-red-200 bg-red-50 text-red-700"
            }`}
          >
            <p className="font-medium whitespace-pre-line">{question.question}</p>
            <p className="mt-1">
              Your answer: <span className="font-semibold">{answers[index] || "(empty)"}</span>
            </p>

            {["dictation", "gap-fill"].includes(question.type) && !correctness[index] ? (
              <p className="mt-2 leading-7">
                {buildWordDiff(answers[index] ?? "", question.answer).map((part, partIndex) => (
                  <span
                    key={`${part.text}-${partIndex}`}
                    className={`mr-1 rounded px-1 py-0.5 ${
                      part.isCorrect
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {part.text}
                  </span>
                ))}
              </p>
            ) : null}

            {!correctness[index] ? (
              <p className="mt-1">Correct answer: {question.answer}</p>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
