import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const originalUser = {
  name: "Niko",
  surname: "Chaganava",
  age: "14",
  profession: "Kebab maker",
};

export default function App() {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const userProperties = [
    { key: "name", value: user.name },
    { key: "surname", value: user.surname },
    { key: "age", value: user.age },
    { key: "profession", value: user.profession },
  ];

  useEffect(() => {
    setTimeout(() => {
      const user = JSON.parse(localStorage.getItem("user")) || [];
      if (user.length === 0) {
        setIsLoading(true);
      } else {
        setUser(user);
        setIsLoading(false);
      }
    }, 1000);
  }, [user, setUser]);

  function handleAddUser() {
    localStorage.setItem("users", JSON.stringify(originalUser));
  }

  return (
    <div className="h-screen flex justify-center items-center flex-col bg-red-100">
      <div className="w-60 capitalize border-2 border-red-400 rounded-2xl p-5 bg-red-200 shadow-md shadow-red-400">
        <h1 className="font-bold text-md mb-2 text-red-400">Add User</h1>
        <button
          onClick={() => handleAddUser()}
          className="p-2 cursor-pointer text-red-500 rounded-sm border-2 border-red-400 bg-red-300 hover:bg-red-300/[.5] transition-all"
        >
          Add User
        </button>
      </div>
      <br />
      <div className="w-60 flex justify-center items-center fle-col h-45 capitalize border-2 border-red-400 rounded-2xl p-5 bg-red-200 shadow-md shadow-red-400">
        {isLoading ? (
          <div>
            {userProperties.map((property) => (
              <h2
                className="font-bold text-md mb-2 text-red-400"
                key={property.key}
              >
                {property.value}
              </h2>
            ))}
          </div>
        ) : (
          <div className="size-10 border-3 rounded-full border-t-red-900 border-red-500 animate-spin" />
        )}
      </div>
    </div>
  );
}
