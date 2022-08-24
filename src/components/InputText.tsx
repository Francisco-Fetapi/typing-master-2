import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import useInputText from "../hooks/useInputText";
import { selectTypedWords, selectWordToType } from "../store/App.selectors";
import { InputTextContainer, Text, BoxColumnCenter } from "../styles/General";

interface Props {
  text: string;
}

export default function InputText({ text }: Props) {
  const { textDisplay, inputText, type, filterSomeKeys } = useInputText(text);
  const test = useSelector(selectTypedWords);
  console.log(test);
  return (
    <BoxColumnCenter>
      <input
        value={inputText}
        onChange={type}
        onKeyUp={filterSomeKeys}
        autoFocus
        style={{ opacity: 0, pointerEvents: "none" }}
        onBlurCapture={(e) => e.target.focus()}
      />
      <InputTextContainer elevation={3}>
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
