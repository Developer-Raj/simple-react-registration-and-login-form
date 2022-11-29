import React from "react";
import { connect } from "react-redux";
import { Formik, Form } from "formik";
import TextField from "../components/TextField/TextField.component";
import * as yup from "yup";
import { Link, Navigate } from "react-router-dom";
import { $login_user } from "../store/actions/user.action";

class Login extends React.Component {
  LoginValidationSchema = yup.object({
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "password must be greater than or equal to 6 characters"),
  });

  render() {
    return (
      <>
        <main id="login">
          <h2 style={{ textAlign: "center" }}>Login</h2>
          {this.props.isAuthenticated && <Navigate to={"/welcome"} />}
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={this.LoginValidationSchema}
            onSubmit={(values) => {
              this.props.login(values);

              // resseting the input fields
              const resetbtn = document.getElementById("resetBtn");
              resetbtn.click();
            }}
          >
            <Form role={"form"}>
              <TextField
                label={"Email"}
                name={"email"}
                id={"email"}
                type={"email"}
                autoComplete={false}
              />
              <TextField
                label={"Password"}
                name={"password"}
                id={"password"}
                type={"password"}
                autoComplete={false}
              />
              <button className="submit" type="submit" role={"button"}>
                Login
              </button>
              <button
                type="reset"
                hidden
                aria-hidden="true"
                role={"button"}
                id="resetBtn"
              >
                Reset
              </button>
              <Link
                to="/register"
                style={{
                  display: "block",
                  textAlign: "center",
                  margin: "10px",
                }}
              >
                Create Account
              </Link>
            </Form>
          </Formik>
        </main>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { isAuthenticated: state.user.isAuthenticated };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => dispatch($login_user(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
