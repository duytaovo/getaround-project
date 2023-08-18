import { unwrapResult } from '@reduxjs/toolkit'
import { FC, useState, useEffect, useRef, useContext } from 'react'
import { toast } from 'react-toastify'
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
import { _getData, updateData } from 'src/store/dataSlice'
import { updateText } from 'src/store/hosting/share_a_car/shareACarSlice'
import TransitionsModalText from '../../Modal/ModalText'
import { AppContext } from 'src/contexts/app.context'

interface IBody {
  id: string
  value: string
  content: string
  setEnable: React.Dispatch<React.SetStateAction<boolean>>
  setVal: React.Dispatch<React.SetStateAction<string>>
}
interface IiOffset {
  w: number
  h: number
}

interface Iprops {
  id: string
  tag: keyof JSX.IntrinsicElements
  className?: string
  content: string
  style?: React.CSSProperties
}

export const Text: FC<Iprops> = ({ id, tag, className, content, ...props }) => {
  const editOptions = [
    {
      id: 0,
      title: 'Lưu',
      callback: ({ id, value, setEnable }: IBody) => {
        _updateText(id, value).then((fb) => {
          if (fb?.data?.status == 200) {
            dispatch(updateData({ [id]: value }))
            toast.success('Đã lưu thay đổi', {
              position: 'top-right',
              autoClose: 4000
            })
          }
          hidden()
        })
      }
    },
    {
      id: 1,
      title: 'Đặt lại',
      callback: ({ setVal, content }: IBody) => {
        setVal(content)
      }
    },
    {
      id: 3,
      title: 'Huỷ',
      callback: ({ id, value, setEnable }: IBody) => {
        setEnable(false)
      }
    }
  ]
  const Wrapper = tag

  const iRef = useRef<HTMLTextAreaElement>(null)
  const cRef = useRef<HTMLDivElement>(null)

  const { permission, isActiveEdit } = useAppSelector((state: any) => state?.user)

  const [iOffset, setIOffset] = useState<IiOffset>({
    w: 100,
    h: 100
  })
  const [val, setVal] = useState<string>(content)
  const [enable, setEnable] = useState<boolean>(false)
  // var { enable, setEnable } = useContext(AppContext)
  const dispatch = useAppDispatch()

  const show = () => {
    permission == '-1' && isActiveEdit && setEnable(true)
  }
  const hidden = () => setEnable(false)

  const handleChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e?.target?.value
    setVal(value)
  }

  useEffect(() => {
    enable &&
      (() => {
        iRef.current?.focus()
        setVal(content)
      })()
  }, [enable])

  useEffect(() => {
    const w = cRef?.current?.offsetWidth || 100
    const h = cRef?.current?.offsetHeight || 100
    setIOffset({ w, h })
  }, [])

  var _updateText = async (id: string, value: string) => {
    const body = {
      part_id: id,
      content: value
    }
    try {
      const res = await dispatch(updateText(body)).then(unwrapResult)

      toast.success(res.message, {
        position: 'top-center',
        autoClose: 4000
      })

      return res
    } catch (error) {}
  }

  return (
    <div>
      {permission == '-1' && enable && isActiveEdit ? (
        <div>
          <div className=''>
            <div ref={cRef} className=''>
              <Wrapper
                onClick={show}
                className={`${className}  border border-transparent ${
                  permission == '-1' && isActiveEdit ? 'border-dashed hover:border-slate-400' : ''
                }`}
                {...props}
              >
                {content}
              </Wrapper>
            </div>
          </div>
          <TransitionsModalText>
            <div className='flex justify-center relative'>
              <textarea
                style={{ width: '1000px', color: 'black' }}
                ref={iRef}
                value={val}
                onChange={handleChangeInput}
                onResize={() => {
                  true
                }}
                rows={5}
                cols={20}
                className={`${
                  className || ''
                } rounded outline-none text-black bg-transparent border border-slate-400 px-2`}
              ></textarea>
              <div className='flex h-17 absolute -top-7  justify-center w-max '>
                {editOptions.map((option, index) => {
                  const body: IBody = {
                    id: id,
                    value: val,
                    content,
                    setEnable,
                    setVal
                  }

                  return (
                    <div
                      key={index}
                      onClick={() => option?.callback(body)}
                      className='text-sm text-white transition-all flex justify-center items-center rounded mx-[2px] overflow-hidden px-2 py-1 bg-mainColor cursor-pointer hover:opacity-80'
                    >
                      {option?.title}
                    </div>
                  )
                })}
              </div>
            </div>
          </TransitionsModalText>
        </div>
      ) : (
        <div ref={cRef}>
          <Wrapper
            onClick={show}
            className={`${className} border border-transparent ${
              permission == '-1' && isActiveEdit ? 'border-dashed hover:border-slate-400' : ''
            }`}
            {...props}
          >
            {content}
          </Wrapper>
        </div>
      )}
    </div>
  )
}
