import React, { useEffect, useMemo, useState } from "react";
import { useTable } from "react-table/dist/react-table.development";
import "./ManageInventory.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ManageInventories = () => {
  const [isRefresh, setIsRefresh] = useState(false);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getItems = async () => {
      const url = "https://ebike-warehouse.herokuapp.com/inventory";
      const { data } = await axios.get(url);
      setData(data);
    };
    getItems();
  }, [isRefresh]);

  const handleDelete = async (id) => {
    const _id = id.value;
    const proceed = window.confirm("Are you sure want to delete?");
    if (proceed) {
      const url = `https://ebike-warehouse.herokuapp.com/inventory/${_id}`;
      await axios.delete(url).then((res) => {
        setIsRefresh(!isRefresh);
        toast.success("Delete successful.")
      });
    }
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
    <div className="container">
      <Toaster/>
      <div className="d-flex justify-content-end mt-5">
        <button className="btn btn-success" onClick={() => navigate("/add-items")}>Add New Item</button>
      </div>
      <table {...getTableProps()} className="container my-4">
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
