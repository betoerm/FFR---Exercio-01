import React, { Component } from "react";

export class SidebarComponent extends Component{
    render(){
        return (
            <aside>
                <h3>{this.props.title}</h3>

                <ul>
                    {this.props.items.map(
                        item => (
                            <li>{item}</li>
                        )
                    )}
                </ul>
            </aside>
        );
    }
}