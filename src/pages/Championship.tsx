import { Box } from "@mui/material";
import InputText from "../components/InputText";
import Timer from "../components/Timer";
import { BoxColumnCenter } from "../styles/General";

export default function Championship() {
  return (
    <BoxColumnCenter>
      <Timer totalSeconds={27000} />
      <BoxColumnCenter mt={2}>
        <InputText text="Testando" />
      </BoxColumnCenter>
    </BoxColumnCenter>
  );
}
