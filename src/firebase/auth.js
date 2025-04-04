
import appFireBase from "./credentials";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

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

  // Función para registrar un nuevo usuario
export const AuthRegister = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      console.error("Error en registro:", error.message);
      throw error;
    }
  };
  
  // Función para cerrar sesión
  export const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error al cerrar sesión:", error.message);
      throw error;
    }
  };
