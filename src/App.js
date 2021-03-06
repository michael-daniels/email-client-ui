import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Toolbar from './Toolbar';
import AllMessages from './AllMessages'

class App extends Component {

  state = {
    messages: [
    {
      "id": 1,
      "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
      "read": true,
      "starred": true,
      "labels": ["dev"]
    },
    {
      "id": 2,
      "subject": "connecting the system won't do anything, we need to input the mobile AI panel!",
      "read": false,
      "starred": false,
      "selected": true,
      "labels": ["gschool"]
    },
    {
      "id": 3,
      "subject": "Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!",
      "read": false,
      "starred": true,
      "labels": ["dev"]
    },
    {
      "id": 4,
      "subject": "We need to program the primary TCP hard drive!",
      "read": true,
      "starred": false,
      "selected": true,
      "labels": []
    },
    {
      "id": 5,
      "subject": "If we override the interface, we can get to the HTTP feed through the virtual EXE interface!",
      "read": false,
      "starred": false,
      "labels": ["personal"]
    },
    {
      "id": 6,
      "subject": "We need to back up the wireless GB driver!",
      "read": true,
      "starred": true,
      "labels": []
    },
    {
      "id": 7,
      "subject": "We need to index the mobile PCI bus!",
      "read": true,
      "starred": false,
      "labels": ["dev", "personal"]
    },
    {
      "id": 8,
      "subject": "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!",
      "read": true,
      "starred": true,
      "labels": []
    }
  ]
}

stateFunctions = {
  markReadFunc: () => {
    alert('Mark Read')
  },
  markUnreadFunc: () => {
    alert('Mark Unread')
  },
  starFunc: () => {
    alert('Star/Unstar')
  },
  deleteFunc: () => {
    alert('Delete')
  },
  applyLabelFunc: () => {
    alert('Apply Label')
  },
  removeLabelFunc: () => {
    alert('Remove Label')
  },
}

  render() {
    console.log(this.state.messages)
    return (
      <div className="App">
        <Navbar className="navbar"/>
          <div className="container">
            <Toolbar stateFunctions = {this.stateFunctions} />
            <AllMessages allMessages = {this.state.messages} stateFunctions = {this.stateFunctions}/>
          </div>
      </div>
    );
  }
}

export default App;
