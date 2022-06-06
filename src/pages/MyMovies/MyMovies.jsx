import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import AuthService from "../../services/auth_service"
import MovieService from "../../services/movie_service"
import ListItem from "../../components/listItem/ListItem";
import './MyMovies.scss';
import Footer from "../../components/footer/Footer";



const MyMovies = () => {
    const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        MovieService.getMyMovies(currentUser.id).then(res => {
            console.log(res)
            setMovies(res);
        });
    }, [])

    return (
        <>
            <Navbar />
            <div className="album py-5 bg-black main">
                <div className="container list-container">
                    <h1 className="my-watclist">My Watchlist</h1>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {/* {movies?    : spinner} */}
                        {movies && movies.map((movie, index) => {
                            return (
                                <div className="col" key={movie.id}>
                                    <div className="card shadow-sm" >
                                        <ListItem props={movie} />
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )

}

export default MyMovies;
