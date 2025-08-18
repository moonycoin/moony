import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import Footer from './components/Footer.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => {
        // Don't show footer on home page
        if (typeof window !== 'undefined') {
          const currentPath = window.location.pathname
          const basePath = '/moony/'
          if (currentPath === basePath || currentPath === basePath + 'index.html' || currentPath === '/') {
            return null
          }
        }
        return h(Footer)
      }
    })
  },
  enhanceApp({ app, router, siteData }) {
    // You can register global components here
  }
}