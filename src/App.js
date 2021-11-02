import React, { Component } from 'react';
import './App.css';

//Pages
import ViewMatchsPage from './Pages/view-matchs/view-matchs';

//Utils
import HomeContainer from './Utils/HomeContainer';
import AddTeamContainer from './Utils/AddTeamContainer';
import ViewMatchsContainer from './Utils/ViewMatchsContainer';
import HandleMatchContainer from './Utils/HandleMatchContainer';
import GenerateBracketContainer from './Utils/GenerateBracketContainer';
import GameOverContainer from './Utils/GameOverContainer';

//Import Routing
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
          currentUser: null
      };
  }

  componentDidMount() {
      authenticationService.currentUser.subscribe(x => this.setState({ currentUser: x }));
  }

  logout() {
      authenticationService.logout();
      history.push('/login');
  }

  render() {
      const { currentUser } = this.state;
      return (
          <Router history={history}>
              <div className="App">
                  {currentUser &&
                      <nav className="navbar navbar-expand navbar-dark bg-dark">
                          <div className="navbar-nav">
                              <Link to="/" className="nav-item nav-link">Home</Link>
                              <a onClick={this.logout} className="nav-item nav-link">Logout</a>
                          </div>
                      </nav>
                  }
                  <div className="jumbotron">
                      <div className="container">
                          <div className="row">
                              <div className="col-md-6 offset-md-3">
                                  <PrivateRoute exact path="/" component={HomePage} />
                                  <Route path="/login" component={LoginPage} />
                              </div>
                            <Route path = '/handle-match' component = {HandleMatchContainer}/>
                            <Route path = '/generate-bracket' component = {GenerateBracketContainer}/>
                            <Route path = '/game-over' component = {GameOverContainer}/>
                          </div>
                      </div>
                  </div>
              </div>
          </Router>
      );
  }
}

export default App;
