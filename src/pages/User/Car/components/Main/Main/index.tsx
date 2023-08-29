import React from 'react'
import CustomTabs from '../../Tabs'

type Props = {
  onClick: (value: boolean) => void
}

const Main = ({ onClick }: Props) => {
  return (
    <div>
      <CustomTabs />
    </div>
  )
}

export default Main
