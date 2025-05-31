import React from 'react'
import Navbar from '@/components/modules/Navbar'
import AboutPages from '@/components/templates/aboutPages/AboutPages'
import Wave from "@/components/modules/Wave";
import Symbols from '@/components/templates/symbols/Symbols';
import Footer from '@/components/modules/Footer';

function index() {
  return (
    <>
    <Navbar/>
    <AboutPages/>
    <Wave />
    <Symbols/>
  <Footer/>
    </>
  )
}

export default index