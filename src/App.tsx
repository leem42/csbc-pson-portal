import { HashRouter, Route, Switch, Link } from 'react-router-dom'
import * as React from 'react'
import './App.css'
const Home = React.lazy(() => import('./Home'))
const Explore = React.lazy(() => import('./Explore'))
const About = React.lazy(() => import('./About'))

const App: React.SFC<{}> = ({}) => (
  <HashRouter>
    <React.Fragment>
      <div id="header" className="container">
        <div className="row">
          <div className="col-xs-6 text-center">
            <Link to="/"> CSBC-PSON Data Portal </Link>
          </div>
          <div className="col-xs-6">
            <Link to="/Explore/Grants"> Explore </Link>
            <Link to="/About"> About </Link>
          </div>
        </div>
      </div>
      <React.Suspense fallback={<div/>}>
        <Switch>
          <Route exact={true} path="/" component={Home}/>
          <Route path="/About" component={About}/>
          <Route path="/Explore/Grants" component={Explore}/>
        </Switch>
      </React.Suspense>
    </React.Fragment>
  </HashRouter >
)

export default App
