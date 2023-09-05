import React, { useState } from 'react'
import type { MenuProps } from 'antd'
import { Button, Dropdown, Rate } from 'antd'
const DropdownSecond: React.FC = () => {
  const [inputValue, setInputValue] = useState<number>(2.5)
  const [dropdownVisible, setDropdownVisible] = useState(false)

  const onChangeValueOnNull = () => {
    setInputValue(2.5)
  }
  //   const onChange = (checked: boolean) => {
  //     setDisabled(checked)
  //   }
  const onSaveValue = () => {
    setDropdownVisible(false)
  }
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <div className='w-60 h-20 flex flex-col justify-between'>
          <Rate allowHalf defaultValue={inputValue} />
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
        menu={{ items }}
        open={dropdownVisible}
        onOpenChange={onSaveValue}
        placement='bottomLeft'
        arrow
        className='text-black/30'
      >
        <Button onClick={() => setDropdownVisible(!dropdownVisible)} className='w-30'>
          Đánh giá
        </Button>
      </Dropdown>
    </div>
  )
}

export default DropdownSecond
