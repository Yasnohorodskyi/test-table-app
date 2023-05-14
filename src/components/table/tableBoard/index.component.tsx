import { FC } from "react";

import { ITableProps, ITableSizes } from "../index.types";
import "./index.styles.css";

const defaultTableSizes: ITableSizes = {
  headerHeight: 3,
  rowHeight: 3,
  striped: false,
};

const TableBoard: FC<ITableProps> = ({ data, tableHeaders, tableSizes = defaultTableSizes, highLightRequets }) => {
  const highlightedFirstParam = highLightRequets?.first_name || "";
  const highlightedSecondParam = highLightRequets?.last_name || "";

  const isHighlighted = (row: { [key: string]: string }): boolean => {
    const firstName = row["first_name"].toLowerCase();
    const lastName = row["last_name"].toLowerCase();
    return firstName.includes(highlightedFirstParam) && lastName.includes(highlightedSecondParam);
  };

  return (
      <div className="table-board__container">
        <table className="table-board">
          <thead className="table-board__headers">
            <tr>
              {tableHeaders?.map((item) => (
                <th
                  key={item}
                  className="table-board__headers-item"
                  style={{ height: `${tableSizes?.headerHeight}rem` }}
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="table-board__content">
            {data.map((row, i) => (
              <tr key={i} {...(tableSizes.striped && { className: "striped" })}>
                {Object.keys(row).map((key) => (
                  <td
                    key={key}
                    className={`table-board__content-item ${
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
  );
};

export default TableBoard;
