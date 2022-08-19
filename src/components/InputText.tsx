import { Box } from "@mui/material";
import { useState } from "react";
import useInputText from "../hooks/useInputText";
import { InputTextContainer, Text, BoxColumnCenter } from "../styles/General";

interface Props {
  text: string;
}

export default function InputText({ text }: Props) {
  const { myText, type } = useInputText();
  return (
    <BoxColumnCenter>
      <InputTextContainer elevation={3}>
        <Box mr={0.3}>{myText}</Box>
      </InputTextContainer>
      <Box mt={1.2}>
        <Text color="textSecondary" variant="subtitle2">
          {text}
        </Text>
      </Box>
    </BoxColumnCenter>
  );
}
