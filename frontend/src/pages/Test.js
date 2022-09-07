import NewUser from "../script/NewUser"
import NewLogin from "../script/NewLogin";
import GetImg from "../components/GetImg";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const Test = () => {
  return (
    <div>
      <h1>Test</h1>
      <NewUser />
      <NewLogin />
      {/* <GetImg /> */}
    </div>
  )
}

export default Test;