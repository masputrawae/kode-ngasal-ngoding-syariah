// @ts-check
import { defineConfig } from 'astro/config'
import { brainDbAstro, generateSlug } from '@braindb/astro'

import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'
import mdx from '@astrojs/mdx'
import pagefind from 'astro-pagefind'

// https://astro.build/config
export default defineConfig({
	site: 'https://masputrawae.github.io',
	build: {
		format: 'file'
	},
	image: {
		domains: ['astro.build'],
		remotePatterns: [{ protocol: 'https' }]
	},
	vite: {
		plugins: [tailwindcss()]
	},
	integrations: [
		brainDbAstro({
			root: 'src/vault',
			source: '/',
			remarkWikiLink: true,
			git: false,
			url: (filePath, frontmatter) => {
				const slug = frontmatter.slug ? String(frontmatter.slug) : generateSlug(filePath)
				const cleanSlug = slug.replace(/^\/+/, '')
				return `/${cleanSlug}/`
			}
		}),
		icon(),
		mdx(),
		pagefind()
	]
})
