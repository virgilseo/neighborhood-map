# Neighborhood-map Project

A browser app featuring five different locations on a neighborhood of my choice. The neighborhood is Dusseldorf, city center.

## Table of Contents

* [Instructions](#instructions)
* [Installation](#installation)
* [Api](#api)

## Instructions

This app features five locations in Dusseldorf city center. The sider bar off the app features a search box and a list view.
You can filter the locations by typing in the name in the search box.
The app also features a map with five markers representing the five default locations. When you click on a marker a info window pops up providing you with further information on the locations.

If you click on a item in the list view the corresponding marker animates on the map and an info window pops up.  

## Installation

Clone the current repository using: git clone https://github.com/virgilseo/neighborhood-map.git

Next, from the project folder you need to open a terminal window and run the following command: npm install. After the installation has finished then run this command: npm start.
After this a browser window will open on localhost:3000 and you can start using the app.

If you close the browser window and want to use the app again just remember you can find the it @ localhost:3000.

Note: The application uses a service worker to cache page contents and display them when off line.
But to enable this feature you must use the app in production mode.
To do this just run the following commands in your console:
1. npm run build
2. serve -s build

## Api
The application uses third party api to display the map and fetch information about the locations.

1. Google Maps Api: https://cloud.google.com/maps-platform/
2. Foursquare Api: https://foursquare.com/
