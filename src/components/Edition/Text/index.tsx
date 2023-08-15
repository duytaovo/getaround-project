import { unwrapResult } from '@reduxjs/toolkit'
import { FC, useState, useEffect, useRef } from 'react'
import { toast } from 'react-toastify'
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
import { _getData, updateData } from 'src/store/dataSlice'
import { updateText } from 'src/store/hosting/share_a_car/shareACarSlice'

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
        console.log({ id, value })
        _updateText(id, value).then((fb) => {
          console.log('abc')
          if (fb?.data?.result == 1) {
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

  const { permision } = useAppSelector((state: any) => state?.user)
  const [iOffset, setIOffset] = useState<IiOffset>({
    w: 100,
    h: 100
  })
  const [val, setVal] = useState<string>(content)
  const [enable, setEnable] = useState<boolean>(false)
  const dispatch = useAppDispatch()

  const show = () => setEnable(true)
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
      id: id,
      text: value
    }
    try {
      const res = await dispatch(updateText(body)).then(unwrapResult)
      console.log(res)

      toast.success(res.message, {
        position: 'top-center',
        autoClose: 4000
      })

      return res
    } catch (error) {
      console.log('lỗi' + error)
    }
  }

  return (
    <div>
      {permision == -1 && enable ? (
        <div className='flex justify-center relative'>
          <textarea
            // style={{ width: iOffset?.w, height: iOffset?.h }}
            ref={iRef}
            value={val}
            onChange={handleChangeInput}
            onResize={() => {
              true
            }}
            rows={5}
            cols={20}
            className={`${className || ''} rounded outline-none bg-transparent border border-slate-400 px-2`}
          ></textarea>
          <div className='flex h-7 absolute -top-8 '>
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
      ) : (
        <div ref={cRef}>
          <Wrapper
            onClick={show}
            className={`${className} border border-transparent ${
              permision == -1 ? 'border-dashed hover:border-slate-400' : ''
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
