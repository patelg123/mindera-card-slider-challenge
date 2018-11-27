import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <a href={this.props.card.href}>
        <div className="card__img" >
          <img src={this.props.card.image_url} />
        </div>

        <div className="card__title">
          {this.props.card.title}
        </div>

        <div className="card__subtitle">
          {this.props.card.subtitle}
        </div>

        <div className="card__text">
          <p>
            {this.props.card.text}
          </p>
        </div>
        </a>
      </div>
    );
  }
}

export default Card;
