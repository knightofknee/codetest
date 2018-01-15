import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes'

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <Routes />,
    document.getElementById('app')
  );
});
