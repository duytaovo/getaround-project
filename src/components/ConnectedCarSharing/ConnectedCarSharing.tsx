import { IConnectedCarSharing } from 'src/types/connectedCarSharing.type'

interface Props {
  DataConnectedCarSharingHome: IConnectedCarSharing[]
  className?: string
}
const ConnectedCarSharing: React.FC<Props> = ({ DataConnectedCarSharingHome, className }) => {
  return (
    <div className={className}>
      <div className='w-full flex-col max-w-[1272px] self-center items-stretch px-auto flex'>
        <div className='w-full flex-col mx-auto flex items-center'>
          <div className='w-full max-w-[1272px] bg-white/90 rounded-[22px] flex-col justify-center mt-auto mx-auto p-[10px_36px] flex'>
            <div className='w-full max-w-[1072px] justify-around items-center flex sm:flex-wrap'>
              {DataConnectedCarSharingHome.map((item: any, index: number) => (
                <>
                  <div className='text-center flex-col justify-start items-center flex sm:w-[40%]' key={index}>
                    <div className='mb-1 text-[32px] font-bold text-black sm:text-[20px]'>
                      {DataConnectedCarSharingHome?.[index]?.total}
                    </div>
                    <div className='text-[13px] font-bold text-black sm:text-[10px]'>
                      {DataConnectedCarSharingHome?.[index]?.title}
                    </div>
                  </div>
                  {index === DataConnectedCarSharingHome.length - 1 ? (
                    <></>
                  ) : (
                    <div className='w-[1px] h-16 bg-[#c9c9c9] self-strech sm:hidden'></div>
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConnectedCarSharing
