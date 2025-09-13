import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [habits, setHabits] = useState([
    { id: "1", title: "Drink Water", streak: 0 },
    { id: "2", title: "Meditate", streak: 0 },
  ]);

  const addHabit = (habit) => setHabits([...habits, habit]);

  const updateHabit = (id, newData) => {
    setHabits(habits.map(h => h.id === id ? { ...h, ...newData } : h));
  };

  return (
    <UserContext.Provider value={{ habits, addHabit, updateHabit }}>
      {children}
    </UserContext.Provider>
  );
};
