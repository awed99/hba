import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Isotope from '@/public/assets/vendor/isotope-layout/isotope.pkgd.min.js'
// const Isotope = React.lazy(() => import('@/public/assets/vendor/isotope-layout/isotope.pkgd.min.js'))

const inter = Inter({ subsets: ['latin'] })

export default function Services() {

  const execFunc = async () => {
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
  
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });
    }
  
    let portfolioContainer2 = select('.portfolio-container2');
    if (portfolioContainer2) {
      new Isotope(portfolioContainer2, {
        itemSelector: '.portfolio-item2'
      });
    }
  
    let portfolioContainer3 = select('.portfolio-container3');
    if (portfolioContainer3) {
      new Isotope(portfolioContainer3, {
        itemSelector: '.portfolio-item3'
      });
    }

  }
  
  useEffect (() => {
    execFunc()  
  })

  return (
    <>
      <Header />

      <main id="main">
        
        <br /><br /><br />
        <section id="services" className="services section-bg">
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              <h2>Services</h2>
              <p>Check our Services</p>
            </div>

            <div className="row" data-aos="fade-up" data-aos-delay="200">
              <div className="col-md-12">
                <div className="icon-box">
                  <i className="bi bi-box-fill"></i>
                  <h4>A. General Supplier
                  <div className="section-title" style={{marginTop: 20}}>
                          <h2>Conveyor System Parts</h2>
                        </div>
                  </h4>
                  <div className="col-md-12">
                    
                    <div id="portfolio" className="portfolio">
                      <div className="container" data-aos="fade-up">

                        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200" style={{position: 'relative'}}>

                          <div className="col-lg-4 col-md-6 portfolio-item filter-product">
                            <img src="assets/img/app/image5.png" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                              <h4>Our Products</h4>
                              <a href="assets/img/app/image5.png" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Our Products"><i className="bx bx-plus"></i></a>
                              <a href="./services" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                          </div>

                          <div className="col-lg-4 col-md-6 portfolio-item filter-product">
                            <img src="assets/img/app/image6.png" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                              <h4>Our Products</h4>
                              <a href="assets/img/app/image6.png" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Our Products"><i className="bx bx-plus"></i></a>
                              <a href="./services" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                          </div>

                          <div className="col-lg-4 col-md-6 portfolio-item filter-product">
                            <img src="assets/img/app/image6.png" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                              <h4>Our Products</h4>
                              <a href="assets/img/app/image6.png" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Our Products"><i className="bx bx-plus"></i></a>
                              <a href="./services" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                          </div>

                          <div className="col-lg-4 col-md-6 portfolio-item filter-product">
                            <img src="assets/img/app/image7.png" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                              <h4>Our Products</h4>
                              <a href="assets/img/app/image7.png" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Our Products"><i className="bx bx-plus"></i></a>
                              <a href="./services" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                          </div>

                          <div className="col-lg-4 col-md-6 portfolio-item filter-product">
                            <img src="assets/img/app/image8.png" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                              <h4>Our Products</h4>
                              <a href="assets/img/app/image8.png" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Our Products"><i className="bx bx-plus"></i></a>
                              <a href="./services" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                          </div>

                          <div className="col-lg-4 col-md-6 portfolio-item filter-product">
                            <img src="assets/img/app/image9.png" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                              <h4>Our Products</h4>
                              <a href="assets/img/app/image9.png" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Our Products"><i className="bx bx-plus"></i></a>
                              <a href="./services" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                          </div>

                          <div className="col-lg-4 col-md-6 portfolio-item filter-product">
                            <img src="assets/img/app/image10.png" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                              <h4>Our Products</h4>
                              <a href="assets/img/app/image10.png" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Our Products"><i className="bx bx-plus"></i></a>
                              <a href="./services" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                          </div>

                          <div className="col-lg-4 col-md-6 portfolio-item filter-product">
                            <img src="assets/img/app/image11.png" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                              <h4>Our Products</h4>
                              <a href="assets/img/app/image11.png" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Our Products"><i className="bx bx-plus"></i></a>
                              <a href="./services" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                          </div>

                          <div className="col-lg-4 col-md-6 portfolio-item filter-product">
                            <img src="assets/img/app/image12.png" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                              <h4>Our Products</h4>
                              <a href="assets/img/app/image12.png" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Our Products"><i className="bx bx-plus"></i></a>
                              <a href="./services" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                          </div>

                          <div className="col-lg-4 col-md-6 portfolio-item filter-product">
                            <img src="assets/img/app/image13.png" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                              <h4>Our Products</h4>
                              <a href="assets/img/app/image13.png" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Our Products"><i className="bx bx-plus"></i></a>
                              <a href="./services" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                          </div>

                          <div className="col-lg-4 col-md-6 portfolio-item filter-product">
                            <img src="assets/img/app/image14.png" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                              <h4>Our Products</h4>
                              <a href="assets/img/app/image14.png" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Our Products"><i className="bx bx-plus"></i></a>
                              <a href="./services" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                          </div>

                          <div className="col-lg-4 col-md-6 portfolio-item filter-product">
                            <img src="assets/img/app/image15.png" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                              <h4>Our Products</h4>
                              <a href="assets/img/app/image15.png" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Our Products"><i className="bx bx-plus"></i></a>
                              <a href="./services" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                          </div>

                          <div className="col-lg-4 col-md-6 portfolio-item filter-product">
                            <img src="assets/img/app/image16.png" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                              <h4>Our Products</h4>
                              <a href="assets/img/app/image16.png" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Our Products"><i className="bx bx-plus"></i></a>
                              <a href="./services" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                          </div>

                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              </div>
              
              <div className="col-md-12">
                <div className="icon-box">
                  <i className="bi bi-bus-front"></i>
                  <h4>B. Transportation Service
                  <div className="section-title" style={{marginTop: 20}}>
                          <h2>Transportations</h2>
                        </div>
                  </h4>
                  <div className="col-md-12">
                    
                    <div id="portfolio" className="portfolio">
                      <div className="container" data-aos="fade-up">

                        <div className="row portfolio-container portfolio-container2" data-aos="fade-up" data-aos-delay="200" style={{position: 'relative'}}>

                          <div className="col-lg-4 col-md-6 portfolio-item portfolio-item2 filter-app">
                            <img src="assets/img/app/image44.png" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                              <h4>Transportation Service</h4>
                              <a href="assets/img/app/image44.png" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Transportation Service"><i className="bx bx-plus"></i></a>
                              <a className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                          </div>

                          <div className="col-lg-4 col-md-6 portfolio-item portfolio-item2 filter-web">
                            <img src="assets/img/app/image45.png" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                              <h4>Transportation Service</h4>
                              <a href="assets/img/app/image45.png" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Transportation Service"><i className="bx bx-plus"></i></a>
                              <a className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                          </div>

                          <div className="col-lg-4 col-md-6 portfolio-item portfolio-item2 filter-app">
                            <img src="assets/img/app/image46.png" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                              <h4>Transportation Service</h4>
                              <a href="assets/img/app/image46.png" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Transportation Service"><i className="bx bx-plus"></i></a>
                              <a className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                          </div>

                          <div className="col-lg-4 col-md-6 portfolio-item portfolio-item2 filter-app">
                            <img src="assets/img/app/image47.png" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                              <h4>Transportation Service</h4>
                              <a href="assets/img/app/image47.png" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Transportation Service"><i className="bx bx-plus"></i></a>
                              <a className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                          </div>

                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              </div>


              
              <div className="col-md-12">
                <div className="icon-box">
                  <i className="bi bi-hammer"></i>
                  <h4>C. Civil Construction
                  <div className="section-title" style={{marginTop: 20}}>
                          <h2>Office Building</h2>
                        </div>
                  </h4>
                  <div className="col-md-12">
                    
                    <div id="portfolio" className="portfolio">
                      <div className="container" data-aos="fade-up">

                        <div className="row portfolio-container portfolio-container3" data-aos="fade-up" data-aos-delay="200" style={{position: 'relative'}}>

                          <div className="col-lg-4 col-md-6 portfolio-item portfolio-item3 filter-product">
                            <img src="assets/img/app/image4.jpeg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                              <h4>Our Products</h4>
                              <a href="assets/img/app/image4.jpeg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Our Products"><i className="bx bx-plus"></i></a>
                              <a href="./services" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                          </div>

                          <div className="col-lg-4 col-md-6 portfolio-item portfolio-item3 filter-product">
                            <img src="assets/img/app/image6.jpeg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                              <h4>Our Products</h4>
                              <a href="assets/img/app/image6.jpeg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Our Products"><i className="bx bx-plus"></i></a>
                              <a href="./services" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                          </div>

                          <div className="col-lg-4 col-md-6 portfolio-item portfolio-item3 filter-product">
                            <img src="assets/img/app/image17.jpeg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                              <h4>Our Products</h4>
                              <a href="assets/img/app/image17.jpeg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Our Products"><i className="bx bx-plus"></i></a>
                              <a href="./services" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                          </div>

                          <div className="col-lg-4 col-md-6 portfolio-item portfolio-item3 filter-product">
                            <img src="assets/img/app/image24.jpeg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                              <h4>Our Products</h4>
                              <a href="assets/img/app/image24.jpeg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Our Products"><i className="bx bx-plus"></i></a>
                              <a href="./services" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                          </div>

                          <div className="col-lg-4 col-md-6 portfolio-item portfolio-item3 filter-product">
                            <img src="assets/img/app/image25.jpeg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                              <h4>Our Products</h4>
                              <a href="assets/img/app/image25.jpeg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Our Products"><i className="bx bx-plus"></i></a>
                              <a href="./services" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                          </div>

                          <div className="col-lg-4 col-md-6 portfolio-item portfolio-item3 filter-product">
                            <img src="assets/img/app/image30.jpeg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                              <h4>Our Products</h4>
                              <a href="assets/img/app/image30.jpeg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Our Products"><i className="bx bx-plus"></i></a>
                              <a href="./services" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                          </div>

                          <div className="col-lg-4 col-md-6 portfolio-item portfolio-item3 filter-product">
                            <img src="assets/img/app/image31.jpeg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                              <h4>Our Products</h4>
                              <a href="assets/img/app/image31.jpeg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Our Products"><i className="bx bx-plus"></i></a>
                              <a href="./services" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                          </div>

                          <div className="col-lg-4 col-md-6 portfolio-item portfolio-item3 filter-product">
                            <img src="assets/img/app/image34.jpeg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                              <h4>Our Products</h4>
                              <a href="assets/img/app/image34.jpeg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Our Products"><i className="bx bx-plus"></i></a>
                              <a href="./services" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                          </div>

                          <div className="col-lg-4 col-md-6 portfolio-item portfolio-item3 filter-product">
                            <img src="assets/img/app/image35.jpeg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                              <h4>Our Products</h4>
                              <a href="assets/img/app/image35.jpeg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Our Products"><i className="bx bx-plus"></i></a>
                              <a href="./services" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                          </div>

                          <div className="col-lg-4 col-md-6 portfolio-item portfolio-item3 filter-product">
                            <img src="assets/img/app/image38.jpeg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                              <h4>Our Products</h4>
                              <a href="assets/img/app/image38.jpeg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Our Products"><i className="bx bx-plus"></i></a>
                              <a href="./services" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                          </div>

                          <div className="col-lg-4 col-md-6 portfolio-item portfolio-item3 filter-product">
                            <img src="assets/img/app/image39.jpeg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                              <h4>Our Products</h4>
                              <a href="assets/img/app/image39.jpeg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Our Products"><i className="bx bx-plus"></i></a>
                              <a href="./services" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                          </div>

                          <div className="col-lg-4 col-md-6 portfolio-item portfolio-item3 filter-product">
                            <img src="assets/img/app/image40.jpeg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                              <h4>Our Products</h4>
                              <a href="assets/img/app/image40.jpeg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Our Products"><i className="bx bx-plus"></i></a>
                              <a href="./services" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                          </div>

                          <div className="col-lg-4 col-md-6 portfolio-item portfolio-item3 filter-product">
                            <img src="assets/img/app/image41.jpeg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                              <h4>Our Products</h4>
                              <a href="assets/img/app/image41.jpeg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Our Products"><i className="bx bx-plus"></i></a>
                              <a href="./services" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                          </div>

                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

      </main>

      <Footer />


      <div id="preloader"></div>
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

    </>
  )
}
