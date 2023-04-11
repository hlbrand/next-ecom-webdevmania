import Product from "@/models/Product";
import db from "@/utils/db";

export default async function handler(req, res) {
  try {
    await db.connect();

    switch (req.method) {
      case "GET": {
        if (req.query.featured) {
          const featuredProducts = await Product.find({ featured: true });
          res.status(200).json(featuredProducts);
        } else if (req.query.cat) {
          const catProducts = await Product.find({ category: req.query.cat });
          res.status(200).json(catProducts);
        } else {
          const products = await Product.find({});
          res.status(200).json(products);
        }
        break;
      }

      case "POST": {
        const product = await Product.create({ ...req.body });
        res.status(201).json(product);
        break;
      }

      default: {
        res.setHeader("Allow", ["GET", "POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error!!" });
  } finally {
    await db.disconnect();
  }
}
