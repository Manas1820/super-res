import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './routes/Home'
import Restaurants from './routes/Restaurants'
import UpdatePage from './routes/UpdatePage'
import  { RestaurantsContextProvider } from './context/RestaurantsContext'

const App = () => {
  return (
    <RestaurantsContextProvider>
    <div>       
      <Router>
        <Switch>
        <Route exact path = '/' component={ Home }></Route>
        <Route exact path = '/restaurants/:id' component={ Restaurants }></Route>
        <Route exact path = '/restaurants/:id/update' component={ UpdatePage }></Route>
        </Switch>
      </Router>
    </div>
    </RestaurantsContextProvider>
  );
};

export default App;
