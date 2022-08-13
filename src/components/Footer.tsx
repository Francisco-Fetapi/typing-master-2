import { Box, Link } from "@mui/material";
import { Text } from "../styles/General";

export default function Footer() {
  return (
    <Box mt={4}>
      <Text variant="subtitle2" color="textSecondary" align="center">
        &copy; Copyrights - &nbsp;
        <Link
          style={{ textDecoration: "none" }}
          target="__blank"
          href="https://github.com/Francisco-Fetapi"
        >
          Francisco Fetapi
        </Link>
      </Text>
    </Box>
  );
}
