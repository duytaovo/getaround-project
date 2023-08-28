import React, { useState } from 'react'
import type { MenuProps } from 'antd'
import { Button, Dropdown } from 'antd'
import { Slider, Switch } from 'antd'
const DropdownFirst: React.FC = () => {
  const [inputValue, setInputValue] = useState<any>([0, 100])
  const onChange = (newValue: any) => {
    setInputValue(newValue)
  }
  const [dropdownVisible, setDropdownVisible] = useState(false)

  const onChangeValueOnNull = () => {
    setInputValue([0, 100])
  }
  const onSaveValue = () => {
    setDropdownVisible(false)
  }
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <div className='w-60 h-20 flex flex-col justify-between'>
          <Slider
            defaultValue={30}
            style={{
              display: 'none'
            }}
          />
          <Slider range onChange={onChange} value={inputValue} />
          <div className='flex justify-between gap-x-2'>
            <Button className='w-1/2' onClick={onChangeValueOnNull}>
              Đặt lại
            </Button>
            <Button className='w-1/2' onClick={onSaveValue}>
              Lưu
            </Button>
          </div>
        </div>
      )
    }
  ]

  return (
    <div>
      <Dropdown
        onOpenChange={onSaveValue}
        menu={{ items }}
        open={dropdownVisible}
        placement='bottomLeft'
        arrow
        className='text-black/30 w-30'
      >
        <Button onClick={() => setDropdownVisible(!dropdownVisible)} className='justify-start'>
          Khoảng
        </Button>
      </Dropdown>
    </div>
  )
}

export default DropdownFirst
