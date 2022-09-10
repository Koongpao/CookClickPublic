import axios from "axios";

export const AddUser = async (item) => {
  const baseURL = "https://cookclick-api.code.in.th/user/signup"
  try {
    const response = await axios.post(baseURL, item);
    console.log(response.data);
    alert("SignUp Success");
  }
  catch (err) {
    console.error(err.response.data);
    alert(err.response.data.message);
  }
}

export const UserLogin = async (item) => {
  const baseURL = "https://cookclick-api.code.in.th/user/login"
  try {
    const response = await axios.post(baseURL, item);
    return response.data.token;
  }
  catch (err) {
    console.error(err.response.data);
    alert(err.response.data.message);
    return null;
  }
}

export const GetAllIngredient = async (token) => {
  const baseURL = "https://cookclick-api.code.in.th/member/all_ingredient"
  try {
    const response = await axios.get(baseURL, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  }
  catch (err) {
    console.error(err.response.data);
    alert(err.response.data.message);
    return null;
  }
}

export const GetAllKitchenware = async (token) => {
  const baseURL = "https://cookclick-api.code.in.th/member/all_kitchenware"
  try {
    const response = await axios.get(baseURL, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  }
  catch (err) {
    console.error(err.response.data);
    alert(err.response.data.message);
    return null;
  }
}