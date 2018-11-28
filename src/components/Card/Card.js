import React, { Component } from 'react';
import './Card.css';
import heart_icon_full from './images/heart_icon_full_small.png';
import heart_icon_outline from './images/heart_icon_outline_small.png';

const restURL = 'http://localhost:3001/cards/';

class Card extends Component {

  handleLikeUpdate = (id) => {
    alert(restURL + id);

    fetch(restURL + id, {
      method: 'patch',
      headers: { 'Content-Type':'application/json' },
      mode: 'cors',
      body: JSON.stringify('is_liked=true')
    })
    .then(res => res.json())
    .then(console.log)



  }

  render() {

    let heart_icon  = (this.props.card.is_liked === true) ? heart_icon_full : heart_icon_outline;

    return (
      <div className="card">
        <div>
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
        <div>
          <img src={heart_icon} onClick={() => this.handleLikeUpdate(this.props.card.id)} />
        </div>

      </div>
    );
  }
}

export default Card;
