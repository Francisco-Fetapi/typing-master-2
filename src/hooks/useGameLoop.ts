import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import {
  selectCurrentLevel,
  selectCurrentLevelInfo,
  selectPreviousLevel,
} from "../store/App.selectors";
import { resetAllState, showMessageBackdrop } from "../store/App.store";
import useBackdrop from "./useBackdrop";
import useStatePersist from "./useStatePersist";

export default function useGameLoop() {
  const level = useSelector(selectCurrentLevel);
  const currentLevel = useSelector(selectCurrentLevelInfo);
  const previousLevel = useSelector(selectPreviousLevel);
  const dispatch = useDispatch();
  const backdrop = useBackdrop();
  const backdropNewLevel = useStatePersist<string>("newLevel");
  const location = useLocation();
  const inTraining = location.pathname === "/training";

  useEffect(() => {
    if (level === 0 || inTraining) {
      return;
    }
    // console.log("current", currentLevel, "previous", previousLevel);
    if (previousLevel?.level !== currentLevel?.level) {
      if (backdropNewLevel.get() === currentLevel.level) {
        return;
      }
      backdropNewLevel.save(currentLevel.level);
      dispatch(
        showMessageBackdrop(
          backdrop.newLevelAchieved({
            title: `Nivel ${currentLevel.getLevelRoleInPortuguese()}`,
            message: `Daqui para frente os exercicios serão mais dificeis.`,
          })
        )
      );
    }
  }, [currentLevel]);

  return {};
}
