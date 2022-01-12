import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { YourBrandLogo } from "../../assets";
import Styles from "./Login.module.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loginUser } from "../../redux/actions/authLoginAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = ({
  // errors,
  onSubmit,
  username,
  onChange,
  password,
}) => {
  let { login } = useParams();

  //
  //debug
  console.log("login_useParams:", login);

  return (
    <>
      <form noValidate onSubmit={onSubmit} className={Styles.form_container}>
        <div className={Styles.form_title}>
          <div
            style={{
              fontSize: "18px",
              color: "#fff",
              fontWeight: "bold",
              textAlign: "center",
            }}>
            Admin Dashboard
          </div>
        </div>
        <div className={Styles.spacer_y} />
        <div className={Styles.spacer_y} />
        <div className={Styles.form_sub_container}>
          <div>
            <label className={Styles.form_label}>Username</label>
            <div className={Styles.spacer_y} />
            <input
              onChange={onChange}
              value={username}
              // error={errors.email}
              id="username"
              type="text"
              autoComplete="off"
              className={Styles.form_input}
            />
            {/* <span>{errors.email} </span> */}
          </div>
          <div className={Styles.spacer_y} />
          <div className={Styles.spacer_y} />
          <div>
            <label className={Styles.form_label}>Password</label>
            <div className={Styles.spacer_y} />
            <input
              onChange={onChange}
              value={password}
              // error={errors.password}
              id="password"
              type="password"
              autoComplete="off"
              className={Styles.form_input}
            />
            {/* <span>{errors.password} </span> */}
          </div>
        </div>
        <div>{/* <span>{errors.message}</span> */}</div>
        <div className={Styles.spacer_y} />
        <div className={Styles.spacer_y} />
        <div className={Styles.spacer_y} />
        <div className={Styles.login_btn_container}>
          <button type="submit" className={Styles.login_btn}>
            Login
          </button>
        </div>
      </form>
    </>
  );
};

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const user_data = {
      auth: {
        username: this.state.username,
        password: this.state.password,
      },
    };

    const hash64 = btoa(
      user_data.auth.username + ":" + user_data.auth.password
    );

    console.log(hash64);

    this.props.loginUser(hash64);
  };

  // componentWillReceiveProps(nextProps) {
  //   //
  //   //debug
  //   // console.log(
  //   //   "this.props.auth.isAuthenticated:",
  //   //   this.props.auth.isAuthenticated
  //   // );
  //   // console.log("componentWilReceiveProps");
  //   if (nextProps.auth.isAuthenticated) {
  //     //direct user to dashboard login after login
  //     this.props.history.push("/");
  //   }
  //   if (nextProps.errors) {
  //     this.setState({
  //       errors: nextProps.errors,
  //     });
  //   }
  // }

  componentDidMount() {
    console.log("this.props.auth.isAuthenticated:", this.props);

    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
    // if (this.props.error === true) {

    // }
  }

  render() {
    const { username, password } = this.state;
    const { error } = this.props;

    console.log("THIS_PROPS:", this.props);

    return (
      <div className={Styles.container}>
        <div
          style={{
            position: "absolute",
            top: "4vh",
            display: "flex",
            justifyContent: "center",
            width: "100%",
            alignItems: "center",
            webkitAppRegion: "drag"
          }}>
          <div width={60} style={{ display: "flex" }}>
            <img src={YourBrandLogo} alt="logo" width={30} />
          </div>
          <div
            style={{
              marginLeft: "10px",
              fontWeight: "700",
              fontSize: "12px",
              color: "#fff",
            }}>
            <div>Your Brand</div>
          </div>
        </div>
        <div className={Styles.content}>
          <LoginForm
            username={username}
            password={password}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
          />
        </div>
        <ToastContainer
          position="bottom-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  error: state.error,
});

export default connect(mapStateToProps, { loginUser })(Login);
