import React from 'react';
import ReactDOM from 'react-dom';
import TestComponent from './components/TestComponent/TestComponent';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <TestComponent title={title} />,
  document.getElementById('app')
);

module.hot.accept();
