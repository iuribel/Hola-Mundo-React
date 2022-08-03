import React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    // const [varible, función pata modificarlo] = useState(valor inicial);
    const [age, setage] = useState(29);

    const birthday = () => {
        setage(age+1)
    }

    return (
        <div>
            <h1>
                    Hola { props.name } desde el componente función!
            </h1>
            <h2>
                tu edad es: { age }
            </h2>
            <div>
                <button onClick={birthday}>
                    cumplir años
                </button>
            </div>
                
        </div>
    );
};


GreetingF.propTypes = {
    
    name: PropTypes.string,
};


export default GreetingF;
