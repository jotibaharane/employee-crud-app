import React, { useEffect } from "react";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Avatar from "@mui/material/Avatar";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";

function stringToColor(string) {
  let hash = 0;
  let i;
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = "#";
  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

function stringAvatar(name) {
  let children = name.split(" ");
  children =
    children[1] !== undefined
      ? children[0][0] + children[1][0]
      : children[0][0] + children[0][1];
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: children,
  };
}

function Employees() {
  const navigate = useNavigate();
  const [rows, setRows] = React.useState(
    JSON.parse(localStorage.getItem("data"))
  );
  const deleteUser = React.useCallback(
    (id) => () => {
      setTimeout(() => {
        setRows((prevRows) => prevRows.filter((row) => row.id !== id));
      });
    },
    []
  );

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(rows));
  }, [rows]);

  const updateUser = React.useCallback(
    (id) => () => {
      navigate(`/employees/update/${id}`);
    },
    []
  );

  const columns = React.useMemo(
    () => [
      {
        field: "name",
        headerName: "name",
        width: 300,
        renderCell: (params) => {
          console.log(params.row.name);
          return (
            <>
              <Avatar {...stringAvatar(params.value)} />
              {params.value}
            </>
          );
        },
      },
      { title: "Email", field: "email", width: 300 },
      { title: "Phone", field: "mobile", width: 200 },
      {
        field: "Actions",
        type: "actions",
        width: 150,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="update"
            onClick={updateUser(params.id)}
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={deleteUser(params.id)}
          />,
        ],
      },
    ],
    [deleteUser]
  );
  return (
    <div style={{ marginLeft: "150px" }}>
      <Nav />
      <div style={{ height: 500, width: "950px" }}>
        <DataGrid columns={columns} rows={rows} />
      </div>
    </div>
  );
}
export default Employees;
