import { Box } from "@mui/material";
import { InputTextContainer, Text, BoxColumnCenter } from "../styles/General";

interface Props {
  text: string;
}

export default function InputText({ text }: Props) {
  return (
    <BoxColumnCenter>
      <InputTextContainer elevation={3}>
        <Box mr={0.3}>Ola</Box>
      </InputTextContainer>
      <Box mt={1.2}>
        <Text color="textSecondary" variant="subtitle2">
          {text}
        </Text>
      </Box>
    </BoxColumnCenter>
  );
}
