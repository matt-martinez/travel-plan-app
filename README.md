# Travel Planning App

## App Name: Are We There Yet?

The goal of this project was to create a fun, full-stack web application that you can use to plan out a trip. Based on a form of inputs, this app will provide an editable list that outlines where your trip begins, ends, what your method of travel will be, how long it will take you to get there, etc. This app also includes an option to spruce up your trip page by adding a custom image that represents your trip.

The main technologies that were used to create this app include:
- HTML
- CSS
- JavaScript
- jQuery
- Node.js
- Express.js
- Mongo
- Mongoose

The timeline given for this project was 6 days.

## User Stories
Below are the user stories created to guide the flow of this project:

As a user, I would like to:
- sign up for an account
- login to my account
- logout of my account
- have access to my account page, trip page, and index page
- create a new trip
- customize my trip based on method of travel
- see how long my trip will take
- designate any potential landmarks
- outline what routes and stops are included in my trip
- have the option to edit my trips later
- delete a trip
- see a list of all my trips
- star a trip as a favorite
- see trips that other users have made public
- not have any trips made public against my will

## Wireframes
Three wireframe mock-ups were created to model the index page, user show page, and the trip show page the user interacts with.

### Index Page

![Index Page](http://i.imgur.com/sFVDM9T.jpg)

### User Show Page

![User Show Page](http://i.imgur.com/Osx2gZK.jpg)

### Trip Show Page

![Trip Show Page](http://i.imgur.com/AqR5Oea.jpg)

## ERD
The data for this project was modeled by two main entities as seen below:

### User
- username
- first name
- last name
- email
- password
- trip list

### Trips
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

### JavaScript Objects
Two JavaScript objects were then constructed to demonstrate the data values for each of the items within the entities:

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

## Minimum Viable Product (MVP) Goals
The following MVP Goals were established to guide the progress of the project. These goals incorporate the user stories, wireframes, and data objects presented above, in order to ensure the app is fully functional.
- create express framework that incorporates 2 models: user and trips
- user can signup, login, logout
- create RESTful routes: GET, POST, PUT, DELETE for each model
  - allow user customize trip, with 8 fields (5 required, 3 optional)
- allow user to only access their user page
- incorporate following views:
 - user: index, signup, login, show
 - trip: show, new, edit

 These MVP goals were reached on Day 4.

## Reach Goals
The following reach goals were created to extend the functionality of the app.
- create a list of favorite trips based on user indications
- have user trip images alternate every 10 seconds on user show page
- create featured trips for index page
- create user trips list on index page
- include account edit route and view for user to alter account credentials
- separate routes, stops, and landmarks into their own schema/models for multiple inputs
- include form items for users to include links for each of the fields if they so desire

At the end of Day 6 of the project, the first two reach goals were nearly completed. For more, look to the Unsolved Bugs section below.

## Unsolved Issues/Bugs
1. Users currently have the ability to view a separate favorite trip list on their user show page. The link to the correct trip show page is present, however, the Boolean value is listed as the name of the link. Additionally, the Boolean that is displayed is false when the trip is a favorite, and is absent when the trip is not a favorite. I suspect that the issue stems from how the data value is retrieved from the data object and will need to be fixed in order for the value to be correctly listed as true. Once that bug is fixed, I can then work on displaying the appropriate trip name as the link name.

2. The user trip images currently display as a slideshow, however there are a few bugs that need fixing:
- The images themselves need some css tweaking. They are not being displayed as directly on top of one another which is easily noticeable.
- The first image that appears continues to reappear after each subsequent image for one cycle, then the images appropriately cycle in the correct order.
My hope is to re-examine both the CSS and jQuery for this animation to sort out these bugs.

3. There are return links missing on both the New Trip and Edit Trip pages. I attempted to add these links in on Day 6, however I ran into issues both with the url paths for these links and with my overall CSS. At the time, I chose to prioritize the remaining CSS elements that needed to be completed which left these links unfinished. I will be returning to these links once time allows.

## Final Thoughts
This was an incredibly fun project to pursue. It reinforced the knowledge I've gained surrounding the technologies used for this project, while further extending my proficiency in creating RESTful routes. The biggest lesson I'm happy to have learned is not to underestimate the time needed to get the Create and Edit routes working. This rang especially true as my project dealt with embedded objects across two models. I feel that in future projects, I will be more prepared to map my data, models, and views to effectively counter some of the pathing issues I experienced while building my routes. Moving forward, I will be sure to revisit my unresolved bugs/issues and work to complete my remaining reach goals.
