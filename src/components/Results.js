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
          hotels.length > 0 ? hotels.map((hotel) => <Hotel
          hotel={hotel}
          />
          ) : (<p>"Loading hotels..."</p>)
        }
      </div>
    )
  }

}

export default Results;
