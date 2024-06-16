import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CompanyProfile from '../components/CompanyProfile';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <CompanyProfile />
      <ServicesSection />
      <Footer />
    </div>
  )
}
