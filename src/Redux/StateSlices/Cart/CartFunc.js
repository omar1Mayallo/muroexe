export const addedToCart = (cartItems, addedCartItem) => {
  //check item exist in cart or not
  const itemExist = cartItems.find(
    (cartItem) => cartItem.id === addedCartItem.id
  );
  if (itemExist) {
    return cartItems.map((cartItem) =>
      cartItem.id === addedCartItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...addedCartItem, quantity: 1 }];
};

export const removeFromCart = (cartItems, removedFromCart) => {
  return cartItems.filter((cartItem) => cartItem.id !== removedFromCart.id);
};

export const decreaseQuantity = (cartItems, itemQuantityToDecrease) => {
  const itemExist = cartItems.find(
    (cartItem) => cartItem.id === itemQuantityToDecrease.id
  );
  //if quantity Reset to initial Value === 1 , remove it
  if (itemExist.quantity === 1) {
    return cartItems.filter(
      (cartItem) => cartItem.id !== itemQuantityToDecrease.id
    );
  }
  return cartItems.map((cartItem) =>
    cartItem.id === itemQuantityToDecrease.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
