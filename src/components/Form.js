import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form className="facilities-form">
        <div className="facilities-form__buttons">
          <div className="facilities-form__buttons--wifi">
            <label htmlFor="wifi">Free Wifi</label>
            <input type="checkbox" className="input-button" id="wifi" value="wifi"></input>
          </div>
          <div className="facilities-form__buttons--pool">
            <label htmlFor="pool">Swimming pool</label>
            <input type="checkbox" className="input-button" id="pool" value="pool"></input>
          </div>
          <div className="facilities-form__buttons--carPark">
            <label htmlFor="carPark">Car park</label>
            <input type="checkbox" className="input-button" id="carPark" value="carPark"></input>
          </div>
          <div className="facilities-form__buttons--restaurant">
            <label htmlFor="restaurant">Restaurant</label>
            <input type="checkbox" className="input-button" id="restaurant" value="restaurant"></input>
          </div>
          <div className="facilities-form__buttons--gym">
            <label htmlFor="gym">Gym</label>
            <input type="checkbox" className="input-button" id="gym" value="gym"></input>
          </div>
          <div className="facilities-form__buttons--spa">
            <label htmlFor="spa">Spa</label>
            <input type="checkbox" className="input-button" id="spa" value="spa"></input>
          </div>
          <input id="submitButton" type="submit"></input>
        </div>
      </form>
    )
  }


}

export default Form;
