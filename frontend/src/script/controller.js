import axios from "axios"

export const AddUser = async (item) => {
  const baseURL = "https://cookclick-api.code.in.th/user/signup"
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
  const baseURL = "https://cookclick-api.code.in.th/user/login"
  try {
    const response = await axios.post(baseURL, item)
    return response.data.token
  } catch (err) {
    console.error(err.response.data)
    alert(err.response.data.message)
    return null
  }
}

export const GetAllIngredient = async (token) => {
  const baseURL = "https://cookclick-api.code.in.th/member/all_ingredient"
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

export const GetAllKitchenware = async (token) => {
  const baseURL = "https://cookclick-api.code.in.th/member/all_kitchenware"
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

export const NewKitchenware = async (token, kitchenware) => {
  const baseURL = "https://cookclick-api.code.in.th/member/add_kitchenware"
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

export const NewMenu = async (token, menu) => {
  const baseURL = "https://cookclick-api.code.in.th/menu/add/member_menu"
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

export const AddMenuComment = async (token, comment, menuId) => {
  const baseURL = `https://cookclick-api.code.in.th/menu/add/member_comment/${menuId}`
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

export const AddMemberReport = async (token, member, memberId) => {
  const baseURL = `https://cookclick-api.code.in.th/member/add/member_report/${memberId}`
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

export const GetMenu = async (token, menuId) => {
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

export const GetMemberMenu = async (token) => {
  const baseURL = "https://cookclick-api.code.in.th/menu/member_menu"
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

export const DelMemberMenu = async (token, menu, menuId) => {
  const baseURL = `https://cookclick-api.code.in.th/member//delete/member_menu/${menuId}`
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

export const RatingMenu = async (token, menu, menuId) => {
  const baseURL = `https://cookclick-api.code.in.th/member/add/menu_rate/${menuId}`
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

export const MenuApprove = async (token, menu, menuId) => {
  const baseURL = `https://cookclick-api.code.in.th/menu/menu_approved/${menuId}`
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

export const CommentReport = async (token, menu, commentId) => {
  const baseURL = `https://cookclick-api.code.in.th/add/comment_report/${commentId}`
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

export const MemberMenuReport = async (token, menu, menuId) => {
  const baseURL = `https://cookclick-api.code.in.th/menu/add/menu_report/${menuId}`
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

export const MenuWaiting = async (token) => {
  const baseURL = "https://cookclick-api.code.in.th/menu/menu_unapproved"
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

export const DelComment = async (token, menu, commentId) => {
  const baseURL = `https://cookclick-api.code.in.th/menu/${commentId}/comment/delete`
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

export const SearchMenu = async (token) => {
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
  const baseURL = "https://cookclick-api.code.in.th/member/searching_menu"
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
  const baseURL = "https://cookclick-api.code.in.th/report/menulist"
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
  const baseURL = "https://cookclick-api.code.in.th/report/commentlist"
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
  const baseURL = "https://cookclick-api.code.in.th/report/profileList"
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
  const baseURL = "https://cookclick-api.code.in.th/admin/memberlist"
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

export const AddMember = async (token, member) => {
  const baseURL = `https://cookclick-api.code.in.th/admin/addMember`
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
  const baseURL = "https://cookclick-api.code.in.th/admin/listSponsor"
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

export const AdsEditing = async (token, adscontents) => {
  const baseURL = `https://cookclick-api.code.in.th/admin/addSponsor`
  try {
    const response = await axios.post(baseURL, adscontents, {
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
