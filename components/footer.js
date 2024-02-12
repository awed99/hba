import React from 'react'
import { useRouter } from 'next/router'

export default function Footer() {
    const router = useRouter()

    return (<>
        <footer id="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row">
  
                <div className="col-lg-3 col-md-6">
                  <div className="footer-info">
                    <h3>PT Hidayat Bersaudara Abadi (HBA)</h3>
                    <div>
                      <p>
                        - Jl. Masjid Al Mujahidin RT. 003 RW 01 No.100, Kel. Jatirahayu Kec. Pondok Melati, Kota Bekasi, 17414, Jabar
                      </p><br/>
                      <p>
                        - Komplek Grand City, Forest ville K12 No. 23, Jl. MT Haryono Balikpapan, Kaltim
                      </p>
                      <br/>
                      <strong>Phone 1:</strong> 0812 1282 3030<br/>
                      <strong>Phone 2:</strong> 0812 9541 7419<br/>
                      <strong>Email:</strong> admin@hidayatbersaudaraabadi.com<br/>
                    </div>
                    <div className="social-links mt-3">
                      <a href="./" className="twitter"><i className="bx bxl-twitter"></i></a>
                      <a href="./" className="facebook"><i className="bx bxl-facebook"></i></a>
                      <a href="./" className="instagram"><i className="bx bxl-instagram"></i></a>
                      <a href="./" className="google-plus"><i className="bx bxl-skype"></i></a>
                      <a href="./" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                    </div>
                  </div>
                </div>
  
                <div className="col-lg-2 col-md-6 footer-links">
                  <h4>Useful Links</h4>
                  <ul>
                    <li><i className="bx bx-chevron-right"></i> <a className='scrollto' href="./">Home</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a className='scrollto' href="./about-us">About us</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a className='scrollto' href="./services">Services</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a className='scrollto' href="./contact-us">Contact</a></li>
                  </ul>
                </div>
  
                <div className="col-lg-3 col-md-6 footer-links">
                  <h4>Our Services</h4>
                  <ul>
                    <li onClick={() => window.location = ('/services')}><i className="bx bx-chevron-right"></i> General Supplies</li>
                    <li onClick={() => window.location = ('/services')}><i className="bx bx-chevron-right"></i> Transportation Service</li>
                    <li onClick={() => window.location = ('/services')}><i className="bx bx-chevron-right"></i> Civil Construction</li>
                    <li onClick={() => window.location = ('/services')}><i className="bx bx-chevron-right"></i> Safety/Enviro Material Supplies</li>
                    <li onClick={() => window.location = ('/services')}><i className="bx bx-chevron-right"></i> Tools Supplies</li>
                  </ul>
                </div>
  
                <div className="col-lg-4 col-md-6 footer-newsletter">
                  <h4>Our Newsletter</h4>
                  <p>Input your email to get our updates.</p>
                  <form action="" method="post">
                    <input type="email" name="email" /><input type="submit" value="Subscribe" />
                  </form>
                </div>
  
              </div>
            </div>
          </div>
  
          <div className="container">
            <div className="copyright">
              &copy; Copyright <strong><span>Rumah Teknologi</span></strong>. All Rights Reserved {new Date().getFullYear()}
            </div>
            <div className="credits">
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a><br/>
              Script used by <a href="https://nextjs.org/">NextJS</a>
            </div>
          </div>
        </footer>
    </>)
}