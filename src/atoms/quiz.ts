import { atom, selector } from "recoil";
import { IQuestion } from "../components/Question/Question";
import quizlets from "../utils/quizlets.json";

interface IQuizlet extends IQuestion {
  options: string[];
  correctAnswer: string;
}

export const quiz = atom<IQuizlet[]>({
  key: "quiz",
  default: quizlets as IQuizlet[],
});

export const currQuestionIndex = atom<number>({
  key: "currQuestionIndex",
  default: 0,
});

export const currQuestion = selector({
  key: "currQuestion",
  get: ({ get }) => {
    const currIndex = get(currQuestionIndex);
    const allQuizlets = get(quiz);

    if (currIndex < quizlets.length) {
      return allQuizlets[currIndex];
    }

    return `ITS_OVER_KID`;
  },
});
