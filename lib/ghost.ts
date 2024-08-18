import GhostContentAPI from '@tryghost/content-api'

const API_URL = process.env.GHOST_API_URL || '';
const API_KEY = process.env.GHOST_CONTENT_API_KEY || '';

const api = new GhostContentAPI({
  url: API_URL,
  key: API_KEY,
  version: 'v5.0'
});

export async function getPosts() {
  console.log('Začínám načítat příspěvky');
  console.log('API_URL:', API_URL);
  console.log('API_KEY je nastavený:', !!API_KEY);
  try {
    const posts = await api.posts
      .browse({
        limit: 'all',
        include: ['tags', 'authors'],
        fields: ['id', 'title', 'slug', 'feature_image', 'excerpt', 'published_at', 'custom_excerpt']
      });

    console.log('Počet načtených příspěvků:', posts.length);
    if (posts.length > 0) {
      console.log('První příspěvek:', JSON.stringify(posts[0], null, 2));
    } else {
      console.log('Žádné příspěvky nebyly načteny');
    }
    
    if (!posts || posts.length === 0) {
      throw new Error('No posts found');
    }
    
    return posts;
  } catch(err) {
    console.error('Chyba při načítání příspěvků:', err);
    throw err;
  }
}

export async function getSinglePost(postSlug: string) {
  console.log('Začínám načítat jednotlivý příspěvek, slug:', postSlug);
  console.log('API_URL:', API_URL);
  console.log('API_KEY je nastavený:', !!API_KEY);
  try {    
    const post = await api.posts
      .read({
        slug: postSlug
      }, {
        include: ['tags', 'authors']
      });
    
    console.log('Načtený příspěvek:', JSON.stringify(post, null, 2));
    
    if (!post) {
      throw new Error('Post not found');  
    }
    
    return post;
  } catch(err) {
    console.error('Chyba při načítání příspěvku:', err);
    throw err;
  }
}