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
    siteTitle: 'Overflow Handbook',
  },
})
