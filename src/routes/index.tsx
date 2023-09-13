import { lazy } from 'react'
import path from 'src/constants/path'
import Register from 'src/pages/Auth/Register'
import BookACarMobilePage2 from 'src/pages/BookACarMobile/Page2'
import BookACarMobilePage3 from 'src/pages/BookACarMobile/Page3'
import BookACarMobilePage4 from 'src/pages/BookACarMobile/Page4'
import BookACarMobilePage5 from 'src/pages/BookACarMobile/Page5'
import BookACarMobilePage6 from 'src/pages/BookACarMobile/Page6'
import BookACarMobilePage7 from 'src/pages/BookACarMobile/Page7'
import BookACarMobilePage8 from 'src/pages/BookACarMobile/Page8'
import BookACarMobilePage9 from 'src/pages/BookACarMobile/Page9'
import UploadImage from 'src/pages/User/Car'

const Home = lazy(() => import('../pages/Home'))
const Car = lazy(() => import('../pages/User/Car'))
const NotFound = lazy(() => import('../pages/NotFound'))
const HowItWork = lazy(() => import('../pages/howitwork'))
const HowItWorkConnect = lazy(() => import('../pages/howitworkConnect'))
const ShareACar = lazy(() => import('src/pages/Hosting/ShareACar'))
const BookACar = lazy(() => import('src/pages/Hosting/BookACar'))
const HostComunity = lazy(() => import('src/pages/Hosting/HostComunity'))
const HostRefernal = lazy(() => import('src/pages/HostRefernal'))
const AboutUs = lazy(() => import('src/pages/AboutUs'))

const DriveWithUber = lazy(() => import('src/pages/DriveWithUber'))
const PartnerWithUs = lazy(() => import('src/pages/PartnerWithUs'))

const NewsRoom = lazy(() => import('src/pages/NewsRoom/NewsRoom'))
const SafetyTrust = lazy(() => import('src/pages/SafetyTrust/SafetyTrust'))
const HostBonus = lazy(() => import('src/pages/HostBonus/HostBonus'))
const Test = lazy(() => import('src/pages/Hosting/Test'))
const Login = lazy(() => import('src/pages/Auth/Login'))
const CommingSoon = lazy(() => import('src/pages/CommingSoon/CommingSoon'))
const ManageCar = lazy(() => import('src/pages/User/ManageCar'))
const BookACarMobilePage1 = lazy(() => import('src/pages/BookACarMobile/Page1'))

export const routeMain = [
  {
    path: path.home,
    Component: Home
  },
  {
    path: path.howitwork,
    Component: HowItWork
  },
  {
    path: path.sharACar,
    Component: ShareACar
  },

  {
    path: path.hostCommunity,
    Component: HostComunity
  },
  {
    path: path.howitworkconnect,
    Component: HowItWorkConnect
  },
  {
    path: path.hostrefernal,
    Component: HostRefernal
  },
  {
    path: '*',
    Component: NotFound
  },
  {
    path: path.aboutus,
    Component: AboutUs
  },
  {
    path: path.driveWithUber,
    Component: DriveWithUber
  },
  {
    path: path.partnerWithUs,
    Component: PartnerWithUs
  },
  {
    path: path.newsroom,
    Component: NewsRoom
  },
  {
    path: path.safetytrust,
    Component: SafetyTrust
  },
  {
    path: path.test,
    Component: Test
  },
  {
    path: path.insurance,
    Component: CommingSoon
  },
  {
    path: path.technology,
    Component: HowItWork
  },
  {
    path: path.termSolution,
    Component: CommingSoon
  },
  {
    path: path.termCarShare,
    Component: CommingSoon
  },
  {
    path: path.termPartner,
    Component: CommingSoon
  },
  {
    path: path.benefit,
    Component: HostBonus
  },
  {
    path: path.blogs,
    Component: CommingSoon
  },
  {
    path: path.eligibilitis,
    Component: CommingSoon
  },
  // {
  //   path: path.unlockTeam,
  //   Component: CommingSoon
  // },
  {
    path: path.contact,
    Component: CommingSoon
  },
  {
    path: path.moveServer,
    Component: CommingSoon
  }
]

export const routeUser = [
  {
    path: path.bookACar,
    Component: BookACar
  },
  {
    path: path.bookACarMobile,
    Component: BookACarMobilePage1
  },
  {
    path: path.bookACarMobile2,
    Component: BookACarMobilePage2
  },
  {
    path: path.bookACarMobile3,
    Component: BookACarMobilePage3
  },
  {
    path: path.bookACarMobile4,
    Component: BookACarMobilePage4
  },
  {
    path: path.bookACarMobile5,
    Component: BookACarMobilePage5
  },
  {
    path: path.bookACarMobile6,
    Component: BookACarMobilePage6
  },
  {
    path: path.bookACarMobile7,
    Component: BookACarMobilePage7
  },
  {
    path: path.bookACarMobile8,
    Component: BookACarMobilePage8
  },
  {
    path: path.bookACarMobile9,
    Component: BookACarMobilePage9
  }
]

export const routeManageCar = [
  {
    path: path.carUser,
    Component: Car
  },
  {
    path: path.carMange,
    Component: ManageCar
  },
  {
    path: path.upload,
    Component: UploadImage
  }
]

export const routeAuth = [
  {
    path: path.login,
    Component: Login
  },
  {
    path: path.register,
    Component: Register
  }
]
