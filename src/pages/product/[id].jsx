import Layout from "@/components/Layout";
import Image from "next/image";
import React, { useState } from "react";
import { AiFillShopping } from "react-icons/ai";
import axios from "axios";

const ProductDetails = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const addQuantity = (command) => {
    if (command === "+") {
      setQuantity(quantity + 1);
    } else if (command === "-") {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    }
  };

  return (
    <>
      <Layout>
        <div>
          {/* left */}
          <div>
            <Image
              src={product?.image}
              width="500"
              height="1250"
              alt="product image"
              onError={() => console.log("Failed to load image")}
            />
          </div>
          {/* right */}
          <div>
            <h2>productname</h2>
            <span>
              Category: <span>actual category</span>
            </span>
            <p>desc</p>
            <div>
              <span onClick={() => addQuantity("-")}>-</span>
              <span>{quantity}</span>
              <span onClick={() => addQuantity("+")}>+</span>
            </div>
            <span>$123</span>
            <button>
              Add to Cart <AiFillShopping />
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProductDetails;

export async function getServerSideProps(ctx) {
  const id = ctx.params.id;

  const { data: product } = await axios.get(
    `${process.env.DOMAIN_URL}/api/products/${id}` ||
      `http://localhost:3000/api/products/${id}`
  );

  return {
    props: {
      product,
    },
  };
}
