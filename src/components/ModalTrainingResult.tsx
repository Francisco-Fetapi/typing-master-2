import React, { useContext } from "react";
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
import { TrainingContext } from "../contexts/TrainingContextProvider";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalTrainingResult() {
  const { open, handleClose } = useContext(TrainingContext);
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <DialogTitle variant="h6">Modo Treino - Resultados</DialogTitle>
        {/*         NIVEL INICIANTE          */}
        {/* Tempo decorrido: 00m:00s */}
        {/* Total de letras: 1220 */}
        {/* Total de palavras: 12 */}

        {/*         TABELA DE CLASSIFICACOES          */}
        {/* A tabela a seguir descreve o intervalo de tempo que cada nivel levaria para digitar o texto do treino. */}

        {/* NIVEL               INTERVALO DE TEMPO */}
        {/* INICIANTE           00m:00s - 00m-06s */}
        {/* INTERMEDIARIO       00m:00s - 00m-06s */}
        {/* AVANCADO            00m:00s - 00m-06s */}

        {/* Treinar novamente */}
        {/* Sair */}
        <DialogContent>
          <Text variant="subtitle2">
            <b>O Modo Treino</b> é o lugar ideal para melhorar as suas
            habilidades na arte da digitação.
          </Text>
          <Box sx={{ zoom: 0.9 }}>Ola Mundo. Conteudo.</Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Fechar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
