import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ featuredProducts }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <>
          <Navbar />
          <Hero />
          <Categories />
          <FeaturedProducts products={featuredProducts} />
          <Footer />
        </>
      </Head>
    </>
  );
}

export async function getServerSideProps() {
  const { data } = await axios.get(
    `http://localhost:3000/api/products` ||
      `https://next-ecom-webdevmania.vercel.app/api/products`
  );

  return {
    props: {
      featuredProducts: data,
    },
  };
}
