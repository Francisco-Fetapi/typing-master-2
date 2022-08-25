import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import {
  selectTextToTypeArray,
  selectTypedWords,
} from "../store/App.selectors";
import { Text } from "../styles/General";

export default function TextToType() {
  const textToType = useSelector(selectTextToTypeArray);
  const typedWords = useSelector(selectTypedWords);
  return (
    <Box>
      {textToType.map((word, key) => (
        <Box component="span" pr={0.8} key={key}>
          <Text component="span" color={key < typedWords ? "blue" : "inherit"}>
            {word}
          </Text>
        </Box>
      ))}
    </Box>
  );
}
