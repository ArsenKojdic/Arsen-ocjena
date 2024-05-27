import React, { Component } from "react";
import { Link } from "react-router-dom";
import Insta from "./instagram.png";

export class Kupovina extends Component {
    state = {
        ime: '',
        prezime: '',
        adresa: '',
        poštanskiBroj: '',
        model: '',
        veličina: '',

    }
    onSubmit = () => { console.log("Forma je potvrđena", this.state.ime) }
    render() {
        return (

            <div className="kupi">
                <header><p>Stranicu izradio: Arsen Kojdić</p></header>
                <h1> Dobrodošli {this.state.ime}</h1>

                <form className="forma">
                    <input placeholder='ime' value={this.state.ime} onChange={e => this.setState({ ime: e.target.value })} /> <br></br>
                    <input placeholder='prezime' value={this.state.prezime} onChange={e => this.setState({ prezime: e.target.value })} /><br></br>
                    <input placeholder='adresa' value={this.state.adresa} onChange={e => this.setState({ adresa: e.target.value })} /><br></br>
                    <input placeholder='poštanskiBroj' value={this.state.poštanskiBroj} onChange={e => this.setState({ poštanskiBroj: e.target.value })} /><br></br>
                    <input placeholder='model' value={this.state.model} onChange={e => this.setState({ model: e.target.value })} /><br></br>
                    <input placeholder='veličina' value={this.state.veličina} onChange={e => this.setState({ veličina: e.target.value })} /><br></br>
                    <button onClick={e => this.onSubmit(e)}>Potvrdi</button>
                </form>
                <footer><p><Link to='/'>Link za povratak na početnu stranicu.</Link></p></footer>
                <div className='footer'>
                <div className='footer1'>
                    <h2>Dućan za patike</h2>
                    <p>Copyright© 2024. Sva prava pridržana Arsen Kojdić</p>
                </div>
                <div className='footer2'>
                    <h3>Zaprati me:</h3>
                    <img src={Insta}></img>
                    </div>
                </div>
            </div>);
    }
}
export default Kupovina;