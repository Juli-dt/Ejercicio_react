import React, { Component } from "react";
import "./styles.css"

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false,
            secconds: 0
        }
        // this.timerId = null
    }

    handleButtonClick = () => {
        console.log("Clickeaste el botón de main");
    
        // if (this.timerId) {
        //     clearInterval(this.timerId);
        //     this.timerId = null; 
        // }
    
        this.setState((prevState) => ({
            isLoggedIn: !prevState.isLoggedIn // Cambiamos el estado de isLoggedIn
        }));
    };
    

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.setState((prevState) => ({
                secconds: prevState.secconds + 0.5
            }));
        }, 1000);
        
    }



    render() {
        return (
            <main>
                <h1>{this.props.appName}</h1>
                <button onClick={this.handleButtonClick}> Click me </button>
                <p>{this.state.isLoggedIn ? "Este es tu main" : "Loggeate para ver tu main"}</p>
                <p>Montado hace {this.state.secconds} segundos</p>

            </main>
        )
    }
}


export default Main