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

  const onChangeValue = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`)
  }
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
        <div className='max-h-[50vh] overflow-y-auto overflow-x-hidden'>
          <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
            Check all
          </Checkbox>
          <Checkbox.Group
            value={checkedValues}
            defaultValue={['Acura']}
            onChange={(values: any) => setCheckedValues(values)}
            className='flex flex-col'
          ></Checkbox.Group>
          <CheckboxGroup
            className='flex flex-col flex-grow'
            options={plainOptions}
            defaultValue={['Acura']}
            value={checkedList}
            onChange={onChange}
          />

          <Button onClick={() => setDropdownVisible(false)}>Done</Button>
          <Button onClick={() => setCheckedList([])}>Reset</Button>
        </div>
      )
    }
  ]
  const onSaveValue = () => {
    console.log()
    setDropdownVisible(false)
  }
  return (
    <div>
      <Dropdown menu={{ items }} placement='bottomLeft' arrow className='text-white' open={dropdownVisible}>
        <Button onClick={() => setDropdownVisible(!dropdownVisible)} className='w-40'>
          Chọn loại xe
        </Button>
      </Dropdown>
    </div>
  )
}

export default DropdownThird
