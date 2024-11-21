'use client'

import { useState } from "react"

//Se maneja case como una clase. en ente caso define el tipo de Type que es cada uno de los objetos que seran usados en setUser
interface User {
  uid: string,
  name: string
}

export const Usuario = () => {

  const [user, setUser] = useState<User>();

  const login = () => {
    setUser({
      uid: 'A1234',
      name: 'Diego'
    });
  };

  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-extrabold size-2">Component Usuario</h1>
      <br />
      <h3 className="font-semibold">Usuario: {
        (!user)
          ? <p className="text-red-400">No hay usuario porfavor haga el login</p>
          : <p className="font-extralight">{user.name}</p>
      }</h3>

      <button
        onClick={login}
        className="border-2 border-red-500 rounded-sm">
        login
      </button>
      {
        (!user) ? <pre>No hay Usuarios</pre>
          : <pre>{JSON.stringify(user)}</pre>
      }



    </div>
  )
};
