import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

function getLengthOfRead(str: string) {
  const x = str.split(' ');
  return Math.floor(x.length / 250);
}

export default async function handler(req, res) {
  const { query, method } = req;
  const { blogName } = query;
  if (method === 'POST') {
    const { body } = req;
    const { topic, title, description, author, markdown } = body;
    const lengthOfReadInMinutes = getLengthOfRead(markdown);
    const newBlog = {
      topic,
      title,
      description,
      author,
      lengthOfReadInMinutes,
      markdown,
      slug: title.toLowerCase().replaceAll(' ', '-')
    };
    const { error } = await supabase.from('blogs').insert(newBlog);
    if (error !== null) {
      res.status(400).json(newBlog);
    } else {
      res.status(200).json(newBlog);
    }
  } else if (method === 'GET') {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('slug', blogName);
    if (error !== null) {
      res.status(400).json({ error });
    } else {
      res.status(200).json({ data, error });
    }
  } else if (method === 'DELETE') {
    const { error } = await supabase
      .from('blogs')
      .delete()
      .eq('slug', blogName);
    if (error !== null) {
      res.status(400).json({ error });
    }
  }
}
