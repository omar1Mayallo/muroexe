import React, {useState} from "react";
import {useSelector} from "react-redux";
import SectionHead from "../../Layout/SectionHead/SectionHead";
import SectionContainer from "../../Layout/SectionContainer/SectionContainer";
import CollectionItem from "../../Items/CollectionItem/CollectionItem";

const Collections = () => {
  const {shopData} = useSelector((state) => state.shop);
  const CollectionsItems = Object.keys(shopData)
    .map((key) => shopData[key])
    .map(({id, ...restProps}) => (
      <div className="col-xl-3 col-md-6 col-sm-12 mb-4" key={id}>
        <CollectionItem {...restProps} />
      </div>
    ));
  return (
    <SectionContainer Tag="section" Class="menu-section">
      <SectionHead head="Collections" />
      <div className="row">{CollectionsItems}</div>
    </SectionContainer>
  );
};

export default Collections;
