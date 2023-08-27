import { AiOutlineEdit } from 'react-icons/ai'
import { BsEyeglasses } from 'react-icons/bs'
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
import { toggleActiveEdit } from 'src/store/user/userSlice'

export const SwitchMode: React.FC = () => {
  const dispatch = useAppDispatch()
  const { permission, isActiveEdit } = useAppSelector((state) => state?.user)

  return permission == '-1' ? (
    <div
      onClick={() => dispatch(toggleActiveEdit())}
      className='transition-all text-2xl shadow-lg text-mainL1 flex justify-center items-center  fixed bottom-5 right-5 z-[999999999999999] bg-mainColor h-12 w-12 rounded-full cursor-pointer hover:scale-110 active:scale-100'
    >
      {isActiveEdit ? <BsEyeglasses /> : <AiOutlineEdit />}
    </div>
  ) : null
}
