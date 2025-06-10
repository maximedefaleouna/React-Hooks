import React, { useState } from "react";
import ComposantA from "./composantA.JSX";
import { createContext } from "react";
export const UserContext = React.createContext();
export const ProfileContext = createContext();
export const langageContext = createContext("react");

function UseContext() {
  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <h2>useContext hook</h2>
      <UserContext.Provider value={"DEFALEOUNA"}>
        <ProfileContext value={"Devellopper"}>
          <ComposantA />
        </ProfileContext>
      </UserContext.Provider>
    </div>
  );
}

export default UseContext;
