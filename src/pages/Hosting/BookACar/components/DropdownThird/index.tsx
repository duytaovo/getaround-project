import React, { useEffect, useRef, useState } from 'react'
import type { MenuProps } from 'antd'
import { Button, Checkbox, Dropdown, Rate } from 'antd'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'
import { CheckboxValueType } from 'antd/es/checkbox/Group'
interface CheckBox {
  id: string
  value: string
}
const itemCheckBoxLoaiXe: CheckBox[] = [
  {
    id: '2',
    value: 'Acura'
  },
  {
    id: '3',
    value: 'Audi'
  },
  {
    id: '4',
    value: 'Buick'
  },
  {
    id: '5',
    value: 'Cadillac'
  },
  {
    id: '7',
    value: 'Chevrolet'
  },
  {
    id: '9',
    value: 'Chryslet'
  },
  {
    id: '10',
    value: 'Dodge'
  },
  {
    id: '11',
    value: 'Ferrari'
  }
]

const DropdownThird = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false)
  const [checkedValues, setCheckedValues] = useState([])

  const plainOptions: string[] = itemCheckBoxLoaiXe.map((item) => item.value)
  // const defaultValue = [plainOptions[0]]
  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>([])
  const checkAll = plainOptions.length === checkedList.length
  const indeterminate = checkedList.length > 0 && checkedList.length < plainOptions.length

  const onChangeValue = (e: CheckboxChangeEvent) => {}
  const CheckboxGroup = Checkbox.Group

  const onChange = (list: CheckboxValueType[]) => {
    setCheckedList(list)
  }

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setCheckedList(e.target.checked ? plainOptions : [])
  }
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <div className='max-h-[50vh] text-lg overflow-y-auto overflow-x-hidden w-52  flex flex-col justify-between'>
          <div>
            <Checkbox
              className='mb-2 mt-2 '
              indeterminate={indeterminate}
              onChange={onCheckAllChange}
              checked={checkAll}
            >
              Check all
            </Checkbox>
            <Checkbox.Group
              value={checkedValues}
              defaultValue={['Acura']}
              onChange={(values: any) => setCheckedValues(values)}
              className='flex flex-col text-lg'
              style={{
                fontSize: '50px'
              }}
            ></Checkbox.Group>
            <CheckboxGroup
              className='flex flex-col flex-grow gap-y-2 text-lg'
              options={plainOptions}
              defaultValue={['Acura']}
              value={checkedList}
              onChange={onChange}
              style={{
                fontSize: '50px'
              }}
            />
          </div>
          <div className='flex justify-between mt-3 gap-x-2'>
            <Button className='w-1/2' onClick={() => setCheckedList([])}>
              Đặt lại
            </Button>
            <Button className='w-1/2' onClick={() => setDropdownVisible(false)}>
              Lưu
            </Button>
          </div>
        </div>
      )
    }
  ]
  const onSaveValue = () => {
    setDropdownVisible(false)
  }
  return (
    <div>
      <Dropdown
        menu={{ items }}
        onOpenChange={onSaveValue}
        placement='bottomLeft'
        arrow
        className='text-black/30'
        open={dropdownVisible}
      >
        <Button onClick={() => setDropdownVisible(!dropdownVisible)} className='w-30'>
          Chọn loại xe
        </Button>
      </Dropdown>
    </div>
  )
}

export default DropdownThird
