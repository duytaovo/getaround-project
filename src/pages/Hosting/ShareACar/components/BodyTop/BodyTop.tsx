import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'src/components/Button'
import { Image } from 'src/components/Edition/Image'
import { Text } from 'src/components/Edition/Text'
import { changeColorWhiteAndMain } from 'src/helpers/getBreakpoint'
import { useAppSelector } from 'src/hooks/useRedux'
import { IBodyTop } from 'src/types/hosting_shareACar.type'
import { iDGenerator } from 'src/utils/idGenerator'

interface Props {
  item: IBodyTop
  className?: string
}

const BodyTop = ({ item, className }: Props) => {
  const data = useAppSelector((state) => state.data.data)
  const _header = item.header?.split(' ')
  const _content = item.content?.split(' ')
  const onClick = () => {
    const element = document.querySelector(`#getstarted`)
    element &&
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })
  }
  // useEffect(() => {
  //   dispatch(_getData(''))
  // }, [dispatch])
  return (
    <div className={`${className} text-textCustom space-x-5 lg:space-x-0 flex  lg:flex-col-reverse justify-between`}>
      <div className='w-1/2 lg:w-full  h-full lg:h-full flex flex-col justify-between items-start'>
        {/* <h1 className=' text-[47px] text-mainColor'>{changeColorWhiteAndMain(_header)}</h1> */}
        <Text
          id={`txt-bodytop-shareACar_header`}
          tag='h1'
          content={data[item.header || 'abc']}
          className={`text-[47px] text-mainColor`}
        />
        {/* <p className='w-[90%] text-ellipsis text-justify break-words'>{item.content}</p> */}
        <Text
          id={`txt-bodytop-shareACar_content`}
          tag='p'
          content={data[item.content || '']}
          className={`w-[90%] text-ellipsis text-justify break-words`}
        />
        <Button
          onClick={onClick}
          children={
            <Text
              id={`txt-buttonBodyTop-shareACar`}
              tag='span'
              content={data[item.infoButton || '']}
              className={`text-xl -translate-y-3`}
            />
          }
          isNext={true}
          className='w-[200px] [&>*]:flex [&>*]:flex-row hover:duration-500 mt-2 duration-500 hover:transition-all  text-white h-[70px]  rounded-lg bg-[#3699d3] hover:bg-black  '
        ></Button>
      </div>
      <Image
        id={`img-bodyTop-shareACar`}
        className='lg:w-full h-[300px]  bg-white rounded-2xl p-4 px-4 object-contain'
        src={data[item.img || '']}
        alt='hosting-shareAcar'
        classNameContainer='w-fit'
      />
      {/* <img className=' lg:w-full h-[300px]  bg-white rounded-2xl p-4 px-4' src={item.img} alt='' /> */}
    </div>
  )
}

export default BodyTop
