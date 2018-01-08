import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import Routes from './routes'

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <Routes />,
    document.getElementById('app')
  );
});
