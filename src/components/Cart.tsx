import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import CartItem from "./CartItem";

export default function Cart() {
  const cart = useSelector((state: RootState) => state.shop.cart);

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <div className="md:w-[40rem] sm:w-[24rem]">
      {cart.length === 0 && (
        <p className="text-lg text-center">No items in cart!</p>
      )}
      {cart.length > 0 && (
        <ul className="flex flex-col gap-1 divide-y-2 border-y-2">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </ul>
      )}
      <p className="text-xl pt-8 text-end">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}
