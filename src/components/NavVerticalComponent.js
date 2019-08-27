import React, { Component } from "react";

export class NavVerticalComponent extends Component{
    render(){
        return (
            <span className="border border-primary">
                <ul className="nav flex-column">
                    {this.props.items.map(
                        item => (
                            <div class="col-sm">
                                <li className="nav-item">{item}</li>
                            </div>
                        )
                    )}
                </ul>
            </span>
        );
    }
}