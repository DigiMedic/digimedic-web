"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { Home } from 'lucide-react';

const FloatingNavbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({ y: 0, opacity: 1 });
    } else {
      controls.start({ y: -100, opacity: 0 });
    }
  }, [isVisible, controls]);

  return (
    <motion.nav
      className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-primary-faintest rounded-full shadow-lg px-6 py-3 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.3 }}
    >
      <ul className="flex items-center space-x-6">
        <li>
          <Link href="/" className="text-primary hover:text-primary-light transition-colors">
            <Home size={24} />
          </Link>
        </li>
        <li><Link href="/sluzby" className="text-primary hover:text-primary-light transition-colors font-space font-bold">Služby</Link></li>
        <li><Link href="/projekty" className="text-primary hover:text-primary-light transition-colors font-space font-bold">Projekty</Link></li>
        <li><Link href="/o-nas" className="text-primary hover:text-primary-light transition-colors font-space font-bold">O nás</Link></li>
        <li><Link href="/kontakt" className="text-primary hover:text-primary-light transition-colors font-space font-bold">Kontakt</Link></li>
        <li><Link href="/blog" className="text-primary hover:text-primary-light transition-colors font-space font-bold">Blog</Link></li>
      </ul>
    </motion.nav>
  );
};

export default FloatingNavbar;