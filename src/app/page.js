"use client";
import React, { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar'
import Authpage from '../components/Authpage';
import Card from '../components/Card';
import AddOwnCard from '../components/AddOwnCard';
import Testimonials from '../components/Testimonials';
import BottomBanner from '../components/BottomBanner';
import Footer from '../components/Footer';


export default function Home() {

  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showScroll && (
        <button
          onClick={scrollTop}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            display: 'block',
            zIndex: 1000,
          }}
          className="btn btn-secondary btn-floating"
        >
          <i className="bi bi-arrow-up-circle" style={{ fontSize: '24px' }}></i>
        </button>
      )}

      <Navbar />
      <Authpage />
      <Card />
      <AddOwnCard />
      <Testimonials />
      <BottomBanner />
      <Footer />
    </>
  );
}


