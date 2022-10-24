import * as React from "react";
// import { TextField } from "@material-ui/core";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import updateUser from "../redux/reducer/index";
import { useDispatch, useSelector } from "react-redux";

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
  const [editData, setEditData] = React.useState({
    // id: user.id,
    // name: user.name,
    // email: user.email,
    // address: user.address,
    // contact: user.contact,
  });
  const user = useSelector((state) =>
    state.users.find((user) => user.id === editData.id)
  );
  // const user = useSelector((state)=> state.users)
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  };
  // console.log("data:", editData);
  const editSubmit = () => {
    dispatch(
      updateUser({
        // id,
        // name,
        // email,
        // address,
        // contact,
      })
    );
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
              label="ID"
              variant="outlined"
              onClick={handleChange}
              name="id"
            />
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              onClick={handleChange}
              name="name"
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              onClick={handleChange}
              name="email"
            />
            <TextField
              id="outlined-basic"
              label="Address"
              variant="outlined"
              onClick={handleChange}
              name="address"
            />
            <TextField
              id="outlined-basic"
              label="Contact"
              variant="outlined"
              onClick={handleChange}
              name="contact"
            />
            <Button variant="contained" onClick={editSubmit}>Submit</Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
