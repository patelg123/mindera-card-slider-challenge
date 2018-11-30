import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import './CardContainer.css';

class CardContainer extends Component {

    render() {
        return (
            <div id="card-container" className="card-container">
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

CardContainer.defaultProps = {
    data: [],
};

export default CardContainer;
