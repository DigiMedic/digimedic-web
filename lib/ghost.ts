const API_URL = process.env.GHOST_API_URL || '';

export async function getPosts() {
  console.log('Začínám načítat příspěvky');
  console.log('API_URL:', API_URL);
  try {
    const filter = { 
      limit: 'all',
      include: ['tags', 'authors'],
      fields: ['id', 'title', 'slug', 'feature_image', 'excerpt', 'published_at', 'custom_excerpt']
    };

    console.log('Odesílám požadavek na', `${API_URL}/ghost/api/v5.0/content/posts`);
    console.log('Tělo požadavku:', JSON.stringify({ filter }));
    const response = await fetch(`${API_URL}/ghost/api/v5.0/content/posts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept-Version': 'v5.0',
        'Key': process.env.GHOST_CONTENT_API_KEY || ''
      },
      body: JSON.stringify({ filter })  
    });

    console.log('Odpověď přijata, status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Chybová odpověď:', errorText);
      throw new Error(`Failed to fetch posts. Status: ${response.status}, Error: ${errorText}`);
    }
    
    const { posts } = await response.json();

    console.log('Počet načtených příspěvků:', posts.length);
    if (posts.length > 0) {
      console.log('První příspěvek:', JSON.stringify(posts[0], null, 2));
    } else {
      console.log('Žádné příspěvky nebyly načteny');
    }
    
    if (!posts || !posts.length) {
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
  try {    
    const params = { slug: postSlug };
    console.log('Odesílám požadavek na', `${API_URL}/ghost/api/v5.0/content/posts`);
    console.log('Parametry požadavku:', JSON.stringify({ params }));
    const response = await fetch(`${API_URL}/ghost/api/v5.0/content/posts/${postSlug}`, {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
        'Accept-Version': 'v5.0',
        'Key': process.env.GHOST_CONTENT_API_KEY || ''
      },
    });

    console.log('Odpověď přijata, status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Chybová odpověď:', errorText);
      throw new Error(`Failed to fetch post. Status: ${response.status}, Error: ${errorText}`);
    }
    
    const { posts: [post] } = await response.json();
    
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