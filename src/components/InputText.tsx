import { Box } from "@mui/material";
import { useState } from "react";
import useInputText from "../hooks/useInputText";
import { InputTextContainer, Text, BoxColumnCenter } from "../styles/General";

interface Props {
  text: string;
}

export default function InputText({ text }: Props) {
  const { textDisplay, inputText, type } = useInputText();
  return (
    <BoxColumnCenter>
      <input
        value={inputText}
        onChange={type}
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
