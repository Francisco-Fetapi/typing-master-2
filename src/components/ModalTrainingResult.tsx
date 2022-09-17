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

const RowTitleLevels = (
  <React.Fragment>
    <TableCell>Nivel</TableCell>
    <TableCell align="right">Intervalo de Tempo</TableCell>
  </React.Fragment>
);

export default function ModalTrainingResult() {
  const { open, handleClose } = useContext(TrainingContext);
  const time = useSelector(selectTimer);
  const phrase = useSelector(selectPhraseTraining);
  const intervalTimePerLevel = phrase.showIntervalTimeByLevel();
  const myLevel = phrase.defineLevelByTimeAndNumLetters(time || 0);

  const RowDataLevels = (
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
              {TrainingPhrase.rolesInPortuguese[role].toUpperCase()}
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
        <DialogTitle variant="h6">RESULTADOS DO TREINO</DialogTitle>
        {/*         NIVEL INICIANTE          */}
        {/* Tempo decorrido: 00m:00s */}
        {/* Total de letras: 1220 */}
        {/* Total de palavras: 12 */}

        {/* Treinar novamente */}
        {/* Sair */}
        <DialogContent>
          <TableDescription
            title="TABELA DE NÍVEIS"
            description="A tabela a seguir descreve o intervalo de tempo que cada nivel
            levaria para digitar o texto do treino."
          >
            <TableSimple headTitle={RowTitleLevels} rows={RowDataLevels} />
          </TableDescription>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Fechar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

interface TableDescriptionProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

function TableDescription({
  title,
  description,
  children,
}: TableDescriptionProps) {
  return (
    <React.Fragment>
      <Box mt={1} mb={1}>
        <Box mb={0.7}>
          <Text align="center" fontWeight="bold">
            {title}
          </Text>
        </Box>
        {children}
      </Box>
      <Text variant="subtitle2">{description}</Text>
    </React.Fragment>
  );
}
