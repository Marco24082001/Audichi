export type Grade10LessonItem =
  | {
      kind: "unit";
      unit: number;
      title: string;
    }
  | {
      kind: "review";
      review: number;
      title: string;
    };

export const grade10LessonFlow: Grade10LessonItem[] = [
  { kind: "unit", unit: 1, title: "Family Life" },
  { kind: "unit", unit: 2, title: "Entertainment and Leisure" },
  { kind: "unit", unit: 3, title: "Shopping" },
  { kind: "review", review: 1, title: "Review 1" },
  { kind: "unit", unit: 4, title: "International Organizations and Charities" },
  { kind: "unit", unit: 5, title: "Gender Equality" },
  { kind: "review", review: 2, title: "Review 2" },
  { kind: "unit", unit: 6, title: "Community Life" },
  { kind: "unit", unit: 7, title: "Inventions" },
  { kind: "unit", unit: 8, title: "Ecology and the Environment" },
  { kind: "review", review: 3, title: "Review 3" },
  { kind: "unit", unit: 9, title: "Travel and Tourism" },
  { kind: "unit", unit: 10, title: "New Ways to Learn" },
  { kind: "review", review: 4, title: "Review 4" },
];
