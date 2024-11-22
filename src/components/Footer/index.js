import React, {Component} from "react";
import FooterChild from "../FooterChild";
import "./styles.css"
class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showChild: true,
        }
    }
    removeChild = () => {
            this.setState((prevState) => ({
                showChild: !prevState.showChild
            }))
    }

    render (){
        return (
            <footer>
            <button className="footer_button" onClick={this.removeChild}> {this.state.showChild ? "Eliminar hijo" : "Traer de vuelta al hijo"}</button>
            <p>{this.state.showChild ? "Soy tu footer y ese es mi hijo": "nooo, mi hijo!"}</p>
                {this.state.showChild && <FooterChild/>}
            </footer>
        )
    }
}

export default Footer