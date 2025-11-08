"use client"; import Image from 'next/image'; import Link from 'next/link'; 
import { useState, useEffect } from 'react'; const images = 
['/hero-1.jpg','/hero-2.jpg','/hero-3.JPG','/hero-4.jpg']; export default 
function Home() { const [index, setIndex] = useState(0); const [menuOpen, 
setMenuOpen] = useState(false); const [servicesOpen, setServicesOpen] = 
useState(false); const [officesOpen, setOfficesOpen] = useState(false); 
useEffect(() => { const interval = setInterval(() => { setIndex((prev) => prev +
 1); }, 4000); return () => clearInterval(interval); }, []); return ( <div 
className="relative min-h-screen flex flex-col bg-black text-white"> {/* Navbar 
*/} <header className="flex justify-between items-center p-4 z-10 relative"> 
<Link href="/"> <Image src="/logo.png" alt="Tiago Vindima Logo" width={150} height={40} priority
/> </Link> <button className="text-white focus:outline-none" onClick={() => 
setMenuOpen(!menuOpen)}> <svg className="w-6 h-6" fill="none" 
stroke="currentColor" viewBox="0 0 24 24"> <path strokeLinecap="round" 
strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /> </svg> 
</button> </header> {/* Side menu */} {menuOpen && ( <div className="fixed 
inset-0 bg-black bg-opacity-50 z-50" onClick={() => setMenuOpen(false)}> <div 
className="absolute left-0 top-0 bottom-0 w-64 bg-black p-4 overflow-y-auto" 
onClick={(e) => e.stopPropagation()}> <Link href="/for-sale" className="block 
uppercase border-b border-gray-700 py-3">For Sale</Link> <Link href="/sell-with-
us" className="block uppercase border-b border-gray-700 py-3">Sell With 
Us</Link> {/* Our Services with sublinks */} <div className="border-b border-
gray-700 py-3 flex justify-between items-center uppercase cursor-pointer" 
onClick={() => setServicesOpen(!servicesOpen)}> <span>Our Services</span> 
<span>{servicesOpen ? '-' : '+'}</span> </div> {servicesOpen && ( <div 
className="pl-4 border-b border-gray-700"> <Link href="/services/property-
finder" className="block uppercase py-2 hover:underline">Property Finder 
Service</Link> <Link href="/services/new-development" className="block uppercase
 py-2 hover:underline">New Development</Link> <Link href="/services/grand-
potential" className="block uppercase py-2 hover:underline">Grand 
Potential</Link> <Link href="/services/secret-listings" className="block 
uppercase py-2 hover:underline">Secret Listings</Link> </div> // Updated menu to
 match Fantastic Frank style )} <Link href="/our-team" className="block 
uppercase border-b border-gray-700 py-3">Our Team</Link> <Link href="/work-with-
us" className="block uppercase border-b border-gray-700 py-3">Work With 
Us</Link> {/* Our Offices with plus sign */} <div className="border-b border-
gray-700 py-3 flex justify-between items-center uppercase cursor-pointer" 
onClick={() => setOfficesOpen(!officesOpen)}> <span>Our Offices</span> 
<span>{officesOpen ? '-' : '+'}</span> </div> {officesOpen && ( <div 
className="pl-4 border-b border-gray-700"> {/* Insert office list or sublinks if
 needed */} </div> )} <Link href="/contact" className="block uppercase border-b 
border-gray-700 py-3">Contact Us</Link> <Link href="/become-a-franchisee" 
className="block uppercase border-b border-gray-700 py-3">Become a 
Franchisee</Link> {/* Social icons */} <div className="border-b border-gray-700 
py-3 flex space-x-4"> <a href="#" className="hover:underline">P</a> <a href="#" 
className="hover:underline">S</a> <a href="#" className="hover:underline">F</a> 
<a href="#" className="hover:underline">I</a> <a href="#" 
className="hover:underline">L</a> </div> <Link href="/our-story" 
className="block uppercase border-b border-gray-700 py-3">Our Story</Link> <Link
 href="/blog-press" className="block uppercase py-3">Blog & Press</Link> </div> 
</div> )} {/* Hero image */} <div className="flex-1 flex items-center justify-
center"> <div className="w-3/4 md:w-1/2 lg:w-1/3 aspect-square relative"> <Image
 src={images[index % images.length]} alt="Property" fill style={{ objectFit: 
'cover' }} /> </div> </div> {/* Bottom navigation */} <nav className="flex 
justify-center space-x-6 p-4 text-white"> <Link href="/for-sale">For Sale</Link>
 <Link href="/our-team">Our Team</Link> <Link href="/contact">Contact</Link> 
<Link href="/newsletter">Newsletter</Link> </nav> </div> ); }
