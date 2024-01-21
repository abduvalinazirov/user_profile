#  Interactive User Profile Interface

This project allows users to customize their own profile. A simple design was chosen to make the project more user-friendly. No styling library was used and all styles were written in css files.

## Available Scripts

Install dependencies:

### `npm install`

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

## Features

1. User Profile Display: View detailed information about a user, including their full name, email, and bio.

2. Profile Editing: Edit user profile details, such as name, email, and bio.

3. Toggle Between Views: Toggle allows users to easily navigate to view and edit their data. The appearance attracts the user.

4. React Query for Data Fetching: Utilizes the React Query library for efficient and reactive data fetching.

5. Toast Notifications: Provides toast notifications for successful profile updates.

## Hooks

### `useSearchQuery`

This hook facilitates interaction with query parameters in the URL, providing functions to get and set query parameters using React Router's useLocation and useNavigate. This is particularly useful for components that depend on dynamic query parameters, such as controlling the view or edit state in your UserInfo component.

### Usage

```bash
import { useSearchQuery } from 'path/to/useSearchQuery';

const { getQueryParam, setQueryParam } = useSearchQuery();

const page = getQueryParam('page');

setQueryParam('page', 'edit');
```

### `useSegmentEffect`

This hook is designed to manage the visual effect of a segmented control, specifically for toggling between "view" and "edit" modes. It dynamically adjusts the width and position of a mask element to highlight the selected segment.

## API using the MSW (Mock Service Worker) library.

1. Get Users Endpoint:

   - Path: /api/users
   - Response: Returns a JSON array of user objects.

2. Get User by ID Endpoint:

   - Path: /api/user/:id
   - Response: Returns the user with the specified ID if found; otherwise, returns a 404 status.

3. Update User by ID Endpoint:
   - Path: /api/user/:id (HTTP PUT)
   - Response: Updates the user with the specified ID based on the data provided in the request body. Returns the updated user object.
