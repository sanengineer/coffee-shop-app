import { AUTH_ERROR } from "../actions/actionTypes";

const initialState = {
  error: false,
  message: {},
};

export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_ERROR:
      return {
        ...state,
        error: true,
        message: action.payload,
      };
    default:
      return state;
  }
}
