# Project URL

https://baraka-test-riad.vercel.app/

# Overview

As part of our hiring process for the Senior React Frontend Engineer position, we ask you to complete a simple To-Do List application. This project will help us assess your skills in React, your approach to state management, and your ability to write clean, maintainable code.

# Requirements

## Functional Requirements

### 1. Basic Features
   - [x] Users should be able to add new tasks.
   - [x] Users should be able to mark tasks as complete.
   - [x] Users should be able to delete tasks.
   - [x] Users should be able to filter tasks by status (All, Active, Completed).


### 2. Persistent Storage:

- [x] Use local storage or any other method of your choice to persist tasks across page refreshes.

## Technical Requirements

1. [x] Framework: Use React (version 16.8 or higher).
2. [x] State Management: You can use React's built-in state management or any state management library you prefer => Redux
3. [x] Styling: Use Tailwind CSS for styling. Ensure the design is clean and user-friendly.
4. [x] Write unit tests for key components using a testing library of your choice (e.g., Jest, React Testing Library). => Jest

## Bonus Features (Optional)
1. [x] Implement drag-and-drop functionality for task ordering.
2. [x] Add user authentication (you can simulate this with mock data).
3. [x] Allow users to set due dates for tasks
4. [x] Allow users to sort by due date.
5. [x] Integrate with a public API: Fetch and display additional data related to tasks (e.g., a random motivational quote API, or a task-related API).

## MockData - user credentials
Login : admin@getbaraka.com

Password: admin

When you log in, you will be redirected to the tasks page where you can see the tasks.
A cookie will be set to keep you logged in.

## Running the project

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


# Project Improvements

1. Migrate the project to next.js and store the tasks and users inside a database.
2. Add oAuth2 authentication to the project.
3. Put jwt token in the local storage.
4. Add a token refresher
5. Create APIs for the project and put the jwt token in the request header.
6. Add edit mode to the tasks.

```