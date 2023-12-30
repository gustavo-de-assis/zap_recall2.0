import { createContext, useState } from "react";

export const ButtonContext = createContext({});

export default function ButtonProvider({ children }) {
  const [buttonsState, setButtonsState] = useState({
    visibility: false,
    active: false,
  });

  const showButtons = () => {
    setButtonsState((previousButtonState) => ({
      ...previousButtonState,
      visibility: true,
    }));
  };

  const activateButtons = () => {
    setButtonsState((previousButtonState) => ({
      ...previousButtonState,
      active: true,
    }));
  };

  const deactivateButtons = () => {
    setButtonsState((previousButtonState) => ({
      ...previousButtonState,
      active: false,
    }));
  };

  const resetButtonsState = () => {
    setButtonsState({ visibility: false, active: false });
  };

  return (
    <ButtonContext.Provider
      value={{
        buttonsState,
        showButtons,
        activateButtons,
        deactivateButtons,
        resetButtonsState,
      }}
    >
      {children}
    </ButtonContext.Provider>
  );
}
