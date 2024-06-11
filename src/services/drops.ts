import { getCollection } from "astro:content";

export async function getAllDrops() {
    const drops = await getCollection(
        'drops', drop => !import.meta.env.PROD || drop.data.status === 'published'
    );

    return drops.sort(
        (dropA, dropB) => (
            dropB.data.order - dropA.data.order
        )
    );
}