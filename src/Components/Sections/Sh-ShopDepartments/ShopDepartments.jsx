import React from "react";
import {useSelector} from "react-redux";
import Pghead from "../../Layout/PgHead/PgHead";
import DepartmentSecItem from "../../Items/DepartmentSecItem/DepartmentSecItem";
import WithSpinner from "../../HOC/Spinner/Spinner";
const ShopDepartments = () => {
  const {shopData} = useSelector((state) => state.shop);
  const Departments = Object.keys(shopData)
    .map((key) => shopData[key])
    .map(({id, ...restProps}) => <DepartmentSecItem key={id} {...restProps} />);
  return (
    <div className="department-sec">
      <Pghead
        title="Shop"
        boldParagraph={`"Whoever said that money can’t buy happiness simply didn’t know where to go shopping"`}
      />
      {Departments}
    </div>
  );
};
export default WithSpinner(ShopDepartments);
