import "./editmovie.scss";
import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { useNavigate, } from "react-router-dom";
// import AuthService from '../../../services/auth_service';
import MovieService from "../../../../services/movie_service";
import Sidebar from "../../../../components/admin-components/sidebar/Sidebar";
import NavbarAdmin from "../../../../components/admin-components/navbar-admin/Navbar-admin";
import AuthService from "../../../../services/auth_service";


const action = "update"

export default function EditMovie() {
    const [movie, setMovie] = useState();
    const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());

    useEffect(() => {
        MovieService.getOneMovieToEdit(window.location.pathname.split('/')[4]).then((res) => {
            setMovie(res.movie)
        })
        //console.log(movie);
    }, []);


    const { register, handleSubmit, formState: { errors } } = useForm();


    const handleEditMovie = (data) => {        
        console.log(movie)
        if (window.confirm("Do you want to edit this movie?")) {
            MovieService.addOrEditMovie(movie, action)
            .then((res) => {
                alert(res.message);
            }).catch(err =>{
                alert(err.message);
            }) 
        } else {
            console.log("You pressed Cancel!");
        }
               
    };

    const handleError = (error) => {
    };


    //console.log(errors.description)
    return (
        <div className="addmovie">
            <Sidebar />
            <div className="addmoviecontainer">
                <NavbarAdmin />
                <div className="top">
                <h1>Edit Movie</h1>
                </div>
                <div className="bottom">
                    <div className="mainform">
                        <form onSubmit={handleSubmit(handleEditMovie, handleError)}>


                            {/* 1st input  */}


                            <div className="forminput">
                                <label>Title</label>
                                <input type="title" placeholder="Title" value={movie?.title}
                                    {...register("title")}                                    
                                    onChange={event => setMovie({
                                        ...movie,
                                        title: event.target.value
                                    })}
                                />
                                {/* {errors.title?.type === 'required' && <div className="alert alert-danger"> Title is required</div>} */}
                            </div>



                            {/* 2rd input  */}


                            <div className="forminput">
                                <label>Duration</label>
                                <input type="text" placeholder="Duration" value={movie?.length}
                                    {...register("length", {  maxLength: 20, pattern: /^([0-1][0-9]|[2][0-3]):([0-5][0-9])$/ })}
                                    onChange={event => setMovie({
                                        ...movie,
                                        length: event.target.value
                                    })}
                                />
                                {/* {errors.length?.type === 'required' && <div className="alert alert-danger"> Duration is required</div>} */}
                                {errors.length?.type === 'pattern' && <div className="alert alert-danger"> Wrong input, match hh:mm .</div>}
                            </div>


                            {/* 3th input  */}


                            <div className="forminput">
                                <label>Movie Content</label>
                                <input type="text" placeholder="Movie Content" value={movie?.movieContent}
                                    {...register("movieContent")}
                                    onChange={event => setMovie({
                                        ...movie,
                                        movieContent: event.target.value
                                    })}
                                />
                                {/* {errors.movieContent?.type === 'required' && <div className="alert alert-danger"> Movie is required</div>} */}
                            </div>


                            {/* 4th input  */}


                            <div className="forminput">
                                <label>Production Year</label>
                                <input type="number" placeholder="Year of production" value={movie?.year}
                                    {...register("year", { min: 1920, max: new Date().getFullYear() })}
                                    onChange={event => setMovie({
                                        ...movie,
                                        year: event.target.value
                                    })}
                                />
                                {/* {errors.year?.type === 'required' && <div className="alert alert-danger"> Year of production is required</div>} */}
                                {errors.year?.type === 'min' && <div className="alert alert-danger"> Year of production must be between 1920-{new Date().getFullYear()}  </div>}
                                {errors.year?.type === 'max' && <div className="alert alert-danger"> Year of production must be between 1920-{new Date().getFullYear()}</div>}
                            </div>


                            {/* 5th input  */}


                            <div className="forminput">
                                <label>Production Country</label>
                                <input type="text" placeholder="Production country" value={movie?.prodCountry}
                                    {...register("prodCountry")}
                                    onChange={event => setMovie({
                                        ...movie,
                                        prodCountry: event.target.value
                                    })}
                                />
                                {/* {errors.prodCountry?.type === 'required' && <div className="alert alert-danger"> Production country is required</div>} */}
                            </div>


                            {/* 6th input  */}


                            <div className="forminput">
                                <label>Image title</label>
                                <input type="text" placeholder="Title Image" value={movie?.titleImage}
                                    {...register("titleImage")}
                                    onChange={event => setMovie({
                                        ...movie,
                                        titleImage: event.target.value
                                    })}
                                />
                                {/* {errors.titleImage?.type === 'required' && <div className="alert alert-danger"> Title image is required</div>} */}
                            </div>


                            {/* 7th input  */}


                            <div className="forminput">
                                <label>Trailer Image</label>
                                <input type="text" placeholder="Trailer image" value={movie?.titleImage}
                                    {...register("trailerImage")}
                                    onChange={event => setMovie({
                                        ...movie,
                                        trailerImage: event.target.value
                                    })}
                                />
                                {/* {errors.trailerImage?.type === 'required' && <div className="alert alert-danger"> Trailer image is required</div>} */}
                            </div>


                            {/* 8th input  */}

                            <div className="forminput">
                                <label>Main image</label>
                                <input type="text" placeholder="Main image" value={movie?.titleImage}
                                    {...register("mainImage")}
                                    onChange={event => setMovie({
                                        ...movie,
                                        mainImage: event.target.value
                                    })}
                                />
                                {/* {errors.mainImage?.type === 'required' && <div className="alert alert-danger"> Main image is required</div>} */}
                            </div>


                            {/* 9th input  */}


                            <div className="forminput">
                                <label>Upload the trailer</label>
                                <input type="text" placeholder="Trailer" value={movie?.trailer}
                                    {...register("trailer")}
                                    onChange={event => setMovie({
                                        ...movie,
                                        trailer: event.target.value
                                    })}
                                />
                                {/* {errors.trailer?.type === 'required' && <div className="alert alert-danger"> Trailer is required</div>} */}
                            </div>


                            {/* 10th input  */}




                            <div className="forminput">
                                <label>Summary</label>
                                <textarea type="text" placeholder="Summary" className="textarea" value={movie?.description}
                                    {...register("description")}
                                    onChange={event => setMovie({
                                        ...movie,
                                        description: event.target.value
                                    })}
                                />
                                {/* {errors.text?.type === 'required' && <div className="alert alert-danger"> Summary is required</div>} */}
                            </div>




                            <button className="sendmoviebutton">Edit Movie</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

// (
//     <div>
//         <NavbarAdmin />
//         <Sidebar />

//         <div className="add-movie">
//             <form onSubmit={handleSubmit(handleEditMovie, handleError)}>
//                 <h1>Edit Movie</h1>
//                 <input type="title" placeholder="Title" value={movie?.title}
//                     //{...register("title")}
//                     onChange={event => setMovie({
//                         ...movie,
//                         title: event.target.value
//                     })}
//                 />
//                 <input type="text" placeholder="Production country" value={movie?.prodCountry}
//                     //{...register("prodCountry")}
//                     onChange={event => setMovie({
//                         ...movie,
//                         prodCountry: event.target.value
//                     })}
//                 />
//                 {errors.title?.type === 'required' && <div className="alert alert-danger"> Title is required</div>}

//                 <textarea type="text" placeholder="Description" defaultValue={movie?.description || ''}
//                     {...register("description")}
//                 />
//                 {errors.text?.type === 'required' && <div className="alert alert-danger"> Description is required</div>}

//                 <input type="text" placeholder="Duration" defaultValue={movie?.length || ''}
//                     {...register("length", { maxLength: 20, pattern: /^([0-1][0-9]|[2][0-3]):([0-5][0-9])$/ })}
//                 />
//                 {errors.length?.type === 'required' && <div className="alert alert-danger"> Duration is required</div>}
//                 {errors.length?.type === 'pattern' && <div className="alert alert-danger"> Wrong input, match hh:mm .</div>}


//                 <input type="number" placeholder="Year of production" defaultValue={movie?.year || ''}
//                     {...register("year", { min: 1920, max: new Date().getFullYear() })}
//                 />
//                 {errors.year?.type === 'required' && <div className="alert alert-danger"> Year of production is required</div>}
//                 {errors.year?.type === 'min' && <div className="alert alert-danger"> Year of production must be between 1920-{new Date().getFullYear()}  </div>}
//                 {errors.year?.type === 'max' && <div className="alert alert-danger"> Year of production must be between 1920-{new Date().getFullYear()}</div>}

                
//                 {errors.prodCountry?.type === 'required' && <div className="alert alert-danger"> Production country is required</div>}

//                 <input type="text" placeholder="Title Image" defaultValue={movie?.titleImage || ''}
//                     {...register("titleImage")}
//                 />
//                 {errors.titleImage?.type === 'required' && <div className="alert alert-danger"> Title image is required</div>}

//                 <input type="text" placeholder="Trailer image" defaultValue={movie?.trailerImage || ''}
//                     {...register("trailerImage")}
//                 />
//                 {errors.trailerImage?.type === 'required' && <div className="alert alert-danger"> Trailer image is required</div>}

//                 <input type="texte" placeholder="Main image" multiple defaultValue={movie?.mainImage || ''}
//                     {...register("mainImage")}
//                 />
//                 {errors.mainImage?.type === 'required' && <div className="alert alert-danger"> Main image is required</div>}

//                 <input type="text" placeholder="Trailer" defaultValue={movie?.trailer || ''}
//                     {...register("trailer")}
//                 />
//                 {errors.trailer?.type === 'required' && <div className="alert alert-danger"> Trailer is required</div>}

//                 <input type="text" placeholder="Movie" defaultValue={movie?.movieContent || ''}
//                     {...register("movieContent")}
//                 />
//                 {errors.movieContent?.type === 'required' && <div className="alert alert-danger"> Movie is required</div>}

//                 <button className="loginButton">
//                     Edit movie</button>

//             </form>
//         </div>
//     </div>
// )