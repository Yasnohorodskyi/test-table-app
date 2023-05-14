export interface ITableSizes {
  headerHeight: number;
  rowHeight: number;
  striped: boolean;
};

export interface ITableProps {
  data: { [key: string]: string }[];
  tableHeaders: string[];
  tableSizes?: ITableSizes ;
  searchRequest?: string;
  highLightRequets?: {
    first_name: string;
    last_name: string;
  };
};
