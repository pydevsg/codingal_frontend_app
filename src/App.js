import Home from './components/Home';
import NavBar from './components/NavBar';
import PostComponent from './components/Post';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/post' exact component={PostComponent}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;

