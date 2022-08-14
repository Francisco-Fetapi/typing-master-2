import { Fab, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Text } from "../styles/General";

interface Props {
  icon: React.ReactElement;
  label: string;
  to?: "/" | "/championship" | "/training";
}

export default function IconTextFab({ icon, label, to }: Props) {
  const navigate = useNavigate();
  return (
    <Box onClick={to ? navigate(to) : null}>
      <Fab color="primary">{icon}</Fab>
      <Box mt={1}>
        <Text variant="subtitle2" color="textSecondary" align="center">
          {label}
        </Text>
      </Box>
    </Box>
  );
}
