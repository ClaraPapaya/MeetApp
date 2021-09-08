import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import Event from '../Event';
import { mockData } from '../mock-data';

// Feature 2
const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  let AppWrapper;

  // Scenario 1
  test('An event element is collapsed by default.', ({ given, when, then }) => {
    given('the page shows a list of events', () => {
      AppWrapper = mount(<App />);
    });

    when('the user has chosen a city', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
    });

    then('the event elements for that city are closed/collapsed.', () => {
    });
  });

  // Scenario 2
  test('User can expand an event to see its details.', ({ given, when, then }) => {
    given('the user sees all events', () => {
      AppWrapper = mount(<App />);
    });

    when('the user clicks on one event element', () => {
      AppWrapper.update();
      AppWrapper.find('.show-hide-btn').at(0).simulate('click');
    });

    then('the element opens showing the event details', () => {
      expect(AppWrapper.find('.event .event-details')).toHaveLength(1);
    });
  });

  // Scenario 3
  test('User can collapse an event to hide its details.', ({ given, when, then }) => {
    given('the event element is expanded showing the details', () => {
      AppWrapper = mount(<App />);
      AppWrapper = mount(<Event event={mockData[0]} />);
      AppWrapper.find('.show-hide-btn').simulate('click');
      AppWrapper.find('.event-details');
    });

    when('the user clicks on a button or outside the element', () => {
      AppWrapper.find('.show-hide-btn').simulate('click');
    });

    then('the event element closes/collapses hiding the details', () => {
      expect(AppWrapper.find('.event-details')).toHaveLength(0);
    });
  });
});