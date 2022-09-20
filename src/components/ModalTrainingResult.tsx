import React, { useContext, useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { ILevel } from "../Level";
import { selectPhraseTraining, selectTimer } from "../store/App.selectors";
import { TrainingPhrase } from "../TrainingPhrases";
import { timeTransformer2 } from "../helpers/timeTransformer";
import { useNavigate } from "react-router-dom";
import {
  chooseRandomPhraseToTrain,
  clearTypedWords,
  hideMessageBackdrop,
  pauseTimer,
  setTimer,
} from "../store/App.store";

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

const RowTitleTrainingData = (
  <React.Fragment>
    <TableCell align="center" colSpan={2}>
      Dados do Treino
    </TableCell>
  </React.Fragment>
);

export default function ModalTrainingResult() {
  const { open, handleClose } = useContext(TrainingContext);
  const time = useSelector(selectTimer);
  const phrase = useSelector(selectPhraseTraining);
  const intervalTimePerLevel = phrase.showIntervalTimeByLevel();
  const myLevel = phrase.defineLevelByTimeAndNumLetters(time || 0);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!open) {
      dispatch(setTimer(phrase.timeLimit));
      dispatch(pauseTimer());
      dispatch(clearTypedWords());
      dispatch(hideMessageBackdrop());
      if (!phrase.choosedByUser) {
        dispatch(chooseRandomPhraseToTrain());
      }
    }
  }, [open]);

  const RowDataLevels = (
    <React.Fragment>
      {rowsLevel.map((role) => {
        const level = intervalTimePerLevel[role]!;
        return (
          <TableRow
            key={role}
            sx={(theme) => ({
              background:
                myLevel === role ? theme.palette.primary.main : undefined,
            })}
          >
            <TableCell
              component="th"
              scope="row"
              sx={(theme) => ({
                color:
                  myLevel === role
                    ? theme.palette.primary.contrastText
                    : undefined,
              })}
            >
              {TrainingPhrase.rolesInPortuguese[role].toUpperCase()}
            </TableCell>
            <TableCell
              align="right"
              sx={(theme) => ({
                color:
                  myLevel === role
                    ? theme.palette.primary.contrastText
                    : undefined,
              })}
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

  const RowDataTraining = (
    <React.Fragment>
      <TableRow>
        <TableCell component="th" scope="row">
          Tempo Decorrido
        </TableCell>
        <TableCell>
          <i>{timeTransformer2(time || 0)}</i>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Total de Caracteres</TableCell>
        <TableCell>
          <i>{phrase.numLetters}</i>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Total de Palavras</TableCell>
        <TableCell>
          <i>{phrase.numWords}</i>
        </TableCell>
      </TableRow>
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
          sx: { maxHeight: "100%", maxWidth: 500 },
        }}
      >
        <DialogTitle variant="h6">RESULTADOS DO TREINO</DialogTitle>
        <DialogContent>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mb={2.5}
          >
            <TableDescription description="A tabela acima contém informações sobre o treino.">
              <TableSimple
                headTitle={RowTitleTrainingData}
                rows={RowDataTraining}
                size="small"
              />
            </TableDescription>
          </Box>
          <TableDescription
            title="TABELA DE NÍVEIS"
            description="A tabela acima descreve o intervalo de tempo que cada nivel
            levaria para digitar o texto do treino."
          >
            <TableSimple headTitle={RowTitleLevels} rows={RowDataLevels} />
          </TableDescription>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Treinar novamente</Button>
          <Button onClick={() => navigate("/")}>Sair</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

interface TableDescriptionProps {
  title?: string;
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
      <Box mt={1} mb={2}>
        {title && (
          <Box mb={0.7}>
            <Text align="center" fontWeight="bold">
              {title}
            </Text>
          </Box>
        )}
        {children}
      </Box>
      <Text variant="subtitle2" align="center">
        {description}
      </Text>
    </React.Fragment>
  );
}
