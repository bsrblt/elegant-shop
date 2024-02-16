import { useDispatch } from "react-redux";
import { addItem, removeItem } from "./shopSlice";

type PropsType = {
  item: { id: string; title: string; quantity: number; price: number };
};
export default function CartItem({ item }: PropsType) {
  const dispatch = useDispatch();
  const formattedPrice = `$${item.price.toFixed(2)}`;

  return (
    <li key={item.id} className="flex items-center justify-between py-1">
      <div className="w-3/4 flex justify-between flex-col sm:flex-row">
        <span>{item.title}</span>
        <span> ({formattedPrice})</span>
      </div>
      <div className="flex items-center gap-1">
        <button
          className="text-lg bg-amber-200 hover:bg-amber-400 duration-200 text-amber-950 px-3 rounded-full"
          onClick={() => dispatch(removeItem({ id: item.id }))}
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button
          className="text-lg bg-amber-200 hover:bg-amber-400 duration-200 text-amber-950 px-3 rounded-full"
          onClick={() => dispatch(addItem(item))}
        >
          +
        </button>
      </div>
    </li>
  );
}
