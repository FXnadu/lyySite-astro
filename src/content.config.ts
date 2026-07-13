import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Projects collection: each project is a Markdown file in src/content/projects/
const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		cover: z.string().optional(),
		tags: z.array(z.string()).default([]),
		role: z.string().optional(),
		link: z.string().url().optional(),
		featured: z.boolean().default(false),
	}),
});

export const collections = { projects };