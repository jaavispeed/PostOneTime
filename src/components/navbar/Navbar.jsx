import { Link } from "react-router";
import { logout } from "../../firebase/Auth.js";
import { FiLogOut } from "react-icons/fi";



const Navbar = () => {

    const handleLogout = async () => {
        try {
            await logout();
            console.log("Sesión cerrada");
        } catch (error) {
            console.error("Error al cerrar sesión:", error.message);
        }
    };

    return (
        <nav className="bg-black p-4 text-white shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/home" className="text-lg font-bold">Post One Time</Link>
                <div className="space-x-4 flex items-center">
                    <Link to="/about" className="hover:underline">Publicación</Link>
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 bg-red-500 text-white py-2 px-4 rounded-lg shadow hover:bg-red-600 transition duration-200"
                    >
                        <FiLogOut className="text-xl" />
                        <Link to="/login">Cerrar sesión</Link>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar