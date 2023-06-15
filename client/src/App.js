import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import './App.css';

import JobBoard from './components/Jobboard';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    // <ApolloProvider client={client}>
    <div className="App">
    {/* yo whatsup job droppers */}
    <Header />
      <div>
        <JobBoard />
        <Home />
        <Footer />
      </div>
    </div>
    // {/* </ApolloProvider> */}
  );
}

export default App;
