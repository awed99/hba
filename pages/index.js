import { useEffect } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { importJS } from '@/helpers/importJS'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {

  return (
    <>
      <Header />

      <section id="hero" suppressHydrationWarning={true}>
          <div id="heroCarousel" data-bs-interval="5000" className="carousel slide carousel-fade" data-bs-ride="carousel">

            <div className="carousel-inner" role="listbox">

              {/* <!-- Slide 1 --> */}
              <div className="carousel-item active" style={{backgroundImage: 'url(assets/img/slide/slide-1.jpg)'}}>
                <div className="carousel-container">
                  <div className="carousel-content animate__animated animate__fadeInUp">
                    <h2>PT. Hidayat Bersaudara Abadi</h2>
                    <p>PT Hidayat Bersaudara Abadi (Perseroan) merupakan Perseroan Terbatas (PT) yang berupaya mewujudkan visinya menjadi Perusahaan Mitra Kerja dan Jasa terkemuka berskala Nasional yang mampu memberikan nilai tambah kepada stakeholders.</p>
                  </div>
                </div>
              </div>

              {/* <!-- Slide 2 --> */}
              <div className="carousel-item" style={{backgroundImage: 'url(assets/img/slide/slide-2.jpg)'}}>
                <div className="carousel-container">
                  <div className="carousel-content animate__animated animate__fadeInUp">
                    <h2>Visi PT. Hidayat Bersaudara Abadi</h2>
                    <p>Jasa yang berkualitas dengan mengedepankan pada kepuasan konsumen</p>
                    <p>Nilai Dasar : Jujur, Berorientasi kualitas, Integritas, Tanggung jawab, Peduli , Visioner</p>
                  </div>
                </div>
              </div>

              {/* <!-- Slide 3 --> */}
              <div className="carousel-item" style={{backgroundImage: 'url(assets/img/slide/slide-3.jpg)'}}>
                <div className="carousel-container">
                  <div className="carousel-content animate__animated animate__fadeInUp">
                    <h2>Misi PT. Hidayat Bersaudara Abadi</h2>
                    <p>Menyediakan Jasa yang berkualitas dengan mengedepankan pada kepuasan konsumen</p>
                    <p>Mewujudkan Manajemen Perusahaan yang memiliki dan menjunjung tinggi Etika Bisnis dan Nilai nilai Dasar</p>
                    <p>Memanfaatkan perkembangan Teknologi yang ramah lingkungan</p>
                    <p>Mempunyai keunggulan bersaing dalam Bisnis Inti dan Bisnis terkait</p>
                    <p>Mensinergikan komponen komponen Perusahaan untuk menghasilkan nilai tambah</p>
                    <p>Memiliki komitmen untuk meningkatkan pertumbuhan usaha yang berkesinambungan,
                      kesejahteraan stakeholders, dan senantiasa meningkatkan tanggung jawab sosial</p>
                  </div>
                </div>
              </div>

            </div>

            <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
              <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
            </a>

            <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
              <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
            </a>

            <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

          </div>
      </section>

      <main id="main">

        <section id="about" className="about">
          <div className="container" data-aos="fade-up">

            <div className="row justify-content-end">
              <div className="col-lg-11">
                <div className="row justify-content-end">

                  <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      <i className="bi bi-emoji-smile"></i>
                      <span data-purecounter-start="0" data-purecounter-end="125" data-purecounter-duration="1" className="purecounter"></span>
                      <p>Happy Clients</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      <i className="bi bi-journal-richtext"></i>
                      <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="1" className="purecounter"></span>
                      <p>Projects</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      <i className="bi bi-clock"></i>
                      <span data-purecounter-start="0" data-purecounter-end="35" data-purecounter-duration="1" className="purecounter"></span>
                      <p>Years of experience</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      <i className="bi bi-award"></i>
                      <span data-purecounter-start="0" data-purecounter-end="48" data-purecounter-duration="1" className="purecounter"></span>
                      <p>Awards</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="row">

              <div className="col-lg-6 video-box align-self-baseline" data-aos="zoom-in" data-aos-delay="100">
                <img src="assets/img/about.jpg" className="img-fluid" alt="" />
                <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox play-btn mb-4"></a>
              </div>

              <div className="col-lg-6 pt-3 pt-lg-0 content">
                <h3>Perusahaan Mitra Kerja dan Jasa</h3>
                <p className="fst-italic">
                  Menjalin kerja sama atau rekan bisnis dengan perusahaan lain pada bidang usaha yang selaras untuk pengembangan atau perluasan project. 
                  Bukan hanya sekedar menjalin ikatan tapi juga mampu memberikan timbal balik secara positif bagi satu sama lain. 
                </p>
                <ul>
                  <li><i className="bx bx-check-double"></i> Pengembangan Bisnis</li>
                  <li><i className="bx bx-check-double"></i> Membangun Pertumbuhan Finansial Bisnis</li>
                  <li><i className="bx bx-check-double"></i> Jalinan Hubungan Sosial Dalam Bisnis</li>
                  <li><i className="bx bx-check-double"></i> Membentuk Kesepakatan Yang Saling Menguntungkan</li>
                </ul>
                <p>
                Kemitraan diharapkan mampu memberikan kemudahan dan keuntungan bagi semua pihak. 
                Oleh karena itu, sebuah kesepakatan akan dibentuk untuk menentukan penyelesaian suatu project.
                </p>
              </div>

            </div>

          </div>
        </section>

        <section id="about-boxes" className="about-boxes">
          <div className="container" data-aos="fade-up">

            <div className="row">
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                <div className="card">
                  <img src="assets/img/about-boxes-1.jpg" className="card-img-top" alt="..." />
                  <div className="card-icon">
                    <i className="ri-brush-4-line"></i>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title"><a href="">Our Mission</a></h5>
                    <div className="card-text">
                      <p>Menyediakan Jasa yang berkualitas dengan mengedepankan pada kepuasan konsumen</p>
                      <p>Mewujudkan Manajemen Perusahaan yang memiliki dan menjunjung tinggi Etika Bisnis dan Nilai nilai Dasar</p>
                      <p>Memanfaatkan perkembangan Teknologi yang ramah lingkungan</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                <div className="card">
                  <img src="assets/img/about-boxes-2.jpg" className="card-img-top" alt="..." />
                  <div className="card-icon">
                    <i className="ri-calendar-check-line"></i>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title"><a href="">Our Plan</a></h5>
                    <div className="card-text">
                      <p>Bersaing dalam Bisnis Inti dan Bisnis terkait</p>
                      <p>Meningkatkan pertumbuhan usaha yang berkesinambungan,
                        kesejahteraan stakeholders, dan senantiasa meningkatkan tanggung jawab sosial</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
                <div className="card">
                  <img src="assets/img/about-boxes-3.jpg" className="card-img-top" alt="..." />
                  <div className="card-icon">
                    <i className="ri-movie-2-line"></i>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title"><a href="">Our Vision</a></h5>
                    <p className="card-text">
                      Menjadi Perusahaan Mitra Kerja dan Jasa terkemuka berskala Nasional yang mampu memberikan nilai tambah kepada stakeholders
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section id="services" className="services section-bg">
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              <h2>Services</h2>
              <p>Check our Services</p>
            </div>

            <div className="row" data-aos="fade-up" data-aos-delay="200">
              <div className="col-md-6">
                <div className="icon-box" style={{minHeight: '210px'}}>
                  <i className="bi bi-box-fill"></i>
                  <h4><a href="./services">General Supplier</a></h4>
                  <p>Conveyor System Parts, Unit Parts, Heavy Equipment & Vehicles, 
                     maintenance, Mechanical/Electrical Materia, Conveyor System, 
                     Under Carriage (B/Dozer & Excavator Etc.), Equipment &Vehicles Parts Etc.</p>
                </div>
              </div>
              <div className="col-md-6 mt-4 mt-md-0">
                <div className="icon-box" style={{minHeight: '210px'}}>
                  <i className="bi bi-bus-front"></i>
                  <h4><a href="./services">Transportation Service</a></h4>
                  <p>Transportation Service</p>
                </div>
              </div>
              <div className="col-md-6 mt-4 mt-md-0">
                <div className="icon-box" style={{minHeight: '210px'}}>
                  <i className="bi bi-hammer"></i>
                  <h4><a href="./services">Civil Construction</a></h4>
                  <p>Office Building, House Building, Renovation, Road  maintenance  (Asphalt work)</p>
                </div>
              </div>
              <div className="col-md-6 mt-4 mt-md-0">
                <div className="icon-box" style={{minHeight: '210px'}}>
                  <i className="bi bi-cone-striped"></i>
                  <h4><a href="./services">Safety/Enviro Material </a></h4>
                  <p>APD, Chemicals Etc</p>
                </div>
              </div>
              <div className="col-md-6 mt-4 mt-md-0">
                <div className="icon-box" style={{minHeight: '210px'}}>
                  <i className="bi bi-card-checklist"></i>
                  <h4><a href="./services">Consumables </a></h4>
                  <p>Stationary Parts, Gloves, Mop, etc.</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section id="portfolio" className="portfolio">
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              <h2>Portfolio</h2>
              <p>Check our Portfolio</p>
            </div>

            <div className="row" data-aos="fade-up" data-aos-delay="100">
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active">All</li>
                  <li data-filter=".filter-company">Company</li>
                  <li data-filter=".filter-product">Product</li>
                  <li data-filter=".filter-service">Service</li>
                </ul>
              </div>
            </div>

            <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

              <div className="col-lg-4 col-md-6 portfolio-item filter-company">
                <img src="assets/img/app/team-work.png" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Team Work</h4>
                  <a href="assets/img/app/team-work.png" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Team Work"><i className="bx bx-plus"></i></a>
                  <a href="./services" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-company">
                <img src="assets/img/app/on-goal.png" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>One Goal</h4>
                  <a href="assets/img/app/on-goal.png" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="One Goal"><i className="bx bx-plus"></i></a>
                  <a href="./services" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-company">
                <img src="assets/img/app/partner.png" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Our Parner</h4>
                  <a href="assets/img/app/partner.png" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Our Parner"><i className="bx bx-plus"></i></a>
                  <a href="./services" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-product">
                <img src="assets/img/app/image5.png" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Our Products</h4>
                  <a href="assets/img/app/image5.png" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Our Products"><i className="bx bx-plus"></i></a>
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
        </section>

        <section id="clients" className="clients">
          <div className="container" data-aos="zoom-in">

            <div className="row">

              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src="assets/img/clients/client-1.png" className="img-fluid" alt="" />
              </div>

              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src="assets/img/clients/client-2.png" className="img-fluid" alt="" />
              </div>

              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src="assets/img/clients/client-3.png" className="img-fluid" alt="" />
              </div>

              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src="assets/img/clients/client-4.png" className="img-fluid" alt="" />
              </div>

              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src="assets/img/clients/client-5.png" className="img-fluid" alt="" />
              </div>

              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src="assets/img/clients/client-6.png" className="img-fluid" alt="" />
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
