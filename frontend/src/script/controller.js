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

export const GetMemberCategory = async (token) => {
  const baseURL = "https://cookclick-api.code.in.th/member/list_ingredient_category"
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

export const NewIngredient = async (token, ingredient) => {
  const baseURL = "https://cookclick-api.code.in.th/member/add_ingredient"
  try {
    const response = await axios.post(baseURL, ingredient, {
      headers: {
        Authorization: `Bearer ${token}`
      },
    });
    return response.data;
  }
  catch (err) {
    console.error(err.response.data);
    alert(err.response.data.message);
    return null;
  }
}

export const NewKitchenware = async (token, kitchenware) => {
  const baseURL = "https://cookclick-api.code.in.th/member/add_kitchenware"
  try {
    const response = await axios.post(baseURL, kitchenware, {
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

export const NewMenu = async (token, menu) => {
  const baseURL = "https://cookclick-api.code.in.th/menu/add/member_menu"
  try {
    const response = await axios.post(baseURL, menu, {
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

export const PublishMenu = async (token, menu, menuId) => {
  const baseURL = `https://cookclick-api.code.in.th/menu/publish/${menuId}`
  try {
    const response = await axios.post(baseURL, menu, {
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

export const AddIngredient = async (token, ingredient) => {
  const baseURL = "https://cookclick-api.code.in.th/member/add/member_ingredient"
  try {
    const response = await axios.post(baseURL, ingredient, {
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

export const DelIngredient = async (token, ingredient) => {
  const baseURL = "https://cookclick-api.code.in.th/delete/member_ingredient"
  try {
    const response = await axios.post(baseURL, ingredient, {
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

export const AddKitchenware = async (token, kitchenware) => {
  const baseURL = "https://cookclick-api.code.in.th/member/add/member_kitchenware"
  try {
    const response = await axios.post(baseURL, kitchenware, {
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

export const DelKitchenware = async (token, kitchenware) => {
  const baseURL = "https://cookclick-api.code.in.th/delete/member_kitchenware"
  try {
    const response = await axios.post(baseURL, kitchenware, {
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

export const GetMemberIngredientKitchenware = async (token) => {
  const baseURL = "https://cookclick-api.code.in.th/member/member_ingredient_kitchenware"
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

export const AddMenuComment = async (token, comment, menuId) => {
  const baseURL = `https://cookclick-api.code.in.th/menu/add/member_comment/${menuId}`
  try {
    const response = await axios.post(baseURL, comment, {
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


