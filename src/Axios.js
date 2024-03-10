import axios from "axios";
const API = axios.create({
  baseURL: "/api/v1",
});
//   /api/v1/interview
export const joinInterview = async ({ email,roomID }) => {
  let res = await API.post("/auth/enterInterview", {
    email: email,
    roomID: roomID,
  });
  return res;
};
export const saveInterviewID = ({ roomID, peerID }) => {
  let res = API.post("/peer/interviewer", { roomID: roomID, peerID: peerID });
  return res;
};

export const saveCandidateID = ({ roomID, peerID }) => {
  let res = API.post("/peer/candidate", { roomID: roomID, peerID: peerID });
  return res;
};

export const getCandidatePeerId = ({ roomID }) => {
  let res = API.post("/peer/getcandidatepeerid", { roomID: roomID });
  return res;
};

export const saveProblem = (questionObject) => {
  let res = API.post("/problem/add", questionObject);
  console.log("Save Problem");
  return res;
};
export const getAllProblem = () => {
  let res = API.post("/problem/get");
  console.log("Got Problem");
  return res;
};

export const getProblemById = (interviewId) => {
  let res = API.post("/problem/getproblems",{_id:interviewId}); 
  return res;
};

// /interview/create
export const saveInterviewProblems = async (interviewId,selectedProblem) => {
 
  console.log(selectedProblem);
  
  let res = await API.post("/interviewroom/selectproblems",{_id:interviewId,problemId:selectedProblem}  );
  return res;
};
export const createInterview = async (formData) => {
  let res = await API.post("/interview/create", formData);
  return res;
};

export const getAllInterview = async () => {
  let res = await API.post("/interview/get");
  return res;
};

export const GetAnalyticsData = async () => {
  let res = await API.get("/interview/getwindow/weekly");
  return res;
};

export const getAllCountries = async () => {
  const apiUrl = "https://restfulcountries.com/api/v1/countries";
  const token = `511|dPPBIfGyKvMlTS58ZtWJi7hZjvuByCudKOvqW3Bh`;
  const allCountries = await axios.get(apiUrl, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return allCountries.data.data;
};

export const companyRegister = async (formData) => {
  console.log(formData);

  let res = await API.post("/auth/register", formData);
  console.log(res);

  return res;
};

export const login = async (credentials) => {
  console.log("Login");

  let res = await API.post("/auth/login", credentials);
  console.log(res);
  return res;
};

export const logout = async () => {
  let res = await API.post("/auth/logout");
  return res;
};

export const currentUser = async () => {
  let res = await API.get("/auth/loggeduser");
  console.log(res);
  return res;
};
export const findEmail = async (credentialObj) => {
  try {
    let res = await API.post("/auth/getotp", credentialObj);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const resetPassword = async (credentialObj) => {
  try {
    let res = await API.post("/auth/verifyotp", credentialObj);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getKey = async () => {
  try {
    let res = await API.get("/payment/getKey");
    return res;
  } catch (error) {
    return error;
  }
};
export const getAllPlans = async () => {
  try {
    let res = await API.get("/plan/getall");
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const checkoutPlanWithId = async (id) => {
  try {
    let res = await API.post(`/payment/checkout/${id}`);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};
