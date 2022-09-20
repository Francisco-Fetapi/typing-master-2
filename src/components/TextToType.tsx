import { Box, Stack } from "@mui/material";
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
    <Stack
      direction="row"
      gap={1}
      flexWrap="wrap"
      data-testid="text-to-type"
      className="grayscale-on-paused text-to-type"
      mt={2.5}
    >
      {textToType.map((word, key) => (
        <Text
          component="span"
          key={key}
          // color={key < typedWords ? "blue" : "inherit"}
          sx={(theme) =>
            key < typedWords
              ? {
                  borderBottom: `1px dashed ${theme.palette.primary.main}`,
                  color: theme.palette.primary.main,
                }
              : {}
          }
        >
          {word + " "}
        </Text>
      ))}
    </Stack>
  );
}
