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

      filters: {
        wifi: false,
        pool: false,
        restaurant: false,
        carPark: false,
        gym: false,
        spa: false,
      }
    }
  }

  fetchHotels() {
        this.setState({
          hotels: Hotels
        })
  }


  componentDidMount() {
    this.fetchHotels()

  }

  toggleWifiFilter() {
    this.setState({
      wifi: !this.state.wifi
      })
  }


  render() {
    let {hotels} = this.state;
    return (
    <div className="App">
      <Header />
      <Form
      fetchHotels={this.fetchHotels}
      toggleWifiFilter={this.toggleWifiFilter}
      wifi={this.state.wifi}
      />
      <Results
      hotels={this.state.hotels}
      filteredHotels={this.state.filteredHotels}
      />
    </div>
  );
  }
}

export default App;
