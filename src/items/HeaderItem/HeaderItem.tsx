import { MenuProps } from 'antd'
import CustomLink from 'src/components/CustomLink'
import { useTranslation } from 'react-i18next'



export const itemsFirst: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <CustomLink to={'/'}>
        <div className='inline-block px-5 text-black hover:text-mainColor'>
          <span className='cursor-pointer justify-between text-black font-bold font-sans text-sm  hover:text-mainColor'>
            Cách thức hoát động
          </span>
        </div>
      </CustomLink>
    )
  },
  {
    key: '2',
    label: (
      <CustomLink to={'/'}>
        <div className='inline-block px-5 text-black '>
          <span className='cursor-pointer justify-between text-black font-bold font-sans text-sm hover:text-mainColor'>
            Bảo hiểm
          </span>
        </div>
      </CustomLink>
    )
  },
  {
    key: '3',
    label: (
      <CustomLink to={'/'}>
        <div className='inline-block px-5 text-black'>
          <span className='cursor-pointer justify-between text-black font-bold font-sans text-sm hover:text-mainColor'>
            Tin cậy & An toàn
          </span>
        </div>
      </CustomLink>
    )
  },
  {
    key: '4',
    label: (
      <CustomLink to={'/'}>
        <div className='inline-block px-5 text-black'>
          <span className='cursor-pointer justify-between text-black font-bold font-sans text-sm hover:text-mainColor'>
            Kết nối
          </span>
        </div>
      </CustomLink>
    )
  }
]
export const itemsSecond: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <CustomLink to={'/how-it-work/share-a-car'}>
        <div className='inline-block px-5 text-black hover:text-mainColor'>
          <span className='cursor-pointer justify-between text-black font-bold font-sans text-sm  hover:text-mainColor'>
            Chia sẻ xe
          </span>
        </div>
      </CustomLink>
    )
  },
  {
    key: '2',
    label: (
      <CustomLink to={'/'}>
        <div className='inline-block px-5 text-black '>
          <span className='cursor-pointer justify-between text-black font-bold font-sans text-sm hover:text-mainColor'>
            Tổ chức cộng đồng
          </span>
        </div>
      </CustomLink>
    )
  },
  {
    key: '3',
    label: (
      <CustomLink to={'/'}>
        <div className='inline-block px-5 text-black'>
          <span className='cursor-pointer justify-between text-black font-bold font-sans text-sm hover:text-mainColor'>
            Tổ chức Bonus
          </span>
        </div>
      </CustomLink>
    )
  },
  {
    key: '4',
    label: (
      <CustomLink to={'/'}>
        <div className='inline-block px-5 text-black'>
          <span className='cursor-pointer justify-between text-black font-bold font-sans text-sm hover:text-mainColor'>
            Giới thiệu 1 tổ chức
          </span>
        </div>
      </CustomLink>
    )
  }
]
export const itemsThird: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <CustomLink to={'/'}>
        <div className='inline-block px-5 text-black hover:text-mainColor'>
          <span className='cursor-pointer justify-between text-black font-bold font-sans text-sm  hover:text-mainColor'>
            Lái xe với Uber
          </span>
        </div>
      </CustomLink>
    )
  },
  {
    key: '2',
    label: (
      <CustomLink to={'/'}>
        <div className='inline-block px-5 text-black '>
          <span className='cursor-pointer justify-between text-black font-bold font-sans text-sm hover:text-mainColor'>
            Cộng tác với US
          </span>
        </div>
      </CustomLink>
    )
  }
]
export const itemsFour: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <CustomLink to={'/'}>
        <div className='inline-block px-5 text-black hover:text-mainColor'>
          <span className='cursor-pointer justify-between text-black font-bold font-sans text-sm  hover:text-mainColor'>
            Về chúng tôi
          </span>
        </div>
      </CustomLink>
    )
  },
  {
    key: '2',
    label: (
      <CustomLink to={'/'}>
        <div className='inline-block px-5 text-black '>
          <span className='cursor-pointer justify-between text-black font-bold font-sans text-sm hover:text-mainColor'>
            Quan hệ đầu tư
          </span>
        </div>
      </CustomLink>
    )
  },
  {
    key: '3',
    label: (
      <CustomLink to={'/'}>
        <div className='inline-block px-5 text-black'>
          <span className='cursor-pointer justify-between text-black font-bold font-sans text-sm hover:text-mainColor'>
            Tòa sạn
          </span>
        </div>
      </CustomLink>
    )
  },
  {
    key: '4',
    label: (
      <CustomLink to={'/'}>
        <div className='inline-block px-5 text-black'>
          <span className='cursor-pointer justify-between text-black font-bold font-sans text-sm hover:text-mainColor'>
            Blog
          </span>
        </div>
      </CustomLink>
    )
  }
]

export const itemAcount: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <CustomLink to={'/'}>
        <div className='flex flex-col px-5 text-black group-hover:text-mainColor' >
          <span className='cursor-pointer group-hover:text-mainColor justify-between text-black font-bold font-sans text-xs  hover:text-mainColor'>
            <span className='group-hover:text-mainColor'>Đăng nhập</span>
          </span>
        </div>
      </CustomLink>
    )
  }
]
