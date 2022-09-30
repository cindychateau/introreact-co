import React from "react";

class PersonCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            edoCivil: "Soltero",
            age: this.props.age
        }
    }

    hizoClic = () => alert("Hiciste clic en función");

    hizoClicEn = (e, firstName) => alert("Hiciste clic en:"+firstName);

    funcionTradicional() {
        alert("Esta es una alerta");
    }

    cambiarEdoCivil = () => {
        if (this.state.edoCivil === "Soltero"){
            this.setState({edoCivil: "Casado"})
        }else {
            this.setState({edoCivil: "Soltero"})
        }
    }

    cumpleaños = () => {
        this.setState({age: this.state.age+1})
    }

    render() {

        const {firstName, lastName, city} = this.props;

        return(
            <div className="card">
                <h4>{firstName} {lastName}</h4>
                <p><b>Edad:</b> {this.state.age}</p>
                <p><b>Ciudad:</b> {city}</p>
                <p><b>Estado Civil:</b>{this.state.edoCivil}</p>
                <button className="btn btn-success" onClick={this.cambiarEdoCivil}>Cambiar Estado Civil</button>
                <button className="btn btn-warning" onClick={ (e)=>this.hizoClicEn(e, firstName) }>Haz Clic aquí</button>
                <button className="btn btn-info" onClick={this.cumpleaños}>Botón de Cumpleaños {firstName}</button>
            </div>
        )
    }

}

export default PersonCard;