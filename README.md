## Introduction

This is a `redux-shape` **counter** example contains a project skeleton useful for project initialization. 

## Getting Started

1. `git clone https://github.com/awayisblue/redux-shape-example.git`
2. `cd redux-shape-example`
3. `npm install`
4. `npm run start`
5. browser navigate to `http://localhost:8080`

## Structure
The directories structure of this example is:
```
.
├── src
|   ├── components
|   |       └──Counter
|   |              ├── index.jsx
|   |              └── styles.less
|   ├── containers
|   |       └──Counter
|   |              └── index.jsx
|   ├── store
|   |       ├──initializers
|   |       |       ├── initCount.js
|   |       |       └── index.js
|   |       ├── reducers
|   |       |       ├── count.js
|   |       |       └── index.js
|   |       ├── sagas
|   |       |       ├── count.js
|   |       |       └── index.js
|   |       └── index.js
|   |
|   └── index.jsx
|          
├── ...
```

Let me explain the `store` directory. It contains `initializers`, `reducers`, `sagas` and `index.js`, where `index.js` is:

```js
import {createStore,applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import initializers from './initializers'
import sagas from './sagas'
const sagaMiddleware = createSagaMiddleware()
let store = createStore(reducers,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(sagas)
initializers(store)
export default store
```

#### initializers
`initializers` is in charge of state initialization and thing like that such as connecting a websocket, adding event listenners and so on.

#### reducers
`reducers` is generated by `redux-shape`, you may refer to [redux-shape](https://github.com/awayisblue/redux-shape) for more details.

#### sagas
`sagas` handles side effects of the app. You may refer to [redux-saga](https://github.com/redux-saga/redux-saga) for more details.