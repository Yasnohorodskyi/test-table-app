import { FC, ChangeEvent, useState } from "react";
import { ReactComponent as Glass } from "../../assets/svg/glass.svg";

import { ISearchProps } from "./index.types";
import "./index.styles.css";

const InputSearch: FC<ISearchProps> = ({ getSearchData }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    getSearchData(value);
  };

  return (
    <div className="input-search">
      <Glass className="input-search__icon" />
      <input
        className="input-search__input"
        type="text"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default InputSearch;
