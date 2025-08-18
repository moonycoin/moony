import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import Footer from './components/Footer.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => {
        // Don't show footer on any page
        return null
      }
    })
  },
  enhanceApp({ app, router, siteData }) {
    // You can register global components here
  }
}