import "./addmovie.scss";
import Sidebar from "../../../../components/admin-components/sidebar/Sidebar"
import NavbarAdmin from "../../../../components/admin-components/navbar-admin/Navbar-admin"
import { useForm } from 'react-hook-form';
// import { useNavigate } from "react-router-dom";
import MovieService from "../../../../services/movie_service";

const action = "add"
const AddMovie = () => {
        const { register, handleSubmit, formState: { errors } } = useForm();
        const handleAddMovie = (data) => {
            //data.titleImage = data.titleImage[0].name;
            MovieService.addOrEditMovie(data, action).then((res) => {
                console.log(res)
            })
        };
    
        const handleError = (error) => {
        };
    
    
        console.log(errors.description)


  return (
    <div className="addmovie">
        <Sidebar/>
        <div className="addmoviecontainer">
            <NavbarAdmin />
            <div className="top">
                <h1>Add New Movie</h1>
            </div>
            <div className="bottom">
                <div className="mainform">
                <form onSubmit={handleSubmit(handleAddMovie, handleError)}>

               
                {/* 1st input  */}


                <div className="forminput">
                <label>Title</label>
                <input type="title" placeholder="Title"
                    {...register("title", { required: true })}
                />
                {errors.title?.type === 'required' && <div className="alert alert-danger"> Title is required</div>}
                </div>



                {/* 2rd input  */}


                <div className="forminput">
                <label>Duration</label>
                <input type="text" placeholder="Duration"
                    {...register("length", { required: true, maxLength: 20, pattern: /^([0-1][0-9]|[2][0-3]):([0-5][0-9])$/ })}
                />
                {errors.length?.type === 'required' && <div className="alert alert-danger"> Duration is required</div>}
                {errors.length?.type === 'pattern' && <div className="alert alert-danger"> Wrong input, match hh:mm .</div>}
                </div>


                {/* 3th input  */}


                <div className="forminput">
                <label>Trailer Image</label>
                <input type="text" placeholder="Scarface"
                    {...register("movieContent", { required: true })}
                />
                {errors.movieContent?.type === 'required' && <div className="alert alert-danger"> Movie is required</div>}
                </div>


                 {/* 4th input  */}


                <div className="forminput">
                <label>Production Year</label>    
                <input type="number" placeholder="2021"
                    {...register("year", { required: true, min: 1920, max: new Date().getFullYear() })}
                />
                {errors.year?.type === 'required' && <div className="alert alert-danger"> Year of production is required</div>}
                {errors.year?.type === 'min' && <div className="alert alert-danger"> Year of production must be between 1920-{new Date().getFullYear()}  </div>}
                {errors.year?.type === 'max' && <div className="alert alert-danger"> Year of production must be between 1920-{new Date().getFullYear()}</div>}
                </div>


                 {/* 5th input  */}


                <div className="forminput">
                <label>Production Country</label>
                <input type="text" placeholder="Greece"
                    {...register("prodCountry", { required: true })}
                />
                {errors.prodCountry?.type === 'required' && <div className="alert alert-danger"> Production country is required</div>}
                </div>


                {/* 6th input  */}


                <div className="forminput">
                <label>Image title</label>
                              <input type="text" placeholder="Title Image"
                    {...register("titleImage", { required: true })}
                />
                {errors.titleImage?.type === 'required' && <div className="alert alert-danger"> Title image is required</div>}
                </div>


                 {/* 7th input  */}

                
                <div className="forminput">
                <label>Trailer Image</label>
                <input type="text" placeholder="Trailer image"
                    {...register("trailerImage", { required: true })}
                />
                {errors.trailerImage?.type === 'required' && <div className="alert alert-danger"> Trailer image is required</div>}
                </div>


                 {/* 8th input  */}

                <div className="forminput">
                <label>Main image</label>
                <input type="text" placeholder="Main image" multiple
                    {...register("mainImage", { required: true })}
                />
                {errors.mainImage?.type === 'required' && <div className="alert alert-danger"> Main image is required</div>}
                </div>


                 {/* 9th input  */}


                <div className="forminput">
                <label>Upload the trailer</label>
                <input type="text" placeholder="Trailer"
                    {...register("trailer", { required: true })}
                />
                {errors.trailer?.type === 'required' && <div className="alert alert-danger"> Trailer is required</div>}
                </div>


                 {/* 10th input  */}




                <div className="forminput">
                <label>Summary</label>
                <textarea type="text" placeholder="Summary" className="textarea"
                    {...register("summary", { required: true })}
                />
                {errors.text?.type === 'required' && <div className="alert alert-danger"> Summary is required</div>}
                </div>




                          <button className="sendmoviebutton">Add Movie</button>
            </form>
                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddMovie




// var fs = require('fs');
// fs.writeFile(`./public/images/${data.mainImage.name}`, data.mainImage.data);

