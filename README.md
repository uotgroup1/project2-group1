# Survey Donkey
A survey application where users are able to make their own surveys and share with others. While anyone will be able to take the surveys, only logged in users will be able to create, edit, and delete their surveys.
___

## Talbe of Contents

* [Usage](#usage)
* [Links](#links)
* [Tools](#tools)
* [Tests](#tests)
* [Credits](#credits)
* [License](#license)
* [User Story](#user-story)
___

## Links
* [Deployed App](herokulink)

___

## Usage
This application allows all users to view and take the surveys. Only those logged in (or if they sign up) will to be able to create, edit, and delete their surveys. Once logged in, they can view their dashboard to see their surveys.

![screenshotHere](/assets/images/)
___


## Tools
* JavaScript
* node.js
* MySQL2
* Express.js
* Sequelize
* dotenv
* bcrypt
* connect-session-sequelize
* express-handlebars
* express-session
* HTML & CSS
* UUID
___

## Tests
What tests were used, if any?
___

## Credits
* Completed by: 
    * [Farnoush Yousefi](https://github.com/FarnoushYousefi)
    * [Zohaib Ali](https://github.com/szali3)
    * [Shannon Nell](https://github.com/ShannonNell)
    * [Mayuran](https://github.com/mayuranswee23)
    * [Aashir Javed](https://github.com/aashir104)
    * [Abdul Khalil](https://github.com/absk786)
___

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[MIT License](https://choosealicense.com/licenses/mit/)    
___

## User Story
### User Story
```
AS a Large Enterprise/Individual 
I WANT to create, participate, update, and delete surveys
SO THAT I can make data driven decisions 
```
### Acceptance Test: 
```
GIVEN a survey application
WHEN I view the homepage
THEN a page loads with created surveys which I take OR option to login/sign up
WHEN I click on a survey
THEN a new page loads with the chosen survey and I can submit my survey answers
WHEN I click sign up
THEN I am taken to a new page to sign up for the website
WHEN I click login
THEN I am taken to my dashboard that shows my previously created surveys and lets me create a new survey
WHEN I click start new survey
THEN I am taken to a new page that lets me input information for my new survey
WHEN I save my survey
THEN it is added to the homepage and dashboard surveys list
WHEN I click send link
THEN I can send a link to my friends/coworkers
WHEN I click edit survey
THEN I can edit my survey questions and answers or delete the survey
 
GIVEN a survey link
WHEN I open the survey
THEN I can click on my answers
WHEN the survey is done
THEN I can see the results of the survey taken thus far
```
## Future Development
- Multiple versions of survey types
- Visual representation of survey results
- API to email surveys for marketing purposes

## Deployed Link
https://obscure-river-98687.herokuapp.com/
