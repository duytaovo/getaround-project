import longLogo from 'src/assets/images/longLogo.png'
import HostBenefitsCard from './components/HostBenefitsCard/HostBenefitsCard'
import { secondSectionData } from 'src/items/PartnerWithUs/SecondSection/secondSectionData'
import { useAppSelector } from 'src/hooks/useRedux'
import { Text } from 'src/components/Edition/Text'
import { Helmet } from 'react-helmet-async'

type Props = {}

const PartnerWithUs = (props: Props) => {
  const { partnerBenefits, partnersHero } = useAppSelector((state) => state.partnersWithUs)
  const data = useAppSelector((state) => state.data.data)

  return (
    <div>
      <Helmet>
        <title>Patner With Us</title>
        <meta name='description' content='Cộng tác với chúng tôi' />
      </Helmet>
      <section
        className='absolute top-24 left-0 right-0 h-[80dvh] bg-cover bg-[center] pl-[96px] pb-[96px] pr-[40%] pt-[16%] lg:pr-[30%] md:p-[10%] sm:p-2'
        style={{
          backgroundImage: `linear-gradient(353deg, #000, rgba(0, 0, 0, 0) 58%), url(${partnersHero.imgLogo})`
        }}
      >
        <div className='sm:flex sm:flex-col sm:items-center'>
          <div>
            <img src={longLogo} alt='short logo' className='w-2/12' />
          </div>
          <div className='text-[50px] font-bold text-mainColor sm:text-[30px]'>
            {/* {partnersHero.title} */}
            <Text id={partnersHero.title} tag='span' content={data[partnersHero.title]} className='' />
          </div>
          <div className='text-[22px] font-extralight leading-[30px text-white/80] sm:text-[20px]'>
            <Text id={partnersHero.content} content={data[partnersHero.content]} tag='span' />
          </div>
        </div>
      </section>
      <section className='pt-[78dvh] mb-1'>
        <div className='grid grid-cols-2 grid-row-2 gap-10 bg-mainColor/20 p-10'>
          {partnerBenefits.itemsData?.map((item, index) => <HostBenefitsCard key={index} item={item} />)}
        </div>
      </section>
    </div>
  )
}

export default PartnerWithUs
