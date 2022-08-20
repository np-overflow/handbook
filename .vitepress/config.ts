import { defineConfig } from 'vitepress'
import UnoCSS from 'unocss/vite'

import { presetTagify, presetWind, transformerVariantGroup } from 'unocss'

const defaultSidebar = [
  {
    text: 'Introduction',
    items: [
      { text: 'What is this?', link: '/introduction/' },
      { text: 'Roles', link: '/introduction/roles' },
    ]
  },
  {
    text: 'Sessions',
    items: [
      { text: 'General workflow', link: '/sessions/general-workflow' },
      { text: 'Pre-session admin', link: '/sessions/pre-session-admin' },
      { text: 'Research', link: '/sessions/research' },
      { text: 'Slides', link: '/sessions/slides' },
      { text: 'Post-session wrap-up', link: '/sessions/post-session-wrap-up' },
    ]
  },
  {
    text: 'Events',
    items: [
      { text: 'CCA Fiesta', link: '/events/cca-fiesta' },
      { text: 'Welcome Party', link: '/events/welcome-party' },
      { text: 'ByteHackz', link: '/events/bytehackz' },
      { text: 'PIOI', link: '/events/pioi' },
      { text: 'Bootcamps', link: '/events/bootcamps' },
    ]
  },
  {
    text: 'Admin',
    items: [
      { text: 'Resources', link: '/admin/resources' },
      { text: 'Pre-semester committee meet-ups', link: '/admin/pre-sem-meet-ups' },
      { text: 'Interviews', link: '/admin/interviews' },
      { text: 'Joining Overflow', link: '/admin/joining-overflow' },
    ]
  },
]

const proposalsSidebar = [
  {
    text: 'Proposals',
    items: [
      { text: 'Moving to Discord', link: '/proposals/discord' },
    ]
  }
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
    editLink: {
      pattern: 'https://github.com/np-overflow/handbook/edit/main/src/:path'
    },
    nav: [
      { text: 'Docs', link: '/introduction/' },
      { text: 'Proposals', link: '/proposals/' },
      { text: 'Contact', link: 'https://next.np-overflow.club' }
    ],
    sidebar: {
      '/proposals': proposalsSidebar,
      '/': defaultSidebar,
    }
  },
})
