"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const images = ['/hero-1.jpg','/hero-2.jpg','/hero-3.jpg','/hero-4.jpg'];
const colors = ['#c7e0e7', '#edd5d3', '#d7d7ed', '#8ea9db'];

export default function Page() {
  const [index, setIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: colors[index % colors.length] }}>
      {/* Header with hamburger and logo */}
      <header className="flex items-center justify-between p-4">
        <button className="p-2 focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="block w-6 h-0.5 bg-black my-1"></span>
          <span className="block w-6 h-0.5 bg-black my-1"></span>
          <span className="block w-6 h-0.5 bg-black my-1"></span>
        </button>
        <div className="flex-1 flex justify-center">
          <Image src="/logo.png" alt="Tiago Vindima Logo" width={250} height={80} className="h-10 md:h-16 w-auto" />
        </div>
        <div className="w-6"></div>
      </header>

      {/* Slide-out menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-50"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="absolute left-0 top-0 bottom-0 w-64 bg-white p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Link href="/" className="block">Home</Link>
            <Link href="/for-sale" className="block">For Sale</Link>
            <Link href="/our-team" className="block">Our Team</Link>
            <Link href="/contact" className="block">Contact</Link>
            <Link href="/newsletter" className="block">Newsletter</Link>
          </div>
        </div>
      )}

      {/* Hero section */}
      <div className="flex-grow flex items-center justify-center">
        <div className="w-3/4 max-w-md border-8 border-white">
          <Image
            src={images[index]}
            alt="Property"
            width={800}
            height={600}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Bottom navigation */}
      <nav className="flex justify-center space-x-6 py-4">
        <Link href="/for-sale">For Sale</Link>
        <Link href="/our-team">Our Team</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/newsletter">Newsletter</Link>
      </nav>
    </div>
  );
}
