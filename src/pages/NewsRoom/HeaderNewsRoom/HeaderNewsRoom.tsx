import React from 'react'

const HeaderNewsRoom = () => {
  return (
    <div className='flex-col items-stretch mb-[104px] flex'>
      <div className='w-full  flex-col self-center items-stretch  flex relative'>
        <div
          className='bg-[50%_58%] bg-cover bg-scroll bg-no-repeat rounded-[24px] flex-col justify-center items-center p-9 flex'
          style={{
            backgroundImage: ` url("https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63c98c83e7bffe6581cd4811_AdobeStock_516425442%202%20compress.jpg")`
          }}
        >
          <div className='gap-x-[56px] flex-row w-[100%] mx-auto flex'>
            <div className='w-[50%] flex-col flex-[0_auto] justify-start self-auto items-start mt-9 mx-auto pl-0 flex relative'></div>
            <div className='w-[60%] flex-col flex-[0_auto] justify-start self-auto items-start mt-9 mx-auto pl-0 flex relative'>
              <h1 className='tracking-[-.04em] mb-0 mx-0 pb-0 text-[52px] font-semibold leading-[99%] mt-0 text-left max-w-[40ch]'>
                <span className='text-white'>Explore Getaround in the news</span>
              </h1>
              <div className='text-white font-normal max-w-[40ch] mt-8'>
                Welcome to our press room. Find our latest press releases and new media coverage of our company.
              </div>
              <div className='bg-white h-[100px] py-5 px-10 rounded-xl max-w-[45ch] flex items-center mt-10'>
                <p className='text-black'>
                  For media inquiries, <span className='text-mainColor'>please contact us at press@getaround.com.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderNewsRoom