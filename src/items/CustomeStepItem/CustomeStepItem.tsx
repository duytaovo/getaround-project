import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons'

export interface ICustomeStep {
  icon: React.ReactNode
  title: String
  description?: React.ReactNode
  subTitle: React.ReactNode
}

export const CustomeStepItems: ICustomeStep[] = [
  {
    icon: <UserOutlined />,
    title: 'Sign up and name your car.',
    description: (
      <div className='flex'>
        <img
          className='mr-4'
          src='https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/636580091db0b72179b2c1ab_appstore-icon.svg'
        />
        <img src='https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63657fca094cac0e19c45708_googleplay-icon.svg' />
      </div>
    ),
    subTitle: (
      <h1>
        On the sign-up form, you'll tell us about you and your car. Give your car a name, and continue to the next step
      </h1>
    )
  },
  {
    icon: <LoadingOutlined />,
    title: 'Create a profile and upload photos.',
    subTitle: (
      <h1>
        If you have multiple vehicles, use the car manager to create a profile for each one. Listing each car costs $100
        for initial setup and $20 per month—but you won't be charged until your car is ready for bookings.
      </h1>
    )
  },
  {
    icon: <SmileOutlined />,
    title: 'Install Getaround Connect®',
    subTitle: (
      <h1>
        We'll reach out to have our proprietary hardware, Getaround Connect®, installed in your car. Connect® lets
        guests unlock the car with their phone, and gives you insights about the car, trips, and vehicle security. Once
        Connect® is installed, you're ready for bookings!
      </h1>
    )
  }
]
