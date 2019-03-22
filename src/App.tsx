import { HashRouter, Route, Switch } from 'react-router-dom'
import * as React from 'react'
import './App.css'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
const Home = React.lazy(() => import('./Home'))
const Explore = React.lazy(() => import('./Explore'))
const About = React.lazy(() => import('./About'))

const App: React.SFC<{}> = ({}) => (
  <HashRouter>
    {/* hash router requires a single child, so we wrap everything in a React.Fragment */}
    <React.Fragment>
      <Navbar/>
      <main className="main">
        {/* all the content below */}
        <React.Suspense fallback={<div/>}>
          <Switch>
              <Route exact={true} path="/" component={Home}/>
              <Route path="/About" component={About}/>
              <Route path="/Explore" component={Explore}/>
          </Switch>
        </React.Suspense>
      </main>
      <Footer/>
    </React.Fragment>
  </HashRouter >
)

export default App
