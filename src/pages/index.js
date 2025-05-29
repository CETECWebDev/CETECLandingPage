import Navbar from "@/components/modules/Navbar";
import Hero from './../components/modules/Hero';
import Features from "@/components/modules/Features";
import About from "@/components/modules/About";
import Products from "@/components/modules/Products";
import Wave from "@/components/modules/Wave";
import Technologies from "@/components/modules/Technologies";
import Project from "@/components/modules/Project";
import ProductOffice from "@/components/modules/ProductOffice";
import Customer from "@/components/modules/Customer";
import Slider from "@/components/modules/Slider";
import Footer from "@/components/modules/Footer";
import CustomerReviews from "@/components/modules/CustomerReviews";
import AdvicingCard from "@/components/modules/AdvicingCard";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Wave />
      <Products />
      <Technologies />
      <Slider />
      <Project />
      <ProductOffice />
      <Customer />
      <CustomerReviews />
      <AdvicingCard />
      <Footer />

    </>
  );
}
