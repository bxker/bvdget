import ally from "ally-http-request";

//initial state
const initialState = {
  user_id: null,
  username: "",
  first_name: "",
  last_name: "",
  email: "",
  profile_img: ""
};

//const strings
const GET_SESSION = "GET_SESSION";
const REGISTER_USER = "REGISTER_USER";
const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = "LOGOUT_USER";

//functions
export function getSession(username) {
  return {
    type: GET_SESSION,
    payload: ally.get(`/auth/user?username=${username}`)
  };
}

export function registerUser(newUser) {
  console.log('hit reducer')
  return {
    type: REGISTER_USER,
    payload: ally.post("/auth/register", newUser)
  };
}

export function loginUser(user) {
  return {
    type: LOGIN_USER,
    payload: ally.post("/auth/login", user)
  };
}

export function logoutUser() {
  ally.post("/auth/logout");
  return {
    type: LOGOUT_USER
  };
}

//reducer
export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case `${GET_SESSION}_FULFILLED`:
      return {
        ...state,
        user_id: payload.user_id,
        username: payload.username,
        first_name: payload.first_name,
        last_name: payload.last_name,
        email: payload.email,
        profile_img: payload.profile_img
      };
    case `${REGISTER_USER}_FULFILLED`:
      console.log(payload)
      return {
        ...state,
        user_id: payload.user_id,
        username: payload.username,
        first_name: payload.first_name,
        last_name: payload.last_name,
        email: payload.email,
        profile_img: payload.profile_img
      };
    case `${LOGIN_USER}_FULFILLED`:
      return {
        ...state,
        user_id: payload.user_id,
        username: payload.username,
        first_name: payload.first_name,
        last_name: payload.last_name,
        email: payload.email,
        profile_img: payload.profile_img
      };
    case LOGOUT_USER:
      return {
        user_id: null,
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        profile_img: ""
      };
    default:
      return state;
  }
}