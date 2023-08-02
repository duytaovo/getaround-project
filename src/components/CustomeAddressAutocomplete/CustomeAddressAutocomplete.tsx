import { AutoComplete } from 'antd'
import { FC } from 'react'

interface IOptionItem {
  label: string
  value: string
}

type Props = {
  items: IOptionItem[]
}

const CustomeAddressAutocomplete: FC<Props> = ({ items }) => {
  return (
    <div>
      <AutoComplete options={items}>
        <input />
      </AutoComplete>
    </div>
  )
}

export default CustomeAddressAutocomplete
