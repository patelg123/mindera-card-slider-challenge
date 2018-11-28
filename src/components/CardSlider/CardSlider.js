import React, { Component } from 'react';
import CardContainer from '../CardContainer/CardContainer';
import './CardSlider.css';
import green_arrow_left from './images/green_arrow_left.png';
import green_arrow_right from './images/green_arrow_right.png';

const restURL = 'http://localhost:3001/cards?';

class CardSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: [],
      NumberOfCards: (this.props.NumberOfCards < 1) ? 3 : this.props.NumberOfCards,
      CurrentCardStart: 0,
      CurrentCardEnd: 3
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
              CurrentCardStart: cardStart,
              CurrentCardEnd: cardEnd
            });
          }
        },
        (error) => {
          this.setState({
            isLoaded: false,
            error: error
          });
        }
      )
    }

  handleRightClick = () => {

    let cardStart = this.state.CurrentCardEnd;
    let cardEnd = this.state.NumberOfCards + this.state.CurrentCardEnd;

    this.loadData(cardStart, cardEnd);
  }

  handleLeftClick = () => {

    let cardStart = this.state.CurrentCardStart - this.state.NumberOfCards;
    let cardEnd = this.state.CurrentCardStart;

    this.loadData(cardStart, cardEnd);
  }

  componentDidMount() {

      let cardStart = this.state.CurrentCardStart;
      let cardEnd = this.state.NumberOfCards;

      this.loadData(cardStart, cardEnd);
  }

  render() {
    let { error, isLoaded, data} = this.state;

     if (error) {
       return <div>Error: {error.message}</div>;
     }
     else if (!isLoaded) {
       return <div>Loading....</div>
     }
     else {
       return (

         <div className="container">
          <CardContainer data={data} />
          <div>
            <img src={green_arrow_left}  onClick={() => this.handleLeftClick()} />
            <img src={green_arrow_right} onClick={() => this.handleRightClick()} />
          </div>
         </div>
       );
     }
  }
}

export default CardSlider;
