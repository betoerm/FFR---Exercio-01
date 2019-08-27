import React, { Component } from "react";

export class ImageComponent extends Component{
  renderImage(imageUrl) {
    return (
      <div>
        <img src={imageUrl} />
      </div>
    );
  }
  
  render() {
    return (
      <div className="gallery">
        <div className="img-thumbnail">
          {this.props.imageUrls.map(imageUrl => this.renderImage(imageUrl))}
        </div>
      </div>
    );
  }
}
