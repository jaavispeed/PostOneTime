import { FaUser, FaLock } from "react-icons/fa";

const login = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-xl font-semibold text-center mb-4">Login</h2>
        <form>
          <div className="mb-3">
            <div className="flex items-center border-b pb-2">
              <FaUser className="text-gray-500 mr-2" />
              <input
                type="email"
                className="w-full outline-none"
                placeholder="Email"
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
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default login;
