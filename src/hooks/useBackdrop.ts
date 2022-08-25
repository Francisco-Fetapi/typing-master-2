import { useDispatch } from "react-redux";
import * as Backdrop from "../components/GameBackdrop";
import { resetAllState } from "../store/App.store";
import useTimer from "./useTimer";

export default function useBackdrop() {
  const dispatch = useDispatch();
  const { resetTimer } = useTimer();

  const gameOverTimeLimit: Backdrop.Props = {
    title: "O Tempo se esgotou.",
    message: "Você precisa ser mais rápido para avançar para o próximo nível.",
    primaryButton: {
      text: "Tentar Novamente",
      handleClick: () => {
        dispatch(resetAllState());
        resetTimer();
      },
    },
    secondaryButton: { text: "Sair" },
    open: true,
    type: "error",
  };
  const gameOverAllWordsTyped: Backdrop.Props = {
    title: "Nivel finalizado.",
    message: "Parabéns, você terminou este nível com sucesso.",
    primaryButton: { text: "Próximo nível" },
    secondaryButton: { text: "Sair" },
    open: true,
    type: "success",
  };

  return { gameOverTimeLimit, gameOverAllWordsTyped };
}
