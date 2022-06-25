import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearItems } from "../../../Redux/StateSlices/Cart/CartSlice";
import { Modal } from "react-bootstrap";
import CustomButton from "../Custom-button/CustomButton";
import CartItem from "../CartItem/CartItem";
import NoItemYet from "../NoItemYet/NoItemYet";

const CartModal = (props) => {
  const navigate = useNavigate();
  const Dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);
  const CartItemsAdded = cartItems.map((cartItem) => (
    <div key={cartItem.id}>
      <CartItem item={cartItem} />
    </div>
  ));
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Items Added
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.length ? (
          CartItemsAdded
        ) : (
          <NoItemYet>No item added yet</NoItemYet>
        )}
      </Modal.Body>
      <Modal.Footer>
        <div className="my-4">
          <CustomButton
            Clear
            onClick={() => Dispatch(clearItems())}
            className="me-3"
          >
            Clear
          </CustomButton>
          <CustomButton
            onClick={() => {
              props.onHide();
              navigate(`/checkout`);
            }}
          >
            Checkout
          </CustomButton>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal;
