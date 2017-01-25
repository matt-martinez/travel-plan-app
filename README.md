# Travel Planning App
This is an app to plan your travels!

## User Stories
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
- see trips other users have posted
- not have any trips made public against my will

## MVP Goals
- create express framework that incorporates 2 models: user and trips
- user can signup, login, logout
- create RESTful routes: GET, POST, PUT, DELETE for each model
  - allow user customize trip, with 8 fields (5 required, 3 optional)
- allow user to only access their user page
- incorporate following views:
 - user: index, show
 - trip: show, new, edit

## Reach Goals
- create featured trips for index page
- create user trips list on index page
- have trip images alternate every 10 seconds
- include account edit route for user

## Thoughts Moving Forward
- how will I implement both a trip list and a favorite trip list?
