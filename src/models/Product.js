import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["sunglasses", "headphones", "hat"],
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

let Product;

try {
  Product = mongoose.model("Product");
} catch {
  Product = mongoose.model("Product", ProductSchema);
}

export default Product;
