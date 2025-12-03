import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
    readTime: z.string(),
    excerpt: z.string().optional(), // Optional excerpt for posts list
    image: z.string().optional(), // Optional cover image for posts list
  }),
});

export const collections = {
  posts: postsCollection,
};

