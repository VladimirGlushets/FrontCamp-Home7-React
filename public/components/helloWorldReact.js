//var React = require('react');
//
//class HelloWorldReact extends React.Component{
//    render(){
//        return <div>Hello world!!!</div>;
//    }
//}
//
//module.exports = HelloWorldReact;

var React = require('react');
var ReactDOM = require('react-dom');

class MyComponent extends React.Component {
    render() {
        return <div>Hello World</div>;
    }
}

ReactDOM.render(<MyComponent />, node);