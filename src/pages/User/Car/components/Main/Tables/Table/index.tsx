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
    <Paper className='data-table'>
      <div className='data-table_container'>
        <DataGrid
          rows={rows}
          columns={columns}
          getRowId={(row) => row.stt}
          loading={!rows.length}
          components={{ Toolbar: GridToolbar }}
          autoHeight
          density='comfortable'
          rowHeight={60}
          // disableColumnFilter={true}
          disableDensitySelector={true}
          // initialState={{
          //   pagination: {
          //     paginationModel: { page: 0, pageSize: 15 }
          //   }
          // }}
          // pageSizeOptions={[5, 10]}
          // disableColumnMenu={true}
          // hideFooterPagination
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
