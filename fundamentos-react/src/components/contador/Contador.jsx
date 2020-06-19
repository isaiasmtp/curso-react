import React, { Component } from 'react'

export default class Contador extends Component {

    constructor(props){
        super(props)

        this.state = {
            numero: props.numeroInicial,
            passo: props.passoInicial || 5
        }
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (e) => {
        this.setState({
            passo: +e.target.value
        })
    }

    render(){
        return (
            <div>
                <h2>Contador</h2>
                <h2>{ this.state.numero }</h2>
                <div>
                    <label>Passo: </label>
                    <input id="passoInput" type="number" onChange={this.setPasso} value={this.state.passo} />
                </div>
                <button onClick={ this.inc }>+</button>
                <button onClick={ this.dec }>-</button>


            </div>
        )
    }

}