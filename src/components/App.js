/**
 * Es uno de los componentes principales en donde van a estar las redirecciones que va a haber
 */
import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'//Para el redireccionamiento
import ExercisesContainer from '../pages/ExercisesContainer'//componente a redireccionar
import ExerciseNewContainer from '../pages/ExerciseNewContainer'//componente a redireccionar
import NotFound from '../pages/NotFound'//componente 404

//Componente funcional
const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/exercise" component={ExercisesContainer}/>
            <Route exact path="/exercise/new" component={ExerciseNewContainer}/>
            <Route component={NotFound}></Route>
        </Switch>
    </BrowserRouter>
)

export default App