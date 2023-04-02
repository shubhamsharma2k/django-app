import React from "react";
import { useStoreState } from "../../store/config";
import ProductItem from "./ProductListItem";
import CarouselC from "./CarouselC";

const Products = () => {
  const { products } = useStoreState((state) => state.home);
  return (
    <div>
      <CarouselC/>
      {products.length > 0 ? (
        <div>
          {products
            .filter((product) => product.carousel === "no")
            .map((product, index) => (
              <ProductItem key={index} product={product} index={index} />
            ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Products;
