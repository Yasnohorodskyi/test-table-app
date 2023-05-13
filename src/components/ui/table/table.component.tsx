import { FC, useState } from "react";

import { ITableProps, ITableSizes } from "./table.types";
import TableSearch from "./tableSearch.component";
import "./table.styles.css";

const defaultTableSizes: ITableSizes = {
  headerHeight: 3,
  rowHeight: 3,
  striped: false,
};

const Table: FC<ITableProps> = ({ data, tableHeaders, tableSizes = defaultTableSizes }) => {
  const [tableData, setTabledate] = useState(data);

  const getSearchData = (searchValue: string): void => {
    const value = searchValue.trim().toLowerCase();
    const filteredData = data.filter((item) => {
      const searchBase = `${item.first_name} ${item.last_name}`.toLowerCase();
      return searchBase.includes(value);
    });
    setTabledate(filteredData);
  };

  const isHighlighted = (row: { [key: string]: string }): boolean => {
    const firstName = row["first_name"].toLowerCase();
    const lastName = row["last_name"].toLowerCase();
    return firstName.includes("b") && lastName.includes("e");
  };

  return (
    <section className="table-wrap">
      <TableSearch getSearchData={getSearchData} />
      <div className="table-container">
        <table className="table">
          <thead className="table__headers">
            <tr>
              {tableHeaders?.map((item) => (
                <th
                  key={item}
                  className="table__headers-item"
                  style={{ height: `${tableSizes?.headerHeight}rem` }}
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="table__content">
            {tableData.map((row, i) => (
              <tr key={i} {...(tableSizes.striped && { className: "striped" })}>
                {Object.keys(row).map((key) => (
                  <td
                    key={key}
                    className={`table__content-item ${
                      isHighlighted(row) && (key === "first_name" || key === "last_name")
                        ? "highlighted"
                        : ""
                    }`}
                  >
                    {row[key].includes("http") ? <img src={row[key]} alt="" /> : row[key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table;
