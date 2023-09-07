import { Fragment, useRef } from 'react'
import { toast } from 'react-toastify'
import config from 'src/constants/configApi'

interface Props {
  onChange?: any
  register?: any
  id: string
}

export default function InputFile({ onChange, register, id }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileFromLocal = event.target.files?.[0]
    const fileFromLocal2 = event.target.files?.[1]
    const fileFromLocal3 = event.target.files?.[2]
    const fileUpload = event.target.files
    fileInputRef.current?.setAttribute('value', '')
    if (fileFromLocal && (fileFromLocal.size >= config.maxSizeUploadImage || !fileFromLocal.type.includes('image'))) {
      toast.error(`Dụng lượng file tối đa 2 MB. Định dạng:.JPEG, .PNG`, {})
    } else {
      onChange && onChange(fileUpload)
    }
  }

  const handleUpload = () => {
    fileInputRef.current?.click()
  }

  return (
    <Fragment>
      <input
        className='hidden'
        type='file'
        accept='.jpg,.jpeg,.png'
        ref={fileInputRef}
        onChange={onFileChange}
        multiple={true}
        {...register(id)}
        onClick={(event) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ;(event.target as any).value = null
        }}
      />
      <button
        className='flex h-10 items-center justify-end rounded-sm border bg-white px-6 text-sm text-gray-600 shadow-sm'
        type='button'
        onClick={handleUpload}
      >
        Chọn ảnh
      </button>
    </Fragment>
  )
}
