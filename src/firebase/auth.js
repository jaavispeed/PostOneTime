
import appFireBase from "./Credentials";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";

const auth = getAuth(appFireBase)

// Función para iniciar sesión
export const AuthLogin = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    localStorage.setItem("user", JSON.stringify(userCredential.user));

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
    localStorage.removeItem("user");
  } catch (error) {
    console.error("Error al cerrar sesión:", error.message);
    throw error;
  }
};

export const getCurrentUser = () => {
  const localUser = localStorage.getItem("user");
  return localUser ? JSON.parse(localUser) : null;
}