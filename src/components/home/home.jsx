
import { getCurrentUser, logout } from "../../firebase/Auth.js";
import { Link } from "react-router";
import { FiLogOut } from "react-icons/fi";


const Home = () => {

  const user = getCurrentUser();
  console.log(user)

  const handleLogout = async () => {
    try {
      await logout();
      console.log("Sesión cerrada");
    } catch (error) {
      console.error("Error al cerrar sesión:", error.message);
    }
  };


  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800">Bienvenido</h1>
        <p className="text-gray-600 mt-2">
          {user ? `Usuario: ${user.email}` : "No hay usuario autenticado"}
        </p>
      <button
          onClick={handleLogout}
          className="mt-4 flex items-center justify-center gap-2 bg-red-500 text-white py-2 px-4 rounded-lg shadow hover:bg-red-600 transition duration-200"
        >
          <FiLogOut className="text-xl" /> 
          <Link to="/login">Cerrar sesión</Link>
        </button>
    </div>
  )
}

export default Home