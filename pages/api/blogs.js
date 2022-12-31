import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database

const supabase = createClient(
  'https://frdnoxefcxhbqneflzqj.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyZG5veGVmY3hoYnFuZWZsenFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjkzMjU2NDksImV4cCI6MTk4NDkwMTY0OX0.jacg3vbEdwiFSsXi013hew6ApXz0PiC4nz5CAdhSfRs'
);

export default async function handler(req, res) {
  const { method } = req;
  let params = req.query;
  if (method === 'GET') {
    if (JSON.stringify(params) !== '{}') {
      const { data, error } = await supabase
        .from('blogs')
        .select(
          'topic,title,description,author,lengthOfReadInMinutes,slug,dateCreated'
        )
        .eq('topic', params.topic);
      res.status(200).json({ data, error, topic: JSON.stringify(params) });
    } else {
      const { data, error } = await supabase
        .from('blogs')
        .select(
          'topic,title,description,author,lengthOfReadInMinutes,slug,dateCreated'
        );
      res.status(200).json({ data, error, topic: JSON.stringify(params) });
    }
  } else {
    res.status(400).json({});
  }
}
