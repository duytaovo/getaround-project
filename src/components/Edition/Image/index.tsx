import { FC, useState, useEffect, useRef } from 'react'
import { useAppSelector } from 'src/hooks/useRedux'

interface IBody {
  id: string
  value: string
  src: string
  setEnable: React.Dispatch<React.SetStateAction<boolean>>
  setVal: React.Dispatch<React.SetStateAction<string>>
  iRef: HTMLInputElement | null
  imgFile?: File
}
interface IiOffset {
  w: number
  h: number
}
const editOptions = [
  {
    id: 0,
    title: 'Lưu',
    callback: ({ id, value, setEnable, imgFile }: IBody) => {
      console.log({ id, imgFile })
    }
  },
  {
    id: 0,
    title: 'Chọn ảnh',
    callback: ({ id, src, setEnable, iRef }: IBody) => {
      iRef && iRef?.click()
    }
  },
  {
    id: 1,
    title: 'Đặt lại',
    callback: ({ setVal, src }: IBody) => {
      setVal(src)
    }
  },
  {
    id: 3,
    title: 'Huỷ',
    callback: ({ id, value, setEnable, src, setVal }: IBody) => {
      setEnable(false)
      setVal(src)
    }
  }
]

interface Iprops {
  id: string
  className?: string
  src: string
  style?: React.CSSProperties
  alt: string
}

export const Image: FC<Iprops> = ({ id, className, src, alt, ...props }) => {
  const iRef = useRef<HTMLInputElement>(null)
  const cRef = useRef<HTMLDivElement>(null)

  const { permision } = useAppSelector((state) => state?.user)
  const [iOffset, setIOffset] = useState<IiOffset>({
    w: 100,
    h: 100
  })
  const [val, setVal] = useState<string>(src)
  const [imgFile, setImgFile] = useState<File>()
  const [enable, setEnable] = useState<boolean>(false)

  const show = () => setEnable(true)
  const hidden = () => setEnable(false)

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e?.target?.files ? e?.target?.files[0] : null
    if (!value) return
    const s = window.URL.createObjectURL(value)
    setImgFile(value)
    setVal(s)
  }

  useEffect(() => {
    enable &&
      (() => {
        iRef.current?.focus()
        setVal(src)
      })()
  }, [enable])

  useEffect(() => {
    const w = cRef?.current?.offsetWidth || 100
    const h = cRef?.current?.offsetHeight || 100
    setIOffset({ w, h })
  }, [])

  return (
    <div>
      <input
        ref={iRef}
        type='file'
        id='img'
        name='img'
        accept='image/png, image/jpg, image/jpeg'
        onChange={handleChangeInput}
        className={`hidden`}
      />
      {permision == -1 && enable ? (
        <div className='flex justify-center relative'>
          <img
            src={val}
            alt={alt}
            onClick={show}
            className={`${className} border border-transparent ${
              permision == -1 ? 'border-dashed hover:border-slate-400' : ''
            }`}
            {...props}
          />

          <div className='flex h-7 absolute -top-8 -right-[2px]'>
            {editOptions.map((option, index) => {
              const body: IBody = {
                id: id,
                value: val,
                src,
                setEnable,
                setVal,
                iRef: iRef.current,
                imgFile
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
          <img
            src={val}
            alt={alt}
            onClick={show}
            className={`${className} border border-transparent ${
              permision == -1 ? 'border-dashed hover:border-slate-400' : ''
            }`}
            {...props}
          />
        </div>
      )}
    </div>
  )
}
