import React, { Component } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

export default class Result extends Component {
    render() {
        
        const resultado = this.props.resultado;
        const mensaje = (!resultado) ? 'Elije Marca, Año y tipo de seguro' : 'El total es: $';

        return (
            <div className="gran-total">
                {mensaje}
                <TransitionGroup className="resultado" component="span">
                    <CSSTransition classNames="resultado" timeout={{ enter: 500, exit: 500 }} 
                    key={resultado}>
                        <span>{resultado}</span>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        )
    }
}
