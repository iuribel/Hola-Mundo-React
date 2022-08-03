import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Este es el componente Greeting TIPO CLASE pero casi siempre se usan tipo función */
class Greeting extends Component {

    constructor(props){
        super(props);
        this.state={
            age:29
        }
    }

    render() {
        return (
            <div>
                <h1>
                    Hola { this.props.name } !
                </h1>
                <h2>
                    tu edad es: { this.state.age }
                </h2>
                <div>
                    <button onClick={this.birthday}>
                        cumplir años
                    </button>
                </div>
            </div>
        );
    }

    birthday = () => {
        this.setState((prevState) =>(

            {
                age:prevState.age +1
            }
        ))
    }
}


Greeting.propTypes = {
    
    name: PropTypes.string,

};


export default Greeting;
