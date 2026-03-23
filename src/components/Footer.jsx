import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white border-t border-gold">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo and Tagline */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <ShoppingBag className="h-8 w-8 text-gold" />
              <span className="text-2xl font-bold">UrbanThreads</span>
            </Link>
            <p className="text-secondary-text">
              Luxury Fashion for the Modern World
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gold tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><Link to="/store" className="hover:text-gold transition-colors">Store</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Customer Service */}
          <div>
            <h3 className="text-lg font-semibold text-gold tracking-wider uppercase">Customer Service</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-gold transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-dark py-4 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-secondary-text text-sm">
          © 2026 UrbanThreads. All rights reserved. Built by Ali Majeed.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
