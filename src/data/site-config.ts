import type { ImageMetadata } from 'astro';

import logo from '@/assets/logo-white.svg';

export type Image = {
    src: ImageMetadata;
    alt: string;
    caption?: string;
};

export type SiteConfig = {
    logo?: Image;
    image?: Image;
    title: string;
    description: string;
};

const siteConfig: SiteConfig = {
    title: 'Backend Drops',
    description: 'Desafios semanais de backend para se manter atualizado!',
    logo: {
        src: logo,
        alt: 'Backend Drops'
    },
};

export default siteConfig;
