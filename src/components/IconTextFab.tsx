import { Fab, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Text } from "../styles/General";

interface Props {
  icon: React.ReactElement;
  label: string;
  to?: "/" | "/championship" | "/training";
  onClick?(): void;
}

export default function IconTextFab({ icon, label, to, onClick }: Props) {
  const navigate = useNavigate();
  const handleClick = onClick ? onClick : () => null;
  const navigateTo = to ? () => navigate(to) : handleClick;
  return (
    <Box onClick={navigateTo} style={{ userSelect: "none" }}>
      <Fab color="primary">{icon}</Fab>
      <Box mt={1}>
        <Text variant="subtitle2" color="textSecondary" align="center">
          {label}
        </Text>
      </Box>
    </Box>
  );
}
