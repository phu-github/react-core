export interface DataTableProps {
    perPages?: number;
    currentPage?: number;
    totalRows?: number;
    title?: string;
    paginationComponent?: any;
    columns: Array<Object>;
    data: Array<Object>;
    currentSort: string;
    onSort: (column: any, sortDirection: string, event: any) => void;
    onChangePage: (page: number) => void;
    onSelectedRowsChange: (rowSelected: any) => void;
}
