import { createContext, useState } from "react";

export const ScoreContext = createContext({});

export default function ScoreProvider({ children }) {
  const [score, setScore] = useState({ total: 0, right: 0 });

  const updateScore = () => {
    setScore(...score, right++);
  };

  return (
    <ScoreContext.Provider value={{ score, setScore, updateScore }}>
      {children}
    </ScoreContext.Provider>
  );
}
