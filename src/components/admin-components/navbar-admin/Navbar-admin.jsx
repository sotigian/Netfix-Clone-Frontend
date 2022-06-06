import "./navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListIcon from '@mui/icons-material/List';

const NavbarAdmin = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search"/>
          <SearchOutlinedIcon className="icon"/>
        </div>
        <div className="items">
          <div className="item">
              <NotificationsNoneIcon className="icon"/>
          </div>
          <div className="item">
              <FullscreenIcon className="icon"/>
          </div>
          <div className="item">
              <ChatBubbleOutlineIcon className="icon"/>
          </div>
          <div className="item">
              <ListIcon className="icon"/>
          </div>
          <div className="item">
              <img src="https://images.pexels.com/photos/11478152/pexels-photo-11478152.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
               alt="" 
               className="avatar"
               />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavbarAdmin