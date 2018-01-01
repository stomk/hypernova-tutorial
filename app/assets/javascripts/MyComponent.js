var React = require('react');
var renderReact = require('hypernova-react').renderReact;

function MyComponent(props) {
  return React.createElement('div', {}, 'Hello, ' + props.name + '!');
}

module.exports = renderReact('MyComponent.js', MyComponent);