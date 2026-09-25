import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const workSchema = z.object({
  title: z.string(),
  date: z.coerce.date().optional(),
  excerpt: z.string().optional(),
  venue: z.string().optional(),
  location: z.string().optional(),
  type: z.string().optional(),
  category: z.string().optional(),
  paperurl: z.string().optional(),
  slidesurl: z.string().optional(),
  bibtexurl: z.string().optional(),
  permalink: z.string().optional(),
  authors: z.array(z.string()).optional()
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/publications' }),
  schema: workSchema
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: workSchema.extend({
    status: z.string().optional(),
    type: z.string().optional(),
    technologies: z.array(z.string()).optional(),
    link: z.string().optional()
  })
});

const home = defineCollection({
  loader: glob({ pattern: 'home.{md,mdx}', base: './src/content' }),
  schema: z.object({ title: z.string().optional() })
});

export const collections = { home, publications, projects };
