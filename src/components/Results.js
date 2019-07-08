import React, { Component } from 'react';
import Hotel from './Hotel';

class Results extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let {hotels, filteredHotels} = this.props;
    return (
      <div className="results">
        {
          hotels.forEach((hotel) => {
            return (<Hotel />

            )
          })
        }
      </div>
    )
  }

}

export default Results;
