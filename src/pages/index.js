import Navbar from "@/components/modules/Navbar";
import Hero from './../components/modules/Hero';
import Product from "@/components/modules/Products";
import Features from "@/components/modules/Features";
import About from "@/components/modules/About";
import Products from "@/components/modules/Products";
import Wave from "@/components/modules/Wave";
import Technologies from "@/components/modules/Technologies";
import Project from "@/components/modules/Project";
import ProductOffice from "@/components/modules/ProductOffice";
import Customer from "@/components/modules/Customer";
import CustomerReviews from "@/components/modules/CustomerReviews";



export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Features/>
    <About/>
    <Wave/>
    <Products/>
    <Technologies/>
    <Project/>
    <ProductOffice/>
    <Customer/>
    <CustomerReviews/>

    </>
  );
}
