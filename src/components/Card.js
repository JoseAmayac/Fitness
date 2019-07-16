/**
 * Componente en el cual se va a mostrar toda la informacion de un entrenamiento o ejercicio
 */
import React from 'react'
import '../components/styles/Card.css'
import Empty from '../images/empty.png'
import circleImg from '../images/circles.png'

//componente funcional
const Card = ({title,description,img,leftColor,rightColor}) => (
    <div className="card mx-auto Fitness-Card"
    style={{
        //estilos en linea
        backgroundImage: `url(${circleImg}), linear-gradient(to right, ${leftColor || '#56CCF2'}, ${rightColor || '#2F80ED'})`
    }}
    >
    <div className="card-body">
        <div className="row center">
            <div className="col-6">
                <img src={img || Empty} className="float-right"/>
            </div>
            <div className="col-6 Fitness-Card-Info">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    </div>
    </div>
)

export default Card 