import { Box } from "@mui/material";
import useInputText from "../hooks/useInputText";
import { InputTextContainer, Text, BoxColumnCenter } from "../styles/General";

interface Props {
  text: string;
}

export default function InputText({ text }: Props) {
  const { textDisplay, inputText, error, type, filterSomeKeys } =
    useInputText(text);

  return (
    <BoxColumnCenter className="grayscale-on-paused">
      <input
        value={inputText}
        onChange={type}
        onKeyUp={filterSomeKeys}
        onPaste={(e) => e.preventDefault()}
        autoFocus
        style={{ opacity: 0, pointerEvents: "none" }}
        onBlurCapture={(e) => e.target.focus()}
      />
      <InputTextContainer variant="outlined" className={error ? "error" : ""}>
        <Box mr={0.3}>{textDisplay}</Box>
      </InputTextContainer>
      <Box mt={1.2}>
        <Text color="textSecondary" variant="subtitle2">
          {text}
        </Text>
      </Box>
    </BoxColumnCenter>
  );
}
