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
const NewsRoom = lazy(() => import('src/pages/NewsRoom/NewsRoom'))
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
    path: path.newsroom,
    Component: NewsRoom
  }
]
