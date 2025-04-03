
import appFireBase from "./credentials";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(appFireBase)

// Función para iniciar sesión
export const AuthLogin = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      console.error("Error en login:", error.message);
      throw error;
    }
  };

