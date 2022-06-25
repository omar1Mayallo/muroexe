import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import SearchModal from "../SearchModal/SearchModal";
import "./SearchIcon.scss";

const SearchIcon = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div className="search-icon" onClick={() => setModalShow(true)}>
        <BsSearch />
      </div>
      <SearchModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default SearchIcon;
