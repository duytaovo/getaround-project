import React, { useState } from 'react'
import { Button, Form, Input, Radio, Select } from 'antd'

type LayoutType = Parameters<typeof Form>[0]['layout']
interface Props {
  titleForm: string
  titleInput: string
}
const FormZip: React.FC<Props> = ({ titleForm, titleInput }) => {
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
                <h1 className='text-[40px] sm:text-[20px] font-semibold text-mainColor'>{titleForm}</h1>
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
                  <Form.Item label='Market'>
                    <Select
                      showSearch
                      className='bg-[#a8a8a8]'
                      style={{ width: 400, backgroundColor: '#f9f8f8' }}
                      placeholder=''
                      optionFilterProp='children'
                      filterOption={(input, option) => (option?.label ?? '').includes(input)}
                      filterSort={(optionA, optionB) =>
                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                      }
                      options={[
                        {
                          value: '1',
                          label: 'Not Identified'
                        },
                        {
                          value: '2',
                          label: 'Closed'
                        },
                        {
                          value: '3',
                          label: 'Communicated'
                        },
                        {
                          value: '4',
                          label: 'Identified'
                        },
                        {
                          value: '5',
                          label: 'Resolved'
                        },
                        {
                          value: '6',
                          label: 'Cancelled'
                        }
                      ]}
                      onChange={handlePhoneNumberChange}
                    />
                  </Form.Item>
                  <Form.Item label='Zipcode'>
                    <Select
                      showSearch
                      className='bg-[#a8a8a8]'
                      style={{ width: 400, backgroundColor: '#f9f8f8' }}
                      placeholder=''
                      optionFilterProp='children'
                      filterOption={(input, option) => (option?.label ?? '').includes(input)}
                      filterSort={(optionA, optionB) =>
                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                      }
                      options={[
                        {
                          value: '1',
                          label: '180001'
                        },
                        {
                          value: '2',
                          label: '52000'
                        },
                        {
                          value: '3',
                          label: '620000'
                        },
                        {
                          value: '4',
                          label: '77000'
                        },
                        {
                          value: '5',
                          label: '565000'
                        },
                        {
                          value: '6',
                          label: '342000'
                        }
                      ]}
                      onChange={handlePhoneNumberChange}
                    />
                  </Form.Item>
                  <Form.Item {...buttonItemLayout}>
                    <Button
                      type='primary'
                      className=' absolute right-[12.5rem] w-44 rounded-[5px] text-black border-[1px] border-solid border-[black] hover:border-none duration-200'
                    >
                      See my zipcode bonus
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

export default FormZip
