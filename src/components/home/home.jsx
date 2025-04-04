
import { getCurrentUser, logout } from "../../firebase/Auth.js";
import { Link } from "react-router";

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
      <p>{user ? `Usuario: ${user.email}` : "No hay usuario autenticado"}</p>
      <button className="btn btn-primary" onClick={handleLogout}><Link to="/login">Cerrar sesion</Link></button>
    </div>
  )
}

export default Home