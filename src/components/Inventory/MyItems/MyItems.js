import React, { useEffect, useState, useMemo } from "react";
import { useTable } from "react-table/dist/react-table.development";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const MyItems = () => {
  const [user, userLoading] = useAuthState(auth);
  const [isRefresh, setIsRefresh] = useState(false);
  const [data, setData] = useState([]);
  const getItemsByEmail = async () => {
      const email = user?.email;
      if(email){
        const url = `https://ebike-warehouse.herokuapp.com/inventory?userEmail=${email}`;
        await axios.get(url)
        .then(({data}) => {
            setData(data)
        })
        .catch(err =>{
            console.log(err)
        })
      }
  };

  useEffect(() => {
    getItemsByEmail();
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
    
    if(userLoading){
        return <Loading/>
      }

  return <div className="container">
  <Toaster/>
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
};

export default MyItems;
