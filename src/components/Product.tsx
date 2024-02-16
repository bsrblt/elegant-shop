import { useDispatch } from "react-redux";
import { addItem } from "./shopSlice";

type Product = {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
};
export default function Product({ product }: { product: Product }) {
  const { id, image, title, price, description } = product;
  const dispatch = useDispatch();
  return (
    <article className="w-80 bg-amber-950 h-[36rem] flex flex-col rounded-xl">
      <img src={image} alt={title} className="rounded-t-xl" />
      <div className="flex flex-col justify-between h-full py-4  px-4">
        <div>
          <h3 className="text-amber-200 text-lg">{title}</h3>
          <p className="italic text-amber-100 py-1">${price}</p>
          <p className="text-sm text-amber-100">{description}</p>
        </div>
        <p className="text-end ">
          <button
            className="bg-amber-300 px-4 py-2 rounded-xl hover:bg-amber-400 duration-200"
            onClick={() => dispatch(addItem({ id, price, title, quantity: 1 }))}
          >
            Add to Cart
          </button>
        </p>
      </div>
    </article>
  );
}
