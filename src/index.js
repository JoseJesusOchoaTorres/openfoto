import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals'

import * as themes from './theme/schema.json'
import { localStorageSetter } from './utils/storage/localStorage'

import App from './App'

const Index = () => {
  localStorageSetter('themes', themes.default);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  )
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
