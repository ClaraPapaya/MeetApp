# Meet_App
[Meet App](https://clarapapaya.github.io/Meet_App)

## About The Project
### Objective
To build a serverless,   progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.
### Key Features
**FEATURE 1: FILTER EVENTS BY CITY**

**User Story:** As a user, I should be able to filter events by city, so that I can see the list of events that take place in that city.

**Scenario 1:** When the user hasn’t searched for a city, show upcoming events from all cities.

* Given the user hasn’t searched for any city
* When the user open the app
* Then the user should see a list of all upcoming events

**Scenario 2:** The user should see a list of suggestions when they search for a city.

* Given the the main page is open
* When user starts typing in the city textbox
* Then the user should see a list of cities (suggestions) that match what they’ve typed

**Scenario 3:** The user can select a city from the suggested list.

* Given the user was typing “Berlin” in the city textbox and the list of suggested cities is showing
* When the user selects a city (e.g., “Berlin, Germany”) from the list
* Then their city should be changed to that city (i.e., “Berlin, Germany”) and the user should receive a list of upcoming events in that city

**FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS**

**User Story:** As a user, I should be able to click on certain events, so that I can open or close the details of the chosen event.

**Scenario 1:** An event element is collapsed by default.

* Given the page shows a list of events
* When the user has chosen a city
* Then the event elements for that city are closed/collapsed.

**Scenario 2:** User can expand an event to see its details.

* Given the user sees all events
* When the user clicks on one event element
* Then the element opens showing the event details

**Scenario 3:** User can collapse an event to hide its details.

* Given the event element is expanded showing the details
* When the user clicks on a button or outside the element
* Then the event element closes/collapses hiding the details

**FEATURE 3: SPECIFY NUMBER OF EVENTS**

**User Story:** As a user, I should be able to specify the number of event, so I can choose how many I want to see on my screen at the same time.

**Scenario 1:** When user hasn’t specified a number, 32 is the default number.

* Given the user has not specified a number
* When the event list is loaded
* Then the default number of events is 32

**Scenario 2:** User can change the number of events they want to see.

* Given the option to enter a desired number is shown
* When the user inputs their preferred number
* Then the list of events is adjusted to that number

**FEATURE 4: USE THE APP WHEN OFFLINE**

**User Story:** As a user, I should be able to use the app when offline, so I can still see my events that I looked at last.

**Scenario 1:** Show cached data when there’s no internet connection.

* Given the user has no internet connection
* When the app is opened
* Then the cached data should be displayed

**Scenario 2:** Show error when user changes the settings (city, time range).

* Given the user has no internet connection
* When the user changes any settings
* Then an error message should be displayed

**FEATURE 5: DATA VISUALIZATION**

**User Story:** As a user, I should be able to see future events in several cities, so I can make a decision about which city to look at.

**Scenario 1:** Show a chart with the number of upcoming events in each city.

* Given the main page shows a preview image of a chart
* When the user clicks on the chart
* Then a detailed chart with all available cities and their events displays

### Technical Requirements
- The app must be a React application.
- The app must be built using the TDD technique.
- The app must use the Google Calendar API and OAuth2 authentication flow.
- The app must use serverless functions (AWS lambda is preferred) for the authorization server instead of using a traditional server.
- The app’s code must be hosted in a Git repository on GitHub.
- The app must work on the latest versions of Chrome, Firefox, Safari, Edge, and Opera, as well as on IE11.
- The app must display well on all screen sizes (including mobile and tablet) widths of 1920px and 320px.
- The app must pass Lighthouse’s PWA checklist.
- The app must work offline or in slow network conditions with the help of a service worker.
- Users may be able to install the app on desktop and add the app to their home screen on mobile.
- The app must be deployed on GitHub Pages.
- The API call must use React axios and async/await.
- The app must implement an alert system using an OOP approach to show information to the user.
- The app must make use of data visualization (recharts preferred).
- The app must be covered by tests with a coverage rate >= 90%.
- The app must be monitored using an online monitoring tool.

## Built With
* [React](https://reactjs.org/)
* [React Bootstrap](https://react-bootstrap.github.io/)
* [Redux](https://redux.js.org/)
* [JavaScript](https://www.javascript.com/)
* [Node.js](https://nodejs.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
### Dependencies
* react
* axios
* react-scripts
* recharts
* nprogress
### Dev Dependencies
* enzyme
* jest-cucumber
* puppeteer
* gh-pages

## Getting Started
### Setting Up
To run this app locally you need to use Node.js
``` 
npm install --global
```
### Running The App
Use the command:
``` 
npm start
```
