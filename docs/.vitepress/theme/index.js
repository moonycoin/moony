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
              const sidebar = document.querySelector('.VPSidebar')
              const layout = document.querySelector('.Layout')
              if (!footer || !sidebar || !layout) return
              
              // Only apply footer reveal on pages with sidebars
              if (!layout.classList.contains('has-sidebar')) return
              
              const scrollHeight = document.documentElement.scrollHeight
              const scrollTop = window.scrollY
              const clientHeight = window.innerHeight
              
              // Calculate when footer should start appearing
              const footerHeight = 400
              const distanceFromBottom = scrollHeight - (scrollTop + clientHeight)
              
              if (distanceFromBottom <= footerHeight) {
                // Footer is coming into view - end sidebar and reveal footer
                const revealAmount = footerHeight - distanceFromBottom
                const revealPercentage = Math.min(revealAmount / footerHeight, 1)
                
                // Transform footer up based on how much should be revealed
                footer.style.transform = `translateY(${300 - (300 * revealPercentage)}px)`
                
                // Shrink sidebar to make room for footer
                sidebar.style.bottom = `${400 - (revealAmount)}px`
              } else {
                // Footer not in view - keep footer hidden and sidebar full height
                footer.style.transform = 'translateY(300px)'
                sidebar.style.bottom = '400px'
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