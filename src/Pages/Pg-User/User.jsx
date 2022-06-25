import React, {useState} from "react";
import OptionList from "../../Components/Sections/USR-OptionList/OptionList";
import InfoList from "../../Components/Sections/USR-InfoList/InfoList";
import {UserBlock, OptionsBlock, InfoBlock} from "./User.styled";
const User = () => {
  const [activeOption, setActiveOption] = useState(1);
  const changeActive = (idx) => {
    setActiveOption(idx);
  };
  return (
    <section className="user-page">
      <div className="container my-5">
        <UserBlock>
          <div className="row">
            <OptionsBlock className="col-lg-3">
              <OptionList
                changeActive={changeActive}
                activeOption={activeOption}
              />
            </OptionsBlock>
            <InfoBlock className="col-lg-9">
              <InfoList activeOption={activeOption} />
            </InfoBlock>
          </div>
        </UserBlock>
      </div>
    </section>
  );
};
export default User;
