import React, { useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Drawer from "../components/Drawer";
import { Button, Grid, Input, TextField, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import { useState } from "react";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#3d85c6",
    color: "white",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    marginTop: 30,
    minWidth: 700,
  },
});

const data = [
  {
    name: "Adam",
    email: "adam@gmail.com",
    address: "Pakistan",
    contact: 2134122,
  },
  {
    name: "Jane",
    email: "jane@gmail.com",
    address: "United Kindom",
    contact: 3472312,
  },
  {
    name: "Tommy",
    email: "tommy@gmail.com",
    address: "India",
    contact: 6797432,
  },
  {
    name: "Ali",
    email: "ali@gmail.com",
    address: "USA",
    contact: 2473444,
  },
  {
    name: "Prakash",
    email: "prakash@gmail.com",
    address: "Bangladesh",
    contact: 9327843,
  },
];
export default function CustomizedTables() {
  const [editData, setEditData] = useState({
    name: "",
    email: "",
    address: "",
    contact: "",
  });
  const [newData, setNewData] = useState(data);
  const [showTextField, setShowTextField] = useState(false);
  const [addInput, setAddInput] = useState([
    // {
    //   name: "",
    //   email: "",
    //   address: "",
    //   contact: "",
    // },
  ]);

  const classes = useStyles();

  const handleAddClick = () => {
    setShowTextField(true);
    setAddInput([
      {
        name: "",
        email: "",
        address: "",
        contact: "",
      },
    ]);
  };
  console.log("addInput", addInput);
  const handleChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  };
  const handlePost = () => {
    //  data.push(editData)
    setNewData((current) => [...current, editData]);
  };
  return (
    <Drawer>
      <Grid container rowSpacing={5}>
        <Grid item xs={12}>
          <Typography variant="h3">Users</Typography>
        </Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Address</StyledTableCell>
              <StyledTableCell align="center">Contact</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
              <StyledTableCell align="center">
                <Button variant="contained" onClick={handleAddClick}>
                  Add
                </Button>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {newData.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">{row.email}</StyledTableCell>
                <StyledTableCell align="center">{row.address}</StyledTableCell>
                <StyledTableCell align="center">{row.contact}</StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    variant="container"
                    style={{ backgroundColor: "yellow", marginRight: "8px" }}
                    size="small"
                  >
                    <CreateIcon />
                    Edit
                  </Button>
                  <Button color="secondary" variant="contained" size="small">
                    <DeleteIcon />
                    Delete
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
       
          <TableBody>
            {showTextField == true
              ? addInput.map((item, index) => (
                  <StyledTableRow key={item.name}>
                    <StyledTableCell component="th" scope="row">
                      <TextField
                        id="standard-basic"
                        label={Object.keys(item)[0]}
                        onChange={handleChange}
                        name="name"
                      />
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row" align="center">
                      <TextField
                        id="standard-basic"
                        label={Object.keys(item)[index + 1]}
                        onChange={handleChange}
                        name="email"
                      />
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row" align="center">
                      <TextField
                        id="standard-basic"
                        label={Object.keys(item)[index + 2]}
                        onChange={handleChange}
                        name="address"
                      />
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row" align="center">
                      <TextField
                        id="standard-basic"
                        label={Object.keys(item)[index + 3]}
                        onChange={handleChange}
                        name="contact"
                      />
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row" align="center">
                      <Button variant="contained" onClick={handlePost}>
                        Post
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))
              : ""}
          </TableBody>
        </Table>
      </TableContainer>
    </Drawer>
  );
}
