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
      spa: false
      // filters: {
      //   wifi: false,
      //   pool: false,
      //   restaurant: false,
      //   carPark: false,
      //   gym: false,
      //   spa: false,
      // }
    }
  }

  fetchHotels() {
        this.setState({
          hotels: Hotels
        })
  }

 toggleFilter = (facility) => {
    this.setState({
      [facility]: !this.state[facility]
      })
  }


  componentDidMount() {
    this.fetchHotels()

  }

  toggleWifiFilter = () => {
    this.setState({
      wifi: !this.state.wifi
      })
  }


  render() {
    let {hotels, filteredHotels} = this.state;
    return (
    <div className="App">
      <Header />
      <Form
      fetchHotels={this.fetchHotels}
      toggleFilter={this.toggleFilter}
      toggleWifiFilter={this.toggleWifiFilter}
      wifi={this.state.wifi}
      pool={this.state.pool}
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
