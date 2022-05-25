import { Grid, Box, styled, useTheme, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, tableCellClasses } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import UseAuth from "../../context/AuthContext";
import Calender from "../../Shared/Date/Calender";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
const Appoentments = () => {


  
 const theme = useTheme();
  const costomDiv = makeStyles({

    container: { 

     [theme.breakpoints.up("md")]: {
        width : "100%", height: "100vh"
      }, 
    },

    div: {
      [theme.breakpoints.up("md")]: {
           display : "grid", placeItems: "center",  height: "100vh", justifyItems: "center" 
       }
    }

   
 } )
  
  const {div, container} = costomDiv({})



  const { user } = UseAuth();
  const [datas, setDatas] = useState([]);

  console.log(datas)
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
    <Box className={container}>
      <Container className={div}>
       <Grid container gap={3} columns={13}>
        <Grid item xs={13} sm={13} md={6} lg={6}>
           <h3 >Sellect your date to see your appoeinment </h3>
          <Calender date={date} setDate={setDate}></Calender>
        </Grid>
        <Grid item xs={13} sm={13} md={6} lg={6}>
           <h3>Your sellected appoinments list.</h3>
          <TableContainer component={Paper}>
           
            <Table sx={{}} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell align="right">Schedule</StyledTableCell>
                  <StyledTableCell align="right">Services</StyledTableCell>
                  <StyledTableCell align="right">action</StyledTableCell>
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
                    <StyledTableCell align="right">
                      {data?.payment?.amount ? <button disabled className="btn">Paid</button> : <Link to={`/dashbord/pay/${data._id}`}>  <button className="btn"> Procced to pay   </button>  </Link>}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      </Container>
      
    </Box>
  );
};

export default Appoentments;
