import React from "react";
import "./OfferModule.css"
import { Link } from "react-router-dom";

const OfferModule = (props) => {

    return (
        <div className="offer scaling">
            <h2>{props.title}</h2>
            <img src={props.image} alt="" />
            <p className="description" >{props.description}</p>
            <p className="price" >{props.price}</p>
            
            <Link className="a" to="/contacts">Mám zájem &#62;</Link>
        </div>
    )
}

export default OfferModule;