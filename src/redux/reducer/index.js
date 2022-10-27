// import { addEntry } from "../actions";
import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  {
    id: 1,
    name: "Adam",
    email: "adam@gmail.com",
    address: "Pakistan",
    contact: "2134122",
  },
  {
    id: 2,
    name: "Jane",
    email: "jane@gmail.com",
    address: "United Kindom",
    contact: "3472312",
  },
  {
    id: 3,
    name: "Tommy",
    email: "tommy@gmail.com",
    address: "India",
    contact: "6797432",
  },
  {
    id: 4,
    name: "Ali",
    email: "ali@gmail.com",
    address: "USA",
    contact: "2473444",
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
      console.log("state", state);
      console.log("action", action);
      const { id } = action.payload;
      console.log("state", state);
      const existingUser = state.find((user) => user.id === id);
      if (existingUser) {
        return state.filter((user) => user.id !== id);
      }
    },
    updateUser: (state, action) => {
      console.log("state", state);
      console.log("act", action);
      const { id, name, email, address, contact } = action.payload;
      // console.log("state ", state);
      state.forEach((item) => {
        console.log("item", item.id);
      });

      const existingUser = state.find((user) => user.id == id);

      console.log("existingUser", existingUser);
      if (existingUser) {
        existingUser.name = name;
        existingUser.email = email;
        existingUser.address = address;
        existingUser.contact = contact;
      }
      // return existingUser;
      // console.log(existingUser);
    },
  },
});

export const { addUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
