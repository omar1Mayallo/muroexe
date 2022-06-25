import React, {lazy, Suspense} from "react";
import {useSelector} from "react-redux";
import {Routes, Route} from "react-router-dom";
import SectionContainer from "../../Components/Layout/SectionContainer/SectionContainer";

const ShopDepartments = lazy(() =>
  import("../../Components/Sections/Sh-ShopDepartments/ShopDepartments")
);
const Department = lazy(() => import("../Pg-Department/Department"));

const Shop = () => {
  const {isLoading} = useSelector((state) => state.shop);
  return (
    <SectionContainer Tag="section" Class="shop-page">
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route index element={<ShopDepartments isLoading={isLoading} />} />
          <Route
            path=":departmentId"
            element={<Department isLoading={isLoading} />}
          />
        </Routes>
      </Suspense>
    </SectionContainer>
  );
};
export default Shop;
