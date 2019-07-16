/**
 * Contenedor de la página de ejercicio la cual es la principal, aqui se guarda la logica
 */
import React from 'react'
import Loading from '../components/Loading'
import FatalError from './500'
import Exercise from './Exercise'
import useFetch from '../hooks/useFetch'
import url from '../config'

const ExercisesContainer = () => {
    const {data,loading,error} = useFetch(`${url}/exercises`)
    if(loading)
    {
        return <Loading/>
    }
    if(error)
    {
        return <FatalError/>
    }
    return <Exercise
                data= {data}
            />
}

export default ExercisesContainer