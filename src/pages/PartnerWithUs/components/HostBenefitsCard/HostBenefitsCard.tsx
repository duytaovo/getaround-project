import PartnerIcon from 'src/assets/custome_icons/PartnerIcon'
import { Text } from 'src/components/Edition/Text'
import { useAppSelector } from 'src/hooks/useRedux'

interface IHostBenefitsCardItem {
  title: string
  description: string
  btn_title: string
}

type HostBenefitsCardProps = {
  item: IHostBenefitsCardItem
}

const HostBenefitsCard = ({ item }: HostBenefitsCardProps) => {
  const data = useAppSelector((state) => state.data)
  return (
    <div className='flex flex-col items-center'>
      <PartnerIcon size={40} />
      <div className='text-center'>
        {/* <p className='text-white/90 text-[28px] pb-[20px]'>{item.title}</p> */}
        <Text tag='p' className='text-white/90 text-[28px] pb-[20px]' id={item.title} content={data[item.title]} />
        {/* <p className='text-[17px] font-thin leading-[26px] text-white/70 pb-[20px]'>{item.description}</p> */}
        <Text
          id={item.description}
          tag='p'
          className='text-[17px] font-thin leading-[26px] text-white/70 pb-[20px]'
          content={data[item.description]}
        />
      </div>
      <button className='w-[150px] h-[56px] bg-mainColor'>
        <Text id={item.btn_title} tag='span' content={data[item.btn_title]} />
      </button>
    </div>
  )
}

export default HostBenefitsCard
