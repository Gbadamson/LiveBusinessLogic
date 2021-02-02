import React, { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";
import { v4 as uuid } from "uuid";

const initialState = {
  member: [
    { id: uuid(), name: "Volunteer on a course" },
    { id: uuid(), name: "Work on Your Network" },
    { id: uuid(), name: "Manage Your thought line" },
    { id: uuid(), name: "Inspire somebody" },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const addStudent = (student) => {
    dispatch({
      type: "ADD_USER",
      payload: student,
    });
  };
  const removal = (id) => {
    dispatch({
      type: "REMOVAL",
      payload: id,
    });
  };

  const editable = (student) => {
    dispatch({
      type: "EDITING",
      payload: student,
    });
  };

  return (
    <GlobalContext.Provider
      value={{ student: state.member, addStudent, removal, editable }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
