import { getCollection } from 'astro:content'

export async function sortCollection(
	type: 'Projects' | 'Notes' | 'Permanent' | 'NotProject' | 'All',
	featured?: boolean,
	limit?: number
) {
	const getAllCollection = await getCollection('notes')

	let getType
	if (type === 'NotProject') {
		getType = getAllCollection.filter((i) => i.data.type !== 'Projects')
	} else if (type === 'All') {
		getType = getAllCollection
	} else {
		getType = getAllCollection.filter((i) => i.data.type === type)
	}

	const filtered = featured ? getType.filter((i) => i.data.featured) : getType

	const limited = limit ? filtered.slice(0, limit) : filtered
	const sorted = limited
		.sort((a, b) => {
			const dateA = new Date(a.data.date).getTime()
			const dateB = new Date(b.data.date).getTime()

			return dateB - dateA
		})
		.sort((a, b) => (a.data.featured === b.data.featured ? 0 : a.data.featured ? -1 : 1))

	return sorted
}

// GENERATE TAG CLOUDS
export async function tagCloud() {
	const getAllCollection = await getCollection('notes')
	const getAllTags = getAllCollection.flatMap((item) => item.data.tags)

	// Gunakan objek untuk menghitung jumlah tiap tag
	const tagCount: Record<string, number> = {}

	for (const tag of getAllTags) {
		if (typeof tag === 'string') {
			tagCount[tag] = (tagCount[tag] || 0) + 1
		}
	}

	return Object.entries(tagCount)
		.map(([tag, count]) => ({ tag: tag as string, count: count as number }))
		.sort((a, b) => (b.count as number) - (a.count as number))
}
