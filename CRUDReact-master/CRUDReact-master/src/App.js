import React, {Component} from 'react';
import './App.css';
import Menu from "./components/Menu/Menu";
import routes from "./route";
import { Switch, Route, BrowserRouter as Router , Link} from 'react-router-dom';
class App extends Component {

  ShowContent = (route)=>{
    var result =null;
    if(routes.length >0)
    {
      result = routes.map((route, index) => {
        return(
        <Route key={index} path={route.path} exact={route.exact} component={route.main} />
        );
      });
    }
    return <Switch>{result}</Switch>
  }

  render(){
   
  
    return (
      <Router>
          <div>
          <Menu />
        
            <div className="container">
                <div className="row">
                   
                   {this.ShowContent(routes)}
                </div>
            </div>        
      </div>
      
      </Router>
    );
  

      
  }
}

export default App;
