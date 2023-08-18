import { FC, useState, useEffect, useRef, useMemo } from 'react'
import TransitionsModalText from 'src/components/Modal/ModalText'
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
import axios from 'axios'
import { isAxiosUnprocessableEntityError } from 'src/utils/utils'
import { toast } from 'react-toastify'
import { updateData } from 'src/store/dataSlice'

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

interface Iprops {
  id: string
  className?: string
  src: string
  style?: React.CSSProperties
  alt: string
  classNameContainer?: string
}

export const Image: FC<Iprops> = ({ id, className, classNameContainer, src, alt, ...props }) => {
  const editOptions = [
    {
      id: 0,
      title: 'Lưu',
      callback: async ({ id, value, setEnable, imgFile }: IBody) => {
        console.log({ id, imgFile })
        handleUploadImage(id, imgFile, value)
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

  const iRef = useRef<HTMLInputElement>(null)
  const cRef = useRef<HTMLDivElement>(null)

  const { permission, isActiveEdit } = useAppSelector((state) => state?.user)
  const [iOffset, setIOffset] = useState<IiOffset>({
    w: 100,
    h: 1000
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
  const dispatch = useAppDispatch()
  // const previewImage = useMemo(() => {
  //   return file ? URL.createObjectURL(file) : ''
  // }, [file])

  const handleUploadImage = async (id: string, imgFile: File | undefined, value: string) => {
    try {
      if (imgFile) {
        const formData = new FormData()
        formData.append('id', id)
        formData.append('file', imgFile || '')
        const data = await axios
          .put('http://localhost:8080/api/v1/pageElement/updateImageElement', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
          })
          .then((fb) => {
            if (fb?.data?.status == 200) {
              dispatch(updateData({ [id]: value }))
              toast.success('Đã lưu thay đổi', {
                position: 'top-right',
                autoClose: 4000
              })
            }
          })
        hidden()
        // toast.success('upload thành công', {
        //   position: 'top-center',
        //   autoClose: 4000
        // })

        console.log('What about this: ', data)
      }
      // esle{
      //   hidden()

      // }
    } catch (error) {}
  }

  return (
    <div className={` ${classNameContainer}`}>
      <input
        ref={iRef}
        type='file'
        id='img'
        name='img'
        accept='image/png, image/jpg, image/jpeg'
        onChange={handleChangeInput}
        className={`hidden`}
      />
      {permission == '-1' && enable && isActiveEdit ? (
        <div>
          <img
            src={val}
            alt={alt}
            onClick={show}
            className={`${className} border border-transparent ${
              permission == '-1' ? 'border-dashed hover:border-slate-400' : ''
            }`}
            {...props}
          />
          <TransitionsModalText>
            <div className='flex justify-center relative '>
              <img
                src={val}
                alt={alt}
                onClick={show}
                className={`${className} border border-transparent ${
                  permission == '-1' ? 'border-dashed focus:border-slate-400 hover:border-slate-400' : ''
                }`}
                {...props}
              />

              <div className='flex h-17 absolute -top-7  justify-center'>
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
            <div className='flex flex-col justify-center items-center text-gray-400 text-sm ml-5'>
              <div>Dụng lượng file tối đa 2 MB</div>
              <div>Định dạng:.JPEG, .PNG, .JPG</div>
            </div>
          </TransitionsModalText>
        </div>
      ) : (
        <div ref={cRef}>
          <img
            src={val}
            alt={alt}
            onClick={show}
            className={`${className} border border-transparent ${
              permission == '-1' && isActiveEdit ? 'border-dashed hover:border-slate-400' : ''
            }`}
            {...props}
          />
        </div>
      )}
    </div>
  )
}
