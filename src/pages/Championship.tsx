import { useSelector } from "react-redux";
import InputText from "../components/InputText";
import TextToType from "../components/TextToType";
import Timer from "../components/Timer";
import { selectWordToType } from "../store/App.selectors";
import { BoxColumnCenter } from "../styles/General";

export default function Championship() {
  const textToType = useSelector(selectWordToType);
  return (
    <BoxColumnCenter>
      <Timer totalSeconds={27000} />
      <BoxColumnCenter mt={2}>
        <InputText text={textToType} />
      </BoxColumnCenter>
      <BoxColumnCenter mt={2} maxWidth={600} px={3}>
        <TextToType />
      </BoxColumnCenter>
    </BoxColumnCenter>
  );
}
