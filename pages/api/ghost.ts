import { NextApiRequest, NextApiResponse } from 'next';
import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
  url: process.env.GHOST_API_URL || 'https://digimedic-1.ghost.io',
  key: process.env.GHOST_CONTENT_API_KEY || 'a334da0c639c1a5d19de3500b2', 
  version: 'v5.0'
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('API Ghost handler - začátek');
  console.log('Metoda požadavku:', req.method);
  console.log('Hlavičky požadavku:', req.headers);
  console.log('Tělo požadavku:', req.body);

  if (req.method !== 'POST') {
    console.log('Neplatná metoda požadavku');
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { resource, filter, params } = req.body;

  console.log('Resource:', resource);
  console.log('Filter:', filter);
  console.log('Params:', params);

  console.log('Ghost API URL:', process.env.GHOST_API_URL);
  console.log('Ghost Content API Key:', process.env.GHOST_CONTENT_API_KEY ? 'Nastaveno' : 'Nenastaveno');

  try {
    let response;

    if (resource === 'posts') {
      console.log('Načítám příspěvky');
      response = await api.posts.browse(filter);
    } else if (resource === 'post') {
      console.log('Načítám jednotlivý příspěvek');
      response = await api.posts.read(params, { include: ['tags', 'authors'] });
    } else {
      console.log('Neznámý resource:', resource);
      return res.status(400).json({ message: 'Invalid resource type' });
    }

    console.log('Odpověď z Ghost API:', JSON.stringify(response, null, 2));
    
    res.status(200).json(response); 
  } catch(err) {
    console.error(`Chyba při načítání ${resource}:`, err);
    res.status(500).json({ 
      message: `Chyba při načítání ${resource}`, 
      error: (err as Error).message, 
      stack: (err as Error).stack 
    });
  }

  console.log('API Ghost handler - konec');
}