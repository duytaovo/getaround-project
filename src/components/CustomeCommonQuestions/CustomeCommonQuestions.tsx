import React, { FC } from 'react'
import { Collapse, CollapseProps } from 'antd'
import SingleCommonQuestion from '../SingleCommonQuestion/SingleCommonQuestion'

interface ICommonQuestion {
  key: string
  label: string
  contents: string[]
}

type CommonQuestionProps = {
  items: ICommonQuestion[]
  className?: string
}

const CustomeCommonQuestions: FC<CommonQuestionProps> = ({ className, items }) => {
  const itemsForColapse: CollapseProps['items'] = items.map((item) => ({
    key: item.key,

    label: <h1 className='font-bold text-[18px] text-black/60'>{item.label}</h1>,


    children: <SingleCommonQuestion contents={item.contents} />
  }))
  return (
    <div className={className}>
      <Collapse
        expandIconPosition='end'
        style={{ width: '100%', background: 'transparent' }}
        accordion
        items={itemsForColapse}
        bordered={false}
      />
    </div>
  )
}

export default CustomeCommonQuestions
