import { getCurrentUser } from "../../firebase/Auth.js";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { useState } from "react";

const Home = () => {
  const user = getCurrentUser();
  console.log(user);

  const [isFacebookConnected, setIsFacebookConnected] = useState(false);
  const [isInstagramConnected, setIsInstagramConnected] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <h1 className="text-2xl font-bold text-gray-800 text-center py-2">Bienvenido</h1>
      <p className="text-black font-semibold mt-2 text-center">
        {user ? `Usuario: ${user.email}` : "No hay usuario autenticado"}
      </p>
      <p className="text-black font-semibold mt-2 text-center">
        Para poder empezar a publicar necesitas conectar tus cuentas a nuestra web.
      </p>
      
      <div className="flex justify-center mt-4 gap-6">
        {/* Facebook Switch */}
        <label className="inline-flex items-center cursor-pointer relative">
          <input 
            type="checkbox" 
            className="sr-only peer hidden" 
            checked={isFacebookConnected} 
            onChange={() => setIsFacebookConnected(!isFacebookConnected)}
          />
          <div className="w-14 h-8 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
          <span className="ml-4 text-lg font-medium text-gray-900 flex items-center gap-3">
            <FaFacebook className="text-blue-600 text-3xl" /> {isFacebookConnected ? "ON" : "OFF"}
          </span>
        </label>
        
        {/* Instagram Switch */}
        <label className="inline-flex items-center cursor-pointer relative">
          <input 
            type="checkbox" 
            className="sr-only peer hidden" 
            checked={isInstagramConnected} 
            onChange={() => setIsInstagramConnected(!isInstagramConnected)}
          />
          <div className="w-14 h-8 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-pink-300 dark:peer-focus:ring-pink-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-pink-500"></div>
          <span className="ml-4 text-lg font-medium text-gray-900 flex items-center gap-3">
            <FaInstagram className="text-pink-500 text-3xl" /> {isInstagramConnected ? "ON" : "OFF"}
          </span>
        </label>
      </div>
    </div>
  );
};

export default Home;