import React from 'react'
import CustomDropDown from 'src/components/Dropdown/Dropdown'
import { itemAcount, itemsFirst, itemsFive, itemsFour, itemsSecond, itemsThird } from 'src/items/HeaderItem/HeaderItem'
import { locales } from 'src/i18n/i18n'
import { useTranslation } from 'react-i18next'
import { MenuProps } from 'antd'
import CustomLink from 'src/components/CustomLink'
import { ICommonQuestion } from 'src/components/HeaderMobile/CustomItemHeader'
import path from 'src/constants/path'
type Props = {}

const ComponentHeader = (props: Props) => {
  const { t } = useTranslation('home')
  const { i18n } = useTranslation()
  const itemsFirst: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <CustomLink to={path.insurance}>
          <div className='inline-block w-full group px-5 text-black hover:translate-x-2 duration-300 transition-all hover:text-mainColor'>
            <span className='cursor-pointer  group-hover:text-mainColor justify-between text-black hover:translate-x-2 duration-300 transition-all font-medium font-sans text-sm  hover:text-mainColor'>
              {t('solution.insurance')}
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
              {t('solution.trust&safe')}
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
              {t('solution.technology')}
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
              {t('solution.term')}
            </span>
          </div>
        </CustomLink>
      )
    }
  ]

  const itemsSecond: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <CustomLink to={path.sharACar}>
          <div className='inline-block w-full group px-5 text-black hover:translate-x-2 duration-300 transition-all hover:text-mainColor'>
            <span className='cursor-pointer group-hover:text-mainColor justify-between text-black hover:translate-x-2 duration-300 transition-all font-medium font-sans text-sm  hover:text-mainColor'>
              {t('shareCar.shareaCar')}
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
              {t('shareCar.term')}
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
              {t('shareCar.benefit')}
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
              {t('shareCar.refer')}
            </span>
          </div>
        </CustomLink>
      )
    }
  ]

  const itemsThird: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <CustomLink to={path.partnerWithUs}>
          <div className='inline-block w-full group px-5 text-black hover:translate-x-2 duration-300 '>
            <span className='cursor-pointer group-hover:text-mainColor justify-between text-black hover:translate-x-2 duration-300 font-medium font-sans text-sm hover:text-mainColor'>
              {t('partners.partnerWithUs')}
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
              {t('partners.partnerWithOur')}
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
              {t('partners.driveWithUber')}
            </span>
          </div>
        </CustomLink>
      )
    }
  ]

  const itemsFour: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <CustomLink to={path.newsroom}>
          <div className='inline-block w-full group px-5 text-black hover:translate-x-2 duration-300 hover:text-mainColor'>
            <span className='cursor-pointer group-hover:text-mainColor justify-between text-black hover:translate-x-2 duration-300 font-medium font-sans text-sm  hover:text-mainColor'>
              {t('newsroom.news')}
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
              {t('newsroom.blogs')}
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
              {t('newsroom.policy')}
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
              {t('newsroom.eligibilities')}
            </span>
          </div>
        </CustomLink>
      )
    }
  ]

  const itemsFive: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <CustomLink to={path.aboutus}>
          <div className='inline-block w-full group px-5 text-black hover:translate-x-2 duration-300 hover:text-mainColor'>
            <span className='cursor-pointer group-hover:text-mainColor justify-between text-black hover:translate-x-2 duration-300 font-medium font-sans text-sm  hover:text-mainColor'>
              {t('about us.unlockTeam')}
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
              {t('about us.contact')}
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
              {t('about us.movetoLive')}
            </span>
          </div>
        </CustomLink>
      )
    }
  ]
  return (
    <div>
      <div className='ml-6  flex items-center cursor-pointer justify-between text-black font-medium font-sans text-sm'>
        <CustomDropDown
          arrow={true}
          isOnClick={false}
          children={<span>{t('header.howItWork')}</span>}
          items={itemsFirst}
          className='p-2 xl:p-0 xl:mr-0 hover:text-mainColor '
        />
        <CustomDropDown
          arrow={true}
          isOnClick={false}
          children={<span>{t('header.hoisting')}</span>}
          items={itemsSecond}
          className='p-2 xl:p-0 xl:mr-0 mx-2  hover:text-mainColor'
        />
        <CustomDropDown
          arrow={true}
          isOnClick={false}
          children={<span>{t('header.partners')}</span>}
          items={itemsThird}
          className='p-2 xl:p-0 xl:mr-0 mx-2 hover:text-mainColor'
        />
        <CustomDropDown
          arrow={true}
          isOnClick={false}
          children={<span>{t('header.newrooms')}</span>}
          items={itemsFour}
          className='p-2 xl:p-0 xl:mr-0 mx-2 hover:text-mainColor'
        />
        <CustomDropDown
          arrow={true}
          isOnClick={false}
          children={<span>{t('header.aboutUs')}</span>}
          items={itemsFive}
          className='p-2 xl:p-0 xl:mr-0 mx-2 hover:text-mainColor'
        />
      </div>
    </div>
  )
}

export default ComponentHeader
