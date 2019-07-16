/**
 * Página principal en donde se muestran todos los ejercicios que hay 
 */
import React from 'react'
import Welcome from '../components/Welcome'
import ExerciseList from '../components/ExerciseList'
import AddButton from '../components/AddButton'

const Exercise = ({data}) => (
    <React.Fragment>
        <Welcome
            username="José"
        />
        <ExerciseList
            exercises={data}
        />
        <AddButton/>
    </React.Fragment>
)

export default Exercise