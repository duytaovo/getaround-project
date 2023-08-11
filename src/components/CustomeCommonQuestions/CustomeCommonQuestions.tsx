import React, { FC } from 'react'
import { Collapse, CollapseProps } from 'antd'
import SingleCommonQuestion from '../SingleCommonQuestion/SingleCommonQuestion'
import { Text } from '../Edition/Text'
import { iDGenerator } from 'src/utils/idGenerator'

interface ICommonQuestion {
  key: string
  label: string
  contents: string[]
}

type CommonQuestionProps = {
  items: ICommonQuestion[]
  titleClassName?: string
  paddingRightSingleCommonQuestion?: number
  className?: string
}

const CustomeCommonQuestions: FC<CommonQuestionProps> = ({
  titleClassName,
  items,
  className,
  paddingRightSingleCommonQuestion
}) => {
  const itemsForColapse: CollapseProps['items'] = items.map((item) => ({
    key: item.key,

    // label: <h1 className={titleClassName}>{item.label}</h1>,
    label: <Text className={titleClassName} content={item.label} id={iDGenerator('txt')} tag='h1' />,

    children: (
      <SingleCommonQuestion
        paddingRight={paddingRightSingleCommonQuestion ? paddingRightSingleCommonQuestion : 30}
        contents={item.contents}
      />
    )
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
