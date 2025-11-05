import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} UNIMED Gallery. All rights reserved.
        </div>
        <nav className="flex items-center gap-6 text-sm text-gray-600">
          <a href="#" className="hover:text-gray-900">Tentang</a>
          <a href="#" className="hover:text-gray-900">Kebijakan</a>
          <a href="#" className="hover:text-gray-900">Kontak</a>
        </nav>
      </div>
    </footer>
  );
}
