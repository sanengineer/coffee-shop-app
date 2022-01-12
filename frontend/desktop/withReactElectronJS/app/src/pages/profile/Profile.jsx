import React, { Component } from "react";
import { logOutUser } from "../../redux/actions/authLoginAction";
import { connect } from "react-redux";
import ROUTES from "Constants/routes";
import PropTypes from "prop-types";

class Profile extends Component {
  logOutUser = () => {
    this.props.logOutUser();
    // this.navigate(ROUTES.LOGIN);
    // this.props.history.push("/login");
    console.log("this.props", this.props);
  };
  render() {
    return (
      <div>
        <button onClick={() => this.logOutUser()}>Logout</button>
      </div>
    );
  }
}

Profile.propTypes = {
  logOutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logOutUser })(Profile);
