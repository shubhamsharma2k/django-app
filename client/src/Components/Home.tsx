import React, { useEffect } from "react";
import { useStoreActions, useStoreState } from "../store/config";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

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
    <div className="home">
      <div className="container">
        {products.length > 0 ? (
          <div>
            <Carousel>
              {products
                .filter((product) => product.carousel === "yes")
                .map((product, index) => (
                  <div key={index}>
                    <img
                      src={`http://127.0.0.1:8000${product.product_image}`}
                    />
                  </div>
                ))}
            </Carousel>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Home;
