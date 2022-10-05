import React, {useState} from 'react';

const Formulario = () => {

    //Creando una variable por cada campo de mi formulario
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [hizoSubmit, setHizoSubmit] = useState(false);
    
    const crearUsuario = e => {
        e.preventDefault(); //Prevenimos el comportamiento normal del submit de un formulario
        const nuevoUsuario = {firstName, lastName, age}; //Creando un objeto/diccionario con todas las variables que creamos previamente
        /*const nuevoUsuario = {nombre:firstName, apellido:lastName, edad:age};*/
        console.log("Nuevo registro:", nuevoUsuario);

        setFirstName("");
        setLastName("");
        setAge("");
        setHizoSubmit(true);

    }

    const mensaje = () => {
        if(!hizoSubmit) {
            return "Por favor ingresa todos tus datos";
        } else{
            return "¡Gracias por ingresar tus datos!";
        }
    }
    
    return(
        <form onSubmit={crearUsuario}>
            <div className="form-group">
                <label>Nombre:</label>
                <input className="form-control" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
            </div>
            <div className="form-group">
                <label>Apellido:</label>
                <input className="form-control" onChange={(e) => setLastName(e.target.value)} value={lastName} />
            </div>
            <div className="form-group">
                <label>Edad:</label>
                <input className="form-control" onChange={(e) => setAge(e.target.value)} value={age} />
            </div>
            <input type="submit" className="btn btn-success" value="Crear Usuario" />

            {mensaje()}

        </form>
    )
}

export default Formulario;