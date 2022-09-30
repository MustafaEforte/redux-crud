import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Drawer from "../components/Drawer";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
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
    id: 1,
    name: "Adam",
    email: "adam@gmail.com",
    address: "Pakistan",
    contact: 2134122,
  },
  {
    id: 2,
    name: "Jane",
    email: "jane@gmail.com",
    address: "United Kindom",
    contact: 3472312,
  },
  {
    id: 3,
    name: "Tommy",
    email: "tommy@gmail.com",
    address: "India",
    contact: 6797432,
  },
  {
    id: 4,
    name: "Ali",
    email: "ali@gmail.com",
    address: "USA",
    contact: 2473444,
  },
  {
    id: 5,
    name: "Prakash",
    email: "prakash@gmail.com",
    address: "Bangladesh",
    contact: 9327843,
  },
];
export default function CustomizedTables() {
  const [editData, setEditData] = useState({
    id: "",
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
        id: "",
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

  const handleDelete = (e) => {
    const del = newData.filter((item) => item.id !== e.id);
    // console.log("del", del);
    setNewData(del);
    // setNewData((current) =>
    //   current.filter((user) => {
    //     return user.id !== 3;
    //   })
    // );
    // console.log("delete :>> ", del);
  };

  const handleEdit = (e) => {
    const edit = newData.filter((item) => item.id !== e.id);
    console.log("edit :>> ", edit);
    // setNewData(edit);

    // setShowTextField(true);
    // setAddInput([
    //   {
    //     name: "",
    //     email: "",
    //     address: "",
    //     contact: "",
    //   },
    // ]);
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
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Address</StyledTableCell>
              <StyledTableCell align="center">Contact</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
              <StyledTableCell align="center">
                <Button variant="contained" onClick={handleAddClick}>
                  Add User
                </Button>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {newData.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.id}
                </StyledTableCell>
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
                    onClick={handleEdit(row)}
                  >
                    <CreateIcon />
                    Edit
                  </Button>
                  <Button
                    color="secondary"
                    variant="contained"
                    size="small"
                    onClick={() => handleDelete(row)}
                  >
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
            {showTextField === true
              ? addInput.map((item, index) => (
                  <StyledTableRow key={item.id}>
                    <StyledTableCell component="th" scope="row" align="center">
                      <TextField
                        id="standard-basic"
                        label={Object.keys(item)[index]}
                        onChange={handleChange}
                        name="id"
                        
                      />
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      <TextField
                        id="standard-basic"
                        label={Object.keys(item)[index + 1]}
                        onChange={handleChange}
                        name="name"
                      />
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row" align="center">
                      <TextField
                        id="standard-basic"
                        label={Object.keys(item)[index + 2]}
                        onChange={handleChange}
                        name="email"
                      />
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row" align="center">
                      <TextField
                        id="standard-basic"
                        label={Object.keys(item)[index + 3]}
                        onChange={handleChange}
                        name="address"
                      />
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row" align="center">
                      <TextField
                        id="standard-basic"
                        label={Object.keys(item)[index + 4]}
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
