import { appointmentsActions } from "./appointmentsSlice";

export function fetchAppointmentData() {
  // console.log("Fetching information");
  return async (dispatch) => {
    //this is where you fetch the list of appointments
    function fetchData() {

      //if there is an error, throw it
      /* exmaple
      if(error){
        throw new Error("Error fetching data")
      }
      */

      let data;
      
      return data;
    }

    try {
      const appointmentData = await fetchData();

      //put the list of appointments in the database as a paramater for the replaceAppointments method
      //changes to the database may be needed
      /* Have each object be in this template
        Appointment Template:
        {
        id: Number,
        dateTime: Date,
        notes: String,
        isValid: Boolean,
        pid: Number,
        pidName: String,
        did: Number,
        didName: String
        url: String,        //null if none
        location: String,   //null if none
        service: String,
        bill: Object,        //The weak entity of a bill corresponding to the appointment, if no bill was found put null 
      };

      Bill Template:
      {
        amount: Number,
        isPaid: Boolean,
        isVerified: Boolean,
      }
        */

      //example of a list of appointment.
      //this list has two appointment in it, one with a bill, one without
      //delete after finished

      let tmpAppointment = [
        {
          id: 1,
          dateTime: new Date('December 1, 2022 08:30:00'),
          notes: "Surgery for the elbow",
          isValid: true,
          pid: 1,      //patient id
          pidName: "Robert Lee",
          did: 1,      //doctor id
          didName: "Helena Hall",
          url: "www.teams.com/d38djd",
          location: null,
          service: "Surgery",
          bill: null,
        },
        {
          id: 2,
          dateTime: new Date('December 1, 2022 08:30:00'),
          notes: "Surgery for the foot",
          isValid: false,
          pid: 2,      //patient id
          pidName: "Johnson Raker",
          did: 1,      //doctor id
          didName: "Helena Hall",
          url: null,
          location: "1234 Makebelieve Dr, Richardson, TX 75080",
          service: "Surgery",
          bill: {
            amount: 1245.99,
            isPaid: false,
            isVerified: false
          },
        },
        {
          id: 3,
          dateTime: new Date('December 4, 2022 08:30:00'),
          notes: "Place ice on the removed toe area",
          isValid: false,
          pid: 3,      //patient id
          pidName: "Daniel Raker",
          did: 1,      //doctor id
          didName: "Helena Hall",
          url: null,
          location: "1234 Makebelieve Dr, Richardson, TX 75080",
          service: "Remove Toe",
          bill: null
        },
        {
          id: 4,
          dateTime: new Date('December 6, 2022 08:30:00'),
          notes: "Put ice on the new toe",
          isValid: true,
          pid: 4,      //patient id
          pidName: "Daniel Raker",
          did: 1,      //doctor id
          didName: "Helena Hall",
          url: "www.teams.com/ldfjoia",
          location: null,
          service: "Add a Toe",
          bill: {
            amount: 199.99,
            isPaid: true,
            isVerified: true
          },
        }
      ];
      dispatch(appointmentsActions.replaceAppointments(tmpAppointment));

    } catch (error) {
      console.log("Error fetching appointments")
    }
  };
};

export function sendAppointmentData(appointments){
  // console.log("sending information");
  return async (dispatch) => {

    //everytime the list of appointments changes this funciton is called
    //update the database dealing with the appointment here
    const sendRequest = async () => {
      
      //if an error occurs, throw it

    };

    try {
      await sendRequest();
    } catch (error) {
      console.log("Error sending appointments")
    }
  };
};