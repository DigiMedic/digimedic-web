"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    title: 'Budoucnost telemedicíny v České republice',
    content: `
      <p>Telemedicína představuje revoluční přístup k poskytování zdravotní péče, který využívá moderní technologie k překonání geografických bariér a zlepšení dostupnosti lékařských služeb. V České republice se telemedicína postupně stává důležitou součástí zdravotnického systému, přinášející jak výzvy, tak i příležitosti pro pacienty, lékaře i celý zdravotnický sektor.</p>

      <h2>Výhody telemedicíny</h2>
      <ul>
        <li>Zlepšení dostupnosti péče pro pacienty v odlehlých oblastech</li>
        <li>Snížení čekacích dob na konzultace</li>
        <li>Efektivnější využití času lékařů</li>
        <li>Možnost kontinuálního monitoringu chronicky nemocných pacientů</li>
      </ul>

      <h2>Výzvy implementace</h2>
      <p>Přes nesporné výhody čelí implementace telemedicíny v ČR několika výzvám:</p>
      <ul>
        <li>Legislativní úpravy a standardizace postupů</li>
        <li>Zajištění bezpečnosti a ochrany osobních údajů</li>
        <li>Technologická infrastruktura a digitální gramotnost</li>
        <li>Změna přístupu a adaptace zdravotnických pracovníků</li>
      </ul>

      <h2>Budoucí perspektivy</h2>
      <p>S rostoucí digitalizací a technologickým pokrokem se očekává, že telemedicína bude hrát stále významnější roli v českém zdravotnictví. Očekává se rozvoj v oblastech jako:</p>
      <ul>
        <li>Umělá inteligence pro diagnostiku a personalizovanou medicínu</li>
        <li>Rozšířená realita pro vzdělávání a trénink zdravotnického personálu</li>
        <li>Internet věcí pro kontinuální monitoring zdravotního stavu</li>
      </ul>

      <p>Závěrem lze říci, že telemedicína představuje slibnou cestu k efektivnějšímu a dostupnějšímu zdravotnictví v České republice. Její úspěšná implementace však bude vyžadovat spolupráci všech zainteresovaných stran, od tvůrců politik přes poskytovatele zdravotní péče až po samotné pacienty.</p>
    `,
    date: '15. května 2023',
    author: 'MUDr. Jana Nováková',
    image: '/placeholder-blog1.jpg',
    category: 'Telemedicína',
  },
  // Další blogové příspěvky by byly přidány zde...
];

const BlogPost = ({ params }: { params: { slug: string } }) => {
  const post = blogPosts.find(post => post.title.toLowerCase().replace(/ /g, '-') === params.slug);

  if (!post) {
    return <div>Příspěvek nebyl nalezen</div>;
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden"
        >
          <div className="relative h-96">
            <Image
              src={post.image}
              alt={post.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-8">
            <Link href="/blog" className="text-primary-light hover:text-primary transition-colors duration-300 mb-4 inline-block">
              ← Zpět na blog
            </Link>
            <span className="text-primary-light text-sm font-medium mb-2 block">{post.category}</span>
            <h1 className="text-4xl font-spaceBold text-primary mb-4">{post.title}</h1>
            <p className="text-sm font-raleway text-primary-light mb-8">
              {post.date} | {post.author}
            </p>
            <div 
              className="font-raleway text-primary-light prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default BlogPost;