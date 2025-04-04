import { Routes, Route, Navigate } from "react-router";
import Login from "../components/login/Login.jsx";
import Register from "../components/register/Register.jsx";
import Home from "../components/home/Home.jsx";
import Navbar from "../components/navbar/Navbar.jsx";
import Post from "../components/post/Post.jsx";

const AppRouter = () => {
    return (
        <>
        <Navbar />
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="home" element={<Home />} />
                <Route path="post" element={<Post />} />
            </Routes>
        </>
    )
}

export default AppRouter