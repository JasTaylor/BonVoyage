[![APP Logo](https://i.imgur.com/PjXNIt6.jpg)]


# Bon Voyage:
### Bon Voyage is an application that allows for a user to see other posts from users and post/edit/delete their own posts. I created this app so that a user could have a list of places to go to when traveling both abroad and in their home country!

## Set Up Steps

1. [Download](https://git.generalassemb.ly/ga-wdi-boston/react-auth-template) this template.
2. Unzip and rename the template directory (`unzip ~/Downloads/react-auth-template-master.zip`).
3. Move into the new project and `git init`.
4. Empty [`README.md`](README.md) and fill with your own content.
5. Replace `react-auth-template` in `package.json` with your
   projects name.
6. Replace the `"homepage"` field in `package.json` with your (public) Github
   account name and repository name.
7. Install dependencies with `npm install`.
8. `git add` and `git commit` your changes.
9. Run the development server with `npm start`.

## Important Links
- [Front-End Repo](https://github.com/JasTaylor/BonVoyage)
- [Back-End Repo](https://github.com/JasTaylor/Capstone-backend)
- [Deployed Site](https://jastaylor.github.io/BonVoyage/#/)
- [HEROKU Site](https://floating-sands-69159.herokuapp.com/places)

## Important Links
I began my planning process with my wireframes and ERD. I started building my back end first. I chose MongoDB so that I would be able to make changes to my scheme as I progressed in my project. I created my place model using a mongoose schema and express for my resource routes. Once this all worked correctly, I moved onto create my front end using React. Once I had all my CRUD processes working in the front end, I added AWS for image uploading to my backend using the npm package multer.

## User Stories
- As a user, I would like to be able to get/see places as an an unauthenicated user.
- As a user, I would like to be able to create, edit and delete new places for all users to see.
- As a user, I would like to be able to filter places by country.
- As a user, I would like to be able to sign-in, sign-out, and change my password.

## Technologies Used in this Back End Repository
- React
- Javascript
- Bootstrap
- Axios
- Amazon Web Services

### Authentication

| Verb   | URI Pattern            |
|--------|------------------------|
| POST   | `/sign-up`             |
| POST   | `/sign-in`             |
| PATCH  | `/change-password `    |
| DELETE | `/sign-out `           |
| GET    | `/places`              |
| GET    | `/places/:id`          |
| POST   | `/createplace`         |
| PATCH  | `/places/:id/edit`     |
| DELETE | `/places/:id`          |


## Unsolved Problems
- I would love to be able to have a user be able to add comments to each place when a user clicks on a place
- I would also like to have a user be able to save a place and add it to their "saved" places
- I would like to add a like feature for each place

## Images
[![APP Logo](https://i.imgur.com/PjXNIt6.jpg)]
[![APP Logo](https://i.imgur.com/PjXNIt6.jpg)]
[![APP Logo](https://i.imgur.com/PjXNIt6.jpg)]

## WIREFRAME
[![ERD](https://i.imgur.com/dkEPOVZ.jpg)]
