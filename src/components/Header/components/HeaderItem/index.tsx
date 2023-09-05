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

const customDropdownStyle = {
  arrow: false,
  isOnClick: false,
  className: 'px-1 mx-3 xl:p-0 xl:mr-0 hover:text-mainColor'
}

{
  /* <div className = 'font- text-'> */
}

export const titleStyle = 'py-5 text-base font-normal'

export const aStyle = 'py-[5px] text-base font-nomal flex justify-center item-center'
export const aInStyle = ''

export const menuStyle = {
  padding: '20px 20px',
  borderRadius: '16px'
}

const ComponentHeader = (props: Props) => {
  const { t } = useTranslation('home')
  const { i18n } = useTranslation()
  const itemsFirst: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <CustomLink to={path.insurance}>
          <div className={aStyle}>
            <span className={aInStyle}>{t('solution.insurance')}</span>
          </div>
        </CustomLink>
      )
    },

    {
      key: '2',
      label: (
        <CustomLink to={path.safetytrust}>
          <div className={aStyle}>
            <span className={aInStyle}>{t('solution.trust&safe')}</span>
          </div>
        </CustomLink>
      )
    },
    {
      key: '3',
      label: (
        <CustomLink to={path.howitwork}>
          <div className={aStyle}>
            <span className={aInStyle}>{t('solution.technology')}</span>
          </div>
        </CustomLink>
      )
    },
    {
      key: '4',
      label: (
        <CustomLink to={path.howitworkconnect}>
          <div className={aStyle}>
            <span className={aInStyle}>{t('solution.term')}</span>
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
          <div className={aStyle}>
            <span className={aInStyle}>{t('shareCar.shareaCar')}</span>
          </div>
        </CustomLink>
      )
    },
    {
      key: '2',
      label: (
        <CustomLink to={path.termCarShare}>
          <div className={aStyle}>
            <span className={aInStyle}>{t('shareCar.term')}</span>
          </div>
        </CustomLink>
      )
    },
    {
      key: '3',
      label: (
        <CustomLink to={path.hostCommunity}>
          <div className={aStyle}>
            <span className={aInStyle}>{t('shareCar.benefit')}</span>
          </div>
        </CustomLink>
      )
    },

    {
      key: '4',
      label: (
        <CustomLink to={path.hostrefernal}>
          <div className={aStyle}>
            <span className={aInStyle}>{t('shareCar.refer')}</span>
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
          <div className={aStyle}>
            <span className={aInStyle}>{t('partners.partnerWithUs')}</span>
          </div>
        </CustomLink>
      )
    },
    {
      key: '2',
      label: (
        <CustomLink to={path.partnerOur}>
          <div className={aStyle}>
            <span className={aInStyle}>{t('partners.partnerWithOur')}</span>
          </div>
        </CustomLink>
      )
    },
    {
      key: '3',
      label: (
        <CustomLink to={path.driveWithUber}>
          <div className={aStyle}>
            <span className={aInStyle}>{t('partners.driveWithUber')}</span>
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
          <div className={aStyle}>
            <span className={aInStyle}>{t('newsroom.news')}</span>
          </div>
        </CustomLink>
      )
    },
    {
      key: '2',
      label: (
        <CustomLink to={path.blogs}>
          <div className={aStyle}>
            <span className={aInStyle}>{t('newsroom.blogs')}</span>
          </div>
        </CustomLink>
      )
    },
    {
      key: '3',
      label: (
        <CustomLink to={path.termPartner}>
          <div className={aStyle}>
            <span className={aInStyle}>{t('newsroom.policy')}</span>
          </div>
        </CustomLink>
      )
    },
    {
      key: '4',
      label: (
        <CustomLink to={path.eligibilitis}>
          <div className={aStyle}>
            <span className={aInStyle}>{t('newsroom.eligibilities')}</span>
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
          <div className={aStyle}>
            <span className={aInStyle}>{t('about us.unlockTeam')}</span>
          </div>
        </CustomLink>
      )
    },
    {
      key: '2',
      label: (
        <CustomLink to={path.contact}>
          <div className={aStyle}>
            <span className={aInStyle}>{t('about us.contact')}</span>
          </div>
        </CustomLink>
      )
    },
    {
      key: '3',
      label: (
        <CustomLink to={path.moveServer}>
          <div className={aStyle}>
            <span className={aInStyle}>{t('about us.movetoLive')}</span>
          </div>
        </CustomLink>
      )
    }
  ]

  return (
    <div>
      <div className='ml-10 flex items-center cursor-pointer justify-between text-textMainColor font-bold  text-sm'>
        <CustomDropDown
          {...customDropdownStyle}
          menuStyle={menuStyle}
          items={itemsFirst}
          children={<span className={titleStyle}>{t('header.howItWork')}</span>}
        />
        <CustomDropDown
          {...customDropdownStyle}
          menuStyle={menuStyle}
          items={itemsSecond}
          children={<span className={titleStyle}>{t('header.hoisting')}</span>}
        />
        <CustomDropDown
          {...customDropdownStyle}
          menuStyle={menuStyle}
          items={itemsThird}
          children={<span className={titleStyle}>{t('header.partners')}</span>}
        />
        <CustomDropDown
          {...customDropdownStyle}
          menuStyle={menuStyle}
          items={itemsFour}
          children={<span className={titleStyle}>{t('header.newrooms')}</span>}
        />
        <CustomDropDown
          {...customDropdownStyle}
          menuStyle={menuStyle}
          items={itemsFive}
          children={<span className={titleStyle}>{t('header.aboutUs')}</span>}
        />
      </div>
    </div>
  )
}

export default ComponentHeader
