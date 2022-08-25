import { useDispatch, useSelector } from "react-redux";
import * as Backdrop from "../components/GameBackdrop";
import { selectTimeLimit } from "../store/App.selectors";
import { resetAllState, setTimer } from "../store/App.store";

export default function useBackdrop() {
  const timeLimit = useSelector(selectTimeLimit);
  const dispatch = useDispatch();

  function resetTimer() {
    dispatch(setTimer(timeLimit));
  }

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
