import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import useInputText from "../hooks/useInputText";
import { selectTimerPaused, selectTypedWords } from "../store/App.selectors";
import { InputTextContainer, Text, BoxColumnCenter } from "../styles/General";

interface Props {
  text: string;
}

export default function InputText({ text }: Props) {
  const { textDisplay, inputText, error, type, filterSomeKeys } =
    useInputText(text);

  const timerPaused = useSelector(selectTimerPaused);
  const typedWords = useSelector(selectTypedWords);
  const paused = timerPaused && typedWords > 0;

  const classes = [];

  if (error) classes.push("error");
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
        onBlurCapture={(e) => e.target.focus()}
        data-testid="input-text"
      />
      <InputTextContainer
        variant="outlined"
        className={classes.join(" ")}
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
