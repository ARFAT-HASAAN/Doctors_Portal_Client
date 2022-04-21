import { Grid, Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import UseAuth from "../../context/AuthContext";
import Calender from "../../Shared/Date/Calender";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
const Appoentments = () => {
  const { user } = UseAuth();
  const [datas, setDatas] = useState([]);

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    axios
      .get(
        `https://still-chamber-41424.herokuapp.com/appoientment?email=${user.email}&date=${date}`
      )
      .then((res) => {
        setDatas(res.data);
      });
  }, [user.email, date]);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <Box>
      <Grid container gap={3} columns={13}>
        <Grid item xs={13} sm={13} md={6} lg={6}>
          <Calender date={date} setDate={setDate}></Calender>
        </Grid>
        <Grid item xs={13} sm={13} md={6} lg={6}>
          <TableContainer component={Paper}>
            <Table sx={{}} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell align="right">Schedule</StyledTableCell>
                  <StyledTableCell align="right">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {datas.map((data) => (
                  <StyledTableRow key={data._id}>
                    <StyledTableCell component="th" scope="row">
                      {data.displayName}
                    </StyledTableCell>
                    <StyledTableCell align="right">{data.date}</StyledTableCell>
                    <StyledTableCell align="right">
                      {data.serviceName}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Appoentments;
