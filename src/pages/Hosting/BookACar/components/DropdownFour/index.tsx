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
const itemCheckBoxLopXe: CheckBox[] = [
  {
    id: '42',
    value: 'Economy'
  },
  {
    id: '43',
    value: 'Luxury'
  },
  {
    id: '44',
    value: 'Performance'
  }
]

const itemCheckBoxBaiDau: CheckBox[] = [
  {
    id: '12',
    value: 'Dedicated parking spot'
  }
]

const itemCheckBoxTinhNang: CheckBox[] = [
  {
    id: '22',
    value: 'Roof rack'
  },
  {
    id: '23',
    value: 'Bike rack'
  },
  {
    id: '24',
    value: 'Bluetooth'
  },
  {
    id: '25',
    value: 'Pet friendly'
  },
  {
    id: '27',
    value: 'CarPlay/Android Auto'
  }
]

const DropdownFour = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false)
  const [checkedValues, setCheckedValues] = useState([])

  const plainOptionsLoaiXe: string[] = itemCheckBoxLoaiXe.map((item) => item.value)
  const plainOptionsLopXe: string[] = itemCheckBoxLopXe.map((item) => item.value)
  const plainOptionsTinhNang: string[] = itemCheckBoxTinhNang.map((item) => item.value)
  const plainOptionsBaiDai: string[] = itemCheckBoxBaiDau.map((item) => item.value)
  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>([])
  const [checkedList2, setCheckedList2] = useState<CheckboxValueType[]>([])
  const [checkedList3, setCheckedList3] = useState<CheckboxValueType[]>([])
  const [checkedList4, setCheckedList4] = useState<CheckboxValueType[]>([])

  const checkAll = plainOptionsLoaiXe.length === checkedList.length
  const indeterminate = checkedList.length > 0 && checkedList.length < plainOptionsLoaiXe.length

  const onChangeValue = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`)
  }
  const CheckboxGroup = Checkbox.Group

  const onChange = (list: CheckboxValueType[]) => {
    setCheckedList(list)
  }
  const onChange2 = (list: CheckboxValueType[]) => {
    setCheckedList2(list)
  }

  const onChange3 = (list: CheckboxValueType[]) => {
    setCheckedList3(list)
  }

  const onChange4 = (list: CheckboxValueType[]) => {
    setCheckedList4(list)
  }
  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setCheckedList(e.target.checked ? plainOptionsLoaiXe : [])
  }
  const onReset = () => {
    setCheckedList([])
    setCheckedList2([])
    setCheckedList3([])
    setCheckedList4([])
  }
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <div className='max-h-[50vh] overflow-y-auto overflow-x-hidden'>
          <div className='border-b'>
            <span>Loại xe</span>
            <Checkbox.Group
              value={checkedValues}
              defaultValue={['Acura']}
              onChange={(values: any) => setCheckedValues(values)}
              className='flex flex-col'
            ></Checkbox.Group>
            <CheckboxGroup
              className='flex flex-col flex-grow'
              options={plainOptionsLoaiXe}
              defaultValue={['Acura']}
              value={checkedList}
              onChange={onChange}
            />
          </div>
          <div className='border-b-2'>
            <span>Lớp xe</span>
            <Checkbox.Group
              value={checkedValues}
              defaultValue={['Acura']}
              onChange={(values: any) => setCheckedValues(values)}
              className='flex flex-col'
            ></Checkbox.Group>
            <CheckboxGroup
              className='flex flex-col flex-grow'
              options={plainOptionsLopXe}
              defaultValue={['Acura']}
              value={checkedList2}
              onChange={onChange2}
            />
          </div>
          <div className='border-b-2'>
            <span>Bãi đậu xe</span>
            <Checkbox.Group
              value={checkedValues}
              defaultValue={['Acura']}
              onChange={(values: any) => setCheckedValues(values)}
              className='flex flex-col'
            ></Checkbox.Group>
            <CheckboxGroup
              className='flex flex-col flex-grow'
              options={plainOptionsBaiDai}
              defaultValue={['Acura']}
              value={checkedList3}
              onChange={onChange3}
            />
          </div>
          <div className='border-b-2'>
            <span>Tính năng xe</span>
            <Checkbox.Group
              value={checkedValues}
              defaultValue={['Acura']}
              onChange={(values: any) => setCheckedValues(values)}
              className='flex flex-col'
            ></Checkbox.Group>
            <CheckboxGroup
              className='flex flex-col flex-grow'
              options={plainOptionsTinhNang}
              defaultValue={['Acura']}
              value={checkedList4}
              onChange={onChange4}
            />
          </div>
          {/* <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
            Check all
          </Checkbox> */}

          <Button onClick={() => setDropdownVisible(false)}>Done</Button>
          <Button onClick={onReset}>Reset</Button>
        </div>
      )
    }
  ]
  const onSaveValue = () => {
    console.log()
    setDropdownVisible(!dropdownVisible)
  }
  return (
    <div>
      <Dropdown
        menu={{ items }}
        placement='bottomLeft'
        arrow
        className='text-white'
        open={dropdownVisible}
        onOpenChange={() => {
          ;() => setDropdownVisible(!dropdownVisible)
        }}
      >
        <Button onClick={() => setDropdownVisible(!dropdownVisible)} className='w-40'>
          Nhiều lựa chọn
        </Button>
      </Dropdown>
    </div>
  )
}

export default DropdownFour
