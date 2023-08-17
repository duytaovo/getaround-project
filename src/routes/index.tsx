import { lazy } from 'react'
import path from 'src/constants/path'

const Home = lazy(() => import('../pages/Home'))
const NotFound = lazy(() => import('../pages/NotFound'))
const HowItWork = lazy(() => import('../pages/howitwork'))
const HowItWorkConnect = lazy(() => import('../pages/howitworkConnect'))
const ShareACar = lazy(() => import('src/pages/Hosting/ShareACar'))
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
    path: path.hostBobus,
    Component: HostBonus
  },
  {
    path: path.login,
    Component: Login
  },
  {
    path: path.test,
    Component: Test
  }
]
