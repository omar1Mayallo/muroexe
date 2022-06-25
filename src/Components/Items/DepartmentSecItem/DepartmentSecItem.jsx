import React from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../Custom-button/CustomButton";
import ProductItem from "../ProductItem/ProductItem";
import SectionHead from "../../Layout/SectionHead/SectionHead";

const DepartmentSecItem = ({ id, title, pathUrl, items }) => {
  const navigate = useNavigate();
  return (
    <section className="department-sec-item my-5" key={id}>
      <SectionHead head={title} />
      <div className="row">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <div className="col-lg-3 col-md-6 col-12" key={item.id}>
              <ProductItem item={item} />
            </div>
          ))}
      </div>
      <div className="text-center">
        <CustomButton onClick={() => navigate(`${pathUrl}`)}>
          Discover More
        </CustomButton>
      </div>
    </section>
  );
};

export default DepartmentSecItem;
