import { z, defineCollection } from 'astro:content';

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    githubUrl: z.string().url().optional(),
    deployUrl: z.string().url().optional(),
    draft: z.boolean(),
    rank: z.number(),
    tags: z.array(z.string()).optional(),
    description: z.string().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
