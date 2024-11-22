import React, { Component } from "react";
import "./styles.css"
class FooterChild extends Component {

    componentWillUnmount() {
        console.log("Me fui")
    }


    render() {
        return <p className="hijo">No estaré aquí para siempre</p>
    }
}

export default FooterChild