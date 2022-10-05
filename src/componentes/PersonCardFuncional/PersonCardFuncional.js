import React, {useState} from 'react';
const PersonCardFuncional = ({firstName, lastName, age, city}) => {
    
    //useState
    //const [state, setState] = useState({edoCivil: "Casado"})

    const [edoCivil, setEdoCivil] = useState("Soltero");
    const [edad, setEdad] = useState(age);

    const cambiarEdoCivil = () => {
        if(edoCivil === "Soltero"){
            setEdoCivil("Casado");
        } else {
            setEdoCivil("Soltero");
        }
    }

    const cumpleaños = () => {
        setEdad(edad+1)
    }

    return(
        <div className="card">
            <small>Card Funcional</small>
            <h4>{firstName} {lastName}</h4>
            <p>
                <b>Edad:</b>{edad}
            </p>
            <p>
                <b>Ciudad:</b>{city}
            </p>
            <p>
                <b>Estado Civil:</b> {edoCivil}
            </p>
            <button onClick={cambiarEdoCivil} className="btn btn-success">Cambiar Estado Civil</button>

            <button className="btn btn-info" onClick={cumpleaños}>Botón de Cumpleaños {firstName}</button>
        </div>
    )
}

export default PersonCardFuncional;