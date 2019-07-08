import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form className="facilities-form">
        <div class="facilities-form__buttons">
          <div class="facilities-form__buttons--wifi">
            <label for="wifi">Free Wifi</label>
            <input type="checkbox" class="input-button" id="wifi" value="wifi"></input>
          </div>
          <div class="facilities-form__buttons--pool">
            <label for="pool">Swimming pool</label>
            <input type="checkbox" class="input-button" id="pool" value="pool"></input>
          </div>
          <div class="facilities-form__buttons--carPark">
            <label for="carPark">Car park</label>
            <input type="checkbox" class="input-button" id="carPark" value="carPark"></input>
          </div>
          <div class="facilities-form__buttons--restaurant">
            <label for="restaurant">Restaurant</label>
            <input type="checkbox" class="input-button" id="restaurant" value="restaurant"></input>
          </div>
          <div class="facilities-form__buttons--gym">
            <label for="gym">Gym</label>
            <input type="checkbox" class="input-button" id="gym" value="gym"></input>
          </div>
          <div class="facilities-form__buttons--spa">
            <label for="spa">Spa</label>
            <input type="checkbox" class="input-button" id="spa" value="spa"></input>
          </div>
          <input id="submitButton" type="submit"></input>
        </div>
      </form>
    )
  }


}

export default Form;
