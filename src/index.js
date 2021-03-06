import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import PaperSections from './PaperSections';

ReactDOM.render(
  <React.StrictMode>
    <PaperSections
      sections={[6, 7, 3, 15, 11]}
      sectionSize={150}
    >
    </PaperSections>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
