import React from "react";
// import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Drawer from "../components/Drawer";
// import { Button, Grid, TextField, Typography } from "@material-ui/core";
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
// import EditIcon from '@mui/icons-material/Edit';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser } from "../redux/reducer";
import BasicModal from "../components/Modal";
import { Button, Typography, TextField, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

// const StyledTableCell = styled((theme) => ({
//   head: {
//     backgroundColor: "#3d85c6",
//     color: "white",
//   },
//   body: {
//     fontSize: 14,
//   },
// }))(TableCell);

// const StyledTableRow = styled((theme) => ({
//   root: {
//     "&:nth-of-type(odd)": {
//       backgroundColor: theme.palette.action.hover,
//     },
//   },
// }))(TableRow);

// const useStyles = makeStyles({
//   table: {
//     marginTop: 30,
//     minWidth: 700,
//   },
// });
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
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function CustomizedTables() {
  const [id, setId] = useState("");
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const [editData, setEditData] = useState({
    id: "",
    name: "",
    email: "",
    address: "",
    contact: "",
  });

  const [showTextField, setShowTextField] = useState(false);
  const [open, setOpen] = useState(false);
  const [addInput, setAddInput] = useState([]);

  // const classes = useStyles();

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

  const handleChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  };
  const handlePost = () => {
    dispatch(
      addUser({
        id: editData.id,
        name: editData.name,
        email: editData.email,
        address: editData.address,
        contact: editData.contact,
      })
    );
    // setNewData((current) => [...current, editData]);
  };

  const handleDelete = (id) => {
    dispatch(deleteUser({ id }));
  };
  const handleEdit = (e) => {
    setOpen(true);

    console.log("id value", e.currentTarget.id);
    setId(e.currentTarget.id);
  };
  // console.log("first", open);
  return (
    <>
      <BasicModal open={open} id={id} setOpen={setOpen} users={users} />
      <Drawer>
        <Grid container rowSpacing={5}>
          <Grid item xs={12}>
            <Typography variant="h3">Users</Typography>
          </Grid>
        </Grid>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
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
              {users.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">
                    {row.id}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.email}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.address}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.contact}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Button
                      variant="container"
                      style={{ backgroundColor: "yellow", marginRight: "8px" }}
                      size="small"
                      onClick={handleEdit}
                      id={row.id}
                    >
                      <CreateIcon />
                      Edit
                    </Button>
                    <Button
                    sx={{ backgroundColor: "#ab003c" }}
                      // color="secondary"
                      variant="contained"
                      size="small"
                      onClick={() => handleDelete(row.id)}
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
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableBody>
              {showTextField === true
                ? addInput.map((item, index) => (
                    <StyledTableRow key={item.id}>
                      <StyledTableCell
                        component="th"
                        scope="row"
                        align="center"
                      >
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
                      <StyledTableCell
                        component="th"
                        scope="row"
                        align="center"
                      >
                        <TextField
                          id="standard-basic"
                          label={Object.keys(item)[index + 2]}
                          onChange={handleChange}
                          name="email"
                        />
                      </StyledTableCell>
                      <StyledTableCell
                        component="th"
                        scope="row"
                        align="center"
                      >
                        <TextField
                          id="standard-basic"
                          label={Object.keys(item)[index + 3]}
                          onChange={handleChange}
                          name="address"
                        />
                      </StyledTableCell>
                      <StyledTableCell
                        component="th"
                        scope="row"
                        align="center"
                      >
                        <TextField
                          id="standard-basic"
                          label={Object.keys(item)[index + 4]}
                          onChange={handleChange}
                          name="contact"
                        />
                      </StyledTableCell>

                      <StyledTableCell
                        component="th"
                        scope="row"
                        align="center"
                      >
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
    </>
  );
}
