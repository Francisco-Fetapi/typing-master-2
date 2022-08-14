import { Fab, Box } from "@mui/material";
import { Text } from "../styles/General";

interface Props {
  icon: React.ReactElement;
  label: string;
}

export default function IconTextFab({ icon, label }: Props) {
  return (
    <Box>
      <Fab color="primary">{icon}</Fab>
      <Box mt={1}>
        <Text variant="subtitle2" color="textSecondary" align="center">
          {label}
        </Text>
      </Box>
    </Box>
  );
}
