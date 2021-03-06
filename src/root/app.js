import React from 'react';
import { Route, Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Homepage from './site-pages/homepage';
import AdoptionPage from './site-pages/adoption-page';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <header>
            <Link to='/' className='title-text'><h1>FIFO Pet Adoption</h1></Link>
            <nav>
              <Link to='/' className='title-text'>Home</Link><br/>
              <Link to='/adoption' className='title-text'>Adopt Now!</Link>
            </nav>
          </header>
          <main>
            <Route exact path='/' component={Homepage}/>
            <Route path='/adoption' component={AdoptionPage}/>
          </main>
        </Router>
      </div>
    );
  }
}

export default App;
