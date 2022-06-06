import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import MovieIcon from '@mui/icons-material/Movie';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import AuthService from "../../../services/auth_service";
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const logout = () => {
    AuthService.logout().then(
      () => {
        console.log("logout")
      }
    )
  }

  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Codeflix Admin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li><Link to='/admin'><DashboardIcon className="icon" />
            <span>DashBoard</span></Link>
          </li>
          <li><Link to='/'><HomeOutlinedIcon className="icon" />
            <span>Home</span></Link>
          </li>
          <p className="title">COMPONENTS</p>
          <li>
            <Link to='/admin/users'><PersonOutlineOutlinedIcon className="icon" />
              <span>Users</span></Link>
          </li>
          <li><Link to='/admin/moviespanel'><MovieIcon className="icon" /><span>Movies</span></Link>

          </li>
          <li><MovieCreationOutlinedIcon className="icon" />
            <span>Series</span>
          </li>
          <li><ListOutlinedIcon className="icon" />
            <span>Lists</span>
          </li>
          <li><AttachMoneyRoundedIcon className="icon" />
            <span>Sales</span>
          </li>
          <p className="title">SERVICES</p>
          <li><ReportOutlinedIcon className="icon" />
            <span>Reports</span>
          </li>
          <li><MailOutlinedIcon className="icon" />
            <span>Mail</span>
          </li>
          <li><FeedbackOutlinedIcon className="icon" />
            <span>Feedback</span>
          </li>
          <p className="title">USER</p>
          <li><Link to='/account'><AdminPanelSettingsOutlinedIcon className="icon" />
            <span>Profile</span></Link>
          </li>
          <li><Link to='/' onClick={logout} ><ExitToAppOutlinedIcon className="icon" />
            <span>Logout</span></Link>
          </li>
        </ul>
      </div>
      <div className="bottom">

      </div>
    </div>
  )
}

export default Sidebar