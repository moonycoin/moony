import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import Footer from './components/Footer.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => {
        // Show footer on home page always, and on mobile for all pages
        if (typeof window !== 'undefined') {
          const currentPath = window.location.pathname
          const basePath = '/moony/'
          const isHomePage = currentPath === basePath || currentPath === basePath + 'index.html' || currentPath === '/'
          
          // Always show on home page
          if (isHomePage) {
            return h(Footer)
          }
          
          // Show on mobile for all pages
          if (window.innerWidth <= 768) {
            return h(Footer)
          }
        }
        return null
      }
    })
  },
  enhanceApp({ app, router, siteData }) {
    // You can register global components here
  }
}