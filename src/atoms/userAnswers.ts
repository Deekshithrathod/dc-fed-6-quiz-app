import { atom, selector } from "recoil";

export interface IUserAnswer {
  questionIndex: number;
  correctAnswer: string;
  answered: "right" | "wrong";
}

export const userAnswers = atom<IUserAnswer[]>({
  key: "userAnswers",
  default: [],
});

export const rightAnswersCount = selector({
  key: "rightAnswersCount",
  get: ({ get }) => {
    const allAnswers = get(userAnswers);

    let count = 0;
    for (let ans of allAnswers) {
      if (ans.answered === "right") {
        count++;
      }
    }

    return count;
  },
});
