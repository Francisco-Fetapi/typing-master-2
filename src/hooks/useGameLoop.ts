import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Levels } from "../Levels";
import {
  selectCurrentLevel,
  selectLevelInfo,
  selectPreviousLevel,
} from "../store/App.selectors";
import { showMessageBackdrop } from "../store/App.store";
import useBackdrop from "./useBackdrop";

export default function useGameLoop() {
  const currentLevel = useSelector(selectLevelInfo);
  const previousLevel = useSelector(selectPreviousLevel);
  const dispatch = useDispatch();
  const backdrop = useBackdrop();

  useEffect(() => {
    if (previousLevel.level !== currentLevel.level) {
      console.log("Parabens");
      dispatch(
        showMessageBackdrop(
          backdrop.newLevelAchieved({
            title: `Nivel ${currentLevel.level}`,
            message: `Daqui para frente os exercicios serão mais dificeis.`,
          })
        )
      );
    }
  }, [currentLevel]);

  return {};
}
