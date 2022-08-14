import { Box } from "@mui/material";
import { InputTextContainer } from "../styles/General";

interface Props {
  text: string;
}

export default function InputText({ text }: Props) {
  return (
    <InputTextContainer elevation={3}>
      <Box mr={0.3}>Ola</Box>
    </InputTextContainer>
  );
}
