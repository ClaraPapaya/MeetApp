import React, { Component } from 'react';
import { extractLocations, getEvents } from './api';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { WarningAlert } from './Alert';

class App extends Component {
  state = {
    events: [],
    locations: [],
    eventValue: 10,
    currentLocation: 'all',
    infoText: ''
  };

  updateEvents = (location, eventValue) => {
    let locationEvents;
    getEvents().then((events) => {
      if (location === 'all') {
        locationEvents = events;
      } else {
        locationEvents = events.filter((event) => event.location === location);
      }
      locationEvents = locationEvents.slice(0, eventValue);
      this.setState({
        events: locationEvents,
        eventValue,
        currentLocation: location
      });
    });
  }

  updateEventValue = (eventValue) => {
    this.setState({
      eventValue
    });
    this.updateEvents(this.state.currentLocation, eventValue)
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events: events.slice(0, this.state.eventValue), locations: extractLocations(events) });
      }
    });
    if (!navigator.onLine) {
      this.setState({
        infoText: 'No internet connection detected, previously loaded events are displayed.'
      });
    } else {
      this.setState({
        infoText: ''
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <div className='App'>
        <h1>Meet App</h1>
        <h4>Choose your city</h4>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} numberOfEvents={this.state.eventValue} />
        <h4>Select number of events</h4>
        <NumberOfEvents eventValue={this.state.eventValue} updateEventValue={this.updateEventValue} />
        <WarningAlert text={this.state.infoText} className='WarningAlert' />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
