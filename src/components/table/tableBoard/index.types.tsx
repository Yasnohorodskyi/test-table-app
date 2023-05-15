export interface ITableSizes {
  headerHeight: number;
  rowHeight: number;
  striped: boolean;
};

export interface ITableData {
  avatar: string;
  first_name: string;
  last_name: string;
  email: string;
  ethereum_address: string;
  ip_address: string;
  [key: string]: string;
}

export interface ITableProps {
  data: ITableData[];
  tableHeaders: string[];
  tableSizes?: ITableSizes ;
  scrollable?: boolean;
  searchRequest?: string;
  highLightRequets?: {
    first_name: string;
    last_name: string;
  };
};
