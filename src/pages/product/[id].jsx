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
        <div className="py-20 h-full w-full flex justify-center">
          {/* left */}
          <div className="h-full w-10/12 flex justify-between">
            <div className="flex-1">
              <Image
                src={product?.image}
                width="500"
                height="1250"
                alt="product image"
                onError={() => console.log("Failed to load image")}
              />
            </div>

            {/* right */}
            <div className="flex-1 flex flex-col gap-8">
              <h2 className="text-[20px] text-[#333]">
                Name of Product:
                <span className="text-orange-500 ml-2">{product?.name}</span>
              </h2>
              <span className="text-[20px] flex items-center gap-4">
                Category:
                <span className="px-4 py-2 text-[#efefef] text-[16px] bg-black rounded-xl">
                  {product?.category}
                </span>
              </span>
              <p className="text-[20px] text-[#333]">
                Description:
                <span className="text-orange-500 ml-2 text-ellipsis">
                  {product?.desc}
                </span>
              </p>
              <div className="flex gap-6 items-center">
                <span
                  className="bg-slate-300 px-4 py-2 text-[18px]"
                  onClick={() => addQuantity("-")}
                >
                  -
                </span>
                <span>{quantity}</span>
                <span
                  className="bg-slate-300 px-4 py-2 text-[18px]"
                  onClick={() => addQuantity("+")}
                >
                  +
                </span>
              </div>
              <span className="text-[20px] text-[#333]">
                Price:{" "}
                <span className="text-orange-500 ml-2">${product?.price}</span>
              </span>
              <button className="mt-auto py-2 px-5 rounded-lg flex items-center gap-4 bg-black text-[#efefef] max-w-max hover:bg-orange-500 transition-all">
                Add to Cart <AiFillShopping />
              </button>
            </div>
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
    // `${process.env.DOMAIN_URL}/api/products/${id}` ||
    `http://localhost:3000/api/products/${id}`
  );

  return {
    props: {
      product,
    },
  };
}
