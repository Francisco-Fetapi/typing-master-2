// Imports
import { useEffect } from "react";
import { render } from "@testing-library/react";
import { useDispatch, useSelector } from "react-redux";
import useBackdrop from "../hooks/useBackdrop";
import { selectBackdropInfo } from "../store/App.selectors";
import { AppSetup } from "../test";
import GameBackdrop from "./GameBackdrop";
import { showMessageBackdrop } from "../store/App.store";

function GameWrapper() {
  const { allLevelsFinished } = useBackdrop();
  const dispatch = useDispatch();
  const backdrop = useSelector(selectBackdropInfo);

  useEffect(() => {
    dispatch(showMessageBackdrop(allLevelsFinished));
  }, []);
  return (
    <div>
      <GameBackdrop {...backdrop} />
    </div>
  );
}

describe("GameBackdrop", () => {
  test("it should renders correctly", async () => {
    const { getByText } = render(
      <AppSetup>
        <GameWrapper />
      </AppSetup>
    );

    expect(getByText("Jogo Finalizado")).toBeInTheDocument();
  });
});
