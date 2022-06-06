import Sidebar from "../../../components/admin-components/sidebar/Sidebar"
import NavbarAdmin from "../../../components/admin-components/navbar-admin/Navbar-admin"
import "./admin.scss"
import Widget from "../../../components/admin-components/widgets/Widget"
import FeaturedAdmin from "../../../components/admin-components/featured-admin/Featured-admin"
import Chart from "../../../components/admin-components/chart/Chart"

const AdminPage = () => {
  return (
    <div className="admin">
      <Sidebar />
      <div className="adminContainer">
        <NavbarAdmin />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <FeaturedAdmin />
          <Chart />
        </div>
      </div>
    </div>
  )
}

export default AdminPage;