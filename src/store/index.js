import { configureStore } from "@reduxjs/toolkit";
import DoctorInfoSliceReducer from "./doctorInfoSlice";
import AppointmentsSliceReducer from "./appointmentsSlice";


const store = configureStore({
  reducer: {doctorInfo: DoctorInfoSliceReducer, appointmentInfo: AppointmentsSliceReducer},
});

export default store;

