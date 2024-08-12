"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const blogPosts = [
  {
    title: 'Budoucnost telemedicíny v České republice',
    excerpt: 'Jak telemedicína mění způsob poskytování zdravotní péče a jaké výzvy a příležitosti přináší pro české zdravotnictví.',
    date: '15. května 2023',
    author: 'MUDr. Jana Nováková',
    image: '/placeholder-blog1.jpg',
  },
  {
    title: 'Implementace elektronické zdravotní dokumentace: Tipy a triky',
    excerpt: 'Praktický průvodce pro zdravotnická zařízení, která plánují přechod na elektronickou zdravotní dokumentaci.',
    date: '2. června 2023',
    author: 'Ing. Petr Svoboda',
    image: '/placeholder-blog2.jpg',
  },
  {
    title: 'Umělá inteligence ve zdravotnictví: Současnost a budoucnost',
    excerpt: 'Přehled aktuálních aplikací umělé inteligence v medicíně a potenciál pro budoucí vývoj.',
    date: '20. června 2023',
    author: 'Doc. RNDr. Martin Hrubý, Ph.D.',
    image: '/placeholder-blog3.jpg',
  },
  {
    title: 'Bezpečnost zdravotnických dat v digitální éře',
    excerpt: 'Klíčové aspekty zabezpečení citlivých zdravotních informací a strategie pro minimalizaci rizik kybernetických útoků.',
    date: '8. července 2023',
    author: 'Mgr. Lucie Černá',
    image: '/placeholder-blog4.jpg',
  },
];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-primary-bg py-20">
      <div className="container mx-auto">
        <motion.h1 
          className="text-4xl font-spaceBold text-primary mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Blog DigiMedic
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-spaceBold text-primary mb-2">{post.title}</h2>
                <p className="text-sm font-raleway text-primary-light mb-4">
                  {post.date} | {post.author}
                </p>
                <p className="font-raleway text-primary-light mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.title.toLowerCase().replace(/ /g, '-')}`} className="text-primary font-spaceBold hover:text-primary-light transition-colors duration-300">
                  Číst více →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;