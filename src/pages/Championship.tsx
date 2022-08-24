import { useDispatch, useSelector } from "react-redux";
import DisplayProgress from "../components/DisplayProgress";
import InputText from "../components/InputText";
import TextToType from "../components/TextToType";
import Timer from "../components/Timer";
import { selectCurrentLevel, selectWordToType } from "../store/App.selectors";
import { BoxColumnCenter, Text } from "../styles/General";

export default function Championship() {
  const wordToType = useSelector(selectWordToType);
  const level = useSelector(selectCurrentLevel);

  return (
    <BoxColumnCenter height="100vh" py={5}>
      <BoxColumnCenter mb={2}>
        <Text color="primary" variant="h4">
          Nivel {level}
        </Text>
      </BoxColumnCenter>
      <Timer totalTime={0} />
      <BoxColumnCenter mt={2}>
        <InputText text={wordToType} />
      </BoxColumnCenter>
      <BoxColumnCenter mt={2} maxWidth={600} px={3}>
        <TextToType />
      </BoxColumnCenter>
      <div style={{ flexGrow: 1 }} />
      <BoxColumnCenter mt={2}>
        <DisplayProgress />
      </BoxColumnCenter>
    </BoxColumnCenter>
  );
}
