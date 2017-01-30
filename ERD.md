## ERDs
### Entities
#### User
- username
- first name
- last name
- email
- password
- trip list

#### Trips
- trip name
- trip image
- favorite
- start
- destination
- travel time
- method of travel
- landmarks
- routes
- stops

### Javascript Objects
var user = {
  username: String,
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  tripList: [tripSchema]
};

var trips = {
  tripName = String,
  img = String,
  favorite = Boolean,
  start = String,
  destination = String,
  travelTime = String,
  methodOfTravel = String, (drop down list: airplane, etc)
  landmarks = String,
  routes = String,
  stops = String
};

### Relationships
var exampleUser = {
  username: 'thatdude',
  firstName: 'M',
  lastName: 'Ma',
  email: 'm@email.com',
  password: 'thisisapassword123',
  tripList: [{
    var tripOne: [{
      tripName: 'Alaska',
      tripImg: '(url)',
      favorite: true,
      start: 'Los Angeles, CA',
      destination: 'Anchorage, AK',
      travelTime: '6 hours',
      methodOfTravel: 'airplane',
      landmarks: 'none',
      routes: 'none',
      stops: 'Seattle, WA'
      }],
    var tripTwo: [{
      tripName: 'Galapagos',
      tripImg: '(url)',
      favorite: true,
      start: 'Los Angeles, CA',
      destination: 'Galapagos Islands, Ecuador',
      travelTime: '23 hours',
      methodOfTravel: 'airplane',
      landmarks: 'none',
      routes: 'none',
      stops: 'Panama City, Panama, and Guayaquil, Ecuador'
      }],
    var tripThree: [{
      tripName: 'El Paso',
      tripImg: '(url)',
      favorite: false,
      start: 'Los Angeles, CA',
      destination: 'El Paso, TX',
      travelTime: '12 hours',
      methodOfTravel: 'car',
      landmarks: 'Mt. Picacho Peak, AZ',
      routes: 'Interstate 10 (I-10) Highway',
      stops: 'As many as you would like!'
    }],
};
