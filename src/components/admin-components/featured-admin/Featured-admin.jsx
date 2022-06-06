import "./featured.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

const FeaturedAdmin = () => {
  return (
    <div className="featuredAdmin">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={2} />
        </div>
        <p className="title">Total sales today</p>
        <p className="amount">4250$</p>
        <p className="desc">Previous transactions processing</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">
              Target
            </div>
            <div className="itemResult">
              <KeyboardArrowDown fontSize="small" />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">
              Last Week
            </div>
            <div className="itemResult">
              <KeyboardArrowUp fontSize="small" />
              <div className="resultAmount">$150k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">
              Last Month
            </div>
            <div className="itemResult">
              <KeyboardArrowUp fontSize="small" />
              <div className="resultAmount">$524k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedAdmin