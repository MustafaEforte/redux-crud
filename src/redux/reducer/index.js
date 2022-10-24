// import { addEntry } from "../actions";
import { createSlice } from "@reduxjs/toolkit";
const initialState = [
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

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const existingUser = state.find((user) => user.id === id);
      if (existingUser) {
        return state.filter((user) => user.id !== id);
      }
    },
    updateUser: (state, action) => {
      const { id, name, email, address, contact } = action.payload;
      const existingUser = state.find((user) => user.id === id);
      if (existingUser) {
        existingUser.id = id;
        existingUser.name = name;
        existingUser.email = email;
        existingUser.address = address;
        existingUser.contact = contact;
      }
    },
  },
});
export const { addUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
