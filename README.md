# Add Performance App


## Basic Structure
### Performance Component
It displays detailed information about each recorded video, such as the title, recording date, duration, and a preview or thumbnail.
*Functionality:*
- The Performance component was created to individually display each video recording.
- It receives video data from the VideoContext, including the video's URL, title, recording date, and duration.
- The video duration is formatted for readable display

### Performances Component
It lists all the recorded performances, presenting each as a card or list item within the UI.
*Functionality
- The Performances component consumes VideoContext to fetch the list of recorded videos.
- It maps over the array of video objects, rendering a Performance component for each one to display a summary of the video details.

### Video Recording and Context Management
It enables video recording within the application and manage the recorded video data globally.
*Functionality:*
- Implemented a VideoRecorder component that allows users to record videos with audio and preview them in real-time.
- Integrated VideoContext to manage the global state of recorded videos, enabling sharing of video data across different components of the application.
- Videos are added to the global context upon saving, with metadata like title, date, duration, and a generated URL for the video blob.

### Modal Component
It provides a reusable modal component for displaying content overlays within the application.
*Functionality:*
- Created a Modal component that can be used to display arbitrary content in a modal dialog.
- The component is controlled via a show prop, allowing it to be toggled visible or hidden, and includes an onClose callback to handle modal closure actions.
- Integrated CSS for the modal to ensure it visually stands out from the rest of the page content and prevents background scrolling when open.

### SVG Handling with SVGR
It efficiently incorporates SVG graphics into the React application.
*Functionality:*
- Utilized SVGR to transform SVG files into React components, allowing for direct rendering and manipulation of SVGs within the JSX code.
- This approach enables the application of dynamic styles and properties to SVG elements, enhancing the interactivity and visual integration of graphics within the application.


## TODO's:
- Review why the SVR template is not working.
- Refactor lots of components, they work but still need some consistency and flexibility.
- Implement the actual edit and remove functionality. So, no CRUD at all for now.
- Implement an actual colors variable system, for this MVP I just added color values on any format I found them.
- More testing, the app worked... Once.


In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
