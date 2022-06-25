import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {clearWishList} from "../../../Redux/StateSlices/Wishlist/WishListSlice";
import CustomButton from "../../Items/Custom-button/CustomButton";
import InfoItem from "../../Items/InfoItem/InfoItem";
import NoItemYet from "../../Items/NoItemYet/NoItemYet";
import WishItem from "../../Items/WishItem/WishItem";
import "./InfoList.scss";
const InfoList = ({activeOption}) => {
  const Dispatch = useDispatch();
  const [infoItemsState] = useState([
    {id: 1, head: "My Personal Data"},
    {id: 2, head: "My Orders"},
    {id: 3, head: "My Wishlist"},
    {id: 4, head: "My Alerts"},
  ]);
  const {currentUser} = useSelector((state) => state.user);
  const {wishListItems} = useSelector((state) => state.wishList);

  const WishList = wishListItems.map((item) => (
    <div key={item.id} className="col-lg-3 col-md-4 col-6 text-center mb-3">
      <WishItem item={item} />
    </div>
  ));
  return (
    <ul className="info-list">
      {/*PERSONAL_INFO_______________________________________________________________________________ */}
      <InfoItem
        id={infoItemsState[0].id}
        head={infoItemsState[0].head}
        activeOption={activeOption}
      >
        <div className="personal-info mt-3">
          <ul>
            <li>
              <span>Name : </span>
              {currentUser.displayName}
            </li>
            <li>
              <span>Email : </span>
              {currentUser.email}
            </li>
            <li>
              <span>Address : </span>Jacob Tomlin ,75N Southern Street ,London
              NW5 9XE ,England
            </li>
          </ul>
        </div>
      </InfoItem>
      {/*ORDERS___________________________________________________________________________________ */}
      <InfoItem
        id={infoItemsState[1].id}
        head={infoItemsState[1].head}
        activeOption={activeOption}
      >
        <NoItemYet>No Orders Yet !</NoItemYet>
      </InfoItem>
      {/*Wishlist___________________________________________________________________________________ */}
      <InfoItem
        id={infoItemsState[2].id}
        head={infoItemsState[2].head}
        activeOption={activeOption}
      >
        <div className="wishlist-info">
          <div className="wishlist-container row">{WishList}</div>
          {wishListItems.length ? (
            <div className="text-center">
              <CustomButton Clear onClick={() => Dispatch(clearWishList())}>
                Clear
              </CustomButton>
            </div>
          ) : (
            <NoItemYet>Your wishlist is empty</NoItemYet>
          )}
        </div>
      </InfoItem>
      {/*Alerts___________________________________________________________________________________ */}
      <InfoItem
        id={infoItemsState[3].id}
        head={infoItemsState[3].head}
        activeOption={activeOption}
      >
        <NoItemYet>No email alerts yet</NoItemYet>
      </InfoItem>
    </ul>
  );
};

export default InfoList;
