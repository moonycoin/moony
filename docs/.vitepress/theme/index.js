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
    // Sidebar auto-hide on footer scroll
    if (typeof window !== 'undefined') {
      const handleSidebarHide = () => {
        const footer = document.querySelector('.VPFooter')
        const sidebar = document.querySelector('.VPSidebar')
        
        if (!footer || !sidebar) return
        
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Footer is visible - hide sidebar
              sidebar.style.opacity = '0'
              sidebar.style.pointerEvents = 'none'
              sidebar.style.transition = 'opacity 0.3s ease'
            } else {
              // Footer not visible - show sidebar
              sidebar.style.opacity = '1'
              sidebar.style.pointerEvents = 'auto'
            }
          })
        }, {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        })
        
        observer.observe(footer)
      }
      
      // Run on page load and route changes
      window.addEventListener('load', handleSidebarHide)
      router.afterEach(handleSidebarHide)
    }
  }
}