import React from 'react'
import { Collapse } from 'antd'
import { items } from 'src/items/CommonQuestionItems/CommonQuestionItems'

type Props = {}

const CustomeCommonQuestions = (props: Props) => {
  return (
    <div>
      <Collapse accordion items={items} bordered={false} />
    </div>
  )
}

export default CustomeCommonQuestions
