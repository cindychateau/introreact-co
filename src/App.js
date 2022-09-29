import React from "react";
import MiPrimerComponente from "./componentes/MiPrimerComponente/MiPrimerComponente";
import PersonCard from "./componentes/PersonCard/PersonCard";

/*
Inicializar proyecto: npm start
Detener el proyecto: Ctrl+C
*/

class App extends React.Component {

  render() {
    return(
      <div className="container">
        <h1>Mi primera Aplicación con React</h1>
        <h2>wuju!</h2>
        <MiPrimerComponente />
        <PersonCard />
        <PersonCard />
        <PersonCard />
      </div>
    );
  }

}

export default App;
