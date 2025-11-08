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
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50" onClick={() => setMenuOpen(false)}>
          <div
            className="absolute left-0 top-0 bottom-0 w-72 bg-black text-white p-8 space-y-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <h3 className="mb-2 border-b border-gray-700 pb-2 uppercase">Our Services</h3>
              <div className="space-y-1 pl-4 text-sm normal-case">
                <Link href="/property-finder-service" className="block hover:underline capitalize">Property Finder Service</Link>
                <Link href="/new-development" className="block hover:underline capitalize">New Development</Link>
                <Link href="/grand-potential" className="block hover:underline capitalize">Grand Potential</Link>
                <Link href="/secret-listings" className="block hover:underline capitalize">Secret Listings</Link>
              </div>
            </div>
            <Link href="/sell-with-us" className="block border-t border-gray-700 pt-4 uppercase hover:underline">Sell With Us</Link>
            <Link href="/our-team" className="block border-t border-gray-700 pt-4 uppercase hover:underline">Our Team</Link>
            <Link href="/work-with-us" className="block border-t border-gray-700 pt-4 uppercase hover:underline">Work With Us</Link>
            <div className="border-t border-gray-700 pt-4 flex justify-between items-center uppercase">
              <span>Our Offices</span>
              <span>+</span>
            </div>
            <Link href="/contact" className="block border-t border-gray-700 pt-4 uppercase hover:underline">Contact Us</Link>
            <Link href="/become-a-franchisee" className="block border-t border-gray-700 pt-4 uppercase hover:underline">Become a Franchisee</Link>
            <div className="border-t border-gray-700 pt-4 flex space-x-4">
              <a href="#" className="hover:underline">FB</a>
              <a href="#" className="hover:underline">IG</a>
              <a href="#" className="hover:underline">PT</a>
              <a href="#" className="hover:underline">SP</a>
              <a href="#" className="hover:underline">IN</a>
            </div>
            <Link href="/our-story" className="block border-t border-gray-700 pt-4 uppercase hover:underline">Our Story</Link>
            <Link href="/blog-press" className="block border-t border-gray-700 pt-4 uppercase hover:underline">Blog & Press</Link>
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
