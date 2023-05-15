import { FC } from "react";
import { ITableProps, ITableSizes } from "./index.types";
import "./index.styles.css";

const defaultTableSizes: ITableSizes = {
  headerHeight: 3,
  rowHeight: 3,
  striped: false,
};

const TableBoard: FC<ITableProps> = ({
  data,
  tableHeaders,
  tableSizes = defaultTableSizes,
  scrollable = false,
  highLightRequets,
}) => {
  const { first_name: highlightedFirstParam = "", last_name: highlightedSecondParam = "" } = highLightRequets || {};
  const isScrollable = scrollable ? "34rem" : "auto";

  const isHighlighted = (row: { [key: string]: string }): boolean => {
    const firstName = row.first_name.toLowerCase();
    const lastName = row.last_name.toLowerCase();
    return firstName.includes(highlightedFirstParam) && lastName.includes(highlightedSecondParam);
  };

  return (
    <div className="table-board__container" style={{ maxHeight: isScrollable }}>
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
            <tr key={i} className={tableSizes.striped ? "striped" : undefined}>
              {Object.entries(row).map(([key, value]) => (
                <td
                  key={key}
                  className={`table-board__content-item ${
                    isHighlighted(row) && (key === "first_name" || key === "last_name")
                      ? "highlighted"
                      : ""
                  }`}
                >
                  {value.includes("http") ? <img src={value} alt="" /> : value}
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

