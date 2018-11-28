import React, { Component } from 'react';
import './Card.css';
import heart_icon_full from './images/heart_icon_full_small.png';
import heart_icon_outline from './images/heart_icon_outline_small.png';

const restURL = 'http://localhost:3001/cards/';

class Card extends Component {
    constructor(props) {
      super(props);
      this.state = {
        is_liked: this.props.card.is_liked
      };
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
          <img src={this.props.card.image_url} alt="card" />
        </div>

        <div className="card__title">
          {this.props.card.title}
        </div>

        <div className="card__subtitle">
          {this.props.card.subtitle}
        </div>

        <div className="card__text">
          <p dangerouslySetInnerHTML={{__html: this.props.card.text }} />
        </div>
        </a>
        </div>
        <div>
          <img src={heart_icon} alt="liked Or Not" onClick={() => this.handleLikeUpdate(this.props.card.id)} />
        </div>

      </div>
    );
  }
}

export default Card;
