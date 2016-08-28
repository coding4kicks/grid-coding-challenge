# Hello Grid
## React grid component

### Online Demo
https://s3.amazonaws.com/grid-coding-challenge/index.html

### Uses
1. React
2. Redux
3. 500px Photo API
4. Webpack
5. Babel
6. Material

### Dev
``` bash
> npm install
```
``` bash
> ./node_modules/.bin/webpack -d --watch
```

### Entry
- user -> index.html (which requires ./public/bundle.js)
- react -> index.jsx

### App
#### actions
- user functions that create actions to pass to the reducers to change state.
- photos.js -> fetch and favorite photos

#### components
- application components that only rely on internal state and passed in props
- gird.jsx -> the masonry grid component
- tile.jsx -> an individual tile in the grid
- titlebar.jsx -> the fixed tool bar that displays the favorite count

#### contants
- action type constants passed to reducers

#### reducers
- take a current state and action and return a new state
- photos.js -> handles setting all photo data on state
- rootReducer.js -> combines top level reducers

#### services
- general utilities or external interfaces
- photoServices.js -> fetch data from 500px

### public
- deployable bundles created by Webpack

