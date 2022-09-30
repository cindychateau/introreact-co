import React from "react";
import MiPrimerComponente from "./componentes/MiPrimerComponente/MiPrimerComponente";
import PersonCard from "./componentes/PersonCard/PersonCard";

/*
Inicializar proyecto: npm start
Detener el proyecto: Ctrl+C
*/

class App extends React.Component {

  render() {

    /* AplicacionSegundaPalabra -> PascalCase
       onClick -> camelCase
    */

    return(
      <div className="container">
        <h1>Mi primera Aplicación con React</h1>
        <h2>wuju!</h2>
        <MiPrimerComponente />
        <PersonCard firstName="Elena" lastName="De Troya" age={30} city="Roma" />
        <PersonCard firstName="Juana" lastName="De Troya" age={20} city="México" />
        <PersonCard firstName="Pedro" lastName="Páramo" age={35} city="Colombia" />
      </div>
    );
  }

}

export default App;
