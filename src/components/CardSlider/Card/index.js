import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import heartIconFull from './images/heart_icon_full_small.png';
import heartIconOutline from './images/heart_icon_outline_small.png';
import weWorkTogether from './images/we_work_together.jpg';

const restURL = 'http://localhost:3001/cards/';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            is_liked: this.props.card.is_liked,
            error: null
        };
    }

    getCardImage(id){
        switch(id) {
        case(1) : return weWorkTogether;
        case(2) : return weWorkTogether;
        case(3) : return weWorkTogether;
        case(4) : return weWorkTogether;
        case(5) : return weWorkTogether;
        case(6) : return weWorkTogether;
        case(7) : return weWorkTogether;
        case(8) : return weWorkTogether;
        case(9) : return weWorkTogether;
        default: return this.props.card.image_url;
        }
    }


    handleLikeUpdate(id) {

        let isLikedValue = (this.state.is_liked === true) ? false : true;

        let data = {
            is_liked: isLikedValue
        };

        fetch(restURL + id, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(
                () => {
                    this.setState({
                        is_liked: isLikedValue
                    });
                },
                (error) => {
                    this.setState({
                        error: error
                    });
                }
            );
    }

    render() {

        let heartIcon  = (this.state.is_liked === true) ? heartIconFull : heartIconOutline;

        return (
            <div id="card" className="card">
                <div>
                    <a id="card__href" href={this.props.card.href}>
                        <div id="card__img" className="card__img" >
                            <img src={this.getCardImage(this.props.card.id)} alt="card" />
                        </div>
                        <div id="card__title" className="card__title">
                            {this.props.card.title}
                        </div>
                        <div id="card__subtitle" className="card__subtitle">
                            {this.props.card.subtitle}
                        </div>
                        <div id="card__text" className="card__text" dangerouslySetInnerHTML={{__html: this.props.card.text }} />
                    </a>
                </div>
                <div className="card__text">
                    <img id="heart__image" src={heartIcon} alt="liked Or Not" onClick={() => this.handleLikeUpdate(this.props.card.id)} />
                </div>
            </div>
        );
    }
}

Card.propTypes = {
    card: PropTypes.shape({
        is_liked: PropTypes.bool,
        title: PropTypes.string,
        image_url: PropTypes.string,
        href: PropTypes.string,
        id: PropTypes.number,
        subtitle: PropTypes.string,
        text: PropTypes.string,
    }).isRequired,
};

export default Card;
