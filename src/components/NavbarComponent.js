import React, { Component } from "react";

export class NavbarComponent extends Component{
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                 <a className="navbar-brand" href="nav">{this.props.title}</a>

                <ul className="navbar-nav">
                    {this.props.items.map(
                        item => (
                            <li className="nav-item">{item}</li>
                        )
                    )}
                </ul>                
            </nav>
            
        );
    }
}