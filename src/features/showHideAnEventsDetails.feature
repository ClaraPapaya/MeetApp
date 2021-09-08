Feature: SHOW HIDE AN EVENTS DETAILS

  Scenario: An event element is collapsed by default.

    Given the page shows a list of events
    When the user has chosen a city
    Then the event elements for that city are closed/collapsed.

  Scenario: User can expand an event to see its details.

    Given the user sees all events
    When the user clicks on one event element
    Then the element opens showing the event details

  Scenario: User can collapse an event to hide its details.

    Given the event element is expanded showing the details
    When the user clicks on a button or outside the element
    Then the event element closes/collapses hiding the details