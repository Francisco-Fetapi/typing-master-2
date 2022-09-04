import { useSelector } from "react-redux";
import { selectPoints } from "../store/App.selectors";
import { PointCounterContainer, Text } from "../styles/General";

export default function PointCounter() {
  const points = useSelector(selectPoints);
  return (
    <PointCounterContainer className="grayscale-on-paused">
      <Text variant="h6" color="primary">
        {points.toLocaleString()} pt{points > 0 && "s"}
      </Text>
    </PointCounterContainer>
  );
}
