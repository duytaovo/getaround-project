import { IConnectedCarSharing, IImgItemBrand } from 'src/types/connectedCarSharing.type'
import { Text } from 'src/components/Edition/Text'
import { Image } from 'src/components/Edition/Image'
import { useAppSelector } from 'src/hooks/useRedux'
interface Props {
  DataConnectedCarSharingHome: IImgItemBrand[]
  className?: string
}
const ItemBrand: React.FC<Props> = ({ DataConnectedCarSharingHome, className }) => {
  const data = useAppSelector((state) => state.data.data)
  return (
    <div className={className}>
      <div className='w-full flex-col max-w-[1272px] self-center items-stretch px-auto flex'>
        <div className='w-full flex-col mx-auto flex items-center'>
          <div className='w-full max-w-[1272px]   flex-col justify-center mt-auto mx-auto  flex h-40 border-[#ececec] border-solid border-[1px]'>
            <div className='w-full  justify-around items-center flex md:flex-wrap md:w-[80%] md:mx-auto h-full'>
              {DataConnectedCarSharingHome.map((item: any, index: number) =>
                index === DataConnectedCarSharingHome.length - 1 ? (
                  <div
                    key={index}
                    className='flex w-[33%] items-center justify-center h-full border-[#ececec] border-solid '
                  >
                    {/* <div className='text-center flex-col justify-start items-center flex sm:w-[40%]'> */}
                    <Image
                      alt='Image thumb'
                      id={DataConnectedCarSharingHome?.[index]?.img}
                      src={
                        data[DataConnectedCarSharingHome?.[index]?.img] ||
                        'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/6390f265fdc36f271a970fa2_newyorktimeslogo.png'
                      }
                      className='  h-[30px] w-[100px] mx-auto hover:scale-95 cursor-pointer duration-100'
                    />
                    {/* </div> */}
                  </div>
                ) : (
                  <div
                    key={index}
                    className='flex w-[33%] items-center  h-full border-[#ececec] border-solid border-r-[1px]'
                  >
                    {/* <div className='text-center flex-col justify-start items-center flex sm:w-[40%]'> */}
                    <Image
                      alt='Image thumb'
                      id={DataConnectedCarSharingHome?.[index]?.img}
                      src={
                        data[DataConnectedCarSharingHome?.[index]?.img] ||
                        'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/6390f265fdc36f271a970fa2_newyorktimeslogo.png'
                      }
                      className=' h-[30px] w-[100px] mx-auto hover:scale-95 cursor-pointer duration-100'
                    />
                    {/* </div> */}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemBrand
