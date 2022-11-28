import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const appointmentInitialState = {
  appointments: [],
};

const appointmentsSlice = createSlice({
  name: "appointmentInfo",
  initialState: appointmentInitialState,
  reducers: {
    setInitialAppointments(state, action) {
      state.appointments = action.payload;
    },
    addAppointment(state, action) {
      let appointment = {
        id: action.payload.id,
        dateTime: action.payload.dateTime,
        notes: action.payload.notes,
        isValid: false,
        pid: action.payload.pid,
        did: action.payload.did,
        url: action.payload.url,
        service: action.payload.service,
        bill: {}
      };

      state.appointments.push(appointment);
    },
    removeAppointments(state, action) {
      state.appointments = state.appointments.filter(appointment => appointment.id != action.payload);
    },
    getAppointmentByPatient(state, action) {
      return state.appointments.filter(appointment => appointment.pid === action.payload);
    },
    getAppointmentByDoctor(state, action) {
      return state.appointments.filter(appointment => appointment.did === action.payload);
    },
    verifyAppointment(state, action) {
      let appointmentToVerifyIndex = state.appointments.findIndex(appointment => appointment.id === action.payload);
      state.appointments[appointmentToVerifyIndex].isValid = true;
    },
    alterAppointment(state, action) {
      let appointmentToAlterIndex = state.appointments.findIndex(appointment => appointment.id === action.payload.id);
      state.appointments[appointmentToAlterIndex].dateTime = action.payload.dateTime;
    },
    createBill(state, action) {
      let newBill = {
        amount: action.payload.bill.amount, 
        isPaid: action.payload.bill.isPaid, 
        isVerified: action.payload.bill.isVerified
      }
      let appointmentToCreateBillForIndex = state.appointments.findIndex(appointment => appointment.id === action.payload.appointmentId);
      state.appointments[appointmentToCreateBillForIndex].bill = newBill;
    },
  }
});

export const appointmentsActions = appointmentsSlice.actions;

export default appointmentsSlice.reducer;