import { HashRouter, Route, Switch } from 'react-router-dom'
import * as React from 'react'
import './App.css'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { Header } from './Header'
const Home = React.lazy(() => import('./Home'))
const Explore = React.lazy(() => import('./Explore'))
const About = React.lazy(() => import('./About'))

const App: React.SFC<{}> = ({}) => (
  <HashRouter>
    <React.Fragment>
      <Navbar/>
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
      <Footer/>
    </React.Fragment>
  </HashRouter >
)

export default App
