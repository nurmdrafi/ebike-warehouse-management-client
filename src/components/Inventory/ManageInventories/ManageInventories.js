import React, { useEffect, useMemo, useState } from "react";
import { useTable } from "react-table/dist/react-table.development";
import "./ManageInventory.css";
import axios from "axios";

const ManageInventories = () => {
  const [isRefresh, setIsRefresh] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      const url = "http://localhost:5000/inventory";
      const { data } = await axios.get(url);
      setData(data);
    };
    getItems();
  }, [isRefresh]);

  const handleDelete = async (id) => {
    const _id = id.value;
    const url = `http://localhost:5000/inventory/${_id}`;
    await axios.delete(url).then((response) => {
      if (response) {
        setIsRefresh(!isRefresh);
      }
    });
  };

  const columns = useMemo(
    () => [
      {
        Header: "#",
        Cell: ({ row }) => {
          return <div className="text-center">{row.index + 1}</div>;
        },
      },
      {
        Header: "Image",
        accessor: "image",
        Cell: ({ cell }) => {
          return (
            <div className="table-image-container">
              <img className="table-image" src={cell.row.values.image} alt="" />
            </div>
          );
        },
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Brand",
        accessor: "brand",
        Cell: ({ cell }) => {
          return <div className="text-center">{cell.row.values.brand}</div>;
        },
      },
      {
        Header: "Quantity",
        accessor: "quantity",
        Cell: ({ cell }) => {
          return <div className="text-center">{cell.row.values.quantity}</div>;
        },
      },
      {
        Header: "Action",
        id: "delete-button",
        accessor: "_id",
        Cell: ({ cell }) => (
          <div className="text-center">
            <button
              className="btn btn-danger"
              value={cell.row.values._id}
              onClick={() => handleDelete(cell)}
            >
              Delete
            </button>
          </div>
        ),
      },
    ],
    [isRefresh]
  );

  const tableInstance = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div>
      <table {...getTableProps()} className="container my-5">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} className="table-header">
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()} className="table-cell">
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ManageInventories;
