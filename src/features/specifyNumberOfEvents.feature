Feature: SPECIFY NUMBER OF EVENTS

  Scenario: When user hasn’t specified a number, 10 is the default number.

    Given the user has not specified a number
    When the event list is loaded
    Then the default number of events is 10

  Scenario: User can change the number of events they want to see.

    Given the option to enter a desired number is shown
    When the user inputs their preferred number
    Then the list of events is adjusted to that number

