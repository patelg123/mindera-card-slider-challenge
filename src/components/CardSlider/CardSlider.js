import React, { Component } from 'react';
import CardContainer from '../CardContainer/CardContainer';
import './CardSlider.css';

class CardSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: []
    };
  }

  loadData() {
    let restURL = "http://localhost:3001/cards?_start=0&_end=3";

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

  componentDidMount() {
  		this.loadData()
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
          </div>
       );
     }
  }
}

export default CardSlider;
