import { AutoComplete } from 'antd'
import { FC } from 'react'
import LocationIcon from 'src/assets/custome_icons/LocationIcon'

interface IOptionItem {
  label: string
  value: string
}

type Props = {
  items: IOptionItem[]
}

const CustomeAddressAutocomplete: FC<Props> = ({ items }) => {
  return (
    <div className='h-[52px] lg:grow rounded-[10px] overflow-hidden bg-white grow'>
      <AutoComplete
        options={items}
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          padding: '0 10px'
          // background: 'black'
        }}
      >
        <div className='flex justify-between items-center h-full'>
          <LocationIcon size={16} fillColor='rgba(0,0,0,0.3)' />
          <input className='outline-none border-0 bg-transparent pl-2' placeholder='Address' />
        </div>
      </AutoComplete>
    </div>
  )
}

export default CustomeAddressAutocomplete
