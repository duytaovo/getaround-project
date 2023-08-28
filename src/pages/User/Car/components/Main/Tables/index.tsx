// import * as React from 'react'
// import Paper from '@mui/material/Paper'
// import Table from '@mui/material/Table'
// import TableBody from '@mui/material/TableBody'
// import TableCell from '@mui/material/TableCell'
// import TableContainer from '@mui/material/TableContainer'
// import TableHead from '@mui/material/TableHead'
// import TablePagination from '@mui/material/TablePagination'
// import TableRow from '@mui/material/TableRow'

// interface Column {
//   id: 'car' | 'name' | 'status' | 'battery' | 'user'
//   label: string
//   minWidth?: number
//   align?: 'right'
//   format?: (value: number) => string
// }

// const columns: readonly Column[] = [
//   { id: 'name', label: 'Name', minWidth: 170 },
//   { id: 'car', label: 'Car', minWidth: 100 },
//   {
//     id: 'status',
//     label: 'Status',
//     minWidth: 170,
//     align: 'right'
//   },
//   {
//     id: 'battery',
//     label: 'Battery',
//     minWidth: 170,
//     align: 'right'
//   },
//   {
//     id: 'user',
//     label: 'User',
//     minWidth: 170,
//     align: 'right'
//   }
// ]

// interface Data {
//   car: string
//   name: string
//   status: string
//   battery: string
//   user: any
// }

// function createData(car: string, name: string, status: string, battery: string, user: any): Data {
//   return { car, name, status, battery, user }
// }

// const rows = [
//   createData('BMW', 'Vo Duy Tao', 'Pending', '', 'Option'),
//   createData('BMW', 'Vo Duy Tao', 'Pending', '', 'Option'),
//   createData('BMW', 'Vo Duy Tao', 'Pending', '', 'Option')
// ]

// export default function CustomTable() {
//   const [page, setPage] = React.useState(0)
//   const [rowsPerPage, setRowsPerPage] = React.useState(10)

//   const handleChangePage = (event: unknown, newPage: number) => {
//     setPage(newPage)
//   }

//   const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setRowsPerPage(+event.target.value)
//     setPage(0)
//   }

//   return (
//     <Paper sx={{ width: '100%', overflow: 'hidden' }}>
//       <TableContainer sx={{ maxHeight: 440 }}>
//         <Table stickyHeader aria-label='sticky table'>
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
//                   {column.label}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
//               return (
//                 <TableRow hover role='checkbox' tabIndex={-1} key={row.name}>
//                   {columns.map((column) => {
//                     const value = row[column.id]
//                     return (
//                       <TableCell key={column.id} align={column.align}>
//                         {column.format && typeof value === 'number' ? column.format(value) : value}
//                       </TableCell>
//                     )
//                   })}
//                 </TableRow>
//               )
//             })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[10, 25, 100]}
//         component='div'
//         count={rows.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </Paper>
//   )
// }

import React, { useEffect, useState } from 'react'
import { IconButton, Tooltip } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
import DataTable from './Table'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { getCars } from 'src/store/car/manageCar/managCarSlice'
import { Car } from 'src/types/car'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

const CarTable = () => {
  const dispatch = useAppDispatch()
  const { carList } = useAppSelector((state) => state.car)
  useEffect(() => {
    dispatch(getCars(''))
  }, [])
  const [status, setStatus] = React.useState<string>('')

  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value)
  }
  interface Column {
    field: string
    headerName: string
    width: number
  }
  const columns = [
    // { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'email',
      headerName: 'Email',
      width: 150
    },
    // { field: 'car', headerName: 'Car', width: 150 },
    { field: 'location', headerName: 'Location', width: 150 },
    { field: 'brand', headerName: 'Brand', width: 150 },
    { field: 'model', headerName: 'Model', width: 150 },
    { field: 'type', headerName: 'Type', width: 150 },
    { field: 'license', headerName: 'License', width: 150 },
    { field: 'seri', headerName: 'Seri', width: 150 },
    {
      field: 'regis',
      headerName: 'Regis',
      width: 150,
      renderCell: (params: any) => {
        const { row } = params
        return (
          <div className='flex flex-wrap'>
            {row.regis?.map((item: any, index: number) => (
              <div key={index} className=''>
                <span>{item}</span>
              </div>
            ))}
          </div>
        )
      }
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      renderCell: (params: any) => {
        const { row } = params
        const handleChangeStatus = (e: any) => {}
        return (
          <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
            <InputLabel id='demo-select-small-label'>Status</InputLabel>
            <Select
              labelId='demo-select-small-label'
              id='demo-select-small'
              value={status}
              label='Status'
              onChange={handleChange}
            >
              <MenuItem value={0}>Not verify</MenuItem>
              <MenuItem value={1}>Verify</MenuItem>
              <MenuItem value={2}>Disable</MenuItem>
              <MenuItem value={3}>Enable</MenuItem>
            </Select>
          </FormControl>
        )
      }
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 120,
      sortable: false,
      renderCell: (params: any) => {
        const { row } = params
        const handleClick = () => {
          console.log(row)
        }
        return (
          <>
            <IconButton className='text-mainColor' onClick={handleClick}>
              <EditIcon
                className='text-mainColor'
                sx={{
                  color: ''
                }}
              />
            </IconButton>
            <Tooltip title='Change account status'>
              <IconButton>
                <DeleteIcon className='text-red-700' />
              </IconButton>
            </Tooltip>
          </>
        )
      }
    }
  ]
  const rows = []
  for (let i = 0; i < carList.length; i++) {
    rows.push({
      id: carList[i].id | 1,
      stt: i + 1,
      email: carList[i].user,
      location: carList[i].currentLocationInHCM,
      brand: carList[i].car_brand,
      model: carList[i].car_model,
      type: carList[i].vehicle_type,
      license: carList[i].license_plate_type,
      seri: carList[i].car_seri,
      regis: carList[i].regis,
      createDate: carList[i].created ? moment(carList[i].created).format('DD/MM/YYYY') : moment().format('DD/MM/YYYY')
    })
  }

  const handlePagination = (e: any, value: any) => {
    // setPage(value)
  }

  return (
    <>
      <DataTable
        rows={rows}
        columns={columns}
        // totalPages={rows.length}
        // totalItems={rows?.length}
        // handleOnChange={handlePagination}
      />
    </>
  )
}

export default CarTable
