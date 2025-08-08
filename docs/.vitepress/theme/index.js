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
    // Footer reveal on scroll to bottom
    if (typeof window !== 'undefined') {
      const handleFooterReveal = () => {
        let ticking = false
        
        const onScroll = () => {
          if (!ticking) {
            requestAnimationFrame(() => {
              const footer = document.querySelector('.VPFooter')
              if (!footer) return
              
              const scrollHeight = document.documentElement.scrollHeight
              const scrollTop = window.scrollY
              const clientHeight = window.innerHeight
              
              // Calculate if we're near the bottom
              const scrollPercentage = (scrollTop + clientHeight) / scrollHeight
              
              if (scrollPercentage > 0.85) {
                // Reveal footer fully when near bottom
                footer.style.transform = 'translateY(0)'
              } else {
                // Keep footer partially hidden
                footer.style.transform = 'translateY(300px)'
              }
              
              ticking = false
            })
            ticking = true
          }
        }
        
        window.addEventListener('scroll', onScroll)
        onScroll() // Initial check
      }
      
      // Run on page load and route changes
      window.addEventListener('load', handleFooterReveal)
      router.afterEach(handleFooterReveal)
    }
  }
}