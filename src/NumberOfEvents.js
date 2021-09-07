import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    eventValue: 10,
  };

  handleEventInputChanged = (event) => {
    const eventValue = event.target.value;
    this.setState({
      eventValue,
    });
    this.props.updateEventValue(eventValue);
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
      </div>
    );
  }
}

export default NumberOfEvents;