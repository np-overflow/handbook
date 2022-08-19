import { defineConfig } from 'vitepress'
import UnoCSS from 'unocss/vite'

import { presetTagify, presetWind, transformerVariantGroup } from 'unocss'

export default defineConfig({
  srcDir: 'src',
  title: 'Overflow Handbook',
  vite: {
    plugins: [
      UnoCSS({
        presets: [
          presetWind(),
          presetTagify(),
        ],
        transformers: [
          transformerVariantGroup()
        ],
        shortcuts: [
          [/^chip-(.*)$/, ([, c]) => `
            p-1.5 border-1 rounded-full 
            leading-none font-bold text-[0.5rem] uppercase
            bg-${c}-200 border-${c}-700 dark:(bg-${c}-900 border-${c}-700)
          `],
        ],
      }),
    ]
  },
  themeConfig: {
    logo: 'assets/logo.svg',
    siteTitle: 'Overflow Handbook',
    nav: [
      {text: 'Home', link: '/'},
      {text: 'Contact', link: 'https://next.np-overflow.club'}
    ],
    sidebar: {
      '/get-started': [
        {
          text: 'Introduction',
          items: [
            {text: 'What is this?', link: ''},
            {text: 'Getting started', link: ''},
          ]
        },
        {
          text: 'Sessions',
          items: [
            {text: 'General Workflow', link: ''},
            {text: 'Pre-session Admin', link: ''},
            {text: 'Research', link: ''},
            {text: 'Slides', link: ''},
            {text: 'Post-session Wrap-up', link: ''},
          ]
        },
        {
          text: 'Events',
          items: [
            {text: 'CCA Fiesta', link: ''},
            {text: 'Welcome Party', link: ''},
            {text: 'ByteHackz', link: ''},
            {text: 'PIOI', link: ''},
            {text: 'Bootcamps', link: ''},
          ]
        },
        {
          text: 'Admin',
          items: [
            {text: 'Pre-sem Committee Meet-up', link: ''},
            {text: 'Interviews', link: ''},
          ]
        },
      ]
    }
  },
})