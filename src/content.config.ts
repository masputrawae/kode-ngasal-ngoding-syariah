import { z, defineCollection } from 'astro:content'
import { glob, file } from 'astro/loaders'

const notes = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: 'src/vault' }),
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		update: z.coerce.date(),
		description: z.string().optional(),
		thumbnail: z.string().optional(),
		tags: z.array(z.string()).optional(),
		categories: z.array(z.string()).optional(),
		featured: z.boolean().optional(),
		type: z.enum(['Projects', 'Permanent', 'Notes']).optional()
	})
})

const categories = defineCollection({
	loader: file('src/vault/categories.json'),
	schema: z.object({
		title: z.string(),
		thumbnail: z.string(),
		description: z.string()
	})
})

export const collections = { notes, categories }
