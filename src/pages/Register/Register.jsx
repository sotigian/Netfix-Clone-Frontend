import "./register.scss"
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import AuthService from "../../services/auth_service";

export default function Register() {
  const navigate = useNavigate();
  const [err, setErr] = useState();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const handleRegister = async (e) => {
    //console.log(data)
    console.log(e)
    await AuthService.register(e.firstName, e.lastName, e.email, e.password).then(res => {
      navigate('/login')
    }).catch(
      (err) => {
        console.log(err.toString())
        if (err.toString() == "Error: Request failed with status code 400") {
          setErr("email")
        }
      })
  };

  const handleError = (e) => {
    console.log(e)
  }

  return (
    <>
      <div className="register">
        <Navbar />
        <div className="container container-main">
          <h1>Unlimited movies, TV Shows and more.</h1>
          <h2>Watch everywhere, Cancel anytime.</h2>
          <p>Ready to Watch? Enter your e-mail to to create your membership!</p>

          <form onSubmit={handleSubmit(handleRegister, handleError)}>
            <h1 className="banner">Sign Up</h1>
            <input type="text" placeholder="First Name"
              {...register("firstName", { required: true })}
            />
            {errors.firstName?.type === 'required' && <div className="alert2"> First Name is required</div>}
            <input type="text" placeholder="Last Name"
              {...register("lastName", { required: true })}
            />
            {errors.lastName?.type === 'required' && <div className="alert2">Last Name is required</div>}
            <input type="text" placeholder="Email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email?.type === 'required' && <div className="alert2"> Email is required</div>}
            {errors.email?.type === 'pattern' && <div className="alert2"> This is not a valid email</div>}
            {err === 'email' && <div className="alert2"> This email is already used</div>}
            <input type="password" placeholder="Password"
              //ref={passwordRef}
              {...register("password", { required: true, maxLength: 20 })}
            />
            {errors.password?.type === 'required' && <div className="alert2"> Password is required</div>}
            {errors.password?.type === 'maxLength' && <div className="alert2">Too long password</div>}
            <button className="loginButton">
              Sign Up</button>
            {/* {err !== undefined && <div className="alert alert-danger">Wrong credentials</div>} */}

            <small>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <b>Learn more</b>.
            </small>
          </form>

        </div>
      </div>
      <Footer />
    </>

  );
}
