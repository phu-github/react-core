import React from 'react';
import Table from 'react-data-table-component';
import {DataTableProps} from './DataTable.props';
import './DataTable.styles.css';
import {Images} from "../../../configs/images";
import {Image} from "../../atoms/Image";

export const DataTable: React.FC<DataTableProps> = ({
  perPages,
  currentPage,
  totalRows,
  title,
  columns,
  data,
  onChangePage,
  onSelectedRowsChange,
  paginationComponent,
  currentSort,
  onSort
}) => {
  // @ts-ignore
  const Checkbox = React.forwardRef(({ onClick, ...rest }, ref) =>
  {
    return(
      <>
        <div className="magic-check-wrapper pb-5" style={{ backgroundColor: '' }}>
          <input
            type="checkbox"
            className="magic-checkbox"
            style={{ height: '20px', width: '20px' }}
            onClick={ onClick }
            {...rest}
          />
          <label className="magic-label"  />
        </div>
      </>
    )
  })
  return(
      <Table
          title={title}
          noDataComponent={<div className="no-data-available">No Data Available</div>}
          columns={columns}
          data={data}
          defaultSortFieldId={6}
          sortServer={true}
          pagination={true}
          paginationServer
          paginationDefaultPage={currentPage}
          paginationTotalRows={totalRows}
          selectableRows
          selectableRowsNoSelectAll={true}
          responsive={true}
          paginationPerPage={perPages}
          onChangePage={onChangePage}
          paginationComponent={paginationComponent}
          selectableRowsComponent={Checkbox}
          onSelectedRowsChange={onSelectedRowsChange}
          onSort={onSort}
          sortIcon={
              <>
                {currentSort === 'asc' ?
                  <Image srcImg={Images.SortArrowUp} width='10px' height='11px' margin='0 5px 0 0'></Image>
                  : <Image srcImg={Images.SortArrowDown} width='10px' height='11px' margin='0 5px 0 0'></Image>
                }
              </>
          }
      />
  );
};
