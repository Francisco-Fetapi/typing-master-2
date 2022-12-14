import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import useInputText from "../hooks/useInputText";
import {
  selectTimerPaused,
  selectTypedWords,
  selectWordToType,
} from "../store/App.selectors";
import { InputTextContainer, Text, BoxColumnCenter } from "../styles/General";

interface Props {
  noBlur?: boolean;
}

export default function InputText({ noBlur }: Props) {
  const { textDisplay, inputText, error, type, filterSomeKeys } =
    useInputText();

  const timerPaused = useSelector(selectTimerPaused);
  const typedWords = useSelector(selectTypedWords);
  const text = useSelector(selectWordToType);
  const paused = timerPaused && typedWords > 0;

  const classes = [];

  // if (error) classes.push("error");
  if (paused) classes.push("paused");

  return (
    <BoxColumnCenter className="grayscale-on-paused">
      <input
        value={inputText}
        onChange={type}
        onKeyUp={filterSomeKeys}
        onPaste={(e) => e.preventDefault()}
        autoFocus
        className="input-text"
        onBlurCapture={noBlur ? undefined : (e) => e.target.focus()}
        data-testid="input-text"
      />
      <InputTextContainer
        variant="outlined"
        className={classes.join(" ")}
        sx={(theme) => ({
          borderColor: error ? theme.palette.error.main : undefined,
        })}
        // paused={paused}
        // ola
      >
        <Box mr={0.3}>{textDisplay}</Box>
      </InputTextContainer>
      <Box mt={1.2}>
        <Text color="textSecondary" variant="subtitle2">
          {text}
        </Text>
        <div hidden>{inputText}</div>
        {/* For test proposals */}
      </Box>
    </BoxColumnCenter>
  );
}
