import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Box, Stack } from "@mui/material";
import { Text } from "../styles/General";
import { useNavigate } from "react-router-dom";
import ModalTrainingMyPhrase from "./ModalTrainingMyPhrase";
import useBoolean from "../hooks/useBoolean";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface Props {
  handleClose(): void;
  handleOpen(): void;
  open: boolean;
}

export default function ModalTraining({
  handleClose,
  open,
  handleOpen,
}: Props) {
  const navigate = useNavigate();
  const modal = useBoolean();

  useEffect(() => {
    if (open) handleClose();
    else handleOpen();
  }, [modal.open]);
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <DialogTitle variant="h6">MODO TREINO</DialogTitle>
        <DialogContent>
          <Text variant="subtitle2">
            <b>O Modo Treino</b> é o lugar ideal para melhorar as suas
            habilidades na arte da digitação.
          </Text>
          <Box sx={{ zoom: 0.9 }}>
            <TrainingMode
              title="GERAR FRASES ALEATÓRIAS"
              content="Neste modo as frases são geradas automaticamente"
              handleSelected={() => navigate("/training")}
            />
            <TrainingMode
              title="FRASE PERSONALIZADA"
              content="No modo personalizado você pode digitar a frase a ser usada no treino."
              handleSelected={() => modal.handleOpen()}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Fechar</Button>
        </DialogActions>
      </Dialog>
      <ModalTrainingMyPhrase {...modal} />
    </div>
  );
}

interface TrainingModeProps {
  title: string;
  content: string;
  handleSelected(): void;
}

function TrainingMode({ title, content, handleSelected }: TrainingModeProps) {
  return (
    <Box mt={2}>
      <Text variant="body1" fontWeight={700}>
        {title}
      </Text>
      <Box mt={0.4}>
        <Text color="GrayText">{content}</Text>
      </Box>
      <Box mt={1}>
        <Stack justifyContent="center">
          <Button onClick={handleSelected}>Escolher esse modo</Button>
        </Stack>
      </Box>
    </Box>
  );
}
