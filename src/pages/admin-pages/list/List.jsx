import "./list.scss"
import Sidebar from "../../../components/admin-components/sidebar/Sidebar"
import NavbarAdmin from "../../../components/admin-components/navbar-admin/Navbar-admin"
import Datatable from "../../../components/admin-components/datatable/Datatable"

function ListAdmin() {
  return (
    <div className="listAdmin">
      <Sidebar />
      <div className="listAdminContainer">
        <NavbarAdmin />
        <Datatable />
      </div>
    </div>
  )
}

export default ListAdmin