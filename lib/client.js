import sanityClient from '@sanity/client';
// import { ImageUrlBuilder } from 'next-sanity-image';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'ud6gcr02',
    dataset: 'production',
    apiVersion: '2023-08-09',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
