(function () {
    const React = require('react');
    const ReactDOM = require('react-dom');
    const Presentation = require('./main');

    // Needed for React Developer Tools (Chrome Extension)
    window.React = React;

    // Render the main app react component into the app div
    ReactDOM.render(<Presentation />, document.getElementById('root'));
})();