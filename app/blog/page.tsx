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
    category: 'Telemedicína',
  },
  {
    title: 'Implementace elektronické zdravotní dokumentace: Tipy a triky',
    excerpt: 'Praktický průvodce pro zdravotnická zařízení, která plánují přechod na elektronickou zdravotní dokumentaci.',
    date: '2. června 2023',
    author: 'Ing. Petr Svoboda',
    image: '/placeholder-blog2.jpg',
    category: 'Digitalizace',
  },
  {
    title: 'Umělá inteligence ve zdravotnictví: Současnost a budoucnost',
    excerpt: 'Přehled aktuálních aplikací umělé inteligence v medicíně a potenciál pro budoucí vývoj.',
    date: '20. června 2023',
    author: 'Doc. RNDr. Martin Hrubý, Ph.D.',
    image: '/placeholder-blog3.jpg',
    category: 'Inovace',
  },
  {
    title: 'Bezpečnost zdravotnických dat v digitální éře',
    excerpt: 'Klíčové aspekty zabezpečení citlivých zdravotních informací a strategie pro minimalizaci rizik kybernetických útoků.',
    date: '8. července 2023',
    author: 'Mgr. Lucie Černá',
    image: '/placeholder-blog4.jpg',
    category: 'Bezpečnost',
  },
];

const BlogPage = () => {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-5xl font-spaceBold text-primary mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Blog DigiMedic
        </motion.h1>
        
        {/* Featured Post */}
        <motion.article
          className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                width={600}
                height={400}
                objectFit="cover"
              />
            </div>
            <div className="p-8">
              <span className="text-primary-light text-sm font-medium mb-1">{featuredPost.category}</span>
              <h2 className="text-3xl font-spaceBold text-primary mb-2">{featuredPost.title}</h2>
              <p className="text-sm font-raleway text-primary-light mb-4">
                {featuredPost.date} | {featuredPost.author}
              </p>
              <p className="font-raleway text-primary-light mb-4">{featuredPost.excerpt}</p>
              <Link href={`/blog/${featuredPost.title.toLowerCase().replace(/ /g, '-')}`} className="text-primary font-spaceBold hover:text-primary-light transition-colors duration-300">
                Číst více →
              </Link>
            </div>
          </div>
        </motion.article>
        
        {/* Other Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherPosts.map((post, index) => (
            <motion.article
              key={index}
              className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg shadow-md overflow-hidden flex flex-col"
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
              <div className="p-6 flex-grow">
                <span className="text-primary-light text-sm font-medium mb-1">{post.category}</span>
                <h2 className="text-2xl font-spaceBold text-primary mb-2">{post.title}</h2>
                <p className="text-sm font-raleway text-primary-light mb-4">
                  {post.date} | {post.author}
                </p>
                <p className="font-raleway text-primary-light mb-4">{post.excerpt}</p>
              </div>
              <div className="p-6 pt-0">
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