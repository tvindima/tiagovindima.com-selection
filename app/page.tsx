'use client';
import { useState, useEffect } from 'react';

const images = ['/hero-1.jpg', '/hero-2.jpg', '/hero-3.jpg'];

const colors = ['#f5f5f5', '#e5e7eb', '#d1d5db'];

export default function Page() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentColor = colors[index % colors.length];

  return (
    <div className="min-h-screen flex flex-col items-center justify-between" style={{ backgroundColor: currentColor }}>
      <header className="w-full flex justify-between items-center p-4">
        <div className="text-xl font-bold">Tiago Vindima</div>
      </header>
      <main className="flex flex-col items-center mt-16">
        <div className="w-80 h-80 relative">
          <img src={images[index]} alt="Property" className="object-cover w-full h-full border-8 border-white" />
        </div>
        <div className="mt-8">
          <ul className="grid grid-cols-2 gap-4 text-center">
            <li><a href="/for-sale" className="text-lg">For Sale</a></li>
            <li><a href="/our-team" className="text-lg">Our Team</a></li>
            <li><a href="/contact" className="text-lg">Contact</a></li>
            <li><a href="/newsletter" className="text-lg">Newsletter</a></li>
          </ul>
        </div>
      </main>
    </div>
  );
}
