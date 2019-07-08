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

  // toggleFilter = facility => {
  //   this.setState({
  //     filters[facility]: !this.state.filters[facility]
  //     })
  // }

  toggleWifiFilter() {
    this.setState({
      wifi: true
      })
  }


  render() {
    let {hotels, filteredHotels} = this.state;
    return (
    <div className="App">
      <Header />
      <Form
      fetchHotels={this.fetchHotels}
      toggleWifiFilter={this.toggleWifiFilter}
      wifi={this.state.wifi}
      />
      <Results
      hotels={hotels}
      filteredHotels={filteredHotels}
      />
    </div>
  );
  }
}

export default App;
