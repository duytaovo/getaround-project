import * as React from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

export default function SelectCustom({
  label,
  id,
  className,
  children,
  defaultValue,
  register,
  options = [],
  placeholder,
  requirementField = true,
  dispatch = () => {},
  action = () => {},
  name = '',
  disabled,
  ...props
}) {
  const renderSelectOption = () => {
    return options.map((item, index) => {
      return (
        <MenuItem
          onClick={() => {
            handleChange(item?.id)
          }}
          value={item.id}
          key={index}
          className='text-black'
        >
          {props.isBrand && item.carBrandName}
          {/* {props.isYear && item.year} */}
          {props.isModel && item.carModelName}
          {props.isCarSeri && item.carSeriName}
          {props.isCarType && item.vehicleTypeName}
          {props.isCarLicense && item.licensePlateTypeName}
        </MenuItem>
      )
    })
  }

  const handleChange = (id) => {
    props.onChange && props.onChange(id)
  }

  return (
    <>
      <div className={`w-full flex flex-col items-start ${className ? className : ''}`}>
        <h1 className='text-sm mb-2 text-[#29303b] font-medium text-left '>
          {label}
          {requirementField && <span className='text-red-500 text-sm font-medium '>*</span>}
        </h1>
        <FormControl className='select-formControl hover:shadow-sm' fullWidth disabled={disabled}>
          <Select
            className='select-field'
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            defaultValue={defaultValue >= 0 ? defaultValue : ''}
            {...register(id)}
          >
            <MenuItem value=''>
              <p className='text-left text-[#777777]'>{placeholder}</p>
            </MenuItem>
            {renderSelectOption()}
          </Select>
        </FormControl>
        <p className='text-red-500 text-left text-sm'>{children}</p>
      </div>
    </>
  )
}
