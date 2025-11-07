import Link from 'next/link';

export default function Sidebar() {
  return (
    <nav className="w-64 h-screen bg-gray-100 p-4">
      <ul className="space-y-2">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/for-sale">For Sale</Link></li>
        <li><Link href="/our-team">Our Team</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/newsletter">Newsletter</Link></li>
      </ul>
    </nav>
  );
}
