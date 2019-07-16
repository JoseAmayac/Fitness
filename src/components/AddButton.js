/**
 * Permite adicionar el boton que va a redireccionar al formulario para agregar
 * otro ejercicio
 */
import React from 'react' //Para trabajar con react
import image from '../images/add.png'
import './styles/AddButton.css'
import {Link} from 'react-router-dom'//parecido al a sin reload

//Componente funcional 
const AddButton = () => (
    <Link to="/exercise/new">
            <img src={image} className="Fitness-Add"/>
   </Link>
)
    
export default AddButton