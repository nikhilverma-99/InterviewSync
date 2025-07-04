import axios from "axios";
const API = axios.create({
  baseURL: "/api/v1",
});
//   /api/v1/interview
export const joinInterview = async ({ email, roomID }) => {
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
  let res = API.post("/interviewroom/getproblems", { _id: interviewId });
  return res;
};

// /interview/create
export const saveInterviewProblems = async (interviewId, selectedProblem) => {
  console.log(selectedProblem);

  let res = await API.post("/interviewroom/selectproblems", {
    _id: interviewId,
    problemId: selectedProblem,
  });
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
  const countryNames = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo (Congo-Brazzaville)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czechia",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine State",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  return countryNames.map((name) => ({ name }));
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
