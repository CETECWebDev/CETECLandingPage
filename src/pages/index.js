import Navbar from "@/components/modules/Navbar";
import Hero from './../components/modules/Hero';
import Product from "@/components/modules/Product";
import Features from "@/components/modules/Features";
import About from "@/components/modules/About";



export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Product/>
    <Features/>
    <About/>

    </>
  );
}
