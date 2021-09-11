import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    eventValue: 10,
    errorText: ''
  };

  handleEventInputChanged = (event) => {
    const eventValue = event.target.value;
    if (eventValue < 1) {
      return this.setState({
        eventValue: '',
        errorText: 'Select a number between 1 and 32.'
      });
    } else
      if (eventValue > 32) {
        return this.setState({
          eventValue: '',
          errorText: 'Select a number between 1 and 32.'
        });
      } else {
        this.setState({
          eventValue,
          errorText: ''
        });
        this.props.updateEventValue(eventValue);
      }
  };

  render() {
    return (
      <div className='EventNumber'>
        <label htmlFor='numberOfEvent'></label>
        <input
          type='number'
          name='numberOfEvent'
          className='event-number-input'
          placeholder='Enter number of events'
          value={this.state.eventValue}
          onChange={this.handleEventInputChanged}
        />
        <ErrorAlert text={this.state.errorText} />
      </div>
    );
  }
}

export default NumberOfEvents;