import React, { createContext, useState } from "react";

export const StudentContext = createContext();

// This context provider is passed to any component requiring the context
export const StudentProvider = ({ children }) => {
  const [list, setList] = useState( [] );

  return (
    <StudentContext.Provider
      value={{
        list,
        setList,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};