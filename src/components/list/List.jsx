import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons"
import { useRef, useState } from "react"
import ListItem from "../listItem/ListItem"
import "./list.scss"
// import MovieService from "../../services/movie_service"

export default function List(props) {
  const [movies, setMovies] = useState(props.props);

  
  

  // useEffect(() => {

  //   console.log('list -=-=-==-=-')
  //   console.log(movies)

  // }, [movies]);


  // console.log(horrorMovies)
  // console.log(adventureMovies)
  // console.log(dramaMovies)
  const[slideNumber, setSlideNumber] = useState(0)
  // const [movieCategory, setMovieCategory] = useState("");
  const listRef = useRef()

  // const categoriesFeatured = ['adventure', 'horror', 'comedy'];
  // categoriesFeatured.forEach((element) => {
  //    element == "adventure" ? setMovieCategory(element) : element = "horror" ? setMovieCategory(element) : setMovieCategory(element);
  // })

  const handleClick = (direction) => { 
    let distance = listRef.current.getBoundingClientRect().x - 50
     if (direction === "left" && slideNumber > 0){
       setSlideNumber(slideNumber - 1)
       listRef.current.style.transform = `translateX(${225 + distance}px)`
     }
     console.log(distance)
     if (direction === "right" && slideNumber < 5){
       setSlideNumber(slideNumber + 1)
      listRef.current.style.transform = `translateX(${-225 + distance}px)`
    }
  }
  
  //  const categoriesFeatured = ['adventure', 'horror', 'comedy'];


  return (

    <div className="list">
      <span className="listTitle">{movies[0]?.Categories[0].title}</span>
        <div className="wrapper">
            <ArrowBackIosOutlined 
            className="sliderArrow left" 
            onClick={() => handleClick("left")}/>
            <div className="container2" ref={listRef}>
          {movies && movies.map((movie, index) => {
            return (

              <ListItem index={index} props={movie} key={index} />

            )
          })
          }


          {/* <ListItem index={0} props={movies[0]} /> */}
          {/* <ListItem index={1}/>
                <ListItem index={2}/>
                <ListItem index={3}/>
                <ListItem index={4}/>
                <ListItem index={5}/>
                <ListItem index={6}/>
                <ListItem index={7}/>
                <ListItem index={8}/>
                <ListItem index={9}/>
                <ListItem index={10}/>
                <ListItem index={11}/> */}
                </div>
            <ArrowForwardIosOutlined className="sliderArrow right" onClick={() => handleClick("right")}/>
            </div>
    </div>
    )
}
