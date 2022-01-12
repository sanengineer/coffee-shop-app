import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import ROUTES from "../constants/routes.json";

import PrivateRoutes from "./routes";
import loadable from "@loadable/component";
import Nav from "./nav";
import Split from "react-split";
import Resizable from "re-resizable";
import { Topnav } from "../components";
import { setAuthToken } from "../utils";
import store from "../redux/store/store";
import { setCurrentUser } from "../redux/actions/authLoginAction";
import "./root.css";

const Login = loadable(() =>
  import(/* webpackChunkName: "LoginChunk" */ "Pages/login/Login")
);

class Root extends Component {
  render() {
    if (localStorage.authToken) {
      const token = localStorage.authToken;
      const user_id = localStorage.user_id;
      setAuthToken(token);

      //debug
      console.log("\nTOKEN:", token, "\n");

      store.dispatch(setCurrentUser(user_id));
    }

    const { history } = this.props;

    console.log("STORE:", store);
    console.log("HISTORY:", history);
    console.log("THIS_PROPS:", this.props);

    return (
      <React.Fragment>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <PrivateRoutes history={history} />
          </ConnectedRouter>
        </Provider>
      </React.Fragment>
    );
  }
}

export default Root;
