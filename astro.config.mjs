import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import UnoCSS from 'unocss/astro';
import starlight from '@astrojs/starlight';

export default defineConfig({
  // used to generate images
  site:
    process.env.VERCEL_ENV === 'production'
      ? 'https://neta-astrosl.vercel.app/'
      : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/`
      : 'https://localhost:3000/',
  trailingSlash: 'ignore',
  integrations: [sitemap(), UnoCSS({ injectReset: true }), 
    starlight({
			title: 'NetaDøcs',
      logo: {
				src: './src/assets/logo.svg',
			},
			components: {
				// Override the default `SocialIcons` component.
				//Header: './src/components/layout/BaseNavigation.astro',
			  },
			social: {
				github: 'https://github.com/netadao',
        twitter: 'https://twitter.com/Neta_DAO',
        discord: 'https://discord.netadao.zone/',
			},
      editLink: {
				baseUrl: 'https://github.com/Massvdev/NetaAstroSL/tree/master/',
			},
			sidebar: [
        {
					label: 'NetaDAO',
					autogenerate: { directory: 'docs/netadao' },
				},
        {
					label: 'Neta Token',
					autogenerate: { directory: 'docs/neta-token' },
				},
        {
					label: 'Guides',
					autogenerate: { directory: 'docs/guides' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'docs/reference' },
				},
        {
					label: 'Early Meeting Notes',
					autogenerate: { directory: 'docs/meetings' },
				},
			],
		}),
  ],
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
  },
});
