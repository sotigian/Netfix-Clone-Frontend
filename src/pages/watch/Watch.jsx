import { ArrowBackOutlined } from '@material-ui/icons'
import "./watch.scss"
import AuthService from '../../services/auth_service';
import MovieService from '../../services/movie_service'
import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

export default function Watch() {
  const nav = useNavigate();
  const [movie, setMovie] = useState();
  const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());
  useEffect(() => {
    MovieService.getOneMovie(currentUser.id, window.location.pathname.split('/')[2]).then((res) => {
      if (res?.message === 'You need to refresh your subscription') {
        window.alert(res.message);
        nav('/plans');

      } else {
        console.log(res)
        setMovie(res)
      }
    })

  }, []);
  //console.log(movie.movie.movieContent);
  return ({ movie } &&
    <div className='watch'>
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />Home
        </div>
      </Link>
        <iframe className='videoz'
        width="885" 
        height="498" 
        src={`https://www.youtube.com/embed/${movie?.movie.movieContent}?autoplay=1`}
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen></iframe>
          
    </div>
  )
}
// K2P2ByOtOOs