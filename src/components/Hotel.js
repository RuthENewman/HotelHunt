import React, {Component} from 'react';

class Hotel extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { hotel } = this.props;
    return (
      <div className="hotel">
          <div class="hotel__details">
            <h2 class="hotel__details--name">
            {hotel.name.slice(0,1).toUpperCase()}
            {hotel.name.slice(1,5) + " "}
            {hotel.name.slice(5)}</h2>
            <h3 class="hotel__details--starRating">
              {hotel.starRating} stars
            </h3>
          </div>
          <img src={hotel.image_url} alt={hotel.name} class="hotel__image"/>
      </div>
    )
  }


}

export default Hotel;
