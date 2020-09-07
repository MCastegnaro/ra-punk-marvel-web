# RA-punk-marvel-web
> A simple react project to use the punk and marvel api's.

This project use the marvel and punk api's to discover the interest of people on that subjects.
Here you can  list, find and like the favorites heros and beers.

## Setup Installation

1. Clone this repo;
2. Install yarn in you PC.

## Development setup

1. To install all dev dependencies, run ``` yarn ``` in package.json directory;
2. To use marvel api with no problems, make sure to create a '.env' file at the project root containing the variables ```REACT_APP_MARVEL_PUBLIC_KEY``` and ```REACT_APP_MARVEL_PRIVATE_KEY```
containing the key values ​​for your marvel account.
3. To exec the project in localhost, run the script ``` yarn start ```;

## Build
1. To build project, run ``` yarn build ```;

## Test setup
1. To perform the tests correctly make sure that ```cypress``` is installed on your PC;
2. To open and see the tests running, run ```yarn cypress:open ```;
3. To running tests in background , run ```yarn cypress:run ```.

## Live
You can access the project running [Here](https://ra-marvel-punk-web.netlify.app)

## Deploy

The project was deployed in Netlify with github action.


[![Netlify Status](https://api.netlify.com/api/v1/badges/abc27a7e-f2e6-439b-aa83-9045e7fa6422/deploy-status)](https://app.netlify.com/sites/ra-marvel-punk-web/deploys)
