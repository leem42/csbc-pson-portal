import { HashRouter, Route, Switch } from 'react-router-dom'
import * as React from 'react'
import './App.css'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import ScrollToTop from './ScrollToTop'
const Home = React.lazy(() => import('./Home'))
const Explore = React.lazy(() => import('./Explore'))
const About = React.lazy(() => import('./About'))

const App: React.SFC<{}> = ({}) => (
  <HashRouter>
    <ScrollToTop>
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
    </ScrollToTop>
  </HashRouter >
)

export default App
