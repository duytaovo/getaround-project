import React, { useState } from 'react'
import { Button, Form, Input, Radio } from 'antd'

type LayoutType = Parameters<typeof Form>[0]['layout']
interface Props {
  titleForm: string
  titleInput: string
}
const FormContact: React.FC<Props> = ({ titleForm, titleInput }) => {
  const [form] = Form.useForm()
  const [formLayout, setFormLayout] = useState<LayoutType>('vertical')

  const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
    setFormLayout(layout)
  }

  const formItemLayout = formLayout === 'horizontal' ? { labelCol: { span: 4 }, wrapperCol: { span: 14 } } : null

  const buttonItemLayout = formLayout === 'horizontal' ? { wrapperCol: { span: 14, offset: 4 } } : null

  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')

  const handlePhoneNumberChange = (event: any) => {
    setPhoneNumber(event.target.value)
  }

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value)
  }
  return (
    <div className='opacity-[1] flex-col items-stretch mb-[104px] flex transform-style-[preserve-3d]'>
      <div className='w-full max-w-[1272px] flex-col self-center items-stretch px-9 flex relative box-border'>
        <div className='w-full max-w-[676px] bg-[#fff] rounded-[22px] mx-auto p-9 overflow-hidden	'>
          <div className='h-[424px] mb-[-70px] block'>
            <div className='h-[400px] block'>
              <div className='h-[8%]  flex items-center bg-[#fafafa]'>
                <span className='text-mainColor font-bold fill-current text-2xl w-[120px] h-[26px]'>Unlock</span>
              </div>
              <div className='block'>
                <h1 className='text-[40px] font-semibold text-mainColor'>{titleForm}</h1>
                <h2 className='text-black text-[14px] font-semibold'>{titleInput}</h2>
                <Form
                  {...formItemLayout}
                  layout={formLayout}
                  form={form}
                  initialValues={{ layout: formLayout }}
                  onValuesChange={onFormLayoutChange}
                  style={{ maxWidth: formLayout === 'inline' ? 'none' : 600 }}
                  className='mt-8'
                >
                  <Form.Item required label='Account Phone Number'>
                    <Input placeholder='+84 869 154 692' value={phoneNumber} onChange={handlePhoneNumberChange} />
                  </Form.Item>
                  <Form.Item required label='Account E-mail'>
                    <Input placeholder='npc.it@gmail.om' value={email} onChange={handleEmailChange} />
                  </Form.Item>
                  <Form.Item {...buttonItemLayout}>
                    <Button
                      type='primary'
                      className='bg-mainColor absolute right-0 w-36 rounded-2xl'
                      disabled={!phoneNumber || !email}
                    >
                      Refer a friend
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormContact
