import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

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
    onMount() {},
  };

  const increaseLevelOnMount = function () {
    const currentLevel = useStatePersist<number>(
      CURRENT_LEVEL_KEY_IN_LOCALSTORAGE
    );
    const level = currentLevel.get() + 1;
    currentLevel.save(level);
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
      increaseLevelOnMount();
    },
  };
  const newLevelAchieved = (props: Partial<Backdrop.Props>): Backdrop.Props =>
    Object.assign(
      {
        title: "",
        message: "",
        primaryButton: {
          text: "Começar agora",
          handleClick() {},
        },
        secondaryButton: { text: "Sair" },
        open: true,
        type: "success",
        onMount() {
          increaseLevelOnMount();
        },
      },
      props
    );

  const allLevelsFinished: Backdrop.Props = {
    title: "Jogo Finalizado",
    message:
      "Todos os niveis do jogo foram completamente finalizados, agora você é um Typing Master.",
    primaryButton: {
      text: "Ir para o Treino",
      handleClick: () => {
        navigate("/training", { replace: true });
      },
    },
    secondaryButton: { text: "Sair" },
    open: true,
    type: "success",
    onMount() {},
  };

  return {
    gameOverTimeLimit,
    gameOverAllWordsTyped,
    newLevelAchieved,
    allLevelsFinished,
  };
}
