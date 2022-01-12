import { setAuthToken } from "../../utils";
import * as actionTypes from "./actionTypes";
import { UserServices } from "../../services";
import { toast } from "react-toastify";

export const loginUser = (user_data) => (dispatch) => {
  UserServices.authLogin(user_data)
    .then((res) => {
      //debug
      console.log(res);
      localStorage.setItem("authToken", res.data.tokenString);
      localStorage.setItem("user_id", res.data.userId);

      setAuthToken(res.data.tokenString);

      dispatch(setCurrentUser(res.data.tokenString));
    })
    .catch((err) => {
      console.log(err);
      dispatch(authError(err.response));
      toast.error(`✋🏾 ${err.response.statusText}`);
    });
};

export const logOutUser = () => (dispatch) => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("user_id");
  dispatch(setCurrentUser({}));
};

export const setCurrentUser = (decoded) => {
  return {
    type: actionTypes.SET_CURRENT_USER,
    payload: decoded,
  };
};

export const authError = (error) => {
  return {
    type: actionTypes.AUTH_ERROR,
    payload: error,
  };
};
