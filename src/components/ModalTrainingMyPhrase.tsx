import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Box, TextField } from "@mui/material";
import { Text } from "../styles/General";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { TrainingPhrase } from "../TrainingPhrases";
import { setPhraseToTrain } from "../store/App.store";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

interface Props {
  handleClose(): void;
  open: boolean;
}

export default function ModalTrainingMyPhrase({ handleClose, open }: Props) {
  const [value, setValue] = React.useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  function done() {
    const phrase = new TrainingPhrase(value);
    phrase.choosedByUser = true;
    dispatch(setPhraseToTrain(phrase));
    navigate("/training");
  }
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <DialogTitle variant="h6">FRASE PERSONALIZADA</DialogTitle>
        <DialogContent>
          <Text variant="subtitle2">
            NOTA: O sistema irá calcular o tempo minimo de escrita dessa frase
            para cada um dos niveis disponiveis.
          </Text>
          <Box mt={2}>
            <TextField
              placeholder="Digite alguma frase aqui..."
              //   label="Multiline"
              fullWidth
              multiline
              rows={4}
              value={value}
              onChange={handleChange}
              variant="standard"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={done}>Concluir</Button>
          <Button onClick={handleClose}>Fechar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
