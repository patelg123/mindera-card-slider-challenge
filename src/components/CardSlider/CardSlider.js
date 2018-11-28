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
      NumberOfCards: 3,
      CurrentCardStart: 0,
      CurrentCardEnd: 3
    };
  }

  loadData(restURL) {

    fetch(restURL)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: false,
            error
          });
        }
      )
    }

  handleRightClick = () => {

    let cardStart = this.state.CurrentCardEnd;
    let cardEnd = this.state.NumberOfCards + this.state.CurrentCardEnd;

    this.loadData(restURL + '_start=' + cardStart + '&_end=' + cardEnd);

    this.setState({
      CurrentCardStart: cardStart,
      CurrentCardEnd: cardEnd
    });

  }

  handleLeftClick = () => {

    let cardStart = this.state.CurrentCardStart - this.state.NumberOfCards;
    let cardEnd = this.state.CurrentCardStart;

    this.loadData(restURL + '_start=' + cardStart + '&_end=' + cardEnd);

    this.setState({
      CurrentCardStart: cardStart,
      CurrentCardEnd: cardEnd
    });

  }

  componentDidMount() {

      let cardStart = this.state.CurrentCardStart;
      let cardEnd = this.state.NumberOfCards;

      this.loadData(restURL + '_start=' + cardStart + '&_end=' + cardEnd);

      this.setState({
        CurrentCardEnd: cardEnd
      });
  }

  render() {
    const { error, isLoaded, data} = this.state;

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
