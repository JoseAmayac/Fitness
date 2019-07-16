/**
 * Componente encargado de listar todos los ejercicios que haya
 */
import React from 'react'
import Card from './Card'

const ExerciseList = ({exercises}) => (
    //Para poder hacer render de varios componentes
    <>
        { exercises.map((exercise) => 
                <Card
                    key= {exercise.id }
                    {...exercise}

                />
        )}
    </>
)

export default ExerciseList