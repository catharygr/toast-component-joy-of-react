import React, { useContext } from "react";
import { ToastContext } from "../ToastProvider/ToastProvider";

import styles from "./ToastShelf.module.css";
import Toast from "../Toast";

function ToastShelf({ closeToast }) {
  const { toasts } = useContext(ToastContext);

  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
        <li key={toast.key} className={styles.toastWrapper}>
          <Toast
            uuid={toast.key}
            variant={toast.variant}
            closeToast={closeToast}
          >
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
