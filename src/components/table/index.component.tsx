import { FC, useState, useEffect } from "react";

import { ITableProps} from "./tableBoard/index.types";
import InputSearch from "../inputSearch/index.component";
import TableBoard from "./tableBoard/index.component";

import "./index.styles.css";

const Table: FC<ITableProps> = ({
  data,
  tableHeaders,
  tableSizes,
  highLightRequets,
  searchRequest = "",
  scrollable
}) => {
  const [tableData, setTableDate] = useState(data);

  const getSearchData = (searchValue: string): void => {
    const value = searchValue.trim().toLowerCase();
    const filteredData = data.filter((item) => {
      const searchBase = `${item.first_name} ${item.last_name}`.toLowerCase();
      return searchBase.includes(value);
    });
    setTableDate(filteredData);
  };

  useEffect(() => {
    if (searchRequest) getSearchData(searchRequest);
  }, [searchRequest]);

  return (
    <section className="table-wrap">
      <InputSearch getSearchData={getSearchData} />
      <TableBoard
        data={tableData}
        tableSizes={tableSizes}
        tableHeaders={tableHeaders}
        highLightRequets={highLightRequets}
        scrollable={scrollable}
      />
    </section>
  );
};

export default Table;
