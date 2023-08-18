import { MenuProps } from 'antd'
import CustomLink from 'src/components/CustomLink'
import { ICommonQuestion } from 'src/components/HeaderMobile/CustomItemHeader'
import path from 'src/constants/path'

export const itemsFirst: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <CustomLink to={path.insurance}>
        <div className='inline-block w-full group px-5 text-black hover:translate-x-2 duration-300 transition-all hover:text-mainColor'>
          <span className='cursor-pointer  group-hover:text-mainColor justify-between text-black hover:translate-x-2 duration-300 transition-all font-medium font-sans text-sm  hover:text-mainColor'>
            Bảo hiểm
          </span>
        </div>
      </CustomLink>
    )
  },

  {
    key: '2',
    label: (
      <CustomLink to={path.safetytrust}>
        <div className='inline-block w-full group px-5 text-black hover:translate-x-2 duration-300 transition-all'>
          <span className='cursor-pointer group-hover:text-mainColor justify-between text-black hover:translate-x-2 duration-300 transition-all font-medium font-sans text-sm hover:text-mainColor'>
            Tin cậy & An toàn
          </span>
        </div>
      </CustomLink>
    )
  },
  {
    key: '3',
    label: (
      <CustomLink to={path.howitwork}>
        <div className='inline-block w-full group px-5 text-black hover:translate-x-2 duration-300 transition-all '>
          <span className='cursor-pointer group-hover:text-mainColor justify-between text-black hover:translate-x-2 duration-300 transition-all font-medium font-sans text-sm hover:text-mainColor'>
            Công nghệ
          </span>
        </div>
      </CustomLink>
    )
  },
  {
    key: '4',
    label: (
      <CustomLink to={path.howitworkconnect}>
        <div className='inline-block w-full group px-5 text-black hover:translate-x-2 duration-300 transition-all'>
          <span className='cursor-pointer group-hover:text-mainColor justify-between text-black hover:translate-x-2 duration-300 transition-all font-medium font-sans text-sm hover:text-mainColor'>
            Điều khoản và điều kiện
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
        <div className='inline-block w-full group px-5 text-black hover:translate-x-2 duration-300 transition-all hover:text-mainColor'>
          <span className='cursor-pointer group-hover:text-mainColor justify-between text-black hover:translate-x-2 duration-300 transition-all font-medium font-sans text-sm  hover:text-mainColor'>
            Chia sẻ xe
          </span>
        </div>
      </CustomLink>
    )
  },
  {
    key: '2',
    label: (
      <CustomLink to={path.termCarShare}>
        <div className='inline-block w-full group px-5 text-black hover:translate-x-2 duration-300'>
          <span className='cursor-pointer group-hover:text-mainColor justify-between text-black hover:translate-x-2 duration-300 font-medium font-sans text-sm hover:text-mainColor'>
            Điều khoản và điều kiện
          </span>
        </div>
      </CustomLink>
    )
  },
  {
    key: '3',
    label: (
      <CustomLink to={path.hostCommunity}>
        <div className='inline-block w-full group px-5 text-black hover:translate-x-2 duration-300 '>
          <span className='cursor-pointer group-hover:text-mainColor justify-between text-black hover:translate-x-2 duration-300 font-medium font-sans text-sm hover:text-mainColor'>
            Chia sẻ lợi ích
          </span>
        </div>
      </CustomLink>
    )
  },

  {
    key: '4',
    label: (
      <CustomLink to={path.hostrefernal}>
        <div className='inline-block w-full group px-5 text-black hover:translate-x-2 duration-300'>
          <span className='cursor-pointer group-hover:text-mainColor justify-between text-black hover:translate-x-2 duration-300 font-medium font-sans text-sm hover:text-mainColor'>
            Giới thiệu 1 nhà xe
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
      <CustomLink to={path.partnerWithUs}>
        <div className='inline-block w-full group px-5 text-black hover:translate-x-2 duration-300 '>
          <span className='cursor-pointer group-hover:text-mainColor justify-between text-black hover:translate-x-2 duration-300 font-medium font-sans text-sm hover:text-mainColor'>
            Đối tác với chúng tôi
          </span>
        </div>
      </CustomLink>
    )
  },
  {
    key: '2',
    label: (
      <CustomLink to={path.partnerOur}>
        <div className='inline-block w-full group px-5 text-black hover:translate-x-2 duration-300 hover:text-mainColor'>
          <span className='cursor-pointer group-hover:text-mainColor justify-between text-black hover:translate-x-2 duration-300 font-medium font-sans text-sm  hover:text-mainColor'>
            Những cộng tác của chúng tôi
          </span>
        </div>
      </CustomLink>
    )
  },
  {
    key: '3',
    label: (
      <CustomLink to={path.driveWithUber}>
        <div className='inline-block w-full group px-5 text-black hover:translate-x-2 duration-300 hover:text-mainColor'>
          <span className='cursor-pointer group-hover:text-mainColor justify-between text-black hover:translate-x-2 duration-300 font-medium font-sans text-sm  hover:text-mainColor'>
            Lái xe với Grab/Be
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
      <CustomLink to={path.newsroom}>
        <div className='inline-block w-full group px-5 text-black hover:translate-x-2 duration-300 hover:text-mainColor'>
          <span className='cursor-pointer group-hover:text-mainColor justify-between text-black hover:translate-x-2 duration-300 font-medium font-sans text-sm  hover:text-mainColor'>
            Tin tức mới
          </span>
        </div>
      </CustomLink>
    )
  },
  {
    key: '2',
    label: (
      <CustomLink to={path.blogs}>
        <div className='inline-block w-full group px-5 text-black hover:translate-x-2 duration-300 '>
          <span className='cursor-pointer group-hover:text-mainColor justify-between text-black hover:translate-x-2 duration-300 font-medium font-sans text-sm hover:text-mainColor'>
            Blogs
          </span>
        </div>
      </CustomLink>
    )
  },
  {
    key: '3',
    label: (
      <CustomLink to={path.termPartner}>
        <div className='inline-block w-full group px-5 text-black hover:translate-x-2 duration-300'>
          <span className='cursor-pointer group-hover:text-mainColor justify-between text-black hover:translate-x-2 duration-300 font-medium font-sans text-sm hover:text-mainColor'>
            Điều khoản và những nguyên tắc
          </span>
        </div>
      </CustomLink>
    )
  },
  {
    key: '4',
    label: (
      <CustomLink to={path.eligibilitis}>
        <div className='inline-block w-full group px-5 text-black hover:translate-x-2 duration-300'>
          <span className='cursor-pointer group-hover:text-mainColor justify-between text-black hover:translate-x-2 duration-300 font-medium font-sans text-sm hover:text-mainColor'>
            Đủ điều kiện
          </span>
        </div>
      </CustomLink>
    )
  }
]

export const itemsFive: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <CustomLink to={path.aboutus}>
        <div className='inline-block w-full group px-5 text-black hover:translate-x-2 duration-300 hover:text-mainColor'>
          <span className='cursor-pointer group-hover:text-mainColor justify-between text-black hover:translate-x-2 duration-300 font-medium font-sans text-sm  hover:text-mainColor'>
            Đội ngũ Unlock
          </span>
        </div>
      </CustomLink>
    )
  },
  {
    key: '2',
    label: (
      <CustomLink to={path.contact}>
        <div className='inline-block w-full group px-5 text-black hover:translate-x-2 duration-300 '>
          <span className='cursor-pointer group-hover:text-mainColor justify-between text-black hover:translate-x-2 duration-300 font-medium font-sans text-sm hover:text-mainColor'>
            Kết nối với chúng tôi
          </span>
        </div>
      </CustomLink>
    )
  },
  {
    key: '3',
    label: (
      <CustomLink to={path.moveServer}>
        <div className='inline-block w-full group px-5 text-black hover:translate-x-2 duration-300'>
          <span className='cursor-pointer group-hover:text-mainColor justify-between text-black hover:translate-x-2 duration-300 font-medium font-sans text-sm hover:text-mainColor'>
            Di chuyển đến trực tiếp máy chủ
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
      <CustomLink to={path.login}>
        <div className='flex flex-col px-5 text-black  duration-300 group-hover:text-mainColor'>
          <span className='cursor-pointer  group-hover:text-mainColor justify-between text-black  duration-300 font-medium font-sans text-xs  hover:text-mainColor'>
            <span className='group-hover:text-mainColor'>Đăng nhập</span>
          </span>
        </div>
      </CustomLink>
    )
  },
  {
    key: '2',
    label: (
      <CustomLink to={path.logout}>
        <div className='flex flex-col px-5 text-black mt-1 duration-300 group-hover:text-mainColor'>
          <span className='cursor-pointer  group-hover:text-mainColor justify-between text-black  duration-300 font-medium font-sans text-xs  hover:text-mainColor'>
            <span className='group-hover:text-mainColor'>Đăng xuất</span>
          </span>
        </div>
      </CustomLink>
    )
  }
]

export const itemsHeaderMobile: ICommonQuestion[] = [
  {
    key: '1',
    label: 'Giải pháp của chúng tôi',
    contents: [
      {
        key: '1',
        label: (
          <CustomLink to={path.insurance}>
            <div className='inline-block w-full group px-5 text-black hover:translate-x-2 duration-300 transition-all hover:text-mainColor'>
              <span className='cursor-pointer  group-hover:text-mainColor justify-between text-black hover:translate-x-2 duration-300 transition-all font-medium font-sans text-sm  hover:text-mainColor'>
                Bảo hiểm
              </span>
            </div>
          </CustomLink>
        )
      },

      {
        key: '2',
        label: (
          <CustomLink to={path.safetytrust}>
            <div className='inline-block w-full group px-5 text-black hover:translate-x-2 duration-300 transition-all'>
              <span className='cursor-pointer group-hover:text-mainColor justify-between text-black hover:translate-x-2 duration-300 transition-all font-medium font-sans text-sm hover:text-mainColor'>
                Tin cậy & An toàn
              </span>
            </div>
          </CustomLink>
        )
      },
      {
        key: '3',
        label: (
          <CustomLink to={path.howitwork}>
            <div className='inline-block w-full group px-5 text-black hover:translate-x-2 duration-300 transition-all '>
              <span className='cursor-pointer group-hover:text-mainColor justify-between text-black hover:translate-x-2 duration-300 transition-all font-medium font-sans text-sm hover:text-mainColor'>
                Công nghệ
              </span>
            </div>
          </CustomLink>
        )
      },
      {
        key: '4',
        label: (
          <CustomLink to={path.termSolution}>
            <div className='inline-block w-full group px-5 text-black hover:translate-x-2 duration-300 transition-all'>
              <span className='cursor-pointer group-hover:text-mainColor justify-between text-black hover:translate-x-2 duration-300 transition-all font-medium font-sans text-sm hover:text-mainColor'>
                Điều khoản và điều kiện
              </span>
            </div>
          </CustomLink>
        )
      }
    ]
  },
  {
    key: '2',
    label: 'Chia sẻ xe',
    contents: [
      {
        key: '1',
        label: (
          <CustomLink to={path.sharACar}>
            <div className='inline-block w-full group px-5 text-black hover:translate-x-2 duration-300 transition-all hover:text-mainColor'>
              <span className='cursor-pointer group-hover:text-mainColor justify-between text-black hover:translate-x-2 duration-300 transition-all font-medium font-sans text-sm  hover:text-mainColor'>
                Chia sẻ xe
              </span>
            </div>
          </CustomLink>
        )
      },
      {
        key: '2',
        label: (
          <CustomLink to={path.termCarShare}>
            <div className='inline-block w-full group px-5 text-black hover:translate-x-2 duration-300'>
              <span className='cursor-pointer group-hover:text-mainColor justify-between text-black hover:translate-x-2 duration-300 font-medium font-sans text-sm hover:text-mainColor'>
                Điều khoản và điều kiện
              </span>
            </div>
          </CustomLink>
        )
      },
      {
        key: '3',
        label: (
          <CustomLink to={path.hostCommunity}>
            <div className='inline-block w-full group px-5 text-black hover:translate-x-2 duration-300 '>
              <span className='cursor-pointer group-hover:text-mainColor justify-between text-black hover:translate-x-2 duration-300 font-medium font-sans text-sm hover:text-mainColor'>
                Chia sẻ lợi ích
              </span>
            </div>
          </CustomLink>
        )
      },

      {
        key: '4',
        label: (
          <CustomLink to={path.hostrefernal}>
            <div className='inline-block w-full group px-5 text-black hover:translate-x-2 duration-300'>
              <span className='cursor-pointer group-hover:text-mainColor justify-between text-black hover:translate-x-2 duration-300 font-medium font-sans text-sm hover:text-mainColor'>
                Giới thiệu 1 nhà xe
              </span>
            </div>
          </CustomLink>
        )
      }
    ]
  },
  {
    key: '3',
    label: 'Cộng tác',
    contents: [
      {
        key: '1',
        label: (
          <CustomLink to={path.partnerWithUs}>
            <div className='inline-block w-full group px-5 text-black hover:translate-x-2 duration-300 '>
              <span className='cursor-pointer group-hover:text-mainColor justify-between text-black hover:translate-x-2 duration-300 font-medium font-sans text-sm hover:text-mainColor'>
                Đối tác với chúng tôi
              </span>
            </div>
          </CustomLink>
        )
      },
      {
        key: '2',
        label: (
          <CustomLink to={path.partnerOur}>
            <div className='inline-block w-full group px-5 text-black hover:translate-x-2 duration-300 hover:text-mainColor'>
              <span className='cursor-pointer group-hover:text-mainColor justify-between text-black hover:translate-x-2 duration-300 font-medium font-sans text-sm  hover:text-mainColor'>
                Những cộng tác của chúng tôi
              </span>
            </div>
          </CustomLink>
        )
      },
      {
        key: '3',
        label: (
          <CustomLink to={path.driveWithUber}>
            <div className='inline-block w-full group px-5 text-black hover:translate-x-2 duration-300 hover:text-mainColor'>
              <span className='cursor-pointer group-hover:text-mainColor justify-between text-black hover:translate-x-2 duration-300 font-medium font-sans text-sm  hover:text-mainColor'>
                Lái xe với Grab/Be
              </span>
            </div>
          </CustomLink>
        )
      }
    ]
  },
  {
    key: '4',
    label: 'Tòa soạn',
    contents: [
      {
        key: '1',
        label: (
          <CustomLink to={path.newsroom}>
            <div className='inline-block w-full group px-5 text-black hover:translate-x-2 duration-300 hover:text-mainColor'>
              <span className='cursor-pointer group-hover:text-mainColor justify-between text-black hover:translate-x-2 duration-300 font-medium font-sans text-sm  hover:text-mainColor'>
                Tin tức mới
              </span>
            </div>
          </CustomLink>
        )
      },
      {
        key: '2',
        label: (
          <CustomLink to={path.blogs}>
            <div className='inline-block w-full group px-5 text-black hover:translate-x-2 duration-300 '>
              <span className='cursor-pointer group-hover:text-mainColor justify-between text-black hover:translate-x-2 duration-300 font-medium font-sans text-sm hover:text-mainColor'>
                Blogs
              </span>
            </div>
          </CustomLink>
        )
      },
      {
        key: '3',
        label: (
          <CustomLink to={path.termPartner}>
            <div className='inline-block w-full group px-5 text-black hover:translate-x-2 duration-300'>
              <span className='cursor-pointer group-hover:text-mainColor justify-between text-black hover:translate-x-2 duration-300 font-medium font-sans text-sm hover:text-mainColor'>
                Điều khoản và những nguyên tắc
              </span>
            </div>
          </CustomLink>
        )
      },
      {
        key: '4',
        label: (
          <CustomLink to={path.eligibilitis}>
            <div className='inline-block w-full group px-5 text-black hover:translate-x-2 duration-300'>
              <span className='cursor-pointer group-hover:text-mainColor justify-between text-black hover:translate-x-2 duration-300 font-medium font-sans text-sm hover:text-mainColor'>
                Đủ điều kiện
              </span>
            </div>
          </CustomLink>
        )
      }
    ]
  },
  {
    key: '5',
    label: 'Về chúng tôi',
    contents: [
      {
        key: '1',
        label: (
          <CustomLink to={path.unlockTeam}>
            <div className='inline-block w-full group px-5 text-black hover:translate-x-2 duration-300 hover:text-mainColor'>
              <span className='cursor-pointer group-hover:text-mainColor justify-between text-black hover:translate-x-2 duration-300 font-medium font-sans text-sm  hover:text-mainColor'>
                Đội ngũ Unlock
              </span>
            </div>
          </CustomLink>
        )
      },
      {
        key: '2',
        label: (
          <CustomLink to={path.contact}>
            <div className='inline-block w-full group px-5 text-black hover:translate-x-2 duration-300 '>
              <span className='cursor-pointer group-hover:text-mainColor justify-between text-black hover:translate-x-2 duration-300 font-medium font-sans text-sm hover:text-mainColor'>
                Kết nối với chúng tôi
              </span>
            </div>
          </CustomLink>
        )
      },
      {
        key: '3',
        label: (
          <CustomLink to={path.moveServer}>
            <div className='inline-block w-full group px-5 text-black hover:translate-x-2 duration-300'>
              <span className='cursor-pointer group-hover:text-mainColor justify-between text-black hover:translate-x-2 duration-300 font-medium font-sans text-sm hover:text-mainColor'>
                Di chuyển đến trực tiếp máy chủ
              </span>
            </div>
          </CustomLink>
        )
      }
    ]
  }
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
