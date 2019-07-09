import React, {Component} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Results from './components/Results';
import './App.css';
import Hotels from './hotels.js';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hotels: [],
      filteredHotels: [],
      wifi: false,
      pool: false,
      restaurant: false,
      carPark: false,
      gym: false,
      spa: false,
    }
  }

  fetchHotels() {
    this.setState({
        hotels: Hotels
      })
  }

  resetFilteredHotels() {
    this.setState({
      filteredHotels: []
    })
    console.log("After running reset function")
    console.log(this.state.filteredHotels)
  }

 toggleFilter = (facility) => {
    this.setState({
      [facility]: !this.state[facility]
      })
  }

  filterByFacility = (facility) => {
     this.state.filteredHotels.length > 0
     ? this.setState({
         filteredHotels: this.state.filteredHotels.filter((hotel) => hotel.facilities.includes(facility))
       })
       : this.setState({
         filteredHotels: this.state.hotels.filter((hotel) => hotel.facilities.includes(facility))
       });
 }

  filterAll = (event) => {
     event.preventDefault();
     this.resetFilteredHotels();
      this.resetFilteredHotels();
     for(let facility in this.state) {
       if (this.state[facility] === true && facility !== 'carPark') {
         this.filterByFacility(facility);
       } else if (this.state[facility] === true && facility === 'carPark') {
         this.filterByFacility("car park");
       }
     }
 }

  componentDidMount() {
    this.fetchHotels()

  }

  render() {
    let {hotels, filteredHotels} = this.state;
    return (
    <div className="App">
      <Header />
      <Form
      fetchHotels={this.fetchHotels}
      toggleFilter={this.toggleFilter}
      filterAll={this.filterAll}
      resetFilteredHotels={this.resetFilteredHotels}
      />
      <Results
      hotels={hotels}
      filteredHotels={filteredHotels}
      filterAll={this.filterAll}
      resetFilteredHotels={this.resetFilteredHotels}
      />
    </div>
  );
  }
}

export default App;
