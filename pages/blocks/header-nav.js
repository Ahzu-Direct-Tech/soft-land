
import Head from 'next/head'



export default function Headernav () {
    return (
        <>
           
  <header id="header" className="fixed-top d-flex align-items-center">
    <div className="container d-flex justify-content-between align-items-center">

      <div className="logo">
        <h1><a href="/">SoftLand</a></h1>
        <a href="/"><img src="assets/img/logo.png" alt="" className="img-fluid"/></a>
      </div>

      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="active " href="/">Home</a></li>
          <li><a href="/features">Features</a></li>
          <li><a href="/pricing">Pricing</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
  
        </>
    );
}