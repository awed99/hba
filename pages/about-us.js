import { useEffect } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { importJS } from '@/helpers/importJS'

const inter = Inter({ subsets: ['latin'] })

export default function AboutUs() {

    useEffect(() => {
      importJS()
    }, [])

  return (
    <>
      <Header />

      <main id="main">
        <br /><br /><br />

        <section id="testimonials" className="testimonials">
          <div className="container" data-aos="zoom-in">

            <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
              <div className="swiper-wrapper">

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src="assets/img/hba.png" className="testimonial-img" alt="" />
                    <h3>Hidayat Bersaudara Abadi</h3>
                    <h4>Business Partner Services</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      PT Hidayat Bersaudara Abadi (Perseroan) merupakan Perseroan Terbatas (PT) 
                      yang berupaya mewujudkan visinya menjadi Perusahaan Mitra Kerja dan Jasa terkemuka
                      berskala Nasional yang mampu memberikan nilai tambah kepada stakeholders
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>

              </div>
              {/* <div className="swiper-pagination"></div> */}
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

        <section id="features" className="features">
          <div className="container" data-aos="fade-up">

            <ul className="nav nav-tabs row d-flex">
              <li className="nav-item col-3">
                <a className="nav-link active show" data-bs-toggle="tab" href="#tab-1">
                  <i className="ri-gps-line"></i>
                  <h4 className="d-none d-lg-block">Modi sit est dela pireda nest</h4>
                </a>
              </li>
              <li className="nav-item col-3">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-2">
                  <i className="ri-body-scan-line"></i>
                  <h4 className="d-none d-lg-block">Unde praesenti mara setra le</h4>
                </a>
              </li>
              <li className="nav-item col-3">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-3">
                  <i className="ri-sun-line"></i>
                  <h4 className="d-none d-lg-block">Pariatur explica nitro dela</h4>
                </a>
              </li>
              <li className="nav-item col-3">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-4">
                  <i className="ri-store-line"></i>
                  <h4 className="d-none d-lg-block">Nostrum qui dile node</h4>
                </a>
              </li>
            </ul>

            <div className="tab-content">
              <div className="tab-pane active show" id="tab-1">
                <div className="row">
                  <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                    <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </p>
                    <ul>
                      <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                      <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                      <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                    </ul>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum
                    </p>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center">
                    {/* <img src="assets/img/features-1.png" alt="" className="img-fluid" > */}
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-2">
                <div className="row">
                  <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                    <h3>Neque exercitationem debitis soluta quos debitis quo mollitia officia est</h3>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum
                    </p>
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </p>
                    <ul>
                      <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                      <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                      <li><i className="ri-check-double-line"></i> Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.</li>
                      <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                    </ul>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center">
                    {/* <img src="assets/img/features-2.png" alt="" className="img-fluid" > */}
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-3">
                <div className="row">
                  <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                    <h3>Voluptatibus commodi ut accusamus ea repudiandae ut autem dolor ut assumenda</h3>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum
                    </p>
                    <ul>
                      <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                      <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                      <li><i className="ri-check-double-line"></i> Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.</li>
                    </ul>
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </p>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center">
                    {/* <img src="assets/img/features-3.png" alt="" className="img-fluid" > */}
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-4">
                <div className="row">
                  <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                    <h3>Omnis fugiat ea explicabo sunt dolorum asperiores sequi inventore rerum</h3>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum
                    </p>
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </p>
                    <ul>
                      <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                      <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                      <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                    </ul>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center">
                    {/* <img src="assets/img/features-4.png" alt="" className="img-fluid" > */}
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
