import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    githubUrl: z.string().url(),
    deployUrl: z.string().url().optional(),
    draft: z.boolean(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
