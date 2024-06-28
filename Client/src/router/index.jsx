import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import BasicLayout from "../layouts/BasicLayout";
import Home from "../pages/Home/Home";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";
import MovieDetail from "../pages/Movie/Detail";
import Booking from "../pages/Booking/Booking";
import MediaPage from "../pages/Media/MediaPage";

const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BasicLayout />}>
          <Route index element={<Home />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="dat-ve/:slug" element={<MovieDetail />} />
          <Route path="booking" element={<Booking />} />
          <Route path="booking/:slug" element={<Booking />} />
          <Route path="phim/:slug" element={<MediaPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default RouterComponent;
