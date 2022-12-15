import Head from 'next/head'

export default function Hero () {
    return (
        <>
        <section className="hero-section" id="hero">
        {/**<div className="wave"></div>*/} 
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 hero-text-image">
              <div className="row">
                <div className="col-lg-8 text-center text-lg-start">
                  <h1 data-aos="fade-right">Promote Your App with SoftLand</h1>
                  <p className="mb-5" data-aos="fade-right" data-aos-delay="100">Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit.</p>
                  <p data-aos="fade-right" data-aos-delay="200" data-aos-offset="-500"><a href="#" className="btn btn-outline-white">Get started</a></p>
                </div>
                <div className="col-lg-4 iphone-wrap">
                  <img src="/assets/img/phone_1.png" alt="Image" className="phone-1" data-aos="fade-right"/>
                  <img src="/assets/img/phone_2.png" alt="Image" className="phone-2" data-aos="fade-right" data-aos-delay="200"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}