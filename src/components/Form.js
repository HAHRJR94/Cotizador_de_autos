import React, { Component } from 'react'

export default class Form extends Component {
    //refs son para leer los valores de los campos de un formulario.
    //Se pasan a cada campo, se agrega un nuevo atributo "ref={}"
    constructor() {
        super();

        this.marcaRef = React.createRef();
        this.yearRef = React.createRef();
        this.basicoRef = React.createRef();
        this.completoRef = React.createRef();
    }

    //Para no colocar .bind(this) se puede hacer lo siguiente
    handleCotizador = (e) => {
        e.preventDefault(); //Avoid refresh the display.

        const plan = this.basicoRef.current.checked ? 'basico' : 'completo';

        //Get data


        //create object
        const infoAuto = {
            marca: this.marcaRef.current.value,
            year: this.yearRef.current.value,
            plan: plan
        }

        //Submit to principal component
        this.props.cotizarAuto(infoAuto);

        //set the form (optional)
        e.currentTarget.reset();

    }

    render() {
        return (
            <form className="cotizar-auto" onSubmit={this.handleCotizador}>
                <div className="campo">
                    <label>Marca</label>
                    <select name="marca" ref={this.marcaRef}> {/*marcaRef */}
                        <option value="americano">Americano</option>
                        <option value="europeo">Europeo</option>
                        <option value="asiatico">Asiatico</option>
                    </select>
                </div>
                <div className="campo">
                    <label>Año</label>
                    <select name="year" ref={this.yearRef}> {/*yearRef */}
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009"></option>
                    </select>
                </div>
                <div className="campo">
                    <label>Plan:</label>
                    <input type="radio" ref={this.basicoRef} name="plan" value="basico" /> {/*basicoRef */}
                    Basico
                    <input type="radio" ref={this.completoRef} name="plan" value="completo" /> {/*completoRef */}
                    Completo
                </div>
                <button type="submit" className="boton">Cotizar</button>
            </form>
        )
    }
}
