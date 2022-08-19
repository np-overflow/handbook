import { defineConfig } from 'vitepress'
import UnoCSS from 'unocss/vite'

import { presetTagify, presetWind, transformerVariantGroup } from 'unocss'

const defaultSidebar = [
  {
    text: 'Introduction',
    items: [
      {text: 'What is this?', link: '/introduction/'},
      {text: 'Getting started', link: '/introduction/get-started'},
      {text: 'Roles', link: '/introduction/roles'},
    ]
  },
  {
    text: 'Sessions',
    items: [
      {text: 'General workflow', link: '/sessions/'},
      {text: 'Pre-session admin', link: '/sessions/pre-session-admin'},
      {text: 'Research', link: '/sessions/research'},
      {text: 'Slides', link: '/sessions/slides'},
      {text: 'Post-session wrap-up', link: '/sessions/post-session-wrap-up'},
    ]
  },
  {
    text: 'Events',
    items: [
      {text: 'CCA Fiesta', link: '/events/cca-fiesta'},
      {text: 'Welcome Party', link: '/events/welcome-party'},
      {text: 'ByteHackz', link: '/events/bytehackz'},
      {text: 'PIOI', link: '/events/pioi'},
      {text: 'Bootcamps', link: '/events/bootcamps'},
    ]
  },
  {
    text: 'Admin',
    items: [
      {text: 'Pre-sem committee meet-up', link: '/admin/pre-sem-meet-up'},
      {text: 'Interviews', link: '/admin/interviews'},
    ]
  },
]

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
    logo: '/logo.svg',
    siteTitle: 'Overflow Handbook',
    nav: [
      {text: 'Home', link: '/'},
      {text: 'Contact', link: 'https://next.np-overflow.club'}
    ],
    sidebar: defaultSidebar
  },
})