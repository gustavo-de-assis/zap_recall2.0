import { createContext, useState } from "react";

export const ScoreContext = createContext({});

export default function ScoreProvider({ children }) {
  const [score, setScore] = useState({ total: 0, right: 0 });

  const updateScore = () => {
    setScore((previousScore) => ({
      ...previousScore,
      right: previousScore.right + 1,
    }));
  };

  const setNumOfQuestions = (numOfQuestions) => {
    setScore((previousScore) => ({ ...previousScore, total: numOfQuestions }));
  };

  return (
    <ScoreContext.Provider value={{ score, updateScore, setNumOfQuestions }}>
      {children}
    </ScoreContext.Provider>
  );
}
