import { FC, ChangeEvent, useState } from "react";
import { ReactComponent as Glass } from "../../../assets/svg/glass.svg";

import { ITableSearchProps } from "./table.types";

const TableSearch: FC<ITableSearchProps> = ({ getSearchData }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handlerSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    getSearchData(e.target.value);
  };

  return (
    <div className="table__search">
      <Glass className="table__search-icon" />
      <input className="table__search-input" type="text" value={searchTerm} onChange={handlerSearch} />
    </div>
  );
};

export default TableSearch;
