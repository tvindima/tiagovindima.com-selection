"use client";
import Image from 'next/image';
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
    title: 'Property One',
    location: 'Location One',
    rooms: '3 rooms',
    area: '120 m²',
    price: '€800,000',
    image: '/hero-1.jpg',
  },
  {
    id: 2,
    title: 'Property Two',
    location: 'Location Two',
    rooms: '4 rooms',
    area: '150 m²',
    price: '€1,200,000',
    image: '/hero-2.jpg',
  },
  {
    id: 3,
    title: 'Property Three',
    location: 'Location Three',
    rooms: '4 rooms',
    area: '180 m²',
    price: '€1,500,000',
    image: '/hero-3.JPG',
  },
  {
    id: 4,
    title: 'Property Four',
    location: 'Location Four',
    rooms: '5 rooms',
    area: '200 m²',
    price: '€2,000,000',
    image: '/hero-4.jpg',
  },
];

export default function ForSale() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero image slider */}
      <div className="relative w-full h-64 md:h-96 overflow-hidden">
        <Image
          src={images[index % images.length]}
          alt="Hero"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="p-4">
        <h1 className="text-2xl uppercase mb-4">Properties for Sale</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div key={property.id} className="border border-gray-700 p-2">
              <div className="relative aspect-video">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h2 className="mt-2 uppercase font-semibold">{property.title}</h2>
              <p className="text-sm">
                {property.location} · {property.rooms} · {property.area}
              </p>
              <p className="text-sm">{property.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
