import { api } from "./httpService";
import ENV from "../../../env-variable.json";
// const env_variable = require("../../../env-variable.json");

const { REACT_APP_API_USER_AUTH_LOGIN } = ENV;

class UserServices {
  authLogin = (auth_data) => {
    return api.post(`${REACT_APP_API_USER_AUTH_LOGIN}`, null, {
      headers: {
        Authorization: `Basic ${auth_data}`,
      },
    });
  };
}

export default new UserServices();
