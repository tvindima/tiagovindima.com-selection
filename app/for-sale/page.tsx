"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const images = [
  '/hero-1.jpg',
  '/hero-2.jpg',
  '/hero-3.JPG',
  '/hero-4.jpg',
];

const properties = [
  {
    id: 1,
    slug: 'property-one',
    title: 'Property One',
    location: 'Location One',
    rooms: '3 rooms',
    area: '120 m²',
    price: '€800,000',
    image: '/hero-1.jpg',
  },
  {
    id: 2,
    slug: 'property-two',
    title: 'Property Two',
    location: 'Location Two',
    rooms: '4 rooms',
    area: '150 m²',
    price: '€1,200,000',
    image: '/hero-2.jpg',
  },
  {
    id: 3,
    slug: 'property-three',
    title: 'Property Three',
    location: 'Location Three',
    rooms: '4 rooms',
    area: '180 m²',
    price: '€1,500,000',
    image: '/hero-3.JPG',
  },
  {
    id: 4,
    slug: 'property-four',
    title: 'Property Four',
    location: 'Location Four',
    rooms: '5 rooms',
    area: '200 m²',
    price: '€2,000,000',
    image: '/hero-4.jpg',
  },
];

export default function ForSale() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [officesOpen, setOfficesOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col bg-black text-white">
      <header className="flex justify-between items-center p-4 border-b border-gray-700">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
          &#9776;
        </button>
        <Link href="/">
          <Image src="/logo.png" alt="Tiago Vindima Logo" width={150} height={40} priority />
        </Link>
      </header>
      {menuOpen && (
        <aside className="fixed inset-y-0 left-0 w-64 bg-black text-white p-4 overflow-y-auto">
          <nav className="space-y-4">
            <Link href="/for-sale">For Sale</Link>
            <Link href="/sell-with-us">Sell With Us</Link>
            <div>
              <button onClick={() => setServicesOpen(!servicesOpen)} className="flex justify-between w-full">
                Our Services {servicesOpen ? '-' : '+'}
              </button>
              {servicesOpen && (
                <div className="ml-4 space-y-2">
                  <Link href="/our-services/property-finder-service">Property Finder Service</Link>
                  <Link href="/our-services/new-development">New Development</Link>
                  <Link href="/our-services/grand-potential">Grand Potential</Link>
                  <Link href="/our-services/secret-listings">Secret Listings</Link>
                </div>
              )}
            </div>
            <Link href="/our-team">Our Team</Link>
            <Link href="/work-with-us">Work With Us</Link>
            <div>
              <button onClick={() => setOfficesOpen(!officesOpen)} className="flex justify-between w-full">
                Our Offices {officesOpen ? '-' : '+'}
              </button>
              {officesOpen && (
                <div className="ml-4 space-y-2">
                  {/* Placeholder for offices. Add real office links when available */}
                </div>
              )}
            </div>
            <Link href="/contact-us">Contact Us</Link>
            <Link href="/become-a-franchisee">Become a Franchisee</Link>
            <div className="flex space-x-4 pt-4 border-t border-gray-700">
              {/* Social icons */}
              <a href="#" aria-label="Pinterest">P</a>
              <a href="#" aria-label="Spotify">S</a>
              <a href="#" aria-label="Facebook">F</a>
              <a href="#" aria-label="Instagram">I</a>
              <a href="#" aria-label="LinkedIn">L</a>
            </div>
            <Link href="/our-story">Our Story</Link>
            <Link href="/blog">Blog & Press</Link>
          </nav>
        </aside>
      )}
      <section className="relative flex-1">
        <div className="h-96 relative">
          <Image src={images[currentImageIndex]} alt="Hero Image" fill style={{ objectFit: 'cover' }} />
        </div>
        <h1 className="text-3xl uppercase mt-4 mb-2 px-4">For Sale</h1>
        <div className="grid md:grid-cols-2 gap-8 p-4">
          {properties.map((property) => (
            <Link key={property.id} href={`/for-sale/${property.slug}`}>
              <div>
                <div className="relative w-full h-64">
                  <Image src={property.image} alt={property.title} fill style={{ objectFit: 'cover' }} />
                </div>
                <h2 className="mt-2 uppercase">{property.title}</h2>
                <p className="text-gray-400">{property.location}</p>
                <p className="text-gray-500">{property.rooms} · {property.area}</p>
                <p className="text-gray-100">{property.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
