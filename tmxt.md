# [https://turtlewolfe.github.io/tmxT/](https://turtlewolfe.github.io/tmxT/ "StoryBook demo in TypeScript")

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app "cra").

## Available Scripts

In the project directory, you can run:

### `npm run build-storybook`

```bash
  # Creat React App
 npx create-react-app tmxt --template typescript
  # change directory to tmxt
 cd tmxt
  # install UI FrameWork 
  # MUI or React-BootStrap 
 #  npm install react-bootstrap bootstrap@5.1.3
 npm install @mui/material @emotion/react @emotion/styled
 npm install @mui/icons-material
  # open in VS Code
 code .
  # Initialize Storybook:
 npx sb init
 ```

**`src/index.tsx` or `App.tsx`**  

  ```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
  ```  

 or better yet, use the CDN in **`public/index.html`**
  at the bottom of the body tag.
  
```html


<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>
```

change `output` directory to `docs` in **`package.json`**  

  ```json
  {
    "build-storybook": "build-storybook -o docs -s public"
    }
  ```  

 ```bash
  # Run Storybook:
#  npm run storybook
  # Build StoryBook:
  npm run build-storybook
```

commit changes and push to **`repo`**  

 ```bash
  # add remote origin
  git remote add origin git@github.com:TurtleWolfe/tmxT.git
  git branch -M main
  git push -u origin main
  # git status
  git status
  # git add all
  git add .
  # git commit message
  git commit -m "update storybook"
  # git push
  git push
```

add dark theme by creating **`.storybook/manager.js`**

## [tmxT StoryBook Demo](https://turtlewolfe.github.io/tmxT/ "StoryBook demo in TypeScript")

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
