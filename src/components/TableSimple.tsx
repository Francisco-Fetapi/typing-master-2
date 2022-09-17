import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

interface TableSimpleProps {
  headTitle: React.ReactNode;
  rows: React.ReactNode;
  size?: "small" | "medium";
}

export default function TableSimple({
  headTitle,
  rows,
  ...props
}: TableSimpleProps) {
  return (
    <TableContainer component={Paper}>
      <Table size="medium" aria-label="a dense table" {...props}>
        <TableHead>
          <TableRow>{headTitle}</TableRow>
        </TableHead>
        <TableBody>{rows}</TableBody>
      </Table>
    </TableContainer>
  );
}
