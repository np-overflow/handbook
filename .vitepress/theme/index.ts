import DefaultTheme from 'vitepress/theme'
import './custom.css'
import 'uno.css'

import TheProposalTable from '../../components/TheProposalTable.vue'

export default {
  ...DefaultTheme,
  enhanceApp({app}) {
    app.component('TheProposalTable', TheProposalTable)
  }
}
