import { HashRouter, Route, Switch } from 'react-router-dom'
import * as React from 'react'

const Home = React.lazy(() => import('./Home'))
const Explore = React.lazy(() => import('./Explore'))
const About = React.lazy(() => import('./About'))

const App: React.SFC<{}> = ({}) => (
  <React.Fragment>
    <div className="container">
      <div className="row">
        <div className="col-xs-6">
          CSBC-PSON Data Portal
        </div>
        <div className="col-xs-6">
          Buttons
        </div>
      </div>
    </div>
    {/* @ts-ignore */}
    <HashRouter>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact={true} path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/explore" component={Explore}/>
        </Switch>
      </React.Suspense>
    </HashRouter>
  </React.Fragment>
)

export default App
