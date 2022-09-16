import { createContext, useState } from "react";

interface IContext {
  handleClose(): void;
  handleOpen(): void;
  open: boolean;
}

interface Props {
  children: React.ReactNode;
}

const initialState: IContext = {
  open: false,
  handleClose() {},
  handleOpen() {},
};

export const TrainingContext = createContext<IContext>(initialState);

export default function TrainingContextProvider({ children }: Props) {
  const [state, setState] = useState(initialState);

  const value: IContext = {
    ...state,
    handleClose() {
      setState((prev) => ({ ...prev, open: false }));
    },
    handleOpen() {
      setState((prev) => ({ ...prev, open: true }));
    },
  };

  return (
    <TrainingContext.Provider value={value}>
      {children}
    </TrainingContext.Provider>
  );
}
