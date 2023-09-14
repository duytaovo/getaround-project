import React from 'react'
import '../../../assets/css/bootstrap.min.css'
import './style.css'
const About_Area = () => {
  return (
    <section className='space' id='about-sec'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-xl-6 mb-40 mb-xl-0'>
            <div className='img-box4 style3 pe-xl-4 me-xl-4 wow fadeInLeft'>
              <div className='img1' style={{ width: '500px', height: '600px' }}>
                <img
                  src='https://inkythuatso.com/uploads/thumbnails/800/2022/08/12-anh-lai-xe-o-to-inkythuatso-09-16-00-13.jpg'
                  alt='About'
                  style={{ height: '90%' }}
                />
              </div>
              <div
                className=''
                style={{ position: 'absolute', zIndex: '2', width: '300px', height: '300px', bottom: '20px', right: 0 }}
              >
                <img src='https://2sao.vietnamnetjsc.vn/images/2021/08/04/10/21/IMG8637.jpg' alt='About' />
              </div>
              <div className='th-experience'>
                <h3 className='experience-year'>
                  <span className='counter-number'>26</span>+
                </h3>
                <p className='experience-text'>Years Experience</p>
              </div>
            </div>
          </div>
          <div className='col-xl-6 wow fadeInRight'>
            <div className='title-area mb-35 text-center text-md-start'>
              <span className='sub-title ' style={{ color: '#3699d3' }}>
                {/* <img src='assets/img/shape/title_shape_2.svg' alt='shape' /> */}
                MORE ABOUT US
              </span>
              <h2 className='sec-title text-capitalize'>We Are The Best In Your Town</h2>
            </div>
            <p className='mt-n2 mb-30 text-center text-md-start'>
              Brand team building results after premium web-readiness value web enabled e-business engage web enabled
              strategic...
            </p>
            <div style={{ marginBottom: '20px' }}>
              <div style={{ height: '80%', width: '90%', display: 'flex' }}>
                <img
                  src='https://2sao.vietnamnetjsc.vn/images/2021/08/04/10/21/IMG8637.jpg'
                  alt=''
                  style={{ height: '100px', width: '100px' }}
                />
                <div style={{ marginLeft: '15px' }}>
                  <h1 style={{ fontSize: '20px' }}>BEST SERVICES COMPANY</h1>
                  <p style={{ fontSize: '15px' }}>
                    Authoritative generate reliable application rather than progressive processes. Distinctively
                    e-enable.
                  </p>
                </div>
              </div>
              <div style={{ height: '80%', width: '90%', display: 'flex', marginTop: '15px' }}>
                <img
                  src='https://2sao.vietnamnetjsc.vn/images/2021/08/04/10/21/IMG8637.jpg'
                  alt=''
                  style={{ height: '100px', width: '100px' }}
                />
                <div style={{ marginLeft: '15px' }}>
                  <h1 style={{ fontSize: '20px' }}>BEST SERVICES COMPANY</h1>
                  <p style={{ fontSize: '15px' }}>
                    Authoritative generate reliable application rather than progressive processes. Distinctively
                    e-enable.
                  </p>
                </div>
              </div>
            </div>
            <div className='text-center text-md-start'>
              <a href='about.html' className='th-btn ' style={{ background: '#3699d3', color: 'white' }}>
                Learn More<i className='fa-regular fa-arrow-right ms-2'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='shape-mockup d-none d-xl-block' data-top='0%' data-left='0%'>
        <img src='assets/img/shape/about_shape.png' alt='shapes' />
      </div> */}
    </section>
  )
}

export default About_Area
