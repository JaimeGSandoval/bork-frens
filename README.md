# bork-frens
A full stack React.js and Node.js mobile application for dog owners who want a community to find doggy play pals for their four legged best friends.

## Technologies Used
- React.js
- JavaScript ES6
- Node.js
- Express.js
- PostgreSQL
- SQL
- Bootstrap 4
- CSS3
- HTML5
- AWS EC2
- Webpack
- Babel
- npm

## Live Demo
Try the application Live at https://borkfrens.jaimesandoval.net/

## Features

:thumbsup: Features I personally worked on.

- User can use a drop down menu to login.
- User retrieves all data from back end after login. :thumbsup:
- User can navigate throughout the app from Home page. :thumbsup:
- User can edit their profile page.
- User can view list of messages from friends.
- User can view list of friends :thumbsup:
- User can view list of friend requests.
- User can accept or deny friend requests.
- User can navigate to messaging from friends list w/ selection of message icon. :thumbsup:
- User can message other users.
- User can view other user's profile.
- User has mobile navigation access to visit any page in the app. :thumbsup:
- User can see list of nearby users via Google Maps(currently static).
- User can send friend request to other users.

## Stretch Features
- User can create an account.
- User can delete account.
- User can upload profile picture.

## Preview
![bork-frens](/server/public/images/bork-frens.gif)

## Gettung Started
1. Clone the repository.
```shell
git clone https://github.com/JaimeGSandoval/bork-frens
cd bork-frens
```
2. Install all dependencies with npm.
```
npm install
```
3. Create a .env file in the root directory and set the ports and session
```
PORT=3001
DEV_SERVER_PORT=3000
SESSION_SECRET=secret
SESSION_EXPIRY=28800000
```
4. Start the project. Once started you can view the application by opening http://localhost:3000 in your browser.
```
npm run dev
```
