import React, { Component } from 'react';
import { extractLocations, getEvents, checkToken, getAccessToken } from './api';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { WarningAlert } from './Alert';
import WelcomeScreen from './WelcomeScreen';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import EventGenre from './EventGenre';

class App extends Component {
  state = {
    events: [],
    locations: [],
    eventValue: 10,
    currentLocation: 'all',
    infoText: '',
    showWelcomeScreen: undefined
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

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
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
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return { city, number };
    })
    return data;
  };

  render() {
    if (this.state.showWelcomeScreen === undefined)
      return <div className='App' />
    return (
      <div className='App'>
        <h1>Meet App</h1>
        <h4>Choose your city</h4>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} numberOfEvents={this.state.eventValue} />
        <h4>Select number of events</h4>
        <NumberOfEvents eventValue={this.state.eventValue} updateEventValue={this.updateEventValue} />
        <WarningAlert text={this.state.infoText} className='WarningAlert' />
        <h4>Events in each city</h4>
        <div className='data-vis-wrapper'>
          <EventGenre events={this.state.events} />
          <ResponsiveContainer height={400} >
            <ScatterChart width={800} height={250} margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis type='category' dataKey='city' name='city' />
              <YAxis type='number' dataKey='number' name='number of events' allowDecimals={false} />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter data={this.getData()} fill='#8884d8' />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
        <EventList events={this.state.events} />
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />
      </div>
    );
  };
}

export default App;
