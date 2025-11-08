"use client";

import Image from 'next/image';

const properties = [
  {
    slug: 'property-one',
    title: 'Property One',
    location: 'Location One',
    rooms: '3 rooms',
    area: '120 m²',
    price: '€800,000',
    image: '/hero-1.jpg',
    description: 'Description for Property One.',
  },
  {
    slug: 'property-two',
    title: 'Property Two',
    location: 'Location Two',
    rooms: '4 rooms',
    area: '150 m²',
    price: '€1,200,000',
    image: '/hero-2.jpg',
    description: 'Description for Property Two.',
  },
  {
    slug: 'property-three',
    title: 'Property Three',
    location: 'Location Three',
    rooms: '4 rooms',
    area: '180 m²',
    price: '€1,500,000',
    image: '/hero-3.JPG',
    description: 'Description for Property Three.',
  },
  {
    slug: 'property-four',
    title: 'Property Four',
    location: 'Location Four',
    rooms: '5 rooms',
    area: '200 m²',
    price: '€2,000,000',
    image: '/hero-4.jpg',
    description: 'Description for Property Four.',
  },
];

export default function PropertyPage({ params }) {
  const property = properties.find((p) => p.slug === params.slug);

  if (!property) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p>Property not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative w-full h-96">
        <Image src={property.image} alt={property.title} fill style={{ objectFit: 'cover' }} />
      </div>
      <div className="p-4">
        <h1 className="text-2xl uppercase mb-2">{property.title}</h1>
        <p className="mb-2">{property.location} · {property.rooms} · {property.area}</p>
        <p className="mb-4">{property.price}</p>
        <p>{property.description}</p>
      </div>
    </div>
  );
}
