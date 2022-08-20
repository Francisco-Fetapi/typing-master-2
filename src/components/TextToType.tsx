import { useSelector } from "react-redux";
import { selectTextToType } from "../store/App.selectors";
import { Text } from "../styles/General";

export default function TextToType() {
  const textToType = useSelector(selectTextToType);
  return <Text>{textToType}</Text>;
}
