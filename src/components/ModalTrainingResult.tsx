import React, { useContext } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Box, Stack, TableCell, TableRow } from "@mui/material";
import { Text } from "../styles/General";
import { TrainingContext } from "../contexts/TrainingContextProvider";
import TableSimple from "./TableSimple";
import { useSelector } from "react-redux";
import { ILevel } from "../Levels";
import {
  selectCurrentLevelInfo,
  selectPhraseTraining,
  selectTimer,
} from "../store/App.selectors";
import { TrainingPhrase } from "../TrainingPhrases";
import { timeTransformer2 } from "../helpers/timeTransformer";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const rowsLevel = Object.keys(TrainingPhrase.levelRoles).reverse() as ILevel[];

const RowTitle = (
  <React.Fragment>
    <TableCell>Nivel</TableCell>
    <TableCell align="right">Intervalo</TableCell>
  </React.Fragment>
);

export default function ModalTrainingResult() {
  const { open, handleClose } = useContext(TrainingContext);
  const time = useSelector(selectTimer);
  const phrase = useSelector(selectPhraseTraining);
  const intervalTimePerLevel = phrase.showIntervalTimeByLevel();
  const myLevel = phrase.defineLevelByTimeAndNumLetters(time || 0);

  const RowData = (
    <React.Fragment>
      {rowsLevel.map((role, key) => {
        const level = intervalTimePerLevel[role]!;
        return (
          <TableRow
            sx={(theme) => ({
              background:
                myLevel === role ? theme.palette.primary.main : undefined,
            })}
          >
            <TableCell
              component="th"
              scope="row"
              sx={{ color: myLevel === role ? "#F0F0F0" : undefined }}
            >
              {TrainingPhrase.rolesInPortuguese[role]}
            </TableCell>
            <TableCell
              align="right"
              sx={{ color: myLevel === role ? "#F0F0F0" : undefined }}
            >
              <i>
                {timeTransformer2(level.from)} - {timeTransformer2(level.to)}
              </i>
            </TableCell>
          </TableRow>
        );
      })}
    </React.Fragment>
  );

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        maxWidth="md"
        PaperProps={{
          sx: { maxHeight: "100%" },
        }}
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

          <Box mt={2}>
            <TableSimple headTitle={RowTitle} rows={RowData} />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Fechar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
