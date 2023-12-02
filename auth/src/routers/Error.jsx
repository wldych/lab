import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../css/Styles.module.css";

export default function Error() {
  return (
    <div className={styles.container}>
      <p className="font-bold text-8xl mb-16">404</p>
      <p className="text-3xl mb-10">Page not found</p>
      <p className="text-4xl flex justify-center gap-3">
        go
        <NavLink to="/" className=" text-blue-700 underline">
          Home
        </NavLink>
      </p>
      <div>
        <hr className="mt-10" />
        <footer className={`flex justify-between ${styles.footer}`}>
          <p>Created by: Vlad Yahnovec</p>
          <p>BSU: 2023</p>
        </footer>
      </div>
    </div>
  );
}
