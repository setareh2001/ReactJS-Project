import React, { useState } from "react";
import Button from "../../../Globals/Button";
import "./LoginPage.scss";
import InnerContainer from "../../../Globals/InnerContainer";
import { Link } from "react-router-dom";
import background from "../../../../assets/Images/Log1.png";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import Tabs from "./Tabs";
import Input from "react-phone-number-input/input";

const LoginPage = (props) => {
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState();

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm();

  const onSubmit = (form, data) => {
    data.preventDefault();
    console.log(data);

    reset({
      email: "",
      password: "",
    });
  };

  const CheckBoxHandleChange = () => {
    setChecked(!checked);
  };

  return (
    <InnerContainer className="inner">
      <form className="login" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="title">LOG IN</h1>
        <div
          className="background"
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          <Tabs>
            <div label="Login By Email">
              <span>
                <div className="control">
                  <label htmlFor="email">email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    {...register("email", { required: true })}
                  />
                </div>
                <div className="control">
                  <label htmlFor="password">PASSWORD</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    {...register("password", {
                      required: true,
                      validate: {
                        checkLength: (value) => value.length >= 6,
                        matchPattern: (value) =>
                          /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(
                            value
                          ),
                      },
                    })}
                  />
                  {errors.password?.type === "required" && (
                    <p className="errorMsg">Password is required.</p>
                  )}
                  {errors.password?.type === "checkLength" && (
                    <p className="errorMsg">
                      Password should be at-least 6 characters.
                    </p>
                  )}
                  {errors.password?.type === "matchPattern" && (
                    <p className="errorMsg">
                      Password should contain at least one uppercase letter,
                      lowercase letter, digit, and special symbol.
                    </p>
                  )}
                </div>
              </span>
              <ul className="form-list">
                <Link className="forget-password" href="./forgotPassword">
                  FORGOT PASSWORD
                </Link>
                <Form.Check
                  type="checkbox"
                  label="Remember my user ID"
                  className="checkbox"
                  onChange={CheckBoxHandleChange}
                  {...register("checkbox")}
                />
              </ul>
              <Button text={"LOGIN"} className="button" />
              <Link className="create-account" href="./SignUp">
                CREATE ACCOUNT
              </Link>
            </div>
            <div label="Login By SMS">
              <div className="control">
                <label>Mobile Number</label>
                <Input
                  country="IR"
                  international
                  withCountryCallingCode
                  value={value}
                  onChange={setValue}
                />
              </div>
              <Button
                text={"Send code"}
                className="button"
                disabled={!isValid || !isDirty}
              />
              <Link className="create-account" href="./SignUp">
                CREATE ACCOUNT
              </Link>
            </div>
          </Tabs>
        </div>
      </form>
    </InnerContainer>
  );
};

export default LoginPage;
