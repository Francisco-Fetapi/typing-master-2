import { Box, TypographyTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { useSelector } from "react-redux";
import { selectPhraseSize, selectTypedWords } from "../store/App.selectors";
import { Text as TextStyled } from "../styles/General";

const Text: OverridableComponent<TypographyTypeMap<{}, "span">> = (
  props: any
) => <TextStyled color="textSecondary" variant="h3" {...props}></TextStyled>;

export default function DisplayProgress() {
  const totalWords = useSelector(selectPhraseSize);
  const typedWords = useSelector(selectTypedWords);
  return (
    <Box display="flex" alignItems="center" className="grayscale-on-paused">
      <Text>{typedWords}</Text>
      <Text variant="h2">/</Text>
      <Text>{totalWords}</Text>
    </Box>
  );
}
