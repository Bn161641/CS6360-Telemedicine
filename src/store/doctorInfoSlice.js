import { createSlice } from "@reduxjs/toolkit";

const doctorInitialState = {
  id: 0,
  name: "",
  email: "",
  phoneNumber: "",
  address: "",
  info: "",
  website: "",
  title: "",
  state: "",
  services: [],
  offices: [],
  reviews: [],
  appointments: [],
};

const doctorInfoSlice = createSlice({
  name: "doctorInfo",
  initialState: doctorInitialState,
  reducers: {
    setId(state, action) {
      state.id = action.payload;
    },
    setName(state, action) {
      state.name = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPhoneNumber(state, action) {
      state.phoneNumber = action.payload;
    },
    setAddress(state, action) {
      state.address = action.payload;
    },
    setInfo(state, action) {
      state.info = action.payload;
    },
    setWebsite(state, action) {
      state.website = action.payload;
    },
    setTitle(state, action){
      state.title = action.payload;
    },
    setState(state, action){
      state.state = action.payload;
    },
    addService(state, action) {
      state.services.push(action.payload);
    },
    addOffice(state, action) {
      state.offices.push(action.payload);
    },
    setReviews(state, action){
      state.reviews = action.payload;
    }
  }
});

export const doctorInfoActions = doctorInfoSlice.actions;

export default doctorInfoSlice.reducer;