interface Props {
  DataConnectedCarSharingHome: Array<{
    id: number
    total: string
    title: string
  }>
}
const ConnectedCarSharing: React.FC<Props> = ({ DataConnectedCarSharingHome }) => {
  return (
    <div className='flex-col items-stretch flex py-10'>
      <div className='w-full flex-col max-w-[1272px] self-center items-stretch px-auto flex relative'>
        <div className='w-full flex-col mx-auto flex items-center'>
          <div className='w-full max-w-[1272px] bg-white/90 rounded-[22px] flex-col justify-center mt-auto mx-auto p-[10px_36px] flex'>
            <div className='w-full max-w-[1072px] justify-around items-center flex'>
              {DataConnectedCarSharingHome.map((item: any, index: number) => (
                <>
                  <div className='text-center flex-col justify-start items-center flex ' key={index}>
                    <div className='mb-1 text-[32px] font-bold text-black'>
                      {DataConnectedCarSharingHome?.[index]?.total}
                    </div>
                    <div className='text-[13px] font-bold text-black'>
                      {DataConnectedCarSharingHome?.[index]?.title}
                    </div>
                  </div>
                  {index === DataConnectedCarSharingHome.length - 1 ? (
                    <></>
                  ) : (
                    <div className='w-[1px] h-16 bg-[#c9c9c9] self-strech'></div>
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
