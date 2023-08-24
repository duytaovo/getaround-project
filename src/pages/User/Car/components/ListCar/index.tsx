import { useEffect, useState } from 'react'
import './styles.scss'
import './responsive.scss'
import { useDispatch, useSelector } from 'react-redux'
import { ListJob } from './ListCar'
import Box from '@mui/material/Box'
import PropTypes from 'prop-types'
import { Tab, Tabs } from '@mui/material'
import { Statistic } from 'antd'

function TabPanel(props: any) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, padding: 0 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

const HRPostList = (props: any) => {
  const [value, setValue] = useState(0)
  const handleChange = (event: any, newValue: any) => setValue(newValue)
  const dispatch = useDispatch()
  // const { jobListActived, jobListDisabled } = useSelector((state) => state.job)
  // const userPresent = JSON.parse(sessionStorage.getItem('userPresent'))
  useEffect(() => {
    // dispatch(getJobListByUserId([userPresent.idUser, 0, 10]))
  }, [])

  return (
    <div className='hr-post__wrapper'>
      <div className='hr-post-list__content'>
        <div className='hr-post-list__statistic'>
          <Statistic title='Điểm khả dụng' />
          <Statistic title='Trạng thái đăng tuyển' />
        </div>
        <Box className='filter-panel-home__wrapper' sx={{}}>
          <Box className='filter-panel-home__filterPanel' sx={{}}>
            <Tabs
              value={value}
              onChange={handleChange}
              sx={{
                '& button': {
                  fontSize: '14px !important',
                  textTransform: 'uppercase',
                  color: 'black !important',
                  fontWeight: '700 !important',
                  flexBasis: '50%'
                },
                '& button.Mui-selected': {
                  color: '#fff !important',
                  background: '#04bf8a',
                  borderRadius: '4px',
                  '&#simple-tab-1': {
                    backgroundColor: '#666 !important'
                  }
                },
                '& span.MuiTabs-indicator': {
                  backgroundColor: 'unset !important'
                }
              }}
            >
              <Tab label='Đang đăng tuyển' {...a11yProps(0)} />
              <Tab label='Đã đóng' {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <ListJob listJob={''} message='Không có công việc nào đang đăng tuyển.' isDisabled={false} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <ListJob listJob={''} message='Không có công việc đã đóng.' isDisabled={true} />
          </TabPanel>
        </Box>
      </div>
    </div>
  )
}

export default HRPostList
