import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { updateUser } from "../redux/reducer";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
const style = {
  position: "absolute",
  backgroundColor: "white",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const id = props.id;
  const [editData, setEditData] = useState({
    name: "",
    email: "",
    address: "",
    contact: "",
  });
  let user = useSelector((store) => store.users);
  let name = "";
  let email = "";
  let address = "";
  let contact = "";
  useEffect(() => {
    const existingUser = user.filter((item) => item.id == id);
    name = existingUser.map((item) => item.name).toString();
    email = existingUser.map((item) => item.email).toString();
    address = existingUser.map((item) => item.address).toString();
    contact = existingUser.map((item) => item.contact).toString();
    setEditData({ ...editData, name, email, address, contact });
  }, [props]);

  const dispatch = useDispatch();
  const handleChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  };

  const editSubmit = () => {
    console.log("name", name, email, address);
    if (
      editData.name &&
      editData.email &&
      editData.address &&
      editData.contact
    ) {
      dispatch(updateUser({ ...editData, id: id }));
      props.setOpen(false)
    } else {
      console.log("error please input fields");
    }
  };
  return (
    <div>
      <Modal
        open={props.open}
        onClose={() => props.setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack spacing={2}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              textAlign="center"
            >
              Edit Entries
            </Typography>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              onChange={handleChange}
              name="name"
              value={editData.name}
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              onChange={handleChange}
              name="email"
              value={editData.email}
            />
            <TextField
              id="outlined-basic"
              label="Address"
              variant="outlined"
              onChange={handleChange}
              name="address"
              value={editData.address}
            />
            <TextField
              id="outlined-basic"
              label="Contact"
              variant="outlined"
              onChange={handleChange}
              name="contact"
              value={editData.contact}
            />
            <Button variant="contained" onClick={editSubmit}>
              Submit
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
