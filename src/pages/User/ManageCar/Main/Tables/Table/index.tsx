import * as React from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { Paper } from '@mui/material'
import './styles.css'
// import PaginationCustom from '../Pagination'
interface Props {
  rows: any
  columns: any
  totalPages?: number
  totalItems?: number
  handleOnChange?: any
}

const DataTable = ({ rows, columns, totalPages, totalItems = 0, handleOnChange }: Props) => {
  return (
    <Paper className=''>
      <div className='' style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 }
            }
          }}
          pageSizeOptions={[5, 10]}
          // checkboxSelection
        />
      </div>
      <div className=''>
        {/* <p className=''>{`Total: ${totalItems}`}</p> */}
        {/* <PaginationCustom totalPages={totalPages} handleOnChange={handleOnChange} /> */}
      </div>
    </Paper>
  )
}

export default DataTable
