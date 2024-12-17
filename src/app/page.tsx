'use client';
import React, { useEffect } from 'react';
import Slider from './components/Slider';
import CardSection from './components/Card';
import AboutUsSection from './components/About';
import PartnersSection from './components/Partners';
import CategoriesSection from './components/Categories';
import ProductsSection from './components/ProductSection';
import DealOfTheDay from './components/DealDay';
import CustomerReviews from './components/CostumerReview';
import CompanyAdvantages from './components/CompanyAdvantage';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTop';

export default function Home() {
  return (
    <>
      <ScrollToTopButton />
      <Slider/>
      <CardSection />
      <AboutUsSection/>
      <PartnersSection />
      <CategoriesSection />
      <ProductsSection/>
      <DealOfTheDay />
      <CustomerReviews />
      <CompanyAdvantages />
      <Footer />
    </>
  );
}
