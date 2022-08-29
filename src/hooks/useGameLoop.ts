import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Levels } from "../Levels";
import {
  selectCurrentLevel,
  selectCurrentLevelInfo,
  selectPreviousLevel,
} from "../store/App.selectors";
import { showMessageBackdrop } from "../store/App.store";
import useBackdrop from "./useBackdrop";
import useStatePersist from "./useStatePersist";

export default function useGameLoop() {
  const currentLevel = useSelector(selectCurrentLevelInfo);
  const previousLevel = useSelector(selectPreviousLevel);
  const dispatch = useDispatch();
  const backdrop = useBackdrop();
  const backdropNewLevel = useStatePersist<string>("newLevel");

  useEffect(() => {
    console.log(currentLevel, previousLevel);
    if (previousLevel.level !== currentLevel.level) {
      if (backdropNewLevel.get()) {
        return;
      }
      backdropNewLevel.save("true");
      console.log("Parabens");
      dispatch(
        showMessageBackdrop(
          backdrop.newLevelAchieved({
            title: `Nivel ${currentLevel.getLevelRoleInPortuguese()}`,
            message: `Daqui para frente os exercicios serão mais dificeis.`,
          })
        )
      );
    } else {
      backdropNewLevel.save("false");
    }
  }, [currentLevel]);

  return {};
}
