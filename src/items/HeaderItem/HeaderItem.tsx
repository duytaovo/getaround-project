import { MenuProps } from 'antd'
import CustomLink from 'src/components/CustomLink'
import { ICommonQuestion } from 'src/components/HeaderMobile/CustomItemHeader'
import path from 'src/constants/path'

export const itemsFirst: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <CustomLink to={path.howitwork}>
        <div className='inline-block px-5 text-black hover:translate-x-2 duration-300 transition-all hover:text-mainColor'>
          <span className='cursor-pointer justify-between text-black hover:translate-x-2 duration-300 transition-all font-medium font-sans text-sm  hover:text-mainColor'>
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
        <div className='inline-block px-5 text-black hover:translate-x-2 duration-300 transition-all '>
          <span className='cursor-pointer justify-between text-black hover:translate-x-2 duration-300 transition-all font-medium font-sans text-sm hover:text-mainColor'>
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
        <div className='inline-block px-5 text-black hover:translate-x-2 duration-300 transition-all'>
          <span className='cursor-pointer justify-between text-black hover:translate-x-2 duration-300 transition-all font-medium font-sans text-sm hover:text-mainColor'>
            Tin cậy & An toàn
          </span>
        </div>
      </CustomLink>
    )
  },
  {
    key: '4',
    label: (
      <CustomLink to={path.howitworkconnect}>
        <div className='inline-block px-5 text-black hover:translate-x-2 duration-300 transition-all'>
          <span className='cursor-pointer justify-between text-black hover:translate-x-2 duration-300 transition-all font-medium font-sans text-sm hover:text-mainColor'>
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
      <CustomLink to={path.sharACar}>
        <div className='inline-block px-5 text-black hover:translate-x-2 duration-300 transition-all hover:text-mainColor'>
          <span className='cursor-pointer justify-between text-black hover:translate-x-2 duration-300 transition-all font-medium font-sans text-sm  hover:text-mainColor'>
            Chia sẻ xe
          </span>
        </div>
      </CustomLink>
    )
  },
  {
    key: '2',
    label: (
      <CustomLink to={path.hostCommunity}>
        <div className='inline-block px-5 text-black hover:translate-x-2 duration-300 '>
          <span className='cursor-pointer justify-between text-black hover:translate-x-2 duration-300 font-medium font-sans text-sm hover:text-mainColor'>
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
        <div className='inline-block px-5 text-black hover:translate-x-2 duration-300'>
          <span className='cursor-pointer justify-between text-black hover:translate-x-2 duration-300 font-medium font-sans text-sm hover:text-mainColor'>
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
        <div className='inline-block px-5 text-black hover:translate-x-2 duration-300'>
          <span className='cursor-pointer justify-between text-black hover:translate-x-2 duration-300 font-medium font-sans text-sm hover:text-mainColor'>
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
        <div className='inline-block px-5 text-black hover:translate-x-2 duration-300 hover:text-mainColor'>
          <span className='cursor-pointer justify-between text-black hover:translate-x-2 duration-300 font-medium font-sans text-sm  hover:text-mainColor'>
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
        <div className='inline-block px-5 text-black hover:translate-x-2 duration-300 '>
          <span className='cursor-pointer justify-between text-black hover:translate-x-2 duration-300 font-medium font-sans text-sm hover:text-mainColor'>
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
        <div className='inline-block px-5 text-black hover:translate-x-2 duration-300 hover:text-mainColor'>
          <span className='cursor-pointer justify-between text-black hover:translate-x-2 duration-300 font-medium font-sans text-sm  hover:text-mainColor'>
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
        <div className='inline-block px-5 text-black hover:translate-x-2 duration-300 '>
          <span className='cursor-pointer justify-between text-black hover:translate-x-2 duration-300 font-medium font-sans text-sm hover:text-mainColor'>
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
        <div className='inline-block px-5 text-black hover:translate-x-2 duration-300'>
          <span className='cursor-pointer justify-between text-black hover:translate-x-2 duration-300 font-medium font-sans text-sm hover:text-mainColor'>
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
        <div className='inline-block px-5 text-black hover:translate-x-2 duration-300'>
          <span className='cursor-pointer justify-between text-black hover:translate-x-2 duration-300 font-medium font-sans text-sm hover:text-mainColor'>
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
        <div className='flex flex-col px-5 text-black  duration-300 group-hover:text-mainColor'>
          <span className='cursor-pointer group-hover:text-mainColor justify-between text-black  duration-300 font-medium font-sans text-xs  hover:text-mainColor'>
            <span className='group-hover:text-mainColor'>Đăng nhập</span>
          </span>
        </div>
      </CustomLink>
    )
  }
]

export const itemsHeaderMobile: ICommonQuestion[] = [
  {
    key: '1',
    label: 'How it works',
    contents: [
      {
        id: 1,
        link: (
          <CustomLink to={path.howitwork}>
            <div className='inline-block mt-2 px-5 text-black  hover:translate-x-2 duration-300 transition-all hover:text-mainColor'>
              <span className='cursor-pointer justify-between text-black  hover:translate-x-2 duration-300 transition-all font-medium font-sans text-sm  hover:text-mainColor'>
                Cách thức hoát động
              </span>
            </div>
          </CustomLink>
        )
      },
      {
        id: 2,
        link: (
          <CustomLink to={path.howitwork}>
            <div className='inline-block px-5 text-black  hover:translate-x-2 duration-300 transition-all hover:text-mainColor'>
              <span className='cursor-pointer justify-between text-black  hover:translate-x-2 duration-300 transition-all font-medium font-sans text-sm  hover:text-mainColor'>
                Cách thức hoát động
              </span>
            </div>
          </CustomLink>
        )
      },
      {
        id: 3,
        link: (
          <CustomLink to={path.howitwork}>
            <div className='inline-block px-5 text-black hover:translate-x-2 duration-300 transition-all hover:text-mainColor'>
              <span className='cursor-pointer justify-between text-black hover:translate-x-2 duration-300 transition-all font-medium font-sans text-sm  hover:text-mainColor'>
                Cách thức hoát động
              </span>
            </div>
          </CustomLink>
        )
      },
      {
        id: 4,
        link: (
          <CustomLink to={path.howitwork}>
            <div className='inline-block px-5 mb-2 text-black hover:translate-x-2 duration-300 transition-all hover:text-mainColor'>
              <span className='cursor-pointer justify-between text-black hover:translate-x-2 duration-300 transition-all font-medium font-sans text-sm  hover:text-mainColor'>
                Cách thức hoát động
              </span>
            </div>
          </CustomLink>
        )
      }
    ]
  },
  {
    key: '2',
    label: 'Hoisting',
    contents: [
      {
        id: 1,
        link: (
          <CustomLink to={path.howitwork}>
            <div className='inline-block mt-2 px-5 text-black hover:translate-x-2 duration-300 transition-all hover:text-mainColor'>
              <span className='cursor-pointer justify-between text-black hover:translate-x-2 duration-300 transition-all font-medium font-sans text-sm  hover:text-mainColor'>
                Cách thức hoát động
              </span>
            </div>
          </CustomLink>
        )
      },
      {
        id: 2,
        link: (
          <CustomLink to={path.howitwork}>
            <div className='inline-block px-5 text-black hover:translate-x-2 duration-300 transition-all hover:text-mainColor'>
              <span className='cursor-pointer justify-between text-black hover:translate-x-2 duration-300 transition-all font-medium font-sans text-sm  hover:text-mainColor'>
                Cách thức hoát động
              </span>
            </div>
          </CustomLink>
        )
      },
      {
        id: 3,
        link: (
          <CustomLink to={path.howitwork}>
            <div className='inline-block px-5 text-black hover:translate-x-2 duration-300 transition-all hover:text-mainColor'>
              <span className='cursor-pointer justify-between text-black hover:translate-x-2 duration-300 transition-all font-medium font-sans text-sm  hover:text-mainColor'>
                Cách thức hoát động
              </span>
            </div>
          </CustomLink>
        )
      },
      {
        id: 4,
        link: (
          <CustomLink to={path.howitwork}>
            <div className='inline-block mb-2 px-5 text-black hover:translate-x-2 duration-300 transition-all hover:text-mainColor'>
              <span className='cursor-pointer justify-between text-black hover:translate-x-2 duration-300 transition-all font-medium font-sans text-sm  hover:text-mainColor'>
                Cách thức hoát động
              </span>
            </div>
          </CustomLink>
        )
      }
    ]
  },
  {
    key: '3',
    label: 'Partners',
    contents: [
      {
        id: 1,
        link: (
          <CustomLink to={path.howitwork}>
            <div className='inline-block px-5 mt-2 text-black hover:translate-x-2 duration-300 transition-all hover:text-mainColor'>
              <span className='cursor-pointer justify-between text-black hover:translate-x-2 duration-300 transition-all font-medium font-sans text-sm  hover:text-mainColor'>
                Cách thức hoát động
              </span>
            </div>
          </CustomLink>
        )
      },
      {
        id: 2,
        link: (
          <CustomLink to={path.howitwork}>
            <div className='inline-block px-5 text-black hover:translate-x-2 duration-300 transition-all hover:text-mainColor'>
              <span className='cursor-pointer justify-between text-black hover:translate-x-2 duration-300 transition-all font-medium font-sans text-sm  hover:text-mainColor'>
                Cách thức hoát động
              </span>
            </div>
          </CustomLink>
        )
      },
      {
        id: 3,
        link: (
          <CustomLink to={path.howitwork}>
            <div className='inline-block px-5 text-black hover:translate-x-2 duration-300 transition-all hover:text-mainColor'>
              <span className='cursor-pointer justify-between text-black hover:translate-x-2 duration-300 transition-all font-medium font-sans text-sm  hover:text-mainColor'>
                Cách thức hoát động
              </span>
            </div>
          </CustomLink>
        )
      },
      {
        id: 4,
        link: (
          <CustomLink to={path.howitwork}>
            <div className='inline-block px-5 text-black hover:translate-x-2 duration-300 transition-all hover:text-mainColor'>
              <span className='cursor-pointer mb-2 justify-between text-black hover:translate-x-2 duration-300 transition-all font-medium font-sans text-sm  hover:text-mainColor'>
                Cách thức hoát động
              </span>
            </div>
          </CustomLink>
        )
      }
    ]
  },
  {
    key: '4',
    label: 'About Us',
    contents: [
      {
        id: 1,
        link: (
          <CustomLink to={path.howitwork}>
            <div className='inline-block px-5 mt-2 text-black hover:translate-x-2 duration-300 transition-all hover:text-mainColor'>
              <span className='cursor-pointer justify-between text-black hover:translate-x-2 duration-300 transition-all font-medium font-sans text-sm  hover:text-mainColor'>
                Cách thức hoát động
              </span>
            </div>
          </CustomLink>
        )
      },
      {
        id: 2,
        link: (
          <CustomLink to={path.howitwork}>
            <div className='inline-block px-5 text-black hover:translate-x-2 duration-300 transition-all hover:text-mainColor'>
              <span className='cursor-pointer justify-between text-black hover:translate-x-2 duration-300 transition-all font-medium font-sans text-sm  hover:text-mainColor'>
                Cách thức hoát động
              </span>
            </div>
          </CustomLink>
        )
      },
      {
        id: 3,
        link: (
          <CustomLink to={path.howitwork}>
            <div className='inline-block px-5 text-black hover:translate-x-2 duration-300 transition-all hover:text-mainColor'>
              <span className='cursor-pointer justify-between text-black hover:translate-x-2 duration-300 transition-all font-medium font-sans text-sm  hover:text-mainColor'>
                Cách thức hoát động
              </span>
            </div>
          </CustomLink>
        )
      },
      {
        id: 4,
        link: (
          <CustomLink to={path.howitwork}>
            <div className='inline-block px-5 text-black hover:translate-x-2 duration-300 transition-all hover:text-mainColor'>
              <span className='cursor-pointer mb-2 justify-between text-black hover:translate-x-2 duration-300 transition-all font-medium font-sans text-sm  hover:text-mainColor'>
                Cách thức hoát động
              </span>
            </div>
          </CustomLink>
        )
      }
    ]
  },

]
export const itemsHostRefernal = [
  {
    key: '1',
    label: 'When and how will I receive my referral bonus?',
    contents: [
      'Initial $200',
      "‍When: After your referral's first vehicle goes live for bookings",
      'How: Earnings adjustment in your account',
      '‍Revenue sharing (25% of the referral"s first 60 days of earnings)',
      `‍When: 60 days after the referral's first vehicle goes live for bookings`,
      'How: Earnings adjustment in your account'
    ]
  },
  {
    key: '2',
    label: 'When and how will I receive my referral bonus?',
    contents: [
      'Initial $200',
      "‍When: After your referral's first vehicle goes live for bookings",
      'How: Earnings adjustment in your account',
      '‍Revenue sharing (25% of the referral"s first 60 days of earnings)',
      `‍When: 60 days after the referral's first vehicle goes live for bookings`,
      'How: Earnings adjustment in your account'
    ]
  },
  {
    key: '3',
    label: 'When and how will I receive my referral bonus?',
    contents: [
      'Initial $200',
      "‍When: After your referral's first vehicle goes live for bookings",
      'How: Earnings adjustment in your account',
      '‍Revenue sharing (25% of the referral"s first 60 days of earnings)',
      `‍When: 60 days after the referral's first vehicle goes live for bookings`,
      'How: Earnings adjustment in your account'
    ]
  },
  {
    key: '4',
    label: 'When and how will I receive my referral bonus?',
    contents: [
      'Initial $200',
      "‍When: After your referral's first vehicle goes live for bookings",
      'How: Earnings adjustment in your account',
      '‍Revenue sharing (25% of the referral"s first 60 days of earnings)',
      `‍When: 60 days after the referral's first vehicle goes live for bookings`,
      'How: Earnings adjustment in your account'
    ]
  },
  {
    key: '5',
    label: 'When and how will I receive my referral bonus?',
    contents: [
      'Initial $200',
      "‍When: After your referral's first vehicle goes live for bookings",
      'How: Earnings adjustment in your account',
      '‍Revenue sharing (25% of the referral"s first 60 days of earnings)',
      `‍When: 60 days after the referral's first vehicle goes live for bookings`,
      'How: Earnings adjustment in your account'
    ]
  },
  {
    key: '6',
    label: 'When and how will I receive my referral bonus?',
    contents: [
      'Initial $200',
      "‍When: After your referral's first vehicle goes live for bookings",
      'How: Earnings adjustment in your account',
      '‍Revenue sharing (25% of the referral"s first 60 days of earnings)',
      `‍When: 60 days after the referral's first vehicle goes live for bookings`,
      'How: Earnings adjustment in your account'
    ]
  }
]
