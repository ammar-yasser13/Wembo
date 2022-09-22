import React from 'react'
// Global
import '../assets/css/global.css'
// Header
import Header from "../components/Header";
import '../assets/css/header.css'
// Hero Section
import Hero from '../components/Hero';
import Feature from '../components/Feature';
import Pricing from '../components/Pricing';
import Download from '../components/Download';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
        <Header />
        <Hero />
        <Feature />
        <Pricing />
        <Download />
        <Footer />
    </>
  )
}
