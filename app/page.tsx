"use client";
"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const images = ['/hero-1.jpg','/hero-2.jpg','/hero-3.jpg','/hero-4.jpg'];
const colors = ['#0e0e0e','#1f1f1f','#2a2a2a','#3b3b3b'];

export default function Page() {
  const [index, setIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: colors[index % colors.length] }}>
      {/* Header with hamburger and logo */}
      <header className="flex items-center justify-between p-4">
        <button className="p-2 focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="block w-6 h-0.5 bg-white my-1"></span>
          <span className="block w-6 h-0.5 bg-white my-1"></span>
          <span className="block w-6 h-0.5 bg-white my-1"></span>
        </button>
        <div className="flex-1 flex justify-center">
          <Image src="/logo.png" alt="Tiago Vindima Logo" width={300} height={120} className="h-12 md:h-20 w-auto" />
        </div>
        <div className="w-6"></div>
      </header>
      {/* Slide-out menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50" onClick={() => setMenuOpen(false)}>
          <div className="absolute left-0 top-0 bottom-0 w-64 bg-white p-6 space-y-4" onClick={(e) => e.stopPropagation()}>
            <Link href="/" className="block">Home</Link>
            <Link href="/for-sale" className="block">For Sale</Link>
            <Link href="/our-team" className="block">Our Team</Link>
            <Link href="/contact" className="block">Contact</Link>
            <Link href="/newsletter" className="block">Newsletter</Link>
          </div>
        </div>
      )}
      {/* Hero image centered */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-3/4 md:w-1/2 lg:w-1/3 aspect-square relative">
          <Image src={images[index % images.length]} alt="Property" fill style={{ objectFit: 'cover' }} />
        </div>
      </div>
      {/* Bottom navigation */}
      <nav className="flex justify-center space-x-6 p-4 text-white">
        <Link href="/for-sale">For Sale</Link>
        <Link href="/our-team">Our Team</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/newsletter">Newsletter</Link>
      </nav>
    </div>
  );
}
