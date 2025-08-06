import { useMemo } from "react";
import UsarData from "./UsarData";

function CartTotal() {
  const { cartItems } = UsarData();

  const totalPrice = useMemo(() => {
    return (cartItems.reduce((total, item) => total + item.price * item.count, 0) || 0);
  }, [cartItems]);

  return totalPrice.toFixed(2);
};

export default CartTotal;   