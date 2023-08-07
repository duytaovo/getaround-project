import React from 'react'
import { Select } from 'antd'
import { ISelectItems } from 'src/types/Footer.type'

interface Props {
  id?: string
  className?: string
  defaultValue: string
  register?: boolean
  options: ISelectItems[]
  requirementField?: boolean
  width?: string
}
const CustomSelect = ({
  className,
  defaultValue,
  options = [],
  requirementField = false,
  width
}: Props) => {
  const renderSelectOption = () => {
    if (options) {
      return options.map((item, index) => {
        return (
          <div>
            <option value={item.value} key={index}>
              {item.value}
            </option>
            <img src={item.value}/>
          </div>
        )
      })
    }
  }
  return (
    <div className={className}>
      <h1 className=''>{requirementField && <span className='text-red'>*</span>}</h1>
      <Select
      defaultValue={defaultValue}
      style={{ width: width }}
      // onChange={handleChange}
      options={options}
    />
      {/* <select id={id} name={id} className='select' required>
        <option hidden defaultValue='Pháp'>
          {placeholder}
        </option>
        {renderSelectOption()}
      </select> */}
    </div>
  )
}

export default CustomSelect
