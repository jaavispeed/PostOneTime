import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { AuthRegister } from "/src/firebase/auth.js";
import { Link, useNavigate } from "react-router";


const register = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await AuthRegister(email, password);
      navigate("/login");
      console.log("register successful!");
    } catch (error) {
      setError("Invalid email or password.");
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-xl font-semibold text-center mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <div className="flex items-center border-b pb-2">
              <FaUser className="text-gray-500 mr-2" />
              <input
                type="email"
                className="w-full outline-none"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <div className="flex items-center border-b pb-2">
              <FaLock className="text-gray-500 mr-2" />
              <input
                type="password"
                className="w-full outline-none"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Registrarme
          </button>
          <p>
            Ya tienes cuenta? <Link to="/login" className="text-blue-700 font-bold hover:underline">Iniciar sesion</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default register