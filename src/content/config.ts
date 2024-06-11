import { defineCollection, z, type SchemaContext } from 'astro:content';

const seoSchema = ({ image }: SchemaContext) => (
    z.object({
        title: z.string().min(5).max(120).optional(),
        description: z.string().min(15).max(160).optional(),
        image: z
            .object({
                src: image(),
                alt: z.string()
            })
            .optional(),
        pageType: z.enum(['website', 'article']).default('website')
    })
);


const drops = defineCollection({
    type: "content",
    schema: (context: SchemaContext) => (
        z.object({
            order: z.number().min(1),
            title: z.string(),
            description: z.string().optional(),
            status: z.enum(['draft', 'published']).default('draft'),
            publishedAt: z.coerce.date(),
            heroImage: z.object({
                src: context.image(),
                alt: z.string()
            }).optional(),
            tags: z.array(z.string()).default([]),
            seo: seoSchema(context).optional()
        })
    )
});

export const collections = { drops };
