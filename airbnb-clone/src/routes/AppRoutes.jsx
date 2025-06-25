import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import ListingDetail from "../pages/ListingDetail"
import Booking from "../pages/Booking"
import BookingSuccess from "../pages/BookingSuccess"
import About from "../pages/About"
import Login from "../pages/Login"
import Membership from "../pages/Membership"

const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listing/:id" element={<ListingDetail />} />
            <Route path="/booking/:id" element={<Booking />} />
            <Route path="/success" element={<BookingSuccess />} />
            <Route path="/about" element={<About />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}

export default AppRoutes