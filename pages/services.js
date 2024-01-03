import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import Header from '../components/header'
import Footer from '../components/footer'
import Isotope from '../public/assets/vendor/isotope-layout/isotope.pkgd.min.js'
// const Isotope = React.lazy(() => import('../public/assets/vendor/isotope-layout/isotope.pkgd.min.js'))

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

  const _supplies = [
    { img: 'image5.png', title: 'Track Link'},
    { img: 'image4.jpeg', title: 'Track Group Assembly'},
    { img: 'image6.jpeg', title: 'Track Roller & Idler'},
    { img: 'image8.png', title: 'Segmen & Sprocket'},
    { img: 'image9.png', title: 'Forging line'},
    { img: 'image10.png', title: 'Quenching and Tempering line'},
    { img: 'image11.png', title: 'Induction Hardening line'},
    { img: 'image12.png', title: 'Machining line'},
    { img: 'image13.png', title: 'Assembly line'},
    { img: 'image14.png', title: 'Major Machinery / Equipment'},
    { img: 'image15.png', title: 'Gear Set'},
    { img: 'image16.png', title: 'Mold Dev : Tooth Point'},
    { img: 'image17.jpeg', title: 'Gland Packing'},
    { img: 'image19.jpeg', title: 'Free Roller Conveyor'},
    { img: 'image21.jpeg', title: 'Drive Roller Conveyor'},
    { img: 'image23.jpeg', title: 'Accumulation Roller Conveyor'},
    { img: 'image24.jpeg', title: 'Hose'},
    { img: 'image23.png', title: 'HDPE Pipe'},
    { img: 'image33.jpeg', title: 'Coupling'},
    { img: 'image25.jpeg', title: 'Flange'},
    { img: 'image35.jpeg', title: 'Coupling'},
    { img: 'image32.jpeg', title: 'Safety Cabinet'},
    { img: 'image28.png', title: 'Hydrant Coupling'},
    { img: 'image29.png', title: 'Box APD'},
    { img: 'picture2.jpg', title: 'Industrial Pump'},
    { img: 'image42.png', title: 'Hydrant Hose'},
    { img: 'image39.jpeg', title: 'PVC Pipe'},
    { img: 'image26.jpeg', title: 'Industrial Scale'},
    { img: 'image32.jpeg', title: 'Chemical Spray'},
    { img: 'image36.jpeg', title: 'Packing'},
    { img: 'image37.jpeg', title: 'Auto Travo'},
    { img: 'image38.jpeg', title: 'Electrical'},
    { img: 'image40.jpeg', title: 'Rachet Binder W/Hook'},
    { img: 'image41.jpeg', title: 'Lever Hoist Chain Block'},
    { img: 'image44.png', title: 'Spare Part Dump Truck'},
    { img: 'image45.png', title: 'Spare Part Bull Dozer'},
    { img: 'image46.png', title: 'Spare Part Wheel Loader'},
    { img: 'image47.png', title: 'Spare Part Motor Grader'},
    { img: 'picture3.jpg', title: 'Construction Materials'},
    { img: 'picture4.jpg', title: 'Building Materials'},
    { img: 'picture5.jpg', title: 'Road Maintenance Materials'},
    { img: 'image22.jpeg', title: 'Transportation support services'},
    { img: 'image27.png', title: 'Transportation support services'},
  ]

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
                  <i className="bi bi-people-fill"></i>
                  <h4>Our Team
                  <div className="section-title" style={{marginTop: 20}}>
                          <h2>Our Team on Working</h2>
                        </div>
                  </h4>
                  <div className="col-md-12">
                    
                    <div id="portfolio" className="portfolio">
                      <div className="container" data-aos="fade-up">

                        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200" style={{position: 'relative'}}>

                          <div className="col-lg-4 col-md-6 portfolio-item filter-product">
                            <img src="assets/img/app/on-goal.png" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                              <h4>Team Work</h4>
                              <a href="assets/img/app/on-goal.png" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link details-link" title="Team Work"><i className="bx bx-plus"></i></a>
                            </div>
                          </div>

                          <div className="col-lg-4 col-md-6 portfolio-item filter-product">
                            <img src="assets/img/app/team-work.png" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                              <h4>One Goal</h4>
                              <a href="assets/img/app/team-work.png" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link details-link" title="One Goal"><i className="bx bx-plus"></i></a>
                            </div>
                          </div>

                          <div className="col-lg-4 col-md-6 portfolio-item filter-product">
                            <img src="assets/img/app/partner.png" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                              <h4>Business Partner Services</h4>
                              <a href="assets/img/app/partner.png" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link details-link" title="Business Partner Services"><i className="bx bx-plus"></i></a>
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
                  <i className="bi bi-box-fill"></i>
                  <h4>B. General Material Suppliers 
                  <div className="section-title" style={{marginTop: 20}}>
                          <h2>We also support General Material Supplies</h2>
                        </div>
                  </h4>
                  <div className="col-md-12">
                    
                    <div id="portfolio" className="portfolio">
                      <div className="container" data-aos="fade-up">

                        <div className="row portfolio-container portfolio-container2" data-aos="fade-up" data-aos-delay="200" style={{position: 'relative'}}>

                          {
                            _supplies?.map(data => (
                              <div key={data?.title} className="col-lg-4 col-md-6 portfolio-item portfolio-item2 filter-app">
                                <img src={"assets/img/app/" + data?.img} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                  <h4>{data?.title}</h4>
                                  <a href={"assets/img/app/" + data?.img} data-gallery="portfolioGallery" className="portfolio-lightbox preview-link details-link" title={data?.title}><i className="bx bx-plus"></i></a>
                                </div>
                              </div>
                            ))
                          }

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
