import { Typography } from "@mui/material";
import React from "react";

const ProductItem = (props: any) => {
  const { index, product } = props;

  return (
    <div key={index}>
      <div>
        <img src={`http://127.0.0.1:8000${product.product_image}`} />
        <Typography>{product.title}</Typography>
      </div>
    </div>
  );
};

export default ProductItem;
