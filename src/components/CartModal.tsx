import { ReactNode, Ref, forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

import Cart from "./Cart";

type PropsType = { title: string; actions: ReactNode };
const CartModal = forwardRef(function Modal(
  { title, actions }: PropsType,
  ref: Ref<HTMLDialogElement>,
) {
  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => {
    return {
      showModal: () => {
        dialog.current?.showModal();
      },
    } as HTMLDialogElement;
  });

  return createPortal(
    <dialog
      className="backdrop:bg-amber-950/80 bg-amber-700 px-8 text-amber-50 py-4 rounded-xl "
      ref={dialog}
    >
      <h2 className="text-3xl font-bold text-center pb-4">{title}</h2>

      <Cart />

      <form
        method="dialog"
        className="py-4 flex items-center justify-end gap-4"
      >
        {actions}
      </form>
    </dialog>,
    document.getElementById("modal")!,
  );
});

export default CartModal;
