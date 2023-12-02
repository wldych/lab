import { createContext, useEffect, useState } from "react";
import { nullable } from "zod";
import API from "../utils/API";
export const UserContext = createContext(null);

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(nullable);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const id = localStorage.getItem("userId");
    if (id) {
      API.getUser(id)
        .then((user) => {
          setUser(user);
        })
        .catch((err) => {})
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (user?.id) {
      localStorage.setItem("userId", user.id);
    }
  }, [user?.id]);

  return (
    <UserContext.Provider value={{ user, onChange: setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
}
