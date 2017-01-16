//var React = require('react');
//var ReactDOM = require('react-dom');
//var HelloWorldReact = require('../components/helloWorldReact');
//
//ReactDOM.render(
//    <HelloWorldReact />,
//    document.getElementById('react-root')
//);

var React = require('react');
var ReactDOM = require('react-dom');

class MyComponent extends React.Component {
    render() {
        return <div>Hello World</div>;
    }
}

ReactDOM.render(<MyComponent />, document.getElementById('react-root'));