import "./MoviesPanel.scss"
import { Link } from "react-router-dom";
import Sidebar from "../../../components/admin-components/sidebar/Sidebar"
import NavbarAdmin from "../../../components/admin-components/navbar-admin/Navbar-admin"
import DatatableMovies from "../../../components/admin-components/datatable-movies/Datatable-movies"

function ListAdmin() {
  return (
    <div className="listAdmin">
      <Sidebar />
      <div className="listAdminContainer">
        <NavbarAdmin />
        <DatatableMovies />

        <Link to="/admin/moviespanel/addmovie"><button className="addMovieButton">Add Movie</button></Link>
      </div>
    </div>
  )
}

export default ListAdmin