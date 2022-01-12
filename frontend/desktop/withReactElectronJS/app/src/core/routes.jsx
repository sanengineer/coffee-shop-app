import React from "react";
import { Switch, Route } from "react-router-dom";
import ROUTES from "Constants/routes";
import loadable from "@loadable/component";
import { PrivateRoute } from "../utils";
import { Topnav } from "../components";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Nav from "./nav";
// import Home from "../pages/home/Home";
// import Orders from "../pages/orders/Orders";
// import Products from "../pages/products/Products";
// import Categories from "../pages/categories/Categories";
// import Customers from "../pages/customers/Customers";

// Load bundles asynchronously so that the initial render happens faster
const Login = loadable(() =>
  import(/* webpackChunkName: "LoginChunk" */ "Pages/login/Login")
);
const Dashboard = loadable(() =>
  import(/* webpackChunkName: "HomeChunk" */ "Pages/dashboard/Dashboard")
);
const Orders = loadable(() =>
  import(/* webpackChunkName: "OrdersChunk" */ "Pages/orders/Orders")
);
const Customers = loadable(() =>
  import(/* webpackChunkName: "CustomersChunk" */ "Pages/customers/Customers")
);
const Products = loadable(() =>
  import(/* webpackChunkName: "ProductsChunk" */ "Pages/products/Products")
);
const Profile = loadable(() =>
  import(/* webpackChunkName: "ProfileChunk" */ "Pages/profile/Profile")
);
const Settings = loadable(() =>
  import(/* webpackChunkName: "SettingsChunk" */ "Pages/settings/Settings")
);
const Categories = loadable(() =>
  import(
    /* webpackChunkName: "CategoriesChunk" */ "Pages/categories/Categories"
  )
);

const PrivateRoutes = ({ history, auth }) => {
  console.log("AUTH_PRIVATE_ROUTE:", auth);

  // if (auth.isAuthenticated == true) {
  return (
    <>
      {auth.isAuthenticated ? (
        <div className="main-grid">
          <Nav history={history}></Nav>
          <Switch>
            <div className="main-screen">
              <Topnav />
              <PrivateRoute
                exact
                path={ROUTES.DASHBOARD}
                component={Dashboard}
              />
              <PrivateRoute path={ROUTES.ORDERS} component={Orders} />
              <PrivateRoute path={ROUTES.CUSTOMERS} component={Customers} />
              <PrivateRoute path={ROUTES.PRODUCTS} component={Products} />
              <PrivateRoute path={ROUTES.CATEGORIES} component={Categories} />
              <PrivateRoute path={ROUTES.PROFILE} component={Profile} />
              <PrivateRoute path={ROUTES.SETTINGS} component={Settings} />
            </div>
          </Switch>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};

PrivateRoutes.protoTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

// class PrivateRoutes extends React.Component {
//   render() {
//     console.log("HIST:", this.props);
//     return (

//     );
//   }
// }

export default connect(mapStateToProps)(PrivateRoutes);
