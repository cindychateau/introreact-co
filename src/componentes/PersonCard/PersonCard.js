import React from "react";

class PersonCard extends React.Component {

    render() {
        return(
            <div className="card">
                <h4>Elena de Troya</h4>
                <p><b>Edad:</b> 30</p>
                <p><b>Ciudad:</b> Roma</p>
            </div>
        )
    }

}

export default PersonCard;