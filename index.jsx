var React = require('react');
var ReactDOM = require('react-dom');
var MyButtonController=require('./components/MyButtonController');
require('./main.css');
ReactDOM.render(
    <MyButtonController/>,
    document.querySelector('#userList')
);