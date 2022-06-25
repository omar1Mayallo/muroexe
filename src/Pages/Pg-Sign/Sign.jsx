import React, {useState} from "react";
import SectionContainer from "../../Components/Layout/SectionContainer/SectionContainer";
import SignIn from "../../Components/Items/SignInItem/SignInItem";
import SignUp from "../../Components/Items/SignUpItem/SignUpItem";
import {SignQuestion} from "./Sign.styled";
const Sign = () => {
  const [compRender, setCompRender] = useState("sign-in");
  return (
    <SectionContainer Tag="section" Class="sign-section">
      <div className="Sign-container">
        {compRender === "sign-in" ? <SignIn /> : <SignUp />}
        <div className="text-center">
          {compRender === "sign-in" ? (
            <SignQuestion
              className="sign-question"
              onClick={() => setCompRender("sign-up")}
            >
              Create Your Account ?
            </SignQuestion>
          ) : (
            <SignQuestion
              className="sign-question"
              onClick={() => setCompRender("sign-in")}
            >
              Already Have Account ? Login
            </SignQuestion>
          )}
        </div>
      </div>
    </SectionContainer>
  );
};
export default Sign;
