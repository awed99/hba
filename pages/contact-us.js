import { useEffect } from 'react'
import Image from 'next/image'

import Header from '../components/header'
import Footer from '../components/footer'

export default function ContactUs() {

  return (
    <>
      <Header />

      <main id="main">

        
      <br /><br /><br />
      <section id="contact" className="contact">
          <div className="container" data-aos="fade-up">

        <div className="section-title">
            <h2>Contact</h2>
            <p>Contact Us</p>
          </div>

          <div className="row">

            <div className="col-lg-6">

              <div className="row">
                <div className="col-md-12">
                  <div className="info-box">
                    <i className="bx bx-map"></i>
                    <h3>Our Address</h3>
                    <p>Jl. Masjid Al Mujahidin RT. 003 RW 01 No.100 (Depan Plaza Pondok Gede)  Kel. Jatirahayu Kec. Pondok, Kota Bekasi, 17414, Jabar</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box mt-4">
                    <i className="bx bx-envelope"></i>
                    <h3>Email Us</h3>
                    <p>admin@hidayatbersaudaraabadi.com</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box mt-4">
                    <i className="bx bx-phone-call"></i>
                    <h3>Call Us</h3>
                    <p>0812 1282 3030</p>
                  </div>
                </div>
              </div>

            </div>

            <div className="col-lg-6 mt-4 mt-lg-0">
              <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input type="text" className="form-control" name="whatsapp" id="whatsapp" placeholder="Your Whatsapp Number" required />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                </div>
                <div className="form-group mt-3">
                  <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center"><button type="submit">Send Message</button></div>
              </form>
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
