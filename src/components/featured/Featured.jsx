import { PlayArrow } from "@material-ui/icons";
import "./featured.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { debounce } from "lodash";

const random = Math.floor(Math.random() * 3) + 1;

export default function Featured({type}) {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = debounce( () => setIsHovered(true), 2000);
  const handleMouseLeave = () => {
    setIsHovered(false)
    handleMouseEnter.cancel()
  }

  if (random === 1) {
    return (
      <div className="featured">
        {type && (
          <div className="category">
          </div>
        )}
        <div onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
  
          {isHovered && (
            <div classname="video">
              <iframe width="1920" height="1080"
                src="https://www.youtube.com/embed/7pQQHnqBa2E?autoplay=1&mute=1"
                frameBorder="0"
                loading="lazy"
                scrolling="no"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            </div>
          )}
          
          <img className="banner" src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABcjSBl5DqnVNrMM_EbNEtdKASzOzm1fLufTl35GcbgW0kMemj0jsdOw_IMEDmKg3U2YWkkEzWPW2yq6ovN0AEmlsJQk6.jpg?r=fc9"
            alt=""
          />
          <div className="info">
            <img classname="logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Scarface_movie_red_logo.png"
              alt=""
            />
            <span className="desc">
              In a ruthless rise to Miami drug lord,
              a Cuban-born gangster descends into addiction,
              obsession and brutality, with grisly consequences.
            </span>
            <div className="buttons">
            <Link to="/watch/51" style={{ textDecoration: 'none' }}>
                <button className="play">
                  <PlayArrow />
                  <span>Play</span>
                </button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  else if (random === 2) {
    return (
      <div className="featured">
        {type && (
          <div className="category">
          </div>
        )}
        <div onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
  
          {isHovered && (
            <div classname="video">
              <iframe width="1920" height="1080"
                src="https://www.youtube.com/embed/tGpTpVyI_OQ?autoplay=1&mute=1"
                frameBorder="0"
                loading="lazy"
                scrolling="no"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            </div>
          )}
          
          <img className="banner" src="https://images4.alphacoders.com/133/thumb-1920-133184.jpg"
            alt=""
          />
          <div className="info">
            <img classname="logo" src="https://freepikpsd.com/file/2019/10/pulp-fiction-logo-png-2-Transparent-Images.png"
              alt=""
            />
            <span className="desc">
            The lives of two mob hitmen, a boxer, a gangster and his wife,
            and a pair of diner bandits intertwine
            in four tales of violence and redemption.
            </span>
            <div className="buttons">
            <Link to="/watch/52" style={{ textDecoration: 'none' }}>
                <button className="play">
                  <PlayArrow />
                  <span>Play</span>
                </button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  else{
    return (
      <div className="featured">
        {type && (
          <div className="category">
          </div>
        )}
        <div className onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
  
          {isHovered && (
            <div classname="video">
              <iframe width="1920" height="1080"
                src="https://www.youtube.com/embed/Hyag7lR8CPA?autoplay=1&mute=1"
                frameBorder="0"
                loading="lazy"
                scrolling="no"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            </div>
          )}
          
          <img className="banner" src="https://www.maxmag.gr/wp-content/uploads/2020/01/i51wnN9phojyn14xHjQt6rv1r0x-1.jpg"
            alt=""
          />
          <div className="info">
            <img classname="logo" src="https://images.fanart.tv/fanart/the-lighthouse-5e9963f18f2e2.png"
              alt=""
            />
            <span className="desc">
            Two lighthouse keepers try to maintain their sanity 
            while living on a remote and mysterious New England island in the 1890s.
            </span>
            <div className="buttons">
            <Link to="/watch/53" style={{ textDecoration: 'none' }}>
                <button className="play">
                  <PlayArrow />
                  <span>Play</span>
                </button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
