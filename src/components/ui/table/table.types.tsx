export interface ITableSizes {
  headerHeight: number;
  rowHeight: number;
  striped: boolean;
};

export interface ITableProps {
  data: { [key: string]: string }[];
  tableHeaders: string[];
  tableSizes?: ITableSizes ;
};

export interface ITableSearchProps {
  getSearchData: (value: string) => void;
}
