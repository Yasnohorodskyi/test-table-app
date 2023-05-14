import { FC, ChangeEvent, useState } from "react";
import { ReactComponent as Glass } from "../../../assets/svg/glass.svg";

import { ITableSearchProps } from "../index.types";
import "./tableSearch.styles.css";

const TableSearch: FC<ITableSearchProps> = ({ getSearchData }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handlerSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    getSearchData(e.target.value);
  };

  return (
    <div className="table-search">
      <Glass className="table-search__icon" />
      <input className="table-search__input" type="text" value={searchTerm} onChange={handlerSearch} />
    </div>
  );
};

export default TableSearch;
