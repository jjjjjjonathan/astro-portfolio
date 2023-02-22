import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    draft: z.boolean(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
