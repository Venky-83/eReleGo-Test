import Display from './Display';
import Add from './Add';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'


function App() {
  return (


      <Router>
        <div className="App">
          <Switch>
              <Route exact path="/">
                <Display/>
              </Route>
              <Route  path="/Add">
                <Add/>
              </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
