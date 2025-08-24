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
    
    // Add copy to clipboard functionality
    if (typeof window !== 'undefined') {
      window.copyToClipboard = function(text, event) {
        navigator.clipboard.writeText(text).then(function() {
          // Show success feedback
          const btn = event.target.closest('.copy-btn');
          if (btn) {
            const originalText = btn.querySelector('.copy-text').textContent;
            btn.querySelector('.copy-text').textContent = 'Copied!';
            btn.style.background = '#10b981';
            
            setTimeout(() => {
              btn.querySelector('.copy-text').textContent = originalText;
              btn.style.background = '';
            }, 2000);
          }
        }).catch(function(err) {
          console.error('Could not copy text: ', err);
        });
      };
    }
  }
}