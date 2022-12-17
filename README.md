<h1 align="center">Noughts and Crosses</h1>
[Link to the live website when built]

A basic website for a Noughts and Crosses game using HTML, CSS and a Bootstrap framework with Javascript functions to run the game.
It is designed to be used on any device.

![The Game](/assets/wireframes/wireframe-main.jpg "Noughts and Crosses game")

#### Table of Contents

- [User Experience UX](#user-experience-ux)
- [Design Strategy](#design-strategy)
- [Features](#features)
- [Technologies Used](#Technologies-Used)
- [Testing](#Testing)
- [Deployment](#Deployment)


## User Experience (UX)

* ### User Stories
  - #### First Time Visitor Goals
  
    a. As a first time visitor, I want to learn how to play the game.
    

  - #### Returning Visitor Goals
  
    a. As a returning visitor, I want to be able to play the game immediately.
    
    b. As a returning visitor, I want to be able to play an opponent multiple times and keep score.
    
  - #### Frequent User Goals
  
    a. As a frequent user, I want to be able to play an opponent multiple times with an equal chance of either of us winning.
    
    b. As a frequent user, I want to be able to play different opponents.

* Design Considerations
  - Colour Scheme
  
  The colour scheme reflects the fact that this is a simple pen and paper game, so the game uses a black and white design. This is high contrast and easier to see for people with visual impairment.
    
    
  - Typography
    
    
    
  - Imagery
  
  
  
  - Wireframes



## Design Strategy

### The strategy plane:
**What are you aiming to achieve in the first place and for whom?**

The game is for two players who take turns to make their move.

There must be instructions for first time users.

The interface should be simple and work on a variety of devices.

The game must keep score of players' wins.

The game should alternate between the players having the first move to allow both players to have the advantage of making the first move.

The game should have a reset function to set the scores back to zero to allow for different opponents.

### The scope plane:
**Which features, based on information from the strategy plane, do you want to include in your design?**

#### Must Have

The game must work.

There must be instructions for the user.

The game will be ready to play on loading for the first time.

There will be a button to start a new game.

There will be a button which pops up a window with the game instructions.

The game will show which player's turn is in progress.

#### Could Have

The game should tell the users whose turn it is to play.

The game should alternate whose turn it is to start.

The game should keep score.

There should be a button to reset the score counters.


#### Future plans
A future version could save the scores between sessions to allow the series of games to be resumed at a later stage.
A future version could have a single player option where the user can play against the computer.


#### Usability
Users are assumed to be accessing the site on a mobile device so the site should adopt a mobile first design.

Users should be able to navigate the site without difficulty so navigation should be intuitive.

For the initial build, this site will incorporate:
* The game.
* Instructions for the user.
* A display of the cumulative scores for each player.
* A display of whose turn it is to play
* A way to reset the scores.
* The game must alternate the player who takes the first move. This will make the game fair as the player with the first move has the advantage.

Future Development:
* A way of keeping the scores between sessions, possibly using cookies.
* A way to play against the computer in single player mode.


### The structure plane:
**How is the information structured and how is it logically grouped?**

The information should be grouped by;

* The main page contains the game and control buttons.
* Instructions are on a separate pop-up which is accessed by pressing the instructions button.





### The skeleton plane:
**How will our information be represented, and how will the user navigate to the information and the features?**

index.html will contain the game and all controls.

A pop-up window will contain the game instructions.

There will be no additional pages so there is no requirement for additional navigation.

### The surface plane:
**What will the finished product look like? What colors, typography, and design elements will we use?**
Wireframes for each of the pages are below:

<a href="/assets/wireframes/wireframe-main.jpg" target="_blank">Main game page wireframe</a>

<a href="/assets/wireframes/wireframe-instructions.jpg" target="_blank">Game instructions page wireframe</a>

## Features

### Responsive
The site must be designed to work on on all devices from mobile to desktop.

### Intuitive
Navigation and use of the website must be intuitive allowing the user to be able to use the website without instructions

## Technologies Used

### Languages Used
[HTML5](https://en.wikipedia.org/wiki/HTML5)

[CSS3](https://en.wikipedia.org/wiki/CSS)

[JavaScript]

## Frameworks, Libraries & Programs Used

[Bootstrap 4.4.1:](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
Bootstrap was used to assist with the responsiveness and styling of the website.

[Google Fonts:](https://fonts.google.com/)
Google fonts were used to import the 'Poppins' font into the style.css file which is used on all pages throughout the project.
The pub sign in the header uses 'Hahmlet' font because it is a close match to the font used on the actual pub sign.

[Font Awesome:](https://fontawesome.com/)
Font Awesome was used on all pages throughout the website to add icons for aesthetic and UX purposes.

jQuery:
jQuery came with Bootstrap to make the navbar responsive but was also used for the smooth scroll function in JavaScript.

[Git](https://git-scm.com/)
Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.

[GitHub:](https://github.com/)
GitHub is used to store the projects code after being pushed from Git.

[Adobe Fireworks CS6:](https://www.adobe.com)
Fireworks CS6 was used to create the logo, resizing images and editing photos for the website.

[Balsamiq:](https://balsamiq.com/)
Balsamiq was used to create the wireframes during the design process.

## Image Credits


## Testing

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

W3C Markup Validator - Results link

W3C CSS Validator - Results link

Testing User Stories from User Experience (UX) Section

First Time Visitor Goals

As a First Time Visitor, ...

As a First Time Visitor, ...

As a First Time Visitor, ...

Returning Visitor Goals

As a Returning Visitor, ...

Frequent User Goals

As a Frequent User, ...


Further Testing

The Website was tested on Google Chrome ...

The website was viewed on a variety of devices such as ...

A large amount of testing was done to ensure that all pages were linking correctly.

Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.

Known Bugs

