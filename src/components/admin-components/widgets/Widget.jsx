import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { AccountBalanceWalletOutlined, MonetizationOnOutlined, ShoppingCartCheckoutOutlined } from "@mui/icons-material";


const Widget = ({ type }) => {

  let data;
  switch(type){
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link:"See all users",
        icon: 
          <PersonOutlineIcon className="icon"/>,    
      };
      break;
      case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link:"View all orders",
        icon: 
          <ShoppingCartCheckoutOutlined className="icon"/>,    
      };
      break;
      case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link:"View Earning",
        icon: 
          <MonetizationOnOutlined className="icon"/>,    
      };
      break;
      case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link:"See Details",
        icon: 
          <AccountBalanceWalletOutlined className="icon"/>,    
      };
      break;
      default:
        break;
  }


  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage">
            <KeyboardArrowUpIcon/>
            50%
            </div>
            {data.icon}
        </div>

    </div>
  )
}

export default Widget