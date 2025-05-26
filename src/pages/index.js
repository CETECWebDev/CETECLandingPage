import Navbar from "@/components/modules/Navbar";
import Hero from './../components/modules/Hero';
import Product from "@/components/modules/Products";
import Features from "@/components/modules/Features";
import About from "@/components/modules/About";
import Products from "@/components/modules/Products";



export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Features/>
    <About/>
    <Products/>

    </>
  );
}
