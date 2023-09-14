import React from 'react'
import { PhoneOutlined } from '@ant-design/icons'
import CustomDatetimePicker from 'src/components/CustomDatetimePicker/CustomDatetimePicker'
import CustomeAddressAutocomplete from 'src/components/CustomeAddressAutocomplete/CustomeAddressAutocomplete'
import { Space, Select } from 'antd'
const options = [
  {
    label: 'Option 1',
    value: 'This is value one'
  },
  {
    label: 'Option 2',
    value: '2'
  },
  {
    label: 'Option 3',
    value: '3'
  }
]
const FormBookTaxi = () => {
  return (
    <div className='position-relative overflow-hidden bg-top-center space' data-bg-src='assets/img/bg/booking_bg_1.jpg'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-6 wow fadeInLeft'>
            <div className='title-area text-center text-xl-start'>
              <span className='sub-title style2'>
                <span className='sub-title'>ABOUT OUR COMPANY</span>
              </span>
              <h2 className='sec-title text-mainColor'>Our Easy Booking Form To Get Best Vehicle</h2>
              <p className='booking-text'>
                Taxis can be hailed from any location and at any time. Maintain optimal business competitive products
                grow strategic and technically sound human capital distributed.
              </p>
            </div>
            <div className='d-flex justify-content-center justify-content-xl-start'>
              <div className='info-card style4' style={{ display: 'flex' }}>
                <div className='info-card_icon' style={{ background: '#3699d3', padding: '15px', borderRadius: '50%' }}>
                  <PhoneOutlined />
                </div>
                <div className='info-card_content'>
                  <p className='info-card_text ' style={{ color: '#3699d3' }}>
                    Call for book an order:
                  </p>
                  <a href='tel:+25632153215' className='info-card_link'>
                    +256 3215 3215
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-xl-6'>
            <form
              action='mail.php'
              method='POST'
              className='booking-form4 ajax-contact wow fadeInUp'
              data-bg-src='assets/img/shape/booking_shape.png'
              style={{ background: '#f7f7f7' }}
            >
              <h3>Book Taxi Now</h3>
              <div className='row'>
                <div className='form-group col-sm-6' style={{ borderRadius: '10px' }}>
                  <input
                    type='text'
                    className='form-control'
                    name='text'
                    id='text'
                    placeholder='Enter location'
                    style={{ borderRadius: '10px' }}
                  />
                </div>
                <div className='form-group col-sm-6'>
                  <input
                    type='number'
                    className='form-control'
                    name='phone'
                    id='phone'
                    placeholder='Phone Number'
                    style={{ borderRadius: '10px' }}
                  />
                </div>

                <div className='grow flex justify-between'>
                  <CustomDatetimePicker className='h-[52px] lg:grow' title={'Thời gian đi'} />
                  <div style={{ width: '10px' }} />
                  <CustomDatetimePicker className='h-[52px] lg:grow' title={'Thời gian về'} />
                </div>
                <div style={{ width: '500px', marginTop: '20px', marginBottom: '20px' }}>
                  <CustomeAddressAutocomplete items={options} />
                </div>
                <div className='form-group col-sm-6' style={{ borderRadius: '10px' }}>
                  <input
                    type='text'
                    className='form-control'
                    name='text'
                    id='text'
                    placeholder='No Of Passengers'
                    style={{ borderRadius: '10px', width: '460px' }}
                  />
                </div>

                <div className='form-btn col-12'>
                  <button className='th-btn radius-btn'>
                    Book Taxi Now<i className='fa-regular fa-arrow-right ms-2'></i>
                  </button>
                </div>
              </div>
              <p className='form-messages mb-0 mt-3'></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormBookTaxi
