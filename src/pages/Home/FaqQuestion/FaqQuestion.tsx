import React from 'react'
import { CaretRightOutlined } from '@ant-design/icons'
import 'src/assets/js/bootstrap.min'
const FaqQuestion = () => {
  return (
    <div className='space' id='faq-sec'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-xl-5 col-lg-9 wow fadeInLeft'>
            <div className='title-area mb-35 text-center text-xl-start'>
              <span className='sub-title ' style={{ color: '#3699d3' }}>
                FAQ’s
              </span>
              <h2 className='sec-title text-capitalize'>Frequently Asked Questions</h2>
            </div>
            <div className='accordion-area accordion' id='faqAccordion'>
              <div className='accordion-card style4'>
                <div className='accordion-header' id='collapse-item-1'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapse-1'
                    aria-expanded='false'
                    aria-controls='collapse-1'
                  >
                    How to select a Cab?
                  </button>
                </div>
                <div
                  id='collapse-1'
                  className='accordion-collapse collapse'
                  aria-labelledby='collapse-item-1'
                  data-bs-parent='#faqAccordion'
                >
                  <div className='accordion-body'>
                    <p className='faq-text'>
                      Research reputable cab services: Start by researching and identifying reputable cab services in
                      your area. Look for well-known companies with positive reviews and good customer feedback.
                    </p>
                  </div>
                </div>
              </div>

              <div className='accordion-card style4 active'>
                <div className='accordion-header' id='collapse-item-2'>
                  <button
                    className='accordion-button'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapse-2'
                    aria-expanded='true'
                    aria-controls='collapse-2'
                  >
                    How to Download taxi app?
                  </button>
                </div>
                <div
                  id='collapse-2'
                  className='accordion-collapse collapse show'
                  aria-labelledby='collapse-item-2'
                  data-bs-parent='#faqAccordion'
                >
                  <div className='accordion-body'>
                    <p className='faq-text'>
                      Determine the App Store: Identify the app store that is compatible with your device. For iOS
                      devices, such as iPhones and iPads, use the Apple App Store. For Android devices, such as
                      smartphones and tablets, use the Google Play Store.
                    </p>
                  </div>
                </div>
              </div>

              <div className='accordion-card style4'>
                <div className='accordion-header' id='collapse-item-3'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapse-3'
                    aria-expanded='false'
                    aria-controls='collapse-3'
                  >
                    How to hire a Driver?
                  </button>
                </div>
                <div
                  id='collapse-3'
                  className='accordion-collapse collapse'
                  aria-labelledby='collapse-item-3'
                  data-bs-parent='#faqAccordion'
                >
                  <div className='accordion-body'>
                    <p className='faq-text'>
                      Driver Ratings and Reviews: Many ride-sharing apps provide driver ratings and reviews from
                      previous passengers. Check the drivers overall rating and read through the reviews to get an idea
                      of their reliability, professionalism, and driving skills.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-xl-7 mt-35 mt-xl-0'>
            <div className='ms-xxl-5'>
              <div className='th-video style2 wow fadeInUp'>
                <img
                  className='w-100 h-100'
                  src='https://img.lovepik.com/photo/20211127/medium/lovepik-motorists-drive-at-night-picture_501157365.jpg'
                  alt='Faq'
                />
                <a href='https://www.youtube.com/watch?v=CcpvU_pzR-s' className='play-btn popup-video'>
                  <CaretRightOutlined style={{ fontSize: '30px' }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FaqQuestion
