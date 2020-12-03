import React, { useState, useEffect } from 'react'
import axios from 'axios';
import register from './services/register';

export default function Register () {
    const[usuario, setUsuario] = useState('')
    const[contraseña, setContraseña] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(usuario)
        console.log(contraseña)
        register({usuario, contraseña})
    }

    //console.log('usuario', usuario)
    //console.log('contraseña', contraseña)

    return (
            <form onSubmit={handleSubmit}>
                <input
                    placeholder='Ingrese usuario'
                    onChange={(e) => setUsuario(e.target.value)}
                    value={usuario}
                />
                <input
                    type="password"
                    placeholder="password"
                    onChange={(e) => setContraseña(e.target.value)}
                    value={contraseña}
                />
                <button>Registrarse</button>
            </form>
    )
}