
import "./datatable-movies.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "./datatablesource-movie";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import MovieService from '../../../services/movie_service'
const action = "read"
const Datatable = () => {
  // const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    console.log(id);
    if (window.confirm(`Do you want to delete movie with id: ${id}?`)) {
      MovieService.deleteMovie(id)
        .then((res) => {
          alert(res.message);
        }).catch(err => {
          alert(err.message);
        })
    } else {
      console.log("You pressed Cancel!");
    }

    // setData(data.filter((item) => item.id !== id));
  };

  const [movies, setMovies] = useState();
  useEffect(() => {
    MovieService.getXMovies(action).then((res) => {
      setMovies(res)
    })

  }, []);

  //console.log(movies)



  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        //console.log(params)
        return (
          <div className="cellAction">
            <Link to={`/admin/moviespanel/editmovie/${params.row.id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <DataGrid
        className="datagrid"
        rows={movies}
        columns={userColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;