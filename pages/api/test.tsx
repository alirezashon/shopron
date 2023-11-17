// pages/api/posts.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  // Replace this with your logic to fetch posts from an external API
  const posts = Array.from({ length: 10 }, (_, index) => ({ id: index + 1, title: `Post ${index + 1}` }));

  res.status(200).json(posts);
};
