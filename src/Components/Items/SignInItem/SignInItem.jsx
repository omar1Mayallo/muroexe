import React, {useState} from "react";
import SignContainer from "../../Layout/SignContainer/SignContainer";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../Custom-button/CustomButton";
import {
  signInWithGoogle,
  signInWithFacebook,
  signInAuthUserWithEmailAndPassword,
} from "../../../Firebase/Firebase-config";

import "./SignInItem.scss";

const SignInItem = () => {
  const [defaultForm, setDefaultForm] = useState({
    email: "",
    password: "",
  });
  const {email, password} = defaultForm;
  const resetFields = () => setDefaultForm(defaultForm);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFields();
    } catch (err) {
      console.log(err.code);
    }
  };
  const handleChange = (event) => {
    const {value, name} = event.target;
    setDefaultForm({...defaultForm, [name]: value});
  };
  return (
    <SignContainer>
      <div className="head-box text-center">
        <span className="sign-head">Already have account?</span>
        <span className="sign-text">Sign in with your email and password</span>
      </div>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
        />
        <CustomButton type="submit">Sign In</CustomButton>
      </form>
      <CustomButton onClick={signInWithGoogle} isGoogle className="my-4">
        Sign In With Google
      </CustomButton>
      <CustomButton onClick={signInWithFacebook} isFacebook>
        Sign In With Facebook
      </CustomButton>
    </SignContainer>
  );
};

export default SignInItem;
