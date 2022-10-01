import React from "react";
import i from "../imagenes/404.gif";
import s from "../style/Error.module.css";

export default function Error() {
  return (
    <div className={s.error}>
      <h1>El videojuego no existe</h1>
      <img src={i} alt="error" />
    </div>
  );
}
