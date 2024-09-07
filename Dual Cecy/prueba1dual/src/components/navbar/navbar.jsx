import '../navbar/navbar.css'
import React from "react";

const navbar = () => {
    return (
        <>
        <div className="NavBar">
                <img src="src/assets/img/logo st.webp" alt="" />
                <a href="">Comida Favorita</a>
                <a href="">Gustos Musicales</a>
                <a href="">Habilidades</a>
                <a href="">Hobbies</a>

                <input  type="text" name="" id="" placeholder="Busqueda" />

                <button>Iniciar Sesion</button>


            </div>
        </>
    )
}

export default navbar;