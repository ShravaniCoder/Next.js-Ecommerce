import { Facebook, Instagram, X } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#002F6C] text-white py-8 px-4 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Filters */}
        <div>
          <h3 className="text-lg font-bold mb-4">Filters</h3>
          <div className="flex flex-col gap-2">
            <span>All</span>
            <span className="font-semibold">Elektronik</span>
          </div>
          <p className="text-sm mt-6">&copy; 2024 American</p>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <div className="flex flex-col gap-2">
            <a href="#" className="hover:underline">
              About Us
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </div>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <Link
              href="/"
              className="bg-[#005BAC] p-3 rounded-full hover:bg-blue-700 transition"
            >
              <Facebook className="text-white" />
            </Link>
            <Link
              href="/"
              className="bg-[#005BAC] p-3 rounded-full hover:bg-blue-700 transition"
            >
              <X className="text-white" />
            </Link>
            <Link
              href="/"
              className="bg-[#005BAC] p-3 rounded-full hover:bg-blue-700 transition"
            >
              <Instagram className="text-white" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;