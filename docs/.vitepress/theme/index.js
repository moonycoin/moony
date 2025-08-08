import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import Footer from './components/Footer.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(Footer)
    })
  },
  enhanceApp({ app, router, siteData }) {
    // You can register global components here
  }
}