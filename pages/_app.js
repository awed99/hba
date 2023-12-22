import { useEffect, useState } from 'react'
import Image from 'next/image'

import '@/styles/globals.css'
import '@/public/assets/vendor/aos/aos.css'
import '@/public/assets/vendor/bootstrap/css/bootstrap.min.css'
import '@/public/assets/vendor/bootstrap-icons/bootstrap-icons.css'
import '@/public/assets/vendor/boxicons/css/boxicons.min.css'
import '@/public/assets/vendor/glightbox/css/glightbox.min.css'
import '@/public/assets/vendor/remixicon/remixicon.css'
import '@/public/assets/vendor/swiper/swiper-bundle.min.css'
import '@/public/assets/css/style.css'

import PureCounter from '@/public/assets/vendor/purecounter/purecounter_vanilla.js'
import GLightbox from '@/public/assets/vendor/glightbox/js/glightbox.min.js'
import Swiper from '@/public/assets/vendor/swiper/swiper-bundle.min.js'
import Isotope from '@/public/assets/vendor/isotope-layout/isotope.pkgd.min.js'

export default function App({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false);
  
    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document?.querySelectorAll(el)]
      } else {
        return document?.querySelector(el)
      }
    }
  
    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all)
      if (selectEl) {
        if (all) {
          selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
          selectEl.addEventListener(type, listener)
        }
      }
    }
  
    /**
     * Easy on scroll event listener 
     */
    const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener)
    }
  
    const initTerminal = async () => {
        // const PureCounter = async () => {
        //    await import('@/public/assets/vendor/purecounter/purecounter_vanilla.js')
        // }
        const AOS = await import('@/public/assets/vendor/aos/aos.js')
        await import('@/public/assets/vendor/bootstrap/js/bootstrap.bundle.min.js')
        // const GLightbox = async () => {
        //    await import('@/public/assets/vendor/glightbox/js/glightbox.min.js')
        // }
        // const Isotope =  async () => {
        //   await import('@/public/assets/vendor/isotope-layout/isotope.pkgd.min.js')
        // }
        // const Swiper =  async () => {
        //   await import('@/public/assets/vendor/swiper/swiper-bundle.min.js')
        // }
        await import('@/public/assets/vendor/php-email-form/validate.js')

        await import('@/public/assets/js/main.js')

        

          let portfolioContainer = select('.portfolio-container');

          if (portfolioContainer) {
            let portfolioIsotope = new Isotope(portfolioContainer, {
              itemSelector: '.portfolio-item'
            });

            let portfolioFilters = select('#portfolio-flters li', true);

            on('click', '#portfolio-flters li', function(e) {
              e.preventDefault();
              portfolioFilters.forEach(function(el) {
                el.classList.remove('filter-active');
              });
              this.classList.add('filter-active');

              portfolioIsotope.arrange({
                filter: this.getAttribute('data-filter')
              });
              portfolioIsotope.on('arrangeComplete', function() {
                AOS.refresh()
              });

            }, true);
          }

          /**
           * Initiate portfolio lightbox 
           */
          GLightbox({
            selector: '.portfolio-lightbox'
          });
  
        
  
        /**
         * Hero carousel indicators
         */
        let heroCarouselIndicators = select("#hero-carousel-indicators")
        let heroCarouselItems = select('#heroCarousel .carousel-item', true)
  
        heroCarouselItems.forEach((item, index) => {
          (index === 0) ?
          heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "' class='active'></li>":
            heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "'></li>"
        });
  
        
  
        /**
         * Initiate glightbox 
         */
        GLightbox({
          selector: '.glightbox'
        });
  
        new Swiper('.testimonials-slider', {
          speed: 600,
          loop: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false
          },
          slidesPerView: 'auto',
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
          }
        });
        
        new Swiper('.portfolio-details-slider', {
          speed: 400,
          loop: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
          }
        });
  
        
        AOS.init({
          duration: 1000,
          easing: "ease-in-out",
          once: true,
          mirror: false
        });
  
        PureCounter();
        // Add logic with `term`
  
        
        let preloader = select('#preloader');
        
        preloader?.remove()

    }
  
    // useEffect(() => {
    //   // setTimeout(() => {
    //   //   initTerminal()
    //   // }, 100)
    //   if (mounted) {
    //     setTimeout(() => initTerminal(), 200)
    //   }
    // }, [mounted])
  
    useEffect(() => {
      setTimeout(() => initTerminal(), 200)
    })

    // console.log('pageProps: ', pageProps)
    // console.log('Component: ', Component)

  return <Component {...pageProps} suppressHydrationWarning={true} />
}
