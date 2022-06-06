import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./app.scss"
import React, { useState, useEffect } from "react";
import Home from "./pages/Homepage/Home"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "../src/pages/Login/Login"
import Watch from "./pages/watch/Watch"
import Register from "./pages/Register/Register"
import Movies from "./pages/Movies/Movies"
import AuthService from './services/auth_service'
import AdminPage from './pages/admin-pages/admin/Admin';
import ListAdmin from './pages/admin-pages/list/List';
import Single from './pages/admin-pages/single/Single';
import Moviespanel from "./pages/admin-pages/moviespanel/MoviesPanel";
import AddMovie from "./pages/admin-pages/moviespanel/addmovie/AddMovie";
import EditMovie from "./pages/admin-pages/moviespanel/editmovie/EditMovie";
import Account from './pages/Account/Account';
import ProtectedRoute from './services/ProtectedRoute';
import Plans from './pages/Plans/Plans';
import MyMovies from './pages/MyMovies/MyMovies';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import NewMovies from "./pages/NewMovies/NewMovies";



const App = () => {
  const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());
  //const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);
  console.log(currentUser)
  // useEffect(() => {
  //   if (currentUser?.isAdmin) {
  //     console.log("22222")
  //     setIsAdmin(true);
  //   }
  //   console.log(currentUser);
  //   console.log(isAdmin);
  // }, [currentUser]);

  return (<Router>
    <ScrollToTop />
    <Routes>

      <Route exact path="/" element={<Home />} />

      <Route exact path="/login" element={!currentUser ? <Login /> : <Navigate to='/' />} />

      <Route exact path="/register" element={!currentUser ? <Register /> : <Navigate to='/' />} />
      <Route exact path="/account" element={currentUser ? <Account props={currentUser} /> : <Navigate to='/' />} />
      <Route exact path="/watch/:id" element={currentUser ? <Watch /> : <Navigate to='/login' />} />
      <Route exact path="/mylist/:id" element={currentUser ? <MyMovies /> : <Navigate to='/login' />} />
      <Route exact path="/newmovies" element={<NewMovies />} />

      <Route exact path="/plans" element={currentUser ? <Plans props={currentUser} /> : <Navigate to='/login' />} />

      <Route exact path="/movies" element={<Movies />} />
      {/* <Route exact path="/admin" element={isAdmin ? <AdminPage /> : <Navigate to='/' />} /> */}


      <Route element={<ProtectedRoute admin={currentUser?.isAdmin} />}>

        <Route exact path="/admin"  >
          <Route index element={<AdminPage />} />
          <Route path="moviespanel">
            <Route index element={<Moviespanel />} />
            <Route path="addmovie" element={<AddMovie />} />
            <Route path="editmovie/:movieId" element={<EditMovie />} />
          </Route>
          <Route path="users">
            <Route index element={<ListAdmin />} />
            <Route path=":userId" element={<Single />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  </Router>);

};


export default App;