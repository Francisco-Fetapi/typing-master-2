import { Box } from "@mui/material";
import { Text } from "../styles/General";

export default function Header() {
  return (
    <Box>
      <Text
        align="center"
        variant="h6"
        style={{ textTransform: "uppercase", fontWeight: "bold" }}
      >
        Boilerplate
      </Text>
      <Text align="center" variant="subtitle2" color="textSecondary">
        React + TS + MUI + styled-components + Redux Toolkit
      </Text>
    </Box>
  );
}
