import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import './CardContainer.css';

class CardContainer extends Component {

    render() {
        return (
            <div className="card-container">
                {
                    this.props.data.map(card => (
                        <Card key={card.id} card={card} />
                    ))
                }
            </div>
        );
    }
}

CardContainer.propTypes = {
    data: PropTypes.array.isRequired,
};

export default CardContainer;
