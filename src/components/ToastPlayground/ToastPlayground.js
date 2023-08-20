import React from "react";
import { useState } from "react";
import Button from "../Button";
import ToastShelf from "../ToastShelf";
import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [toasts, setToasts] = useState([]);
  const [form, setForm] = useState({
    message: "",
    variant: "notice",
  });

  function handleChangeForm(event) {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  function closeToast(uuid) {
    setToasts((oldToasts) => oldToasts.filter((toast) => toast.key !== uuid));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const uuid = crypto.randomUUID();
    setToasts((oldToast) => [...oldToast, { ...form, key: uuid }]);
    setForm({
      message: "",
      variant: "notice",
    });
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf closeToast={closeToast} toasts={toasts} />

      <form onSubmit={handleSubmit} className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              value={form.message}
              onChange={handleChangeForm}
              id="message"
              name="message"
              className={styles.messageInput}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((variant) => (
              <label key={variant} htmlFor={`variant-${variant}`}>
                <input
                  required={true}
                  id={`variant-${variant}`}
                  type="radio"
                  name="variant"
                  value={variant}
                  onChange={handleChangeForm}
                  checked={form.variant === variant}
                />
                {variant}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
