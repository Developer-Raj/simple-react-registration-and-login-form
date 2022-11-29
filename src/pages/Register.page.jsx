import React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import TextField from "../components/TextField/TextField.component";
import { Link, Navigate } from "react-router-dom";
import { $register_user } from "../store/actions/user.action";
import { connect } from "react-redux";

class Register extends React.Component {
  registerValidationSchema = yup.object({
    first_name: yup
      .string()
      .required("First name is required")
      .min("3", "must have atleast 3 characters"),
    last_name: yup
      .string()
      .required("Last name is required")
      .min("3", "must have atleast 3 characters"),
    email: yup
      .string()
      .email("Must be valid email")
      .required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "must be 6 characters long"),
    confirmPassword: yup
      .string()
      .required("Confirm password is required")
      .min(6, "must be 6 characters longs")
      .oneOf([yup.ref("password"), null], "Password don't match"),
  });

  render() {
    return (
      <>
        <main id="register">
          {this.props.isAuthenticated && <Navigate to={"/welcome"} />}
          <Formik
            initialValues={{
              first_name: "",
              last_name: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={this.registerValidationSchema}
            onSubmit={(values) => {
              this.props.register(values);

              const reset = document.getElementById("reset");
              reset.click();
            }}
          >
            <Form role={"form"}>
              <TextField
                label={"First Name"}
                name={"first_name"}
                id={"first_name"}
                type="text"
                autoComplete="off"
              />
              <TextField
                label={"Last Name"}
                name={"last_name"}
                id={"last_name"}
                type="text"
                autoComplete="off"
              />
              <TextField
                label={"Email"}
                name={"email"}
                id={"email"}
                type="email"
                autoComplete="off"
              />
              <TextField
                label={"Password"}
                name={"password"}
                id={"password"}
                type="password"
                autoComplete="off"
              />
              <TextField
                label={"Confirm Password"}
                name={"confirmPassword"}
                id={"confirmPassword"}
                type="password"
                autoComplete="off"
              />
              <button type="submit" role={"button"} className="submit">
                Register
              </button>
              <Link
                style={{
                  display: "block",
                  textAlign: "center",
                  margin: "10px",
                }}
                to="/login"
              >
                Already have an account?
              </Link>
              <button
                type="reset"
                role={"button"}
                id="reset"
                hidden
                aria-hidden
              >
                Reset
              </button>
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
    register: (data) => dispatch($register_user(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
