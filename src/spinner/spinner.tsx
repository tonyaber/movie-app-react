import React from "react";
import style from "./spinner.css";

export default function LoadingSpinner() {
  return (
    <div className={style["loader"]}>Loading...</div>
  );
}