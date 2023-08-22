import React, { useState } from 'react'
import type { MenuProps } from 'antd'
import { Button, Dropdown, Rate } from 'antd'
const DropdownSecond: React.FC = () => {
  const [inputValue, setInputValue] = useState<number>(2.5)
  const [dropdownVisible, setDropdownVisible] = useState(false)

  console.log(inputValue)

  const onChangeValueOnNull = () => {
    console.log(inputValue)
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
        <>
          <Rate allowHalf value={inputValue} />
          <Button onClick={onChangeValueOnNull}>Đặt lại</Button>
          <Button onClick={onSaveValue}>Lưu</Button>
        </>
      )
    }
  ]

  return (
    <div onBlur={onSaveValue}>
      <Dropdown
        menu={{ items }}
        open={dropdownVisible}
        onOpenChange={() => {
          ;() => setDropdownVisible(!dropdownVisible)
        }}
        placement='bottomLeft'
        arrow
        className='text-white'
      >
        <Button onClick={() => setDropdownVisible(!dropdownVisible)} className='w-40'>
          Đánh giá
        </Button>
      </Dropdown>
    </div>
  )
}

export default DropdownSecond
