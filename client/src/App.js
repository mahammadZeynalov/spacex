import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Launches from './components/Launches';
import { BrowserRouter, Route } from 'react-router-dom'
import Launch from './components/Launch'

const client = new ApolloClient({
  uri: '/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="container">
          <h1>Space X</h1>
          <Route exact path="/" component={Launches} />
          <Route exact path="/launch/:flight_number" component={Launch} />
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
