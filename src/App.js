import React from 'react';
import { Component } from 'react';
import { extractLocations, getEvents } from './api';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';

class App extends Component {
  state = {
    events: [],
    locations: []
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents
      });
    });
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <div className='App'>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
        <NumberOfEvents />
      </div>
    );
  }
}

export default App;
