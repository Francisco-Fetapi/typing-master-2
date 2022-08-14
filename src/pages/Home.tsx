import { Box, Fab, Stack, Divider } from "@mui/material";
import { Text } from "../styles/General";
import { MdModelTraining, MdPlayArrow } from "react-icons/md";
import IconTextFab from "../components/IconTextFab";

export default function Home() {
  return (
    <Box display="flex" alignItems="center" flexDirection="column">
      <Text
        variant="h5"
        style={{ fontWeight: 300, textTransform: "uppercase" }}
      >
        Typing Master
      </Text>
      <Box mt={4}>
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          divider={
            <Divider orientation="vertical" flexItem style={{ height: 50 }} />
          }
        >
          <IconTextFab label="Iniciar" icon={<MdPlayArrow fontSize={24} />} />
          <IconTextFab
            label="Treinar"
            icon={<MdModelTraining fontSize={24} />}
          />
        </Stack>
      </Box>
    </Box>
  );
}
