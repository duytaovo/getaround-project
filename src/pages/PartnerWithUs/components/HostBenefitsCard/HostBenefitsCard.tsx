import PartnerIcon from 'src/assets/custome_icons/PartnerIcon'

interface IHostBenefitsCardItem {
  title: string
  description: string
}

type HostBenefitsCardProps = {
  item: IHostBenefitsCardItem
}

const HostBenefitsCard = ({ item }: HostBenefitsCardProps) => {
  return (
    <div className='flex flex-col items-center'>
      <PartnerIcon size={40} />
      <div className='text-center'>
        <p className='text-white/90 text-[28px] pb-[20px]'>{item.title}</p>
        <p className='text-[17px] font-thin leading-[26px] text-white/70 pb-[20px]'>{item.description}</p>
      </div>
      <button className='w-[150px] h-[56px] bg-mainColor'>Learn more</button>
    </div>
  )
}

export default HostBenefitsCard
