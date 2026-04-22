'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useModal } from '@/context/ModalContext';
import { Lang } from '@/lib/i18n';

export default function Navbar() {
  const { t, changeLanguage } = useLanguage();
  const { openDisclaimer } = useModal();
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  const navLinks = [
    { href: '/#philosophy', label: t.navPhilosophy },
    { href: '/#benefits', label: t.navBenefits },
    { href: '/#system-summary', label: t.navSystem },
    { href: '/#founder-perks', label: t.navFounder },
    { href: '/#news', label: t.navNews },
  ];

  return (
    <nav className="sticky top-0 w-full z-50 glass-nav border-b border-stone-200/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo — triggers disclaimer */}
        <button
          onClick={openDisclaimer}
          className="flex items-baseline group transition-transform hover:scale-105 duration-200"
        >
          <span className="text-2xl font-bold tracking-widest text-emerald-900 uppercase">UVACO</span>
          <span className="ml-2 text-xl font-medium text-emerald-700">{t.brandSub}</span>
        </button>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center space-x-8 font-bold text-stone-600">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-all hover:text-emerald-800 hover:scale-105 duration-200"
            >
              {link.label}
            </Link>
          ))}
          {/* Featured Products — glowing */}
          <Link href="/#featured-products" className="nav-glow duration-200">
            {t.navProducts}
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <select
            onChange={(e) => changeLanguage(e.target.value as Lang)}
            className="bg-transparent border border-stone-300 rounded-full px-2 py-1 text-sm font-bold text-stone-600 focus:outline-none"
          >
            <option value="zh-Hant">繁體</option>
            <option value="zh-Hans">简体</option>
            <option value="en">EN</option>
            <option value="ms">BM</option>
          </select>
          <Link
            href="/#contact"
            className="hidden sm:block px-5 py-2 bg-emerald-800 text-white rounded-full text-sm font-bold hover:bg-emerald-900 shadow-md transition-all hover:scale-105 duration-200"
          >
            {t.navJoin}
          </Link>
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-emerald-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-100 py-6 px-6 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-xl font-bold text-stone-700"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#featured-products"
            onClick={() => setMenuOpen(false)}
            className="block text-xl font-bold text-emerald-800"
          >
            {t.navProducts}
          </Link>
          <Link
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="block w-full py-3 bg-emerald-800 text-white text-center rounded-xl font-bold"
          >
            {t.navJoinMobile}
          </Link>
        </div>
      )}
    </nav>
  );
}
