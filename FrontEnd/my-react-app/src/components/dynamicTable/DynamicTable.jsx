import styles from "./DynamicTable.module.css";
import DeleteIcon from "../../assets/delete.svg?react";
function DynamicTable({ columns, data, onDelete, onRowClick }) {
  return (
    <div className={styles.tableContainer}>
      <table>
        <thead>
          <tr>
            {columns.map(({ header, accessor }) => (
              <th key={accessor} className={styles.headerCell}>
                {header}
              </th>
            ))}
            <th className={styles.headerCell} />
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={idx}
              onClick={() => onRowClick && onRowClick(row.id)}  // pass id on row click
              style={{ cursor: "pointer" }} // user feedback
            >
              {columns.map(({ accessor }) => (
                <td key={accessor} className={styles.bodyCell}>
                  {row[accessor]}
                </td>
              ))}
              <td
                className={styles.bodyCell}
                onClick={(e) => e.stopPropagation()} // prevent modal on delete icon click
              >
                <DeleteIcon
                  className={styles.deleteIcon}
                  onClick={() => onDelete(idx)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default DynamicTable;
