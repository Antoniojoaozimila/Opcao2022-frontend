import React from 'react';
import MUIDataTable from "mui-datatables";


const options = {
  filterType: 'checkbox',
  rowsPerPage:7,
  rowsPerPageOptions:[7,10,25,100]
};

const TableComponent = ({title,rows,columns}) => {
  return (
    <MUIDataTable
      title={title}
      data={rows()}
      columns={columns()}
      options={options}
    />
  )
}

export default TableComponent