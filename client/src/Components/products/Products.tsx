import React from "react";
import { useStoreState } from "../../store/config";
import ProductItem from "./ProductItem";
import { Carousel } from "react-responsive-carousel";

const Products = () => {
  const { products } = useStoreState((state) => state.home);
  return (
    <div>
      {/* <Carousel />
      {products.length > 0 ? (
        <div>
          {products
            .filter((product) => product.carousel === "no")
            .map((product, index) => (
              <ProductItem key={index} product={product} index={index}/>
            ))}
        </div>
      ) : (
        ""
      )} */}
    </div>
  );
};

export default Products;
