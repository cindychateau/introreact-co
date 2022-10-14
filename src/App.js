import React from "react";
import ComponenteApi from "./componentes/ComponenteApi/ComponenteApi";
import ComponenteAxios from "./componentes/ComponenteAxios/ComponenteAxios";
import Formulario from "./componentes/Formulario/Formulario";
import MiPrimerComponente from "./componentes/MiPrimerComponente/MiPrimerComponente";
import MiPrimerComponenteFuncional from "./componentes/MiPrimerComponenteFuncional/MiPrimerComponenteFuncional";
import PersonCard from "./componentes/PersonCard/PersonCard";
import PersonCardFuncional from "./componentes/PersonCardFuncional/PersonCardFuncional";

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

/*
Inicializar proyecto: npm start
Detener el proyecto: Ctrl+C
*/

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      personas: [
        {
          firstName: "Cynthia",
          lastName: "Castillo",
          age: 30,
          city: "Monterrey"
        },
        {
          firstName: "Juan",
          lastName: "Perez",
          age: 25,
          city: "Bogota"
        },
        {
          firstName: "María",
          lastName: "Hernandez",
          age: 18,
          city: "Lima"
        }
      ]
    }
  }

  render() {

    /* AplicacionSegundaPalabra -> PascalCase
       onClick -> camelCase
    */

    return(
      <div className="container">
        <h1>Mi primera Aplicación con React</h1>
        <h2>wuju!</h2>

        <BrowserRouter>

          <Link to="/" className="btn btn-success">Home</Link>
          <Link to="/funcional" className="btn btn-info">Componente Funcional</Link>
          <Link to="/formulario" className="btn btn-primary">Formulario</Link>
          <Link to="/api" className="btn btn-warning">Componente API</Link>
          <Link to="/apiaxios" className="btn btn-danger">Componente Axios</Link>

          <Switch>
            <Route path="/" exact render={() => <MiPrimerComponente />} />
            <Route path="/funcional" exact render={() => <MiPrimerComponenteFuncional />} />
            <Route path="/funcional/:texto" exact render={(routeProps) => <MiPrimerComponenteFuncional {...routeProps} />} />
            <Route path="/formulario" render={() => <Formulario />} />
            <Route path="/api" render={() => <ComponenteApi />} />
            <Route path="/apiaxios" render={() => <ComponenteAxios />} />
          </Switch>

        </BrowserRouter>

        

        

        {/* <PersonCard firstName="Elena" lastName="De Troya" age={30} city="Roma" />

        <PersonCard firstName="Juana" lastName="De Troya" age={20} city="México" />

        <PersonCard firstName="Pedro" lastName="Páramo" age={35} city="Colombia" />

        <PersonCardFuncional firstName="Pablo" lastName="Picasso" age={50} city="Medellin" /> */}

        {

          // this.state.personas.map((persona, posicion) =>
          //   <PersonCardFuncional firstName={persona.firstName} lastName={persona.lastName} age={persona.age} city={persona.city} />
          // )

        }    

      </div>
    );
  }

}

export default App;
