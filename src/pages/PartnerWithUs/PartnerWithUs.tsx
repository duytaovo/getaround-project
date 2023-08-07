import longLogo from 'src/assets/images/longLogo.png'
import HostBenefitsCard from './components/HostBenefitsCard/HostBenefitsCard'
import { secondSectionData } from 'src/items/PartnerWithUs/SecondSection/secondSectionData'

type Props = {}

const PartnerWithUs = (props: Props) => {
  return (
    <div>
      <section
        className='absolute top-24 left-0 right-0 h-[80dvh] bg-cover bg-[center] pl-[96px] pb-[96px] pr-[40%] pt-[16%]'
        style={{
          backgroundImage:
            "linear-gradient(353deg, #000, rgba(0, 0, 0, 0) 58%), url('https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/610ef9dd8b2b17d8489ead9c_multiracial-colleagues-giving-high-five.jpg')"
        }}
      >
        <div className=''>
          <div>
            <img src={longLogo} alt='short logo' className='w-2/12' />
          </div>
          <div className='text-[50px] font-bold text-mainColor'>Partner with Unlock</div>
          <div className='text-[22px] font-extralight leading-[30px text-white/80]'>
            Carsharing attracts all sorts of organizations — from governments to auto body shops. Partnerships are part
            of why the carsharing ecosystem is growing at the rate it is. For more information about partnering with
            Getaround®, choose your business category below.
          </div>
        </div>
      </section>
      <section className='pt-[78dvh] mb-1'>
        <div className='grid grid-cols-2 grid-row-2 gap-10 bg-mainColor/20 p-10'>
          {secondSectionData?.map((item, index) => <HostBenefitsCard key={index} item={item} />)}
        </div>
      </section>
    </div>
  )
}

export default PartnerWithUs
