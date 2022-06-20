import React, { Component } from 'react';
import axios from 'axios';
import '../components/Personalidades.css';

export default class Personalidades extends Component {
    state = {
        personalidades: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:7000/api/personalidades')
            .then(res => {
                const personalidades = res.data;
                this.setState({ personalidades })
            })
    }

    render() {
        return (
            <div>
                {this.state.personalidades.map((p, id )=>
                    <div className="CardPersonalidades" key={id}>
                        <h3>{p.nome}</h3>
                        <p>{p.historia}</p>
                    </div>)}
            </div>
        );
    }
}