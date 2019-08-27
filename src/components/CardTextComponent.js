import React, { Component } from "react";

export class CardTextComponent extends Component{
    render(){
        return (
            <div class="card">
                <div class="card-body">
                    <p>{this.props.item}</p>
                </div>
            </div>   
        );
    }
}