import React, { Component } from 'react';
import './Card.css';
import heart_icon_full from './images/heart_icon_full_small.png';
import heart_icon_outline from './images/heart_icon_outline_small.png';

const image_1 = require('./images/1.jpg');
const image_2 = require('./images/2.jpg');
const image_3 = require('./images/3.jpg');
const image_4 = require('./images/4.jpg');
const image_5 = require('./images/5.jpg');
const image_6 = require('./images/6.jpg');
const image_7 = require('./images/7.jpg');
const image_8 = require('./images/8.jpg');
const image_9 = require('./images/9.jpg');

const restURL = 'http://localhost:3001/cards/';

class Card extends Component {
    constructor(props) {
      super(props);
      this.state = {
        is_liked: this.props.card.is_liked
      };
    }


  getCardImage(id){
    switch(id) {
      case(1) : return image_1;
      case(2) : return image_2;
      default: return this.props.card.image_url;
    }


  }


  handleLikeUpdate = (id) => {

    let is_liked_value = (this.state.is_liked === true) ? false : true;

    let data = {
        is_liked: is_liked_value
    }

    fetch(restURL + id, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(
        (response) => {
            this.setState({
                is_liked: is_liked_value
            });
        })

    .catch(error => console.error('Error:', error));
  }

  render() {

    let heart_icon  = (this.state.is_liked === true) ? heart_icon_full : heart_icon_outline;

    return (
      <div className="card">
        <div>
        <a href={this.props.card.href}>
        <div className="card__img" >
          <img src={this.getCardImage(this.props.card.id)} alt="card" />
        </div>

        <div className="card__title">
          {this.props.card.title}
        </div>

        <div className="card__subtitle">
          {this.props.card.subtitle}
        </div>

        <div className="card__text" dangerouslySetInnerHTML={{__html: this.props.card.text }} />

        </a>
        </div>
        <div className="card__text">
          <img src={heart_icon} alt="liked Or Not" onClick={() => this.handleLikeUpdate(this.props.card.id)} />
        </div>

      </div>
    );
  }
}

export default Card;
