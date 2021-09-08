import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';
import { mockData } from '../mock-data';

// Feature 3
const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  let AppWrapper;

  // Scenario 1
  test('When user hasn’t specified a number, 10 is the default number.', ({ given, when, then }) => {
    given('the user has not specified a number', () => {
    });

    when('the event list is loaded', () => {
      AppWrapper = mount(<App />);
    });

    then('the default number of events is 10', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
    });
  });

  // Scenario 2
  test('User can change the number of events they want to see.', ({ given, when, then }) => {
    given('the option to enter a desired number is shown', () => {
      AppWrapper.find(NumberOfEvents);
    });

    when('the user inputs their preferred number', () => {
      AppWrapper.find('.event-number-input').simulate('change', {
        target: { value: 1 }
      });
    });

    then('the list of events is adjusted to that number', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(1);
    });
  });
});