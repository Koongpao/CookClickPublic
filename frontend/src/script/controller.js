import axios from "axios";

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

export const UserLogin = async (item) => {
  const baseURL = "https://cookclick-api.code.in.th/user/login"
  try {
    const response = await axios.post(baseURL, item);
    console.log(response.data.token);
  }
  catch (err) {
    console.error(err.response.data);
  }
}