import React, { Component } from 'react';
import io from 'socket.io-client';
// const socket = io('http://localhost:3100');
const socket = io.connect("/");
export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
        };  
    }
    componentDidMount() {
        
    }
    render() {
        return (
            <div className="container">
                hello
            </div>
        )
    }
}
