export type LessonLevel = "A1" | "A2" | "B1";
export type ExerciseType = "gap-fill" | "dictation" | "multiple-choice";
export type LessonSource = "textbook" | "workbook" | "library";
export type LessonQuestion = {
  type: ExerciseType;
  question: string;
  options?: string[];
  answer: string;
};

export type Lesson = {
  id: string;
  title: string;
  source: LessonSource;
  grade?: number;
  unit?: number;
  review?: number;
  topic?: string;
  level?: LessonLevel;
  audioUrl?: string;
  questions?: LessonQuestion[];
};

export const lessons: Lesson[] = [
  {
    id: "lesson-1",
    title: "Unit 1 - Family Life",
    source: "textbook",
    grade: 10,
    unit: 1,
    level: "A2",
    audioUrl: "/audio/multiple-choice.mp3",
    questions: [
      {
        type: "multiple-choice",
        question: "In what year was the first text message sent?",
        options: ["1992", "1882"],
        answer: "1992",
      },
      {
        type: "multiple-choice",
        question: "What did it say?",
        options: ["Merry Christmas", "Happy Birthday"],
        answer: "Merry Christmas",
      },
      {
        type: "multiple-choice",
        question: "Why wasn't SMS popular at first?",
        options: ["Cell phones were expensive.", "Cell phones didn't send messages."],
        answer: "Cell phones were expensive.",
      },
      {
        type: "multiple-choice",
        question: "In 2012, how many text messages did American teenagers send a day?",
        options: ["16", "60"],
        answer: "60",
      },
      {
        type: "multiple-choice",
        question: "What do parents think texting makes teenagers become?",
        options: ["lazy", "bad writers"],
        answer: "bad writers",
      },
    ],
  },
  {
    id: "lesson-2",
    title: "Unit 2 - Entertainment and Leisure",
    source: "textbook",
    grade: 10,
    unit: 2,
    level: "A1",
    audioUrl: "/audio/gap-fill.mp3",
    questions: [
      {
        type: "gap-fill",
        question: "What did Jayden promise to do on Saturday morning? \n He promised to take his sister to the ____",
        answer: "park",
      },
      {
        type: "gap-fill",
        question: "Why is Jayden busy on Saturday afternoon? \n His mom ____ to have dinner at his grandparent's house.",
        answer: "offered",
      }
    ],
  },
  {
    id: "lesson-11",
    title: "Unit 3 - Shopping",
    source: "textbook",
    grade: 10,
    unit: 3,
    level: "A2",
    audioUrl: "/audio/multiple-choice.mp3",
    questions: [
      {
        type: "multiple-choice",
        question: "In what year was the first text message sent?",
        options: ["1992", "1882", "1997", "1999"],
        answer: "1992",
      },
    ],
  },
  {
    id: "lesson-12",
    title: "Unit 4 - International Organizations and Charities",
    source: "textbook",
    grade: 10,
    unit: 4,
    level: "B1",
  },
  {
    id: "lesson-13",
    title: "Unit 5 - Gender Equality",
    source: "textbook",
    grade: 10,
    unit: 5,
    level: "B1",
  },
  {
    id: "lesson-14",
    title: "Unit 6 - Community Life",
    source: "textbook",
    grade: 10,
    unit: 6,
    level: "B1",
    audioUrl: "/audio/multiple-choice.mp3",
    questions: [
      {
        type: "multiple-choice",
        question: "In what year was the first text message sent?",
        options: ["1992", "1882", "1997", "1999"],
        answer: "1992",
      },
    ],
  },
  {
    id: "lesson-15",
    title: "Unit 7 - Inventions",
    source: "textbook",
    grade: 10,
    unit: 7,
    level: "B1",
  },
  {
    id: "lesson-16",
    title: "Unit 8 - Ecology and the Environment",
    source: "textbook",
    grade: 10,
    unit: 8,
    level: "A2",
  },
  {
    id: "lesson-17",
    title: "Unit 9 - Travel and Tourism",
    source: "textbook",
    grade: 10,
    unit: 9,
    level: "B1",
    audioUrl: "/audio/multiple-choice.mp3",
    questions: [
      {
        type: "multiple-choice",
        question: "In what year was the first text message sent?",
        options: ["1992", "1882", "1997", "1999"],
        answer: "1992",
      },
    ],
  },
  {
    id: "lesson-18",
    title: "Unit 10 - New Ways to Learn",
    source: "textbook",
    grade: 10,
    unit: 10,
    level: "B1",
  },
  {
    id: "lesson-33",
    title: "Review 1 - Foundation Listening Practice",
    source: "textbook",
    grade: 10,
    review: 1,
    level: "A2",
    audioUrl: "/audio/multiple-choice.mp3",
    questions: [
      {
        type: "multiple-choice",
        question: "In what year was the first text message sent?",
        options: ["1992", "1882", "1997", "1999"],
        answer: "1992",
      },
    ],
  },
  {
    id: "lesson-27",
    title: "Review 2 - Mixed Skills Listening",
    source: "textbook",
    grade: 10,
    review: 2,
    level: "B1",
    audioUrl: "/audio/multiple-choice.mp3",
    questions: [
      {
        type: "multiple-choice",
        question: "In what year was the first text message sent?",
        options: ["1992", "1882", "1997", "1999"],
        answer: "1992",
      },
    ],
  },
  {
    id: "lesson-28",
    title: "Review 3 - Consolidation Dictation",
    source: "textbook",
    grade: 10,
    review: 3,
    level: "B1",
  },
  {
    id: "lesson-29",
    title: "Review 4 - Final Listening Check",
    source: "textbook",
    grade: 10,
    review: 4,
    level: "B1",
  },
  {
    id: "lesson-3",
    title: "Workbook Unit 1 - Family Life",
    source: "workbook",
    grade: 10,
    unit: 1,
    level: "B1",
    audioUrl: "/audio/multiple-choice.mp3",
    questions: [
      {
        type: "multiple-choice",
        question: "In what year was the first text message sent?",
        options: ["1992", "1882", "1997", "1999"],
        answer: "1992",
      },
    ],
  },
  {
    id: "lesson-4",
    title: "Workbook Unit 2 - Entertainment and Leisure",
    source: "workbook",
    grade: 10,
    unit: 2,
    level: "B1",
  },
  {
    id: "lesson-19",
    title: "Workbook Unit 3 - Shopping Comprehension",
    source: "workbook",
    grade: 10,
    unit: 3,
    level: "A2",
  },
  {
    id: "lesson-20",
    title: "Workbook Unit 4 - International Organizations and Charities",
    source: "workbook",
    grade: 10,
    unit: 4,
    level: "B1",
    audioUrl: "/audio/multiple-choice.mp3",
  },
  {
    id: "lesson-21",
    title: "Workbook Unit 5 - Gender Equality Stories",
    source: "workbook",
    grade: 10,
    unit: 5,
    level: "B1",
  },
  {
    id: "lesson-22",
    title: "Workbook Unit 6 - Community Life",
    source: "workbook",
    grade: 10,
    unit: 6,
    level: "B1",
  },
  {
    id: "lesson-23",
    title: "Workbook Unit 7 - Inventions",
    source: "workbook",
    grade: 10,
    unit: 7,
    level: "A2",
    audioUrl: "/audio/multiple-choice.mp3",
  },
  {
    id: "lesson-24",
    title: "Workbook Unit 8 - Ecology and the Environment",
    source: "workbook",
    grade: 10,
    unit: 8,
    level: "A2",
  },
  {
    id: "lesson-25",
    title: "Workbook Unit 9 - Travel and Tourism",
    source: "workbook",
    grade: 10,
    unit: 9,
    level: "B1",
  },
  {
    id: "lesson-26",
    title: "Workbook Unit 10 - New Ways to Learn",
    source: "workbook",
    grade: 10,
    unit: 10,
    level: "B1",
    audioUrl: "/audio/multiple-choice.mp3",
  },
  {
    id: "lesson-34",
    title: "Workbook Review 1 - Starter Review",
    source: "workbook",
    grade: 10,
    review: 1,
    level: "A2",
  },
  {
    id: "lesson-30",
    title: "Workbook Review 2 - Practice Set",
    source: "workbook",
    grade: 10,
    review: 2,
    level: "A2",
  },
  {
    id: "lesson-31",
    title: "Workbook Review 3 - Listening Booster",
    source: "workbook",
    grade: 10,
    review: 3,
    level: "B1",
    audioUrl: "/audio/multiple-choice.mp3",
  },
  {
    id: "lesson-32",
    title: "Workbook Review 4 - Final Drill",
    source: "workbook",
    grade: 10,
    review: 4,
    level: "B1",
  },
  {
    id: "lesson-5",
    title: "Environment News Listening",
    source: "library",
    topic: "environment",
    level: "B1",
  },
  {
    id: "lesson-6",
    title: "Technology Trends Listening",
    source: "library",
    topic: "gender-equality",
    level: "A2",
    audioUrl: "/audio/multiple-choice.mp3",
  },
  {
    id: "lesson-7",
    title: "School Life Conversation",
    source: "library",
    topic: "school-life",
    level: "A1",
  },
  {
    id: "lesson-8",
    title: "Healthy Habits Podcast",
    source: "library",
    topic: "world-heritages",
    level: "A2",
  },
  {
    id: "lesson-9",
    title: "Travel Plans Dialogue",
    source: "library",
    topic: "travel",
    level: "B1",
    audioUrl: "/audio/multiple-choice.mp3",
  },
  {
    id: "lesson-10",
    title: "Future Jobs Interview",
    source: "library",
    topic: "independent-life",
    level: "B1",
  },
];

export const featuredLessons: Lesson[] = lessons.slice(0, 3);
