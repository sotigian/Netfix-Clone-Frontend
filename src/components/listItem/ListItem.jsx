import "./listItem.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";


export default function ListItem({ index, props }) {
  //console.log(props.Categories[0]?.title)
  const listItem = useRef();
  const navigate = useNavigate();
  const watch = () => {
    //console.log(listItem.current.id);

    navigate(`/watch/${listItem.current.id}`);
  };

  // useEffect(() => {
  //   console.log('ListItem-=-==-=-=-')
  //   console.log(props)

  // }, []);

  const [isHovered, setIsHovered] = useState(false);
  // const trailer =
  //   "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div
      className="listItem" id={props?.id} ref={listItem}
      style={{ left: isHovered && index && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}

    >
      <img
        src={`.././images/${props?.titleImage}`}
        alt=""
      />
      {isHovered && (
        <div >
          <iframe className='videosTrailer'
            width="885"
            height="498"
            src={`https://www.youtube.com/embed/${props?.movieContent}?autoplay=1&mute=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay"
            allowFullScreen></iframe>
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow onClick={watch} className="icon" type="PlayArrow"></PlayArrow>
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <span>{props?.title}</span>
            <div className="itemInfoTop">
              <span>{props?.length}</span>
              <span className="limit">16+</span>
              <span>{props?.year}</span>
            </div>
            <div className="desc">
              {props?.description}
            </div>
            <div className="genre">{props?.Categories.map((cat) => { return `${cat.title} ` })}</div>
          </div>
        </div>
      )}
    </div>
  );
}