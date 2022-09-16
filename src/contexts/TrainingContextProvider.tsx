import { createContext, useState } from "react";

interface IContext {
  handleClose?(): void;
  handleOpen?(): void;
  open?: boolean;
}

interface Props {
  children: React.ReactNode;
}

export const TrainingContext = createContext<IContext>({});

export default function TrainingContextProvider({ children }: Props) {
  const [state, setState] = useState({
    open: false,
  });

  const initialState: IContext = {
    ...state,
    handleClose() {
      setState((prev) => ({ ...prev, open: false }));
    },
    handleOpen() {
      setState((prev) => ({ ...prev, open: false }));
    },
  };

  return (
    <TrainingContext.Provider value={initialState}>
      {children}
    </TrainingContext.Provider>
  );
}
