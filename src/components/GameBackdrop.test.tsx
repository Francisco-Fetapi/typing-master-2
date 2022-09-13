// Imports
import { useEffect } from "react";
import { render } from "@testing-library/react";
import user from "@testing-library/user-event";
import { useDispatch, useSelector } from "react-redux";
import useBackdrop from "../hooks/useBackdrop";
import { selectBackdropInfo } from "../store/App.selectors";
import { AppSetup } from "../test";
import GameBackdrop from "./GameBackdrop";
import { hideMessageBackdrop, showMessageBackdrop } from "../store/App.store";

function GameWrapper() {
  const { allLevelsFinished } = useBackdrop();
  const dispatch = useDispatch();
  const backdrop = useSelector(selectBackdropInfo);

  useEffect(() => {
    dispatch(showMessageBackdrop(allLevelsFinished));
  }, []);
  return (
    <div>
      {backdrop.open && <GameBackdrop {...backdrop} />}
      <button onClick={() => dispatch(hideMessageBackdrop())}>Fechar</button>
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
  test("it should closed", async () => {
    const { getByText, queryByText } = render(
      <AppSetup>
        <GameWrapper />
      </AppSetup>
    );

    const btnClose = getByText("Fechar");
    await user.click(btnClose);
    expect(queryByText("Jogo Finalizado")).not.toBeInTheDocument();
  });
});
