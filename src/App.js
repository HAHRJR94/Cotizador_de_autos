import React, { Component } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Resume from './components/Resume';
import Result from './components/Result';
import { obtenerDiferenciaYear, calcularMarca, obtenerPlan } from './helper';

class App extends Component {
  constructor(){
    super();

    this.state = {
      resultado : '',
      data: {}
    }

  }

  cotizarAuto = (data) => {
    const {marca, year, plan} = data;

    //Agregar una base de 2000.
    let resultado = 2000;

    //Obtener diferencia de años
    const diferencia = obtenerDiferenciaYear(year);

    //Por cada año restar el 3% al valor del seguro
    resultado -= ((diferencia * 3) * resultado) / 100;
    
    //Asiatico 5%, Americano 15% y Europeo 30% de incremento al valor actual
    resultado = calcularMarca( marca ) * resultado;
    
    //Cobertura del plan del auto, básico incrementa el valor en 20% y completo en 50%
    resultado = parseFloat( obtenerPlan(plan) * resultado ).toFixed(2);
    
    //Creamos un objeto para el resumen
    const dataAuto = {
      marca: marca,
      year: year,
      plan: plan
    }

    //Cambiamos el estado de la aplicación
    this.setState({
      resultado: resultado,
      data: dataAuto
    })
    
  }

  render(){
    return (
      <div className="contenedor">
        <Header titulo= "Cotizador de seguro de autos"/>

        <div className="contenedor-formulario">
          <Form cotizarAuto={this.cotizarAuto}/>
          <Resume data={this.state.data} />
          <Result resultado={this.state.resultado}/>
        </div>

      </div>
    );
  }
}

export default App;
