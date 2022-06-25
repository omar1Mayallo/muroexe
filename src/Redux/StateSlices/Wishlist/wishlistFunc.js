export const addToWishlist = (wishlistItems, addedItem) => {
  const itemExist = wishlistItems.find((item) => item.id === addedItem.id);
  if (itemExist) {
    return wishlistItems.map((item) => item);
  }
  return [...wishlistItems, { ...addedItem }];
};

export const removeFromWishlist = (cartItems, removedFromCart) => {
  return cartItems.filter((cartItem) => cartItem.id !== removedFromCart.id);
};
