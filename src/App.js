import React, {Component} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Results from './components/Results';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hotels: [],
      filteredHotels: [],
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

  const fetchHotels = () => {
    fetch('./hotels.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          hotels: data;
        })
      })
  }

  render() {
    return (
    <div className="App">
      <Header />
      <Form />
      <Results />
    </div>
  );
  }
}

export default App;
