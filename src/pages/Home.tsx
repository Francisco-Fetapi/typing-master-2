import { Box, Fab, Stack, Divider } from "@mui/material";
import { Text } from "../styles/General";
import { MdModelTraining, MdPlayArrow } from "react-icons/md";

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
          spacing={2}
          divider={<Divider orientation="vertical" flexItem />}
        >
          <Fab color="primary">
            <MdPlayArrow fontSize={24} />
          </Fab>
          <Fab color="primary">
            <MdModelTraining fontSize={24} />
          </Fab>
        </Stack>
      </Box>
    </Box>
  );
}
