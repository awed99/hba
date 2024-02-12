import React from 'react'
import { useRouter } from 'next/router'

export default function Header() {
    const router = useRouter()

    return (<>
      <header id="header" className="fixed-top ">
        <div className="container d-flex align-items-center justify-content-between">

          {/* <h1 className="logo"><a href="./">HB ABADI</a></h1> */}
          <a href="./" className="logo"><img src="assets/img/hba.png" alt="" className="img-fluid" /></a>

          <nav id="navbar" className="navbar">
            <ul>
              <li><a className={"nav-link scrollto " + ((router?.asPath?.split("/")[1] === '' ? 'active' : ''))} href="./">Home</a></li>
              <li className='dropdown'><a className={"nav-link scrollto " + ((((router?.asPath?.split("/")[1] === 'about-us') || (router?.asPath?.split("/")[1] === 'anti-bribery')) ? 'active' : ''))} onClick={() => false} style={{cursor: 'pointer'}}><span>About</span> <i className="bi bi-chevron-down"></i></a>
                <ul>
                  <li><a className={"nav-link scrollto " + ((router?.asPath?.split("/")[1] === 'about-us' ? 'active' : ''))} href="./about-us">About Us</a></li>
                  <li><a className={"nav-link scrollto " + ((router?.asPath?.split("/")[1] === 'anti-bribery' ? 'active' : ''))} href="./anti-bribery">Anti Bribery Policies</a></li>
                </ul>
              </li>
              {/* <li><a className={"nav-link scrollto " + ((router?.asPath?.split("/")[1] === 'about-us' ? 'active' : ''))} href="./about-us">About</a></li> */}
              <li><a className={"nav-link scrollto " + ((router?.asPath?.split("/")[1] === 'services' ? 'active' : ''))} href="./services">Services</a></li>
              <li><a className={"nav-link scrollto " + ((router?.asPath?.split("/")[1] === 'contact-us' ? 'active' : ''))} href="./contact-us">Contact</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>

        </div>
      </header>
    </>)
}