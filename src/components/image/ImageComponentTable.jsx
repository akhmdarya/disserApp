import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// function createData(name,MSE, PNSR) {
//   return {name, MSE, PNSR};
// }



const ImageComponentTable = ({report}) => {
  return (
    <TableContainer  component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell  align="center">Algorithm</TableCell>
            <TableCell align="center">MSE</TableCell>
            <TableCell  align="center">PNSR</TableCell>
            <TableCell  align="center">Time to Encode</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {report.map((row) => (
            <TableRow
              key={row.type}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row"  align="center">
                {row.type}
              </TableCell>
              <TableCell align="center">{row.MSE}</TableCell>
              <TableCell align="center">{row.PSNR}</TableCell>
              <TableCell align="center">{row.flag}</TableCell>
              {/*<TableCell align="right">{row.carbs}</TableCell>*/}
              {/*<TableCell align="right">{row.protein}</TableCell>*/}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ImageComponentTable;
