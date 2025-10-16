import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://vehement.co',
  integrations: [
    tailwind(),
     sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-CO',
          en: 'en-US',
        },
      },
      // Personalizar prioridad y frecuencia de cambio
      customPages: [
        'https://vehement.co/',
        'https://vehement.co/desarrollo',
        'https://vehement.co/marketing',
        'https://vehement.co/ciberseguridad',
      ],
      serialize(item) {
        // Configurar prioridad según la página
        if (item.url === 'https://vehement.co/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        } else if (
          item.url === 'https://vehement.co/desarrollo' ||
          item.url === 'https://vehement.co/marketing' ||
          item.url === 'https://vehement.co/ciberseguridad'
        ) {
          item.priority = 0.9;
          item.changefreq = 'monthly';
        } else if (item.url.includes('/blog/')) {
          item.priority = 0.6;
          item.changefreq = 'weekly';
        } else {
          item.priority = 0.5;
          item.changefreq = 'monthly';
        }
        return item;
      },
    }),

  ]


});

