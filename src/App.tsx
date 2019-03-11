import { HashRouter, Route, Switch, Link } from 'react-router-dom'
import * as React from 'react'
import './App.css'
const Home = React.lazy(() => import('./Home'))
const Explore = React.lazy(() => import('./Explore'))
const About = React.lazy(() => import('./About'))

const App: React.SFC<{}> = ({}) => (
  <HashRouter>
    <React.Fragment>
      {/* main links in header */}
      <header id="header">
        <div className="container">
          <div className="row">
            <div className="col-xs-6">
              <Link to="/"> CSBC-PSON Data Portal </Link>
            </div>
            <div className="col-xs-6">
              <Link to="/Explore/Grants"> Explore </Link>
              <Link to="/About"> About </Link>
            </div>
          </div>
        </div>
      </header>
      <div className="spacer"/>
      {/* all the content below */}
      <main>
        <React.Suspense fallback={<div/>}>
          <Switch>
              <Route exact={true} path="/" component={Home}/>
              <Route path="/About" component={About}/>
              <Route path="/Explore/Grants" component={Explore}/>
          </Switch>
        </React.Suspense>
      </main>
    </React.Fragment>
  </HashRouter >
)

export default App
