'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const images = ['/hero-1.jpg','/hero-2.jpg','/hero-3.jpg','/hero-4.jpg'];
const colors = ['#c7d9e7','#f4e5d3','#d7e7d0','#e8d7e7'];

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
      <header className="flex justify-between items-center p-4">
        <button aria-label="Open menu" onClick={() => setMenuOpen(!menuOpen)} className="space-y-1 focus:outline-none">
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </button>
        <h1 className="text-2xl font-bold">Tiago Vindima</h1>
        <div className="w-6"></div>
      </header>
      {/* Slide-out menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setMenuOpen(false)}>
          <div className="bg-white w-64 h-full p-6" onClick={e => e.stopPropagation()}>
            <nav className="space-y-4">
              <Link href="/">Home</Link>
              <Link href="/for-sale">For Sale</Link>
              <Link href="/our-team">Our Team</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/newsletter">Newsletter</Link>
            </nav>
          </div>
        </div>
      )}
      {/* Hero */}
      <main className="flex-grow flex items-center justify-center">
        <div className="relative w-80 h-80 md:w-96 md:h-96 border-8 border-white">
          <Image src={images[index]} alt="Hero image" fill style={{objectFit:'cover'}} />
        </div>
      </main>
      {/* Bottom navigation always visible */}
      <nav className="w-full py-4 bg-white flex justify-center space-x-8 text-sm">
        <Link href="/for-sale">For Sale</Link>
        <Link href="/our-team">Our Team</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/newsletter">Newsletter</Link>
      </nav>
    </div>
  );
}
