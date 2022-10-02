import axios from "axios"

export const AddUser = async (item) => {
  const baseURL = "https://cookclick-api.code.in.th/signup"
  try {
    const response = await axios.post(baseURL, item)
    return response.data
  } catch (err) {
    return err.response.data
  }
}

export const UserLogin = async (item) => {
  const baseURL = "https://cookclick-api.code.in.th/login"
  try {
    const response = await axios.post(baseURL, item)
    return response.data.token
  } catch (err) {
    return 'error'
  }
}

export const GetSystemIngredient = async (token) => {
  const baseURL = "https://cookclick-api.code.in.th/systems/ingredients"
  try {
    const response = await axios.get(baseURL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  } catch (err) {
    console.error(err.response.data)
    alert(err.response.data.message)
    return null
  }
}

export const GetSystemKitchenware = async (token) => {
  const baseURL = "https://cookclick-api.code.in.th/systems/kitchenwares"
  try {
    const response = await axios.get(baseURL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  } catch (err) {
    console.error(err.response.data)
    alert(err.response.data.message)
    return null
  }
}

export const AddSysIngredient = async (token, ingredient) => {
  const baseURL = "https://cookclick-api.code.in.th/systems/ingredients"
  try {
    const response = await axios.post(baseURL, ingredient, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  } catch (err) {
    console.error(err.response.data)
    alert(err.response.data.message)
    return null
  }
}

export const AddSysKitchenware = async (token, kitchenware) => {
  const baseURL = "https://cookclick-api.code.in.th/systems/kitchenwares"
  try {
    const response = await axios.post(baseURL, kitchenware, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  } catch (err) {
    console.error(err.response.data)
    alert(err.response.data.message)
    return null
  }
}

export const AddMenu = async (token, menu) => {
  const baseURL = "https://cookclick-api.code.in.th/me/menu"
  try {
    const response = await axios.post(baseURL, menu, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  } catch (err) {
    console.error(err.response.data)
    alert(err.response.data.message)
    return null
  }
}

export const AddorEditIngredient = async (token, ingredient) => {
  const baseURL = "https://cookclick-api.code.in.th/me/ingredients"
  try {
    const response = await axios.post(baseURL, ingredient, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  } catch (err) {
    console.error(err.response.data)
    alert(err.response.data.message)
    return null
  }
}

export const AddorEditKitchenware = async (token, kitchenware) => {
  const baseURL = "https://cookclick-api.code.in.th/me/kitchenwares"
  try {
    const response = await axios.post(baseURL, kitchenware, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  } catch (err) {
    console.error(err.response.data)
    alert(err.response.data.message)
    return null
  }
}

export const AddMenuComment = async (token, comment, menuId) => {
  const baseURL = `https://cookclick-api.code.in.th/menu/${menuId}/comments`
  try {
    const response = await axios.post(baseURL, comment, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  } catch (err) {
    console.error(err.response.data)
    alert(err.response.data.message)
    return null
  }
}

export const AddReportMember = async (token, member, memberId) => {
  const baseURL = `https://cookclick-api.code.in.th/reports/member/${memberId}`
  try {
    const response = await axios.post(baseURL, member, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  } catch (err) {
    console.error(err.response.data)
    alert(err.response.data.message)
    return null
  }
}

export const GetMenuInfo = async (menuId) => {
  const baseURL = `https://cookclick-api.code.in.th/menu/${menuId}`
  try {
    const response = await axios.get(baseURL)
    return response.data
  } catch (err) {
    console.error(err.response.data)
    alert(err.response.data.message)
    return null
  }
}

export const GetAllMeMenu = async (token) => {
  const baseURL = "https://cookclick-api.code.in.th/me/menu"
  try {
    const response = await axios.get(baseURL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  } catch (err) {
    console.error(err.response.data)
    alert(err.response.data.message)
    return null
  }
}

export const GetAllMeIngredient = async (token) => {
  const baseURL = "https://cookclick-api.code.in.th/me/ingredients"
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

export const GetAllMeKitware = async (token) => {
  const baseURL = "https://cookclick-api.code.in.th/me/kitchenwares"
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

export const GetAllMeMenuStatus = async (token) => {
  const baseURL = "https://cookclick-api.code.in.th/me/menu/status"
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

export const  DelMeMenu = async (token, menu, menuId) => {
  const baseURL = `https://cookclick-api.code.in.th/me/menu/${menuId}`
  try {
    const response = await axios.post(baseURL, menu, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  } catch (err) {
    console.error(err.response.data)
    alert(err.response.data.message)
    return null
  }
}

export const  RatingMenu = async (token, menu, menuId) => {
  const baseURL = `https://cookclick-api.code.in.th/menu/${menuId}/rating`
  try {
    const response = await axios.post(baseURL, menu, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  } catch (err) {
    console.error(err.response.data)
    alert(err.response.data.message)
    return null
  }
}

export const  MenuApproveOrUnapprove = async (token, menu, menuId) => {
  const baseURL = `https://cookclick-api.code.in.th/requests/menu/${menuId}`
  try {
    const response = await axios.put(baseURL, menu, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  } catch (err) {
    console.error(err.response.data)
    alert(err.response.data.message)
    return null
  }
}

export const  CommentReport = async (token, comment, menuId , commentId) => {
  const baseURL = `https://cookclick-api.code.in.th/reports/menu/${menuId}/comments/${commentId}`
  try {
    const response = await axios.post(baseURL, comment, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  } catch (err) {
    console.error(err.response.data)
    alert(err.response.data.message)
    return null
  }
}

export const  MemberMenuReport = async (token, menu, menuId) => {
  const baseURL = `https://cookclick-api.code.in.th/reports/menu/${menuId}`
  try {
    const response = await axios.post(baseURL, menu, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  } catch (err) {
    console.error(err.response.data)
    alert(err.response.data.message)
    return null
  }
}

export const MenuRequest = async (token) => {
  const baseURL = "https://cookclick-api.code.in.th/requests/menu"
  try {
    const response = await axios.get(baseURL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  } catch (err) {
    console.error(err.response.data)
    alert(err.response.data.message)
    return null
  }
}

export const  DelMenu = async (token, menu, menuId) => {
  const baseURL = `https://cookclick-api.code.in.th/menu/${menuId}`
  try {
    const response = await axios.post(baseURL, menu, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  } catch (err) {
    console.error(err.response.data)
    alert(err.response.data.message)
    return null
  }
}

export const  DelComment = async (token, menu, menuId ,commentId) => {
  const baseURL = `https://cookclick-api.code.in.th/menu/${menuId}/comments/${commentId}`
  try {
    const response = await axios.post(baseURL, menu, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  } catch (err) {
    console.error(err.response.data)
    alert(err.response.data.message)
    return null
  }
}

export const SearchMenu = async () => {
  const baseURL = `https://cookclick-api.code.in.th/search/menu`
  try {
    const response = await axios.get(baseURL)
    return response.data
  } catch (err) {
    console.error(err.response.data)
    alert(err.response.data.message)
    return null
  }
}

export const SearchAdvance = async (token) => {
  const baseURL = "https://cookclick-api.code.in.th/menu/ingredients_kitchenwares"
  try {
    const response = await axios.get(baseURL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  } catch (err) {
    console.error(err.response.data)
    alert(err.response.data.message)
    return null
  }
}

export const MenuReportedList = async (token) => {
  const baseURL = "https://cookclick-api.code.in.th/reports/menu"
  try {
    const response = await axios.get(baseURL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  } catch (err) {
    console.error(err.response.data)
    alert(err.response.data.message)
    return null
  }
}

export const CommentReportedList = async (token) => {
  const baseURL = "https://cookclick-api.code.in.th/reports/menu/comments"
  try {
    const response = await axios.get(baseURL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  } catch (err) {
    console.error(err.response.data)
    alert(err.response.data.message)
    return null
  }
}

export const MemberReportedList = async (token) => {
  const baseURL = "https://cookclick-api.code.in.th/reports/member"
  try {
    const response = await axios.get(baseURL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  } catch (err) {
    console.error(err.response.data)
    alert(err.response.data.message)
    return null
  }
}

export const GetAllMemberInfo = async (token) => {
  const baseURL = "https://cookclick-api.code.in.th/member"
  try {
    const response = await axios.get(baseURL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  } catch (err) {
    console.error(err.response.data)
    alert(err.response.data.message)
    return null
  }
}

export const  AddMember = async (token, member) => {
  const baseURL = `https://cookclick-api.code.in.th/member`
  try {
    const response = await axios.post(baseURL, member, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  } catch (err) {
    console.error(err.response.data)
    alert(err.response.data.message)
    return null
  }
}

export const GetAdsList = async (token) => {
  const baseURL = "https://cookclick-api.code.in.th/adscontent"
  try {
    const response = await axios.get(baseURL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  } catch (err) {
    console.error(err.response.data)
    alert(err.response.data.message)
    return null
  }
}

export const  AdsEditing = async (token, adscontent) => {
  const baseURL = `https://cookclick-api.code.in.th/adscontents`
  try {
    const response = await axios.post(baseURL, adscontent, {
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

export const  MemberBan = async (token, member ,memberId) => {
  const baseURL = `https://cookclick-api.code.in.th/member/${memberId}/ban`
  try {
    const response = await axios.put(baseURL, member, {
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

export const  AddIngredientCategory = async (token, category) => {
  const baseURL = `https://cookclick-api.code.in.th/systems/categories`
  try {
    const response = await axios.post(baseURL, category, {
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

export const  DelIngredientCategory = async (token, category) => {
  const baseURL = `https://cookclick-api.code.in.th/systems/categories`
  try {
    const response = await axios.post(baseURL, category, {
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

export const  DelIngredient = async (token, ingredient) => {
  const baseURL = `https://cookclick-api.code.in.th/systems/ingredients`
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

export const  DelKitware = async (token, kitwares) => {
  const baseURL = `https://cookclick-api.code.in.th/systems/kitchenwares`
  try {
    const response = await axios.post(baseURL, kitwares, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  } catch (err) {
    console.error(err.response.data)
    alert(err.response.data.message)
    return null
  }
}
