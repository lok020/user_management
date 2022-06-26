import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./PAGE/Layout";
import Home from "./PAGE/Home";
import User from "./PAGE/User";
import Setting from "./PAGE/Setting";
import Error from "./PAGE/Error";

function User_management() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="User" element={<User />} />
          <Route path="Setting" element={<Setting />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default User_management;
