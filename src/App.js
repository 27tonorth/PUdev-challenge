import React from 'react';
//import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './FeatureCard.css';

import First from './Components/First';
import Stat from './Components/Stat';
import Comment from './Components/Comment';

function App() {
  return (
    <div className="App">
      <First />
      <Stat />
      <Comment />
      <footer>
        <p>&copy;PU Dev Challenge - Developed by Sasitorn Tongkailert</p>
      </footer>
    </div>
  );
}

export default App;
