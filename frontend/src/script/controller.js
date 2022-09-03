import axios from "axios";
import { decodeToken } from "react-jwt";

export const AddUser = async (item) => {
  const baseURL = "https://cookclick-api.code.in.th/user/signup"
  try {
    const response = await axios.post(baseURL, item);
    console.log(response.data);
  }
  catch (err) {
    console.error(err.response.data);
  }
}

export const Login = async (item) => {
  const baseURL = "https://cookclick-api.code.in.th/user/login"
  try {
    const response = await axios.post(baseURL, item);
    console.log(response.data.token);
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InlheWFAdGVzdGVyYS50eCIsInVzZXJJRCI6IjYzMTJmYzIzM2MwMWE0YjBjNzI1NDkyZCIsInJvbGUiOjMsImlhdCI6MTY2MjE4ODYwOX0.152tDb7Dh7SFfsGmfAOzumleQvqvp5CxIiASXgpdAjw"
    const myDecodedToken = decodeToken(token);
    console.log(myDecodedToken);
  }
  catch (err) {
    console.error(err.response);
  }
}