import React from "react";
// Crear un contexto
const ToastContext = React.createContext();

function ToastProvider({ children }) {
  // Crear un estado para guardar los toasts
  const [toasts, setToasts] = React.useState([]);

  return (
    <ToastContext.Provider value={{ toasts, setToasts }}>
      {children}
    </ToastContext.Provider>
  );
}

export { ToastProvider, ToastContext };
