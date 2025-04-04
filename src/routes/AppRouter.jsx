import { Routes, Route, Navigate } from "react-router";
import Login from "../components/login/login.jsx";
import Register from "../components/register/register.jsx";
import Home from "../components/home/home.jsx";

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="home" element={<Home />} />
            </Routes>
        </>
    )
}

export default AppRouter