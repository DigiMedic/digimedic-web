import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getPosts } from "@/lib/ghost";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  custom_excerpt: string;
  published_at: string;
  feature_image: string;
  tags: {
    id: string;
    name: string;
    slug: string;
    description: string | null;
    feature_image: string | null;
    visibility: string;
  }[];
  authors: {
    id: string;
    name: string;
    slug: string;
    profile_image: string;
    cover_image: string | null;
    bio: string | null;
    website: string | null;
    location: string | null;
  }[];
}

export default async function BlogPage() {
  try {
    const blogPosts = await getPosts() as BlogPost[];
    const featuredPost = blogPosts[0];
    const otherPosts = blogPosts.slice(1);

    return (
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-spaceBold text-primary mb-12 text-center">
            Blog DigiMedic
          </h1>

          {/* Featured Post */}
          {featuredPost && (
            <article className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden mb-12">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <Image
                    src={featuredPost.feature_image || '/placeholder.jpg'}
                    alt={featuredPost.title}
                    width={600}
                    height={400}
                    objectFit="cover"
                  />
                </div>
                <div className="p-8">
                  <span className="text-primary-light text-sm font-medium mb-1">
                    {featuredPost.tags[0]?.name || 'Uncategorized'}
                  </span>
                  <h2 className="text-3xl font-spaceBold text-primary mb-2">
                    {featuredPost.title}
                  </h2>
                  <p className="text-sm font-raleway text-primary-light mb-4">
                    {new Date(featuredPost.published_at).toLocaleDateString('cs-CZ')} | {featuredPost.authors[0]?.name || 'Unknown'}
                  </p>
                  <p className="font-raleway text-primary-light mb-4">
                    {featuredPost.custom_excerpt || featuredPost.excerpt}
                  </p>
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="text-primary font-spaceBold hover:text-primary-light transition-colors duration-300"
                  >
                    Číst více →
                  </Link>
                </div>
              </div>
            </article>
          )}

          {/* Other Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg shadow-md overflow-hidden flex flex-col"
              >
                <div className="relative h-48">
                  <Image
                    src={post.feature_image || '/placeholder.jpg'}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <span className="text-primary-light text-sm font-medium mb-1">
                    {post.tags[0]?.name || 'Uncategorized'}
                  </span>
                  <h2 className="text-2xl font-spaceBold text-primary mb-2">
                    {post.title}
                  </h2>
                  <p className="text-sm font-raleway text-primary-light mb-4">
                    {new Date(post.published_at).toLocaleDateString('cs-CZ')} | {post.authors[0]?.name || 'Unknown'}
                  </p>
                  <p className="font-raleway text-primary-light mb-4">
                    {post.custom_excerpt || post.excerpt}
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-primary font-spaceBold hover:text-primary-light transition-colors duration-300"
                  >
                    Číst více →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    );
  } catch (err) {
    console.error('Error loading blog posts', err);
    return (
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-spaceBold text-primary mb-12 text-center">
            Blog DigiMedic
          </h1>
          <p className="text-center text-2xl">Nastala chyba při načítání článků.</p>
        </div>
      </div>
    );  
  }
}