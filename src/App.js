import React from 'react';
import logo from './logo.svg';
import './App.css';
import Amplify, { API } from 'aws-amplify';
import awsmobile from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react'; // or 'aws-amplify-react-native';
Amplify.configure(awsmobile);

function App() {

  const post = async () => {
    console.log('calling api');
    const response = await API.post('myFirstAwsApiInAmplify', '/items', {
      body: {
        title: '1',
        description: 'hello amplify!'
      }
    });
    alert(JSON.stringify(response, null, 2));
  }

  const get = async () => {
    console.log('calling api');
    const response = await API.get('myFirstAwsApiInAmplify', '/items/object/1');
    alert(JSON.stringify(response, null, 2));
  }

  const list = async () => {
    console.log('calling api');
    const response = await API.get('myFirstAwsApiInAmplify', '/items/1');
    alert(JSON.stringify(response, null, 2));
  }

  return (
      <div className="App">
        <p>api</p>
        <button onClick={post}>POST</button>
        <button onClick={get}>GET</button>
        <button onClick={list}>LIST</button>
      </div>
  );
}

export default withAuthenticator(App, true);
