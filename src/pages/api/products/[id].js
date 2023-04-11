import Product from "@/models/Product";
import db from "@/utils/db";

export default async function handler(req, res) {
  try {
    await db.connect();

    if (req.method === "GET") {
      const { id } = req.query;
      const product = await Product.findById(id);
      res.status(200).json(product);
    } else {
      throw new Error(`Cannot handle ${req.method} request`);
    }

    await db.disconnect();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
