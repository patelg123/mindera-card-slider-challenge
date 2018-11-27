import React, { Component } from 'react';
import Card from '../Card/Card';
import './CardContainer.css';

class CardContainer extends Component {

  render() {
    return (
      <div className="card-container">
        {
          this.props.data.map(card => (
            <Card card={card} />
          ))
        }
      </div>
    );
  }
}

export default CardContainer;
