import { FC, useState, useEffect } from "react";

import { ITableProps, ITableSizes } from "./index.types";
import InputSearch from "../inputSearch/index.component";
import TableBoard from "./tableBoard/index.component";

const defaultTableSizes: ITableSizes = {
  headerHeight: 3,
  rowHeight: 3,
  striped: false,
};

const Table: FC<ITableProps> = ({
  data,
  tableHeaders,
  tableSizes = defaultTableSizes,
  highLightRequets,
  searchRequest = "",
}) => {
  const [tableData, setTabledate] = useState(data);

  const getSearchData = (searchValue: string): void => {
    const value = searchValue.trim().toLowerCase();
    const filteredData = data.filter((item) => {
      const searchBase = `${item.first_name} ${item.last_name}`.toLowerCase();
      return searchBase.includes(value);
    });
    setTabledate(filteredData);
  };

  useEffect(() => {
    if (searchRequest) getSearchData(searchRequest);
  }, []);

  return (
    <section className="table-wrap">
      <InputSearch getSearchData={getSearchData} />
      <TableBoard
        data={tableData}
        tableSizes={tableSizes}
        tableHeaders={tableHeaders}
        highLightRequets={highLightRequets}
      />
    </section>
  );
};

export default Table;
