import React, { Component } from 'react'
import { primeraMayuscula } from '../helper'

export default class Resume extends Component {

    mostrarResumen = () => {
        const { marca, year, plan } = this.props.data;

        if (!marca || !year || !plan) {return null;}
        

        return (
            <div className="resumen">
                <h2>Resumen de cotización</h2>
                <li>Marca: {primeraMayuscula(marca)}</li>
                <li>Plan: {primeraMayuscula(plan)}</li>
                <li>Año: {primeraMayuscula(year)}</li>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.mostrarResumen()}
            </div>
        )
    }
}
