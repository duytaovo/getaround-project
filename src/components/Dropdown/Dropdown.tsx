import  { ReactNode } from 'react'
import { ItemType } from 'antd/es/menu/hooks/useItems'
import { Link } from 'react-router-dom'
import { Dropdown, Space } from 'antd'

interface Props {
  children?: ReactNode
  items?: ItemType[] | undefined
  className?: string
  isOnClick?: boolean
  arrow?:boolean
}
const CustomDropDown = ({ children, items, className, isOnClick,arrow }: Props) => (
  <div>
    {isOnClick == true ? (
      <div className={className}>
        <Dropdown arrow={arrow} placement='bottom' menu={{ items }} trigger={['click']}>
          <Link to='' onClick={(e) => e.preventDefault()}>
            <Space>{children}</Space>
          </Link>
        </Dropdown>
      </div>
    ) : (
      <div className={className}>
        <Dropdown menu={{ items }} placement='bottom' arrow={arrow} className='cursor-pointer'>
          {children}
        </Dropdown>
      </div>
    )}
  </div>
)

export default CustomDropDown
