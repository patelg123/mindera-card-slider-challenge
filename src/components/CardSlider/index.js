import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardContainer from './CardContainer';
import './CardSlider.css';
import greenArrowLeft from './images/green_arrow_left.png';
import greenArrowRight from './images/green_arrow_right.png';

const restURL = 'http://localhost:3001/cards?';

class CardSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: [],
            numberOfCards: (this.props.numberOfCards < 1) ? 3 : this.props.numberOfCards,
            currentCardStart: 0,
            currentCardEnd: 3
        };
    }

    loadData(cardStart, cardEnd) {
        fetch(restURL + '_start=' + cardStart + '&_end=' + cardEnd)
            .then(res => res.json())
            .then(
                (result) => {
                    if(!result.length) {
                        this.setState((prevState) => ({
                            data: prevState.data
                        }));

                    } else {
                        this.setState({
                            isLoaded: true,
                            data: result,
                            currentCardStart: cardStart,
                            currentCardEnd: cardEnd
                        });
                    }
                },
                (error) => {
                    this.setState({
                        isLoaded: false,
                        error: error
                    });
                }
            );
    }

    handleRightClick() {

        let cardStart = this.state.currentCardEnd;
        let cardEnd = this.state.numberOfCards + this.state.currentCardEnd;

        this.loadData(cardStart, cardEnd);
    }

    handleLeftClick() {

        let cardStart = this.state.currentCardStart - this.state.numberOfCards;
        let cardEnd = this.state.currentCardStart;

        this.loadData(cardStart, cardEnd);
    }

    componentDidMount() {

        let cardStart = this.state.currentCardStart;
        let cardEnd = this.state.numberOfCards;

        this.loadData(cardStart, cardEnd);
    }

    render() {
        let { error, isLoaded, data} = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        }
        else if (!isLoaded) {
            return <div>Loading....</div>;
        }
        else {
            return (

                <div className="container">
                    <CardContainer data={data} />
                    <div className="arrow_container">
                        <img src={greenArrowLeft} alt="green arrow left" onClick={() => this.handleLeftClick()} />
                        <img src={greenArrowRight} alt="green arrow right" onClick={() => this.handleRightClick()} />
                    </div>
                </div>
            );
        }
    }
}

CardSlider.propTypes = {
    numberOfCards: PropTypes.number
};

export default CardSlider;
