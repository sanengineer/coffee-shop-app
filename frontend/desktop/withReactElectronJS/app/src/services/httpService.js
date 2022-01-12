import axios from "axios";
import ENV from "../../../env-variable.json";

const {
  REACT_APP_API_HOSTNAME,
  REACT_APP_API_PORT,
  REACT_APP_API_SUB_FOLDER,
  REACT_APP_API_VERSION,
} = ENV;

const API_HOSTNAME = REACT_APP_API_HOSTNAME;
const API_PORT = REACT_APP_API_PORT;
const API_SUB_FOLDER = REACT_APP_API_SUB_FOLDER;
const API_VERSION = REACT_APP_API_VERSION;

const api = axios.create({
  baseURL: `http://${API_HOSTNAME}:${API_PORT}/${API_SUB_FOLDER}/${API_VERSION}`,
  headers: {
    "Content-Type": "application/json",
  },
});

console.log(
  `http://${API_HOSTNAME}:${API_PORT}/${API_SUB_FOLDER}/${API_VERSION}`,
  API_HOSTNAME
);

export { api };
