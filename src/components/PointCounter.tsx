import { useSelector } from "react-redux";
import { selectPoints } from "../store/App.selectors";
import { PointCounterContainer, Text } from "../styles/General";

export default function PointCounter() {
  const points = useSelector(selectPoints);
  return (
    <PointCounterContainer>
      <Text variant="h6">{points} pt</Text>
    </PointCounterContainer>
  );
}
