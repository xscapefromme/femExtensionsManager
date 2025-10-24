# Frontend Mentor - Browser extensions manager UI solution

This is a solution to the [Browser extensions manager UI challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Browser extensions manager UI solution](#frontend-mentor---browser-extensions-manager-ui-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
 


## Overview

### The challenge

Users should be able to:

- Toggle extensions between active and inactive states
- Filter active and inactive extensions
- Remove extensions from the list
- Select their color theme
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page


### Links

- Solution URL: (https://github.com/xscapefromme/femExtensionsManager.git)
- Live Site URL: (https://femextensionsmanager.netlify.app/)

## My process
So how I started is obviously building foundation through HTML and style with CSS. Next was coding the interactivity which was the hard part such as building the toggle btns, fetching the data(first time doing so), trying to get the cards when active utilzing the filter method and place it in its own section[active or inactive]. Removing the card items with splice method while also giving user the option for their UI preference. Hardest part was the localStorage and still need to work and practice but understanding it better and better the more I utilize. 
### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow



### What I learned

- fetching data from the data.json file & creating the elements dynamically through JS without having to create each element through HTML which was very useful. Grabbing each item from the object. Still need to understand the setup but understand the overall concept. 
- creating elements within JS and styling through CSS was a little bit tricky trying to grasp the concept but worked out.
- using filter() to easily distinguish what card is active and inactive and have it in its appropriate section. filter() as we still wanted to keep the original being from the allSection.
- creating the toggle button through innerHTML in JS and getting a reminder on ::before pseudo element. 
- localStorage want to save/set on the click/toggle and want to grab it on the reload while updating the original array. 
- creating the toggleBtn through span and creating elements inside JS. 
- reminder on responsive grid, didn't really want to use media query's as much. 
- using objects with arrays 
- learning new methods such as filter() and forEach() that played a HUGE role in getting the project done. Leaving the project with a greater understanding of both methods and the reason why we use these methods for specific purposes. Good eye opener. 
- arrow functions
- difference between a NodeList and an Array 
- how to convert a NodeList to an array
- ! flips the value and utilized that on each click within the colorSwitchToggle
- index and utilizing it to see which one is being changed either to true / or false through an object.
- updating it on reload through getItem ex. checkedStatus = saved;




### Continued development

- need to utilize functions more and see the value in it. 
- more practice fetching as it was my first time.
- more practice with localStorage but grasping the concept and leaving off understanding localStorage when I first started. 
- continue learning new JS methods and better JS techniques as well as HTML and CSS. 



