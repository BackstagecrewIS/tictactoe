<h1 align="center">Noughts and Crosses</h1>
[Link to the deployed site](https://backstagecrewis.github.io/tictactoe/)

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
  To make the control buttons more visible, they will be coloured forest green with white text.
  The messages tell the user the current player's turn and also the result of the game. These will be yellow text on a black background to differentiate theem from the buttons.
  To hignlight the cursor position furing game play, the squares will change colour to pink when the mouse moves over them and return to white when the cursor moves out.
    
    
  - Typography
    
    For simplicity, only one font style will be used. The Poppins font is a clear sans-serif font which works well for all elements of the game.
    
  - Imagery
  
    There are no images used in the game. The game board is simply a set of divs with borders set as required to make the traditional game board
    
  - Wireframes
  
  ![The Game](/assets/wireframes/wireframe-main.jpg "Noughts and Crosses game")


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

There will be a button which pops up a modal with the game instructions.

The game should tell the users whose turn it is to play.

#### Could Have

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

* The main page contains the game and control buttons. The scores and all controls are all on the main page.
* Instructions are on a modal which is accessed by pressing the instructions button. This pops up over the game screen and disappears when closed. 

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

[JavaScript](https://en.wikipedia.org/wiki/JavaScript)

## Frameworks, Libraries & Programs Used

[Bootstrap 4.4.1:](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
Bootstrap was used to assist with the responsiveness and styling of the website.

[Google Fonts:](https://fonts.google.com/)
Google fonts were used to import the 'Poppins' font into the style.css file which is used on all pages throughout the project.

jQuery:
jQuery is used to make the modal function.

[Git](https://git-scm.com/)
Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.

[GitHub:](https://github.com/)
GitHub is used to store the projects code after being pushed from Git.

[Balsamiq:](https://balsamiq.com/)
Balsamiq was used to create the wireframes during the design process.

## Image Credits

  No images are used

## Testing

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

W3C Markup Validator - Results [link](https://validator.w3.org/nu/?doc=https%3A%2F%2Fbackstagecrewis.github.io%2Ftictactoe%2F)

W3C CSS Validator - Results [link](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fbackstagecrewis.github.io%2Ftictactoe%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

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

## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/BackstagecrewIS)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section on the left column.
4. Under "Source", select 'Deploy from Branch then click the dropdown called "None" and select "Main".
5. Click Save to confirm the choice.
6. Scroll back to the top of the page to locate the link to the published site in the "GitHub Pages" section.

