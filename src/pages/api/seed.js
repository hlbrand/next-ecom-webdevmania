import Product from "@/models/Product";
import data from "@/utils/data";
import db from "@/utils/db";

export default async function seedProducts(req, res) {
  try {
    await db.connect();
    await Product.deleteMany({});
    await Product.insertMany(data.products);
    await db.disconnect();
    res.status(200).json({ message: "Successfully seeded products." });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
}
