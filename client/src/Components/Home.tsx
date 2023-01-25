import React, { useEffect } from "react";
import { useStoreActions, useStoreState } from "../store/config";

const Home = () => {
  const { products } = useStoreState((state) => state.home);
  const { getProducts } = useStoreActions((state) => state.home);

  useEffect(() => {
    handleGetProducts();
  }, []);

  async function handleGetProducts() {
    await getProducts();
  }

  return (
    <div>
      {products.length > 0 ? (
        <div>
          {products.map((product,index) => (
            <li key={index}>{product.title}</li>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
