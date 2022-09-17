// Imports
// import { useEffect } from "react";
import { render } from "@testing-library/react";
import { useSelector } from "react-redux";
import { selectWordToType } from "../store/App.selectors";
import user from "@testing-library/user-event";
import { AppSetup } from "../test";
import ModalTraining from "./ModalTraining";
import useBoolean from "../hooks/useBoolean";
import { useEffect } from "react";

function ModalTrainingWrapper() {
  const modalTrain = useBoolean();

  useEffect(() => {
    modalTrain.handleOpen();
  }, []);

  return (
    <div>
      {modalTrain.open && <ModalTraining {...modalTrain} />}
      <button onClick={modalTrain.handleOpen}>Abrir</button>
    </div>
  );
}

describe("ModalTraining", () => {
  test("it should renders correctly", async () => {
    const { getByText } = render(
      <AppSetup>
        <ModalTrainingWrapper />
      </AppSetup>
    );
    expect(getByText("MODO TREINO")).toBeInTheDocument();
  });
  test("it should be able to open and close", async () => {
    const { getByText, queryByText } = render(
      <AppSetup>
        <ModalTrainingWrapper />
      </AppSetup>
    );
    const btnOpen = getByText("Abrir");
    const btnClose = getByText("Fechar");

    await user.click(btnClose);
    expect(queryByText("TYPING MASTER - MODO TREINO")).not.toBeInTheDocument();
    await user.click(btnOpen);
    expect(queryByText("TYPING MASTER - MODO TREINO")).toBeInTheDocument();
  });
});
