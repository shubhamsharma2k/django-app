import React, { useEffect } from "react";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StoreProvider } from "easy-peasy";
import { store } from "./store/config";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Login from "./Components/auth/Login";
import Signup from "./Components/auth/Signup";
import Account from "./Components/Account";
import PrivateRoutes from "./Components/PrivateRoutes";
import Cart from "./Components/Cart";

function App() {
  return (
    <StoreProvider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<Account />} path="/account" />
            <Route element={<Cart />} path="/cart" />
          </Route>
          <Route element={<Home />} path="/" />
          <Route element={<Login />} path="/login" />
          <Route element={<Signup />} path="/signup" />
        </Routes>
      </Router>
    </StoreProvider>
  );
}

export default App;
