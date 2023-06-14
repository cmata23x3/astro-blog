import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
    return rss({
        title: 'Christian\'s Astro Learner | Blog',
        description: 'My Astro learning journey',
        site: 'https://master--capable-kelpie-bff62d.netlify.app',
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<language>en-us</language>`,
    });
}