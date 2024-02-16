import { DUMMY_PRODUCTS } from "../dummy-products.ts";
import Product from "./Product.js";

export default function Shop() {
  return (
    <section className="mx-auto mt-20 max-w-5xl pb-24">
      <h2 className="py-8 text-center text-3xl text-amber-300">
        Elegant Clothing For Everyone
      </h2>

      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 ">
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id} className="mx-auto">
            <Product product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
}
