import { defineCollection, z } from 'astro:content';

// Define la colección 'servicios'
const serviciosCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    subservices: z.array(z.string()),
  }),
});

export const collections = {
  servicios: serviciosCollection,
};
