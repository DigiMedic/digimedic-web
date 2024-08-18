import React from 'react';
import { getSinglePost, getPosts } from '@/lib/ghost';
import Image from 'next/image';
import Link from 'next/link';

interface Tag {
  id: string;
  name: string;
  slug: string;
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  try {
    const post = await getSinglePost(params.slug);

    if (!post) {
      return <div>Post not found</div>;
    }

    const formattedDate = post.published_at
      ? new Date(post.published_at).toLocaleDateString('cs-CZ', { year: 'numeric', month: 'long', day: 'numeric' })
      : 'Date unknown';

    return (
      <article className="max-w-3xl mx-auto px-4 py-12">
        {post.feature_image && (
          <div className="mb-8">
            <Image
              src={post.feature_image}
              alt={post.title || 'Blog post image'}
              width={1200}
              height={630}
              layout="responsive"
              className="rounded-lg"
            />
          </div>
        )}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <div className="flex items-center mb-8 text-gray-600">
          <Image
            src={post.primary_author?.profile_image || '/default-avatar.png'}
            alt={post.primary_author?.name || 'Author'}
            width={40}
            height={40}
            className="rounded-full mr-4"
          />
          <div>
            <p className="font-semibold">{post.primary_author?.name || 'Unknown Author'}</p>
            <p>{formattedDate}</p>
          </div>
        </div>
        {post.custom_excerpt && (
          <p className="text-xl text-gray-700 mb-8 font-serif italic">{post.custom_excerpt}</p>
        )}
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.html || '' }}
        />
        {post.tags && post.tags.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Štítky</h2>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: Tag) => (
                <Link href={`/tag/${tag.slug}`} key={tag.id} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-300 transition-colors">
                  {tag.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    );
  } catch (err) {
    console.error('Error loading blog post', err);
    return (
      <article className="max-w-3xl mx-auto px-4 py-12">        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Post not found</h1>
        <p className="text-gray-600">An error occurred while loading the blog post.</p>
      </article>
    );
  }
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}
