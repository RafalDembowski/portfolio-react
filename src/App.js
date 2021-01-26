import './App.css';
import Navbar from './components/pages/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomeSection from './components/pages/HomeSection';
import Projects from './components/pages/Projects';
import Project from './components/pages/Project';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={HomeSection} />
        <Route path='/Projects' exact component={Projects} />
        <Route path='/Project/:projectId' exact component={Project} />
      </Switch>
    </Router>
  );
}

export default App;
