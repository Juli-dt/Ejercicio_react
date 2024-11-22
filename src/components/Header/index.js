import React, { Component } from "react";
import "./styles.css"
class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false,
            message: 'Este es tu header'
        }
    }
    handleButtonClick = () => {
        console.log('Clickeaste el botón del header')
        this.setState((prevState) => ({
            isLoggedIn: !prevState.isLoggedIn
        }))
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ message: 'This is your header' })
        }, 2000)

    }

    // componentDidUpdate(prevProps, prevState) {
    //     console.log(prevState)
    // }
    render() {
        return (
            
            <header>
                <h1>{this.props.appName}</h1>
                <button onClick={this.handleButtonClick}>Click Me</button>
                <p>{this.state.message}</p>
                <p>{this.state.isLoggedIn ? 'Bienvenido, usuario' : 'No estás conectado'}</p>

            </header>
        )
    }
}

export default Header
