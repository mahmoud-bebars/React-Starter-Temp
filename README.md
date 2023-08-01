![repo screen](https://user-images.githubusercontent.com/66588352/220696317-46af52a3-4c5d-4127-aeb0-b194b21745da.png)

# Getting Started React Temp App

This project was bootstrapped with [Vite](https://vitejs.dev).

but it's coustomized for Faster Developing Start By Me

## Needed Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## App Sturcture

Starting with the `./src`

Divided Into $ sections for diffrent uses

- `.\Components`

* should contain All uses components in the Application included the (Reusable components)
* if there is A page having lots of components so you should organize them in A seprated Floder like `./home_components`

- `./constents`

* the file should contain the constants for the applicaton like integrations Tokens or encrepted phases or the server url which should'nt be included in the code directly

- `./hooks`

* So all the requesting magic is do Here for example Data Get Request or POST
  which sepreating it from the main UI code could save you Time in Refactoring & Debugging

- `./pages`

* No need To talk about this Folder, It contains the App main Pages For better Routing this could save you

- The main File for the App which is `App.js`

- the Return Here contains the Router Component & meyhods for user Auth... tings like that & if you a context Lover like me this is the best place tio init your `useContext()`

- `index.js` is the heart of the app no needd to change in thing in it & it contains the CSS import so be Cearfully updating it\

- `index.css` this for main is so important because i use it alot with the `Tailwindcss` & the config file of it.

## Some Always used Technologies

- near the React i need some extras for better coding & savuing time Like :-

  - `TailwindCSS` -> for Styling
  - `Axios` -> For HTTP Request Handling
  - `react-icons` -> for Icons use
  - `react-router_dom` -> as routing isn't included in React this package Help Alot in putting routing for the application

## Hosting Your App on Netlify

### With some Help of [Netlify](https://www.netlify.com) We can Host our React App

#### We have 2 Options

##### Manual Deploy

- Init the Build Script `npm run build`

- you will find `./build` Directory Generated

- Go to [Netlify](https://www.netlify.com)

- create an account

- go To `Add New Site` choose `deploy Manually`

- Drag & Drop Your Build Directory

- Wait for the Deploy Process to End.

- Change your Site Domain Name

- test your web app

- Enjoy showing Your Site to People

##### Connect Netlify GitHub Repo

- Create Repo on GitHub for your Project

- Commit the code to the Repo

- Go to [Netlify](https://www.netlify.com)

- In `Add New Site` choose `Import an Existing Project`

- connect git Provider In our Case It's `GitHub`

- choose The repo You Want to Deploy

- Netlify Here will Build & Deploy the App for you

- Wait until Deployment Process End

- change your site name Or explore your free Options in Netlify

- test your web app

`now you can create, build, upload React apps easily ✌️`

NOTE: Don't Forget to Use GIT to Organize your Code Versions

`Happy Coding 😁🚀💰`

OR as React Says

`Happy hacking!`
