import { patientInfoActions } from "./patientInfoSlice";

export function fetchPatientInfo(id) {
  return async (dispatch) => {
    //this is where you fetch patient info using the id
    function fetchPatientInfo() {
      //if there is an error, throw it

      let data;

      return data;
    }

    //this is where you fetch patient's reviews using the id
    function fetchPatientReviews() {
      //if there is an error, throw it

      let data;

      return data;
    }

    //this is where you fetch patient's offices using the id
    function fetchPatientOffices() {
      //if there is an error, throw it

      let data;

      return data;
    }

    //this is where you fetch patient's services using the id
    function fetchPatientServices() {
      //if there is an error, throw it

      let data;

      return data;
    }

    try {
      const patientInfoData = await fetchPatientInfo();
      const patientReviewsData = await fetchPatientReviews();
      const patientOfficesData = await fetchPatientOffices();
      const patientServicesData = await fetchPatientServices();

      //you may have to add more info to the database like the state the patient is located and their title

      //replace the hard coded fake data
      dispatch(patientInfoActions.setId(parseInt(id)));
      dispatch(patientInfoActions.setName("patient"));
      dispatch(patientInfoActions.setEmail("email"));
      //alter the string from the database to match format i.e. 8175559999 => (817)-555-9999
      dispatch(patientInfoActions.setPhoneNumber("(817)-555-9999"));
      //Address of primary office
      dispatch(patientInfoActions.setAddress("1234 Makebelieve Dr"));
      dispatch(
        patientInfoActions.setInfo(
          "info"
        )
      );
      dispatch(patientInfoActions.setWebsite("website"));
      dispatch(patientInfoActions.setTitle("title"));
      dispatch(patientInfoActions.setState("Texas, US"));
      //setHospitalName will be the main office name
      dispatch(patientInfoActions.setHospitalName("hospital~"));

      //set the list of reviews in the method setReviews, follow the format given in tmpReview
      //use pid to retrieve the customer name that gave the review
      let tmpReveiw = [
        {
          dateTime: new Date('December 1, 2020 08:30:00'),
          comment: "Best foot patient ever!!",
          rating: 5,
          customerName: "Bob",
        },
        {
          dateTime: new Date('December 2, 2020 08:30:00'),
          comment: "Okish foot patient ever!!",
          rating: 3,
          customerName: "Lisy",
        },
      ]
      dispatch(patientInfoActions.setReviews(tmpReveiw))

      //set the list of offices in the method setOffices, follow the format given in tmpOffices
      let tmpOffices = [
        {
          id: 1,
          address: "1234 Address1 Rd, Richardson, TX 75080",
          name: "Vibra Hospital",
        },
        {
          id: 2,
          address: "1234 Address2 Rd, Richardson, TX 75080",
          name: "Blue Hospital",
        },
      ]
      dispatch(patientInfoActions.setOffices(tmpOffices))

      //set the list of services in the method setServices, follow the format given in tmpServices
      let tmpServices = [
        {
          name: "Foot Surgery",
          description: "The replacement of the foot"
        },
        {
          name: "Toe Extraction",
          description: "The removal of a toe"
        },
      ]
      dispatch(patientInfoActions.setServices(tmpServices))


    } catch (error) {
      console.log("Error fetching patients information");
    }
  };
}

export function sendOfficesData(offices, id) {
  return async (dispatch) => {
    //everytime the list of offices changes this funciton is called
    //update the database dealing with the offices for this specific patient id here
    const sendRequest = async () => {
      //if an error occurs, throw it
    };

    try {
      await sendRequest();
    } catch (error) {
      console.log("Error sending appointments");
    }
  };
}

export function sendServicesData(reviews, id) {
  return async (dispatch) => {
    //everytime the list of services changes this funciton is called
    //update the database dealing with the services for this specific patient id here
    const sendRequest = async () => {
      //if an error occurs, throw it
    };

    try {
      await sendRequest();
    } catch (error) {
      console.log("Error sending appointments");
    }
  };
}