import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

export class ButtonBackToHome extends Component {
    render() {
        return (
            <Link
                className='button is-info'
                to='/'>
                Back to Home
            </Link>
        )
    }

}