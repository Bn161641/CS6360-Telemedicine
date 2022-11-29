import { createSlice } from "@reduxjs/toolkit";

const appointmentInitialState = {
  appointments: [],
  changed: false,
};

const appointmentsSlice = createSlice({
  name: "appointmentInfo",
  initialState: appointmentInitialState,
  reducers: {
    replaceAppointments(state, action) {
      state.appointments = action.payload;
    },
    addAppointment(state, action) {
      let appointment = {
        id: action.payload.id,
        dateTime: action.payload.dateTime,
        notes: action.payload.notes,
        isValid: false,
        pid: action.payload.pid,
        pidName: action.payload.pidName,
        did: action.payload.did,
        did: action.payload.didName,
        url: action.payload.url,
        location: action.payload.location,
        service: action.payload.service,
        bill: {}
      };
    
      state.appointments.push(appointment);
      state.changed = true;
    },
    removeAppointments(state, action) {
      state.appointments = state.appointments.filter(appointment => appointment.id != action.payload);
      state.changed = true;
    },
    verifyAppointment(state, action) {
      let appointmentToVerifyIndex = state.appointments.findIndex(appointment => appointment.id === action.payload);
      state.appointments[appointmentToVerifyIndex].isValid = true;
      state.changed = true;
    },
    alterAppointment(state, action) {
      let appointmentToAlterIndex = state.appointments.findIndex(appointment => appointment.id === action.payload.id);
      state.appointments[appointmentToAlterIndex].dateTime = action.payload.dateTime;
      state.changed = true;
    },
    createBill(state, action) {
      let newBill = {
        amount: action.payload.bill.amount, 
        isPaid: action.payload.bill.isPaid, 
        isVerified: action.payload.bill.isVerified
      }
      let appointmentToCreateBillForIndex = state.appointments.findIndex(appointment => appointment.id === action.payload.appointmentId);
      state.appointments[appointmentToCreateBillForIndex].bill = newBill;
      state.changed = true;
    },
    editNote(state, action){
      let appointmentToEditNoteIndex = state.appointments.findIndex(appointment => appointment.id === action.payload.id);
      state.appointments[appointmentToEditNoteIndex].notes = action.payload.notes;
    }
  }
});

export const appointmentsActions = appointmentsSlice.actions;

export default appointmentsSlice.reducer;