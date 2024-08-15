import React from 'react';
import { getSinglePost, getPosts } from '@/lib/ghost';
import Image from 'next/image';

export default async function BlogPost({ params }: { params: { slug: string } }) {
  try {
    const post = await getSinglePost(params.slug);

    if (!post) {
      return <div>Post not found</div>;
    }

    return (
      <article className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-spaceBold text-primary mb-4">{post.title}</h1>
        <div className="mb-8 text-primary-light">
          <span>{new Date(post.published_at).toLocaleDateString('cs-CZ')}</span>
          <span> | </span>
          <span>{post.primary_author.name}</span>
        </div>
        {post.feature_image && (
          <div className="mb-8">
            <Image
              src={post.feature_image}
              alt={post.title}
              width={1200}
              height={630}
              layout="responsive"
              className="rounded-lg"
            />
          </div>
        )}
        <div
          className="prose lg:prose-xl"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    );
  } catch (err) {
    console.error('Error loading blog post', err);
    return (
      <article className="max-w-4xl mx-auto px-4 py-12">        
        <h1 className="text-4xl md:text-5xl font-spaceBold text-primary mb-4">Post not found</h1>
        <p className="text-primary-light">An error occurred while loading the blog post.</p>
      </article>
    );
  }
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
