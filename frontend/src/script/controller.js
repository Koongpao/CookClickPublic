import axios from "axios"

export const AddUser = async (item) => {
  const baseURL = "https://cookclick-api.code.in.th/signup"
  try {
    const response = await axios.post(baseURL, item)
    console.log(response.data)
    return 'success'
  } catch (err) {
    console.error(err.response.data)
    return err.response.data
  }
}

export const UserLogin = async (item) => {
  const baseURL = "https://cookclick-api.code.in.th/login"
  try {
    const response = await axios.post(baseURL, item)
    return response.data.token
  } catch (err) {
    console.error(err.response.data)
    return 'error'
  }
}

<<<<<<< HEAD
export const GetSystemIngredient = async (token) => {
  const baseURL = "https://cookclick-api.code.in.th/systems/ingredients"
=======
export const GetAllIngredient = async (token) => {
  const baseURL = "https://cookclick-api.code.in.th/member/all_ingredient"
>>>>>>> a7ada1b29943883099ddcaff38986ecc028b62eb
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

<<<<<<< HEAD
export const GetSystemKitchenware = async (token) => {
  const baseURL = "https://cookclick-api.code.in.th/systems/kitchenwares"
=======
export const GetAllKitchenware = async (token) => {
  const baseURL = "https://cookclick-api.code.in.th/member/all_kitchenware"
>>>>>>> a7ada1b29943883099ddcaff38986ecc028b62eb
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

<<<<<<< HEAD
export const AddSysIngredient = async (token, ingredient) => {
  const baseURL = "https://cookclick-api.code.in.th/systems/ingredients"
=======
export const GetMemberCategory = async (token) => {
  const baseURL =
    "https://cookclick-api.code.in.th/member/list_ingredient_category"
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

export const NewIngredient = async (token, ingredient) => {
  const baseURL = "https://cookclick-api.code.in.th/member/add_ingredient"
>>>>>>> a7ada1b29943883099ddcaff38986ecc028b62eb
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

<<<<<<< HEAD
export const AddorEditIngredient = async (token, ingredient) => {
  const baseURL = "https://cookclick-api.code.in.th/me/ingredients"
=======
export const PublishMenu = async (token, menu, menuId) => {
  const baseURL = `https://cookclick-api.code.in.th/menu/publish/${menuId}`
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

export const AddIngredient = async (token, ingredient) => {
  const baseURL =
    "https://cookclick-api.code.in.th/member/add/member_ingredient"
>>>>>>> a7ada1b29943883099ddcaff38986ecc028b62eb
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

<<<<<<< HEAD
export const AddorEditKitchenware = async (token, kitchenware) => {
  const baseURL = "https://cookclick-api.code.in.th/me/kitchenwares"
=======
export const DelIngredient = async (token, ingredient) => {
  const baseURL =
    "https://cookclick-api.code.in.th/member/delete/member_ingredient"
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

export const AddKitchenware = async (token, kitchenware) => {
  const baseURL =
    "https://cookclick-api.code.in.th/member/add/member_kitchenware"
>>>>>>> a7ada1b29943883099ddcaff38986ecc028b62eb
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

<<<<<<< HEAD
=======
export const DelKitchenware = async (token, kitchenware) => {
  const baseURL =
    "https://cookclick-api.code.in.th/member/delete/member_kitchenware"
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

export const GetMemberIngredientKitchenware = async (token) => {
  const baseURL =
    "https://cookclick-api.code.in.th/member/member_ingredient_kitchenware"
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

>>>>>>> a7ada1b29943883099ddcaff38986ecc028b62eb
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

<<<<<<< HEAD
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
=======
export const DelMemberMenu = async (token, menu, menuId) => {
  const baseURL = `https://cookclick-api.code.in.th/member/delete/member_menu/${menuId}`
>>>>>>> a7ada1b29943883099ddcaff38986ecc028b62eb
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

<<<<<<< HEAD
export const  RatingMenu = async (token, menu, menuId) => {
  const baseURL = `https://cookclick-api.code.in.th/menu/${menuId}/rating`
=======
export const RatingMenu = async (token, menu, menuId) => {
  const baseURL = `https://cookclick-api.code.in.th/member/add/menu_rate/${menuId}`
>>>>>>> a7ada1b29943883099ddcaff38986ecc028b62eb
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

<<<<<<< HEAD
export const  MenuApproveOrUnapprove = async (token, menu, menuId) => {
  const baseURL = `https://cookclick-api.code.in.th/requests/menu/${menuId}`
=======
export const MenuApprove = async (token, menu, menuId) => {
  const baseURL = `https://cookclick-api.code.in.th/menu/menu_approved/${menuId}`
>>>>>>> a7ada1b29943883099ddcaff38986ecc028b62eb
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

<<<<<<< HEAD
export const  CommentReport = async (token, comment, menuId , commentId) => {
  const baseURL = `https://cookclick-api.code.in.th/reports/menu/${menuId}/comments/${commentId}`
=======
export const CommentReport = async (token, menu, commentId) => {
  const baseURL = `https://cookclick-api.code.in.th/add/comment_report/${commentId}`
>>>>>>> a7ada1b29943883099ddcaff38986ecc028b62eb
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

<<<<<<< HEAD
export const  MemberMenuReport = async (token, menu, menuId) => {
  const baseURL = `https://cookclick-api.code.in.th/reports/menu/${menuId}`
=======
export const MemberMenuReport = async (token, menu, menuId) => {
  const baseURL = `https://cookclick-api.code.in.th/menu/add/menu_report/${menuId}`
>>>>>>> a7ada1b29943883099ddcaff38986ecc028b62eb
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

<<<<<<< HEAD
export const  DelMenu = async (token, menu, menuId) => {
  const baseURL = `https://cookclick-api.code.in.th/menu/${menuId}`
=======
export const Menuapprove = async (token, menu, menuId) => {
  const baseURL = `https://cookclick-api.code.in.th/menu/add/${menuId}/approve`
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

export const DelMenu = async (token, menu, menuId) => {
  const baseURL = `https://cookclick-api.code.in.th/menu/${menuId}/delete`
>>>>>>> a7ada1b29943883099ddcaff38986ecc028b62eb
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

<<<<<<< HEAD
export const  DelComment = async (token, menu, menuId ,commentId) => {
  const baseURL = `https://cookclick-api.code.in.th/menu/${menuId}/comments/${commentId}`
=======
export const DelComment = async (token, menu, commentId) => {
  const baseURL = `https://cookclick-api.code.in.th/menu/${commentId}/comment/delete`
>>>>>>> a7ada1b29943883099ddcaff38986ecc028b62eb
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

<<<<<<< HEAD
export const  AddMember = async (token, member) => {
  const baseURL = `https://cookclick-api.code.in.th/member`
=======
export const AddMember = async (token, member) => {
  const baseURL = `https://cookclick-api.code.in.th/admin/addMember`
>>>>>>> a7ada1b29943883099ddcaff38986ecc028b62eb
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

<<<<<<< HEAD
export const  AdsEditing = async (token, adscontent) => {
  const baseURL = `https://cookclick-api.code.in.th/adscontents`
=======
export const AdsEditing = async (token, adscontents) => {
  const baseURL = `https://cookclick-api.code.in.th/admin/addSponsor`
>>>>>>> a7ada1b29943883099ddcaff38986ecc028b62eb
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
