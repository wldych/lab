import React, { useContext } from "react";
import { UserContext } from "../components/UserContextProvider";
import Button from "../utils/Button";

export default function Home() {
  const { user } = useContext(UserContext);
  var options = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  return (
    <div>
      <p className=" font-bold text-6xl mb-16">About me</p>
      <p>
        <b>Email:</b> {user.email}
      </p>
      <p>
        <b>Date sign up:</b>
        {new Date(user.createdAt).toLocaleDateString("ru-RU", options)}
      </p>
      <Button $to="/notes" $text="Go to notes" />
    </div>
  );
}
