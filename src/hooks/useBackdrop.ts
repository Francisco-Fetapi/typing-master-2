import { useDispatch, useSelector } from "react-redux";
import * as Backdrop from "../components/GameBackdrop";
import { selectTimeLimit } from "../store/App.selectors";
import {
  CURRENT_LEVEL_KEY_IN_LOCALSTORAGE,
  increaseLevel,
  resetAllState,
  setTimer,
} from "../store/App.store";
import useStatePersist from "./useStatePersist";

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
    primaryButton: {
      text: "Próximo nível",
      handleClick() {
        dispatch(increaseLevel());
      },
    },
    secondaryButton: { text: "Sair" },
    open: true,
    type: "success",
    onMount() {
      const { save, get } = useStatePersist<number>(
        CURRENT_LEVEL_KEY_IN_LOCALSTORAGE
      );
      const currentLevel = get() + 1;
      save(currentLevel);
    },
  };
  const newLevelAchieved = (props: Partial<Backdrop.Props>): Backdrop.Props =>
    Object.assign(
      {
        title: "",
        message: "",
        primaryButton: {
          text: "Começar agora",
        },
        secondaryButton: { text: "Sair" },
        open: true,
        type: "success",
        onMount() {
          const { save, get } = useStatePersist<number>(
            CURRENT_LEVEL_KEY_IN_LOCALSTORAGE
          );
          const currentLevel = get() + 1;
          save(currentLevel);
        },
      },
      props
    );

  return { gameOverTimeLimit, gameOverAllWordsTyped, newLevelAchieved };
}
