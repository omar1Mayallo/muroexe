import React, {useState} from "react";
import SignContainer from "../../Layout/SignContainer/SignContainer";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../Custom-button/CustomButton";
import {
  createAuthUserWithEmailAndPassword,
  createUserDoc,
} from "../../../Firebase/Firebase-config";

const SignUpItem = () => {
  const [defaultForm, setDefaultForm] = useState({
    displayName: "",
    email: "",
    password: "",
  });
  const {displayName, email, password} = defaultForm;
  const resetFields = () => setDefaultForm(defaultForm);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {user} = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDoc(user, {displayName});
      resetFields();
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("Account with this email already exists!");
        return;
      } else console.log(err);
    }
  };
  const handleChange = (e) => {
    const {value, name} = e.target;
    setDefaultForm({...defaultForm, [name]: value});
  };
  return (
    <SignContainer>
      <div className="head-box text-center">
        <span className="sign-head">Do not have a account ?</span>
        <span className="sign-text">Sign up with your email and password</span>
      </div>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          handleChange={handleChange}
          value={displayName}
          label="Name"
          required
        />
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={email}
          label="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <CustomButton type="submit">Sign up</CustomButton>
      </form>
    </SignContainer>
  );
};
export default SignUpItem;
