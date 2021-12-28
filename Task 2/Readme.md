# LETSGROWMORE - Internship Task 2: Create a Web Application

This is a solution to the [Intermediate Level Task: Create a Web Application](). 

## Table of contents

- [The challenge](#the-challenge)
  - [Overview](#overview)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## The challenge
  The challenge is to create user card grid layout having a navbar showing a brand name, here BrainFood is the brand. Add a button in navbar with name Get Users which on click makes an API call to get the user data from https://reqres.in/api/users?page=1. Show a loader while API fetches data. 

### Overview

  BrainFood brand is displayed in a container card with brief details of BrainFood and a Get User button. When user visits the page a card is loaded which displays book case with BrainFood displayed in bold. The subtitle is greyed stating "Feed your brain" along with details of subscriptions, curated content and ratings. 
  Get Users button is displayed at the bottom of the card which has a click event. After button is clicked the details card disappears and a loader is displayed while a API call is made and the users details is fetched. 
  Once the user details are fetched the loader disappears and the user details is displayed on the page.


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript
- Async and Await function

### What I learned

Asynchronous javascript is used extensively to make a API call and fetch the details of user and displayed on the web application. HTML is used to create the brand card of BrainFood using the nav bar. CSS is used to style the web application using CSS flexbox and grid. 
Document.querySelector is used to select the HTML elements. A click event is defined on the "Get User" button and a listener event listens to the event defined on the button. Once the button is clicked the eventlistener catches the event and calls the asnychronous function, fetchUsers. The original data disappears and the loader starts loading by manipulating CSS styles. 
Await fetch is used to make a API call through the url request. A pending promise is returned immidiately while the action is performed. Once the promise is fullfilled it returns the response of success or fail. If the request is successful the json data of user list is also included in the response. 
Data is extracted from the response and the modified to display on the page. The loader disappears when the fetch calls complete successfully and aftet that the user data is displayed. 

```html
 <nav class="main-nav">
 <img src="load.gif" id="loader"></>
```
```css
 display: flex;
 flex-flow: column;
```
```js
const fetchUsers = async function(){}
const res = await fetch(temp);
const response = await res.json();
body.insertAdjacentHTML('beforeend',html);
loader.style.display = 'none';
```

### Useful resources

- [Mozilla MDN Web docs](https://developer.mozilla.org) - This helped me for understanding all concepts of HTML, CSS, and Javascript is details. This is the top of my list for web development.
- [W3Schools](https://www.w3schools.com/) - This is the best website around for the beginners. I'd recommend it to anyone who wants to start with web development.

## Author

- [Ankita Tapase](Third-Year-CSE,NCER,Pune)
