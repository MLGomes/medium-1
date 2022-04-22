import React, { Component } from 'react';
import './style/global.css'

import { Header } from './Components/Header';
import { Layout } from './Components/Layout';

class App extends Component {
  render() {
  return (
    <>
      <Header />
      <Layout />
    </>
    );
  }
}

export default App;