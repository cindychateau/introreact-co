import { useParams } from 'react-router-dom';

const MiPrimerComponenteFuncional = props => {

    const {texto} = useParams();

    return(
        <div>
            <h2>Este es mi primer componente funcional {texto} </h2>
        </div>
    )

}

export default MiPrimerComponenteFuncional