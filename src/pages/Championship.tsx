import InputText from "../components/InputText";
import TextToType from "../components/TextToType";
import Timer from "../components/Timer";
import { BoxColumnCenter } from "../styles/General";

export default function Championship() {
  return (
    <BoxColumnCenter>
      <Timer totalSeconds={27000} />
      <BoxColumnCenter mt={2}>
        <InputText text="Testando" />
      </BoxColumnCenter>
      <BoxColumnCenter mt={2} maxWidth={600} px={3}>
        <TextToType />
      </BoxColumnCenter>
    </BoxColumnCenter>
  );
}
