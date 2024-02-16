import { useRef } from "react";

import { useSelector } from "react-redux";
import { RootState } from "../store/store.ts";

import CartModal from "./CartModal.js";

export default function Header() {
  const modal = useRef<HTMLDialogElement>(null);

  const cart = useSelector((state: RootState) => state.shop.cart);

  const cartQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  function handleOpenCartClick() {
    modal.current?.showModal();
  }

  let modalActions = (
    <button className="rounded-xl px-4 py-1 text-lg duration-200 hover:scale-105">
      Close
    </button>
  );

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button className="rounded-xl px-4 py-1 text-lg duration-200 hover:scale-105">
          Close
        </button>
        <button className="rounded-xl bg-amber-200 px-4 py-1 text-lg text-amber-950 duration-200 hover:bg-amber-300">
          Checkout
        </button>
      </>
    );
  }

  return (
    <div className=" flex min-w-full">
      <CartModal ref={modal} title="Your Cart" actions={modalActions} />
      <header className="fixed flex min-w-full items-center justify-around bg-orange-950 px-4 py-1  lg:px-0">
        <div className="flex items-center gap-8">
          <img
            src="logo.png"
            alt="Elegant model"
            className="hidden sm:inline-block sm:w-20 lg:w-24"
          />
          <h1 className="text-xl font-bold text-amber-300 md:text-3xl lg:text-5xl">
            Elegant Redux/toolkit
          </h1>
        </div>
        <p>
          <button
            onClick={handleOpenCartClick}
            className="rounded-xl bg-amber-300 px-4 py-2 text-xl duration-200 hover:bg-amber-400"
          >
            Cart ({cartQuantity})
          </button>
        </p>
      </header>
    </div>
  );
}
