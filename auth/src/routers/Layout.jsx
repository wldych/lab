import React, { useContext } from "react";
import { UserContext } from "../components/UserContextProvider";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import styles from "../css/Styles.module.css";

export default function Layout() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userId");
    navigate("/login");
  };
  if (localStorage.getItem("userId")) {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.hello}>Hello, {user.email}</p>
          <nav className="flex gap-5">
            <NavLink
              to="/"
              end="true"
              className={({ isActive }) =>
                isActive ? styles.linkActive : styles.navLink
              }
            >
              About
            </NavLink>
            <NavLink
              to="/notes"
              className={({ isActive }) =>
                isActive ? styles.linkActive : styles.navLink
              }
            >
              Notes
            </NavLink>
            <NavLink
              to="/login"
              onClick={handleLogout}
              className={styles.navLink}
            >
              Log Out
            </NavLink>
          </nav>
        </div>
        <Outlet />
        <hr className="mt-10" />
        <footer className={`flex justify-between ${styles.footer}`}>
          <p className=" ml-3">Created by: Vlad Yahnovec</p>
          <p className=" mr-3">BSU: 2023</p>
        </footer>
      </div>
    );
  } else {
    return (
      <div>
        <Outlet />
        <hr className="mt-10" />
        <footer className={`flex justify-between ${styles.footer}`}>
          <p className=" ml-3">Created by: Vlad Yahnovec</p>
          <p className=" mr-3">BSU: 2023</p>
        </footer>
      </div>
    );
  }
}
