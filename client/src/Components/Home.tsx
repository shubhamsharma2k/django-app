import React, { useEffect } from "react";
import { useStoreActions, useStoreState } from "../store/config";
import Products from "./products/Products";

const Home = () => {
  const { getProducts } = useStoreActions((state) => state.home);

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      window.location.href = "/login";
    } else {
      handleGetProducts();
    }
  }, []);

  async function handleGetProducts() {
    await getProducts();
  }

  return (
    <div className="home">
      <div className="mx-auto" style={{ width: "90%" }}>
        <Products/>
      </div>
    </div>
  );
};

export default Home;
