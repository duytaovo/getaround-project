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
    console.log()
    setDropdownVisible(false)
  }
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <>
          <Slider
            defaultValue={30}
            style={{
              display: 'none'
            }}
          />
          <Slider range onChange={onChange} value={inputValue} />
          <Button onClick={onChangeValueOnNull}>Đặt lại</Button>
          <Button onClick={onSaveValue}>Lưu</Button>
        </>
      )
    }
  ]

  return (
    <div onBlur={onSaveValue}>
      <Dropdown menu={{ items }} open={dropdownVisible} placement='bottomLeft' arrow className='text-white'>
        <Button onClick={() => setDropdownVisible(!dropdownVisible)} className='w-40 justify-start'>
          Khoảng
        </Button>
      </Dropdown>
    </div>
  )
}

export default DropdownFirst
