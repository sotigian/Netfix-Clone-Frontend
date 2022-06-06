import "./movies.scss";
import ListItem from "../../components/listItem/ListItem";
import { useEffect, useState } from "react";
import MovieService from '../../services/movie_service'
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const action = "read"

const Movies = () => {
    const [movies, setMovies] = useState();
    const [filteredMovies, setFilteredMovies] = useState([]);

    useEffect(() => {
        MovieService.getXMovies(action).then((res) => {
            setMovies(res)
            setFilteredMovies(res)
        })

    }, []);
    const handleChange = async (e) => {
        const results = await MovieService.getMoviesByGenre(e.target.value);
        setMovies(results);
        setFilteredMovies(results);

    }

    const filterMovies = (e) => {
        // console.log(e.target.value)
        setFilteredMovies(movies.filter(movie => movie.title.toLowerCase().includes(e.target.value.toLowerCase())));
    }

    return (
        <div>
            <Navbar filterMovies={filterMovies} />
            <main className="bg-dark" >
                <section className="py-5 text-center container ">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <div className="featured">
                                <div className="category">
                                    <span>Movies</span>
                                    <select name="genre" id="genre" onChange={handleChange}>
                                        <option value="All">All</option>
                                        <option value="Adventure">Adventure</option>
                                        <option value="Comedy">Comedy</option>
                                        <option value="Horror">Horror</option>
                                        <option value="Romance">Romance</option>
                                        <option value="Sci-fi">Sci-fi</option>
                                        <option value="Crime">Crime</option>
                                        <option value="Documentary">Documentary</option>
                                        <option value="Drama">Drama</option>
                                    </select>
                                </div>

                            </div>

                        </div>
                    </div>
                </section>

                <div className="album py-5 bg-black">
                    <div className="container">

                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            {/* {movies?    : spinner} */}
                            {filteredMovies && filteredMovies.map((movie, index) => {
                                return (
                                    <div className="col" key={movie.id}>
                                        <div className="card shadow-sm" >
                                            <ListItem props={movie} ></ListItem>
                                        </div>
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
export default Movies;