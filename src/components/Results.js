import React, { Component } from 'react';
import Hotel from './Hotel';

class Results extends Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate() {

  }

  render() {
    let {hotels, filteredHotels} = this.props;
    return (
      <div className="results">
        {
          filteredHotels.length > 0 ? filteredHotels.map((hotel) =>
          <Hotel
          hotel={hotel}
          key={hotel.name}
          />
          ) : hotels.map((hotel) => <Hotel
          hotel={hotel}
          key={hotel.name}
          />
        )
        }
      </div>
    )
  }

}

export default Results;
