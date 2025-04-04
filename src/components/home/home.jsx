
import { getCurrentUser } from "../../firebase/Auth.js";

const Home = () => {
  const user = getCurrentUser();
  console.log(user)

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 text-center py-2">Bienvenido</h1>
        <p className="text-black font-semibold mt-2 text-center">
          {user ? `Usuario: ${user.email}` : "No hay usuario autenticado"}
        </p>
    </div>
  )
}

export default Home