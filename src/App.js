import React, { Component } from 'react';
import { extractLocations, getEvents } from './api';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';

class App extends Component {
  state = {
    events: [],
    locations: [],
    eventValue: 10
  };

  updateEvents = (location, eventValue) => {
    let locationEvents;
    getEvents().then((events) => {
      if (location === 'all' && eventValue === 0) {
        locationEvents = events;
      } else if (location !== 'all' && eventValue === 0) {
        locationEvents = events.filter((event) => event.location === location);
      } else if (location === '' && eventValue > 0) {
        locationEvents = events.slice(0, eventValue);
      }
      this.setState({
        events: locationEvents,
        eventValue
      });
    });
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events: events.slice(0, this.state.eventValue), locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <div className='App'>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} numberOfEvents={this.state.numberOfEvents} />
        <EventList events={this.state.events} />
        <NumberOfEvents eventValue={this.state.eventValue} updateEvents={this.updateEvents} />
      </div>
    );
  }
}

export default App;
