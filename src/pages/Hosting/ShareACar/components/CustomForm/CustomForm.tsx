import React from 'react'
import type { FormInstance } from 'antd'
import { Form, Input, Space } from 'antd'
import Button from 'src/components/Button'
import logo from 'src/assets/images/logo.jpg'
type Props = {}

const SubmitButton = ({ form }: { form: FormInstance }) => {
  const [submittable, setSubmittable] = React.useState(false)

  const values = Form.useWatch([], form)

  React.useEffect(() => {
    form.validateFields({ validateOnly: true }).then(
      () => {
        setSubmittable(true)
      },
      () => {
        setSubmittable(false)
      }
    )
  }, [values])

  return (
    <Button
      type='submit'
      children={<span className='text-xl'>Submit</span>}
      isNext={true}
      className='w-[150px] hover:duration-500 duration-500 hover:transition-all  text-white h-[50px]  rounded-lg hover:bg-mainColor bg-black'
    ></Button>
  )
}

const CustomForm = (props: Props) => {
  const [form] = Form.useForm()
  return (
    <div className='p-4 pr-12  rounded-md'>
      <div className='flex justify-center'>
      <img src={logo} alt="" className='w-[200px] h-15' />
      </div>
      <Form size='middle' form={form} name='validateOnly' layout='vertical' autoComplete='off'>
        <Form.Item name='First Name' label='First Name' rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name='Last Name' label='Last Name' rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name='Phone' label='Phone Number' rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name='Email' label='Email' rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item>
            <div className='flex items-center justify-center'>
              <SubmitButton form={form} />
            </div>
        </Form.Item>
      </Form>
    </div>
  )
}

export default CustomForm
