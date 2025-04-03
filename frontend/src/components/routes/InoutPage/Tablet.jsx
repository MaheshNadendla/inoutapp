import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const TableContainerStyled = styled(TableContainer)({
  maxWidth: "100%",
  overflowX: "auto",
});

const TableStyled = styled(Table)(({ theme }) => ({
  minWidth: "100%",
  width: "auto",

  [theme.breakpoints.up("xs")]: { minWidth: 300 },
  [theme.breakpoints.up("sm")]: { minWidth: 500 },
  [theme.breakpoints.up("md")]: { minWidth: 800 },
  [theme.breakpoints.up("lg")]: { minWidth: 1000 },
}));

const HeaderRow = styled(TableRow)({
  backgroundColor: "red",
});

const HeaderCell = styled(TableCell)(({ theme }) => ({
  color: "white",
  fontWeight: "bold",
  textAlign: "center",
  border: "1px solid black",

  fontSize: "16px",
  padding: "8px",

  [theme.breakpoints.up("xs")]: { fontSize: "6px", padding: "2px 4px" },
  [theme.breakpoints.up("sm")]: { fontSize: "10px", padding: "6px 10px" },
  [theme.breakpoints.up("md")]: { fontSize: "14px", padding: "8px 14px" },
}));

const BodyRow = styled(TableRow)(({ index }) => ({
  backgroundColor: index % 2 === 0 ? "#ffffff" : "#ffffff", // Base background (white)
}));

const BodyCell = styled(TableCell)(({ theme, rowIndex, colIndex }) => ({
  textAlign: "center",
  fontSize: "14px",
  padding: "8px",

  backgroundColor:
    rowIndex % 2 === 0
      ? colIndex % 2 === 0
        ? "#f0f8ff"
        : "#d3e0ea"
      : colIndex % 2 === 0
      ? "#d3e0ea"
      : "#f0f8ff",

  color: "#000",

  [theme.breakpoints.up("xs")]: { fontSize: "6px", padding: "2px 4px" },
  [theme.breakpoints.up("sm")]: { fontSize: "10px", padding: "6px 10px" },
  [theme.breakpoints.up("md")]: { fontSize: "14px", padding: "8px 14px" },
}));

const EmptyRow = styled(TableCell)(({ theme }) => ({
  textAlign: "center",
  fontSize: "16px",

  [theme.breakpoints.up("xs")]: { fontSize: "8px" },
  [theme.breakpoints.up("sm")]: { fontSize: "12px" },
}));

function Tablet({ name: users }) {
  const headers = ["S.No", "Roll", "Name", "Phone", "Place", "Out Date", "Out Time", "In Date", "In Time"];

  return (
    <TableContainerStyled sx={{backgroundColor:'yellow',padding:'5px'}} component={Paper}>
      <TableStyled>
        <TableHead>
          <HeaderRow>
            {headers.map((header, index) => (
              <HeaderCell key={index}>{header}</HeaderCell>
            ))}
          </HeaderRow>
        </TableHead>

        <TableBody>
          {users.length > 0 ? (
            users.map((user, rowIndex) => (
              <BodyRow key={rowIndex} index={rowIndex}>
                <BodyCell rowIndex={rowIndex} colIndex={0}>{rowIndex + 1}</BodyCell>
                <BodyCell rowIndex={rowIndex} colIndex={1}>{user.roll}</BodyCell>
                <BodyCell rowIndex={rowIndex} colIndex={2}>{user.name}</BodyCell>
                <BodyCell rowIndex={rowIndex} colIndex={3}>{user.phone}</BodyCell>
                <BodyCell rowIndex={rowIndex} colIndex={4}>{user.place}</BodyCell>
                <BodyCell rowIndex={rowIndex} colIndex={5}>{user.outdate}</BodyCell>
                <BodyCell rowIndex={rowIndex} colIndex={6}>{user.outtime}</BodyCell>
                <BodyCell rowIndex={rowIndex} colIndex={7}>{user.indate}</BodyCell>
                <BodyCell rowIndex={rowIndex} colIndex={8}>{user.intime}</BodyCell>
              </BodyRow>
            ))
          ) : (
            <TableRow>
              <EmptyRow colSpan={9}>No data available or data is empty</EmptyRow>
            </TableRow>
          )}
        </TableBody>
      </TableStyled>
    </TableContainerStyled>
  );
}

export default Tablet;
