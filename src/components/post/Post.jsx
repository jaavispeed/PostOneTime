import React from 'react';

const Post = () => {
  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg shadow-md bg-white mt-20">
      <h2 className="text-xl font-semibold mb-4 text-center">Subir imagenes</h2>
      <form className="space-y-4">
        <input type="file" accept="image/*" className="block w-full text-sm text-gray-500 border border-gray-300 rounded-lg p-2" />
        <textarea 
          placeholder="Ingresa una descripción" 
          className="w-full p-2 border border-gray-300 rounded-lg resize-none h-24"
        ></textarea>
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >Publicar</button>
      </form>
    </div>
  );
};

export default Post;
