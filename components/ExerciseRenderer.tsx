"use client";

import type { LessonQuestion } from "@/data/lessons";

type ExerciseRendererProps = {
  questions: LessonQuestion[];
  answers: Record<number, string>;
  onAnswerChange: (index: number, value: string) => void;
};

export function ExerciseRenderer({
  questions,
  answers,
  onAnswerChange,
}: ExerciseRendererProps) {
  return (
    <div className="space-y-4">
      {questions.map((item, index) => (
        <div
          key={`${item.question}-${index}`}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <p className="text-sm font-medium whitespace-pre-line text-slate-800">
            {item.question}
          </p>

          {item.type === "gap-fill" ? (
            <input
              value={answers[index] ?? ""}
              onChange={(event) => onAnswerChange(index, event.target.value)}
              className="mt-3 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-500"
              placeholder="Type your answer..."
            />
          ) : item.type === "dictation" ? (
            <textarea
              value={answers[index] ?? ""}
              onChange={(event) => onAnswerChange(index, event.target.value)}
              rows={5}
              className="mt-3 w-full rounded-xl border border-slate-300 bg-white p-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-500"
              placeholder="Write your dictation answer here..."
            />
          ) : (
            <div className="mt-3 grid gap-2">
              {(item.options ?? []).map((option) => (
                <label
                  key={option}
                  className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 hover:bg-slate-50"
                >
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    checked={answers[index] === option}
                    onChange={(event) => onAnswerChange(index, event.target.value)}
                  />
                  {option}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
