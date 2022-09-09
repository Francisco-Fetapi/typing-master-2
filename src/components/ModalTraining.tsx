import * as React from "react";
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
  open: boolean;
}

export default function ModalTraining({ handleClose, open }: Props) {
  const navigate = useNavigate();
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <DialogTitle variant="h6">TYPING MASTER - MODO TREINO</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <b>O Modo Treino</b> é o lugar ideal para melhorar as suas
            habilidades na arte da digitação.
          </DialogContentText>
          <Box sx={{ zoom: 0.9 }}>
            <TrainingMode
              title="GERAR FRASES ALEATÓRIAS"
              content="Neste modo as frases são geradas automaticamente"
              handleSelected={() => navigate("/training")}
            />
            <TrainingMode
              title="FRASE PERSONALIZADA"
              content="No modo personalizado você pode digitar a frase a ser usada no treino."
              handleSelected={() => null}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Fechar</Button>
        </DialogActions>
      </Dialog>
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
        <Text>{content}</Text>
      </Box>
      <Box mt={1}>
        <Stack justifyContent="center">
          <Button onClick={handleSelected}>Escolher esse modo</Button>
        </Stack>
      </Box>
    </Box>
  );
}
