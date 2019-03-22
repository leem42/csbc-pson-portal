import * as React from 'react'
import { Header } from './Header'
import { synapseConfigs } from './synapseConfigs'
import { ExploreButtons } from './ExploreButtons'
import { SynapseComponents } from 'synapse-react-client'
import { Link } from 'react-router-dom'

type HomeState = {
  activeSynObject: any
}

class Home extends React.Component<{}, HomeState> {

  constructor(props: any) {
    super(props)
    this.state = {
      activeSynObject: synapseConfigs['grants']
    }
  }

  /* This sets the synapse config from the corresponding click event
     of the explore buttons
  */
  handleChange = (name: string) => {
    const activeSynObject = (synapseConfigs as any)[name.toLowerCase()]
    this.setState({
      activeSynObject
    })
  }

  render () {
    const { activeSynObject } = this.state
    const {
      initQueryRequest,
      rgbIndex,
      facetName,
      unitDescription,
      facetAliases
    } = activeSynObject
    const isSelected = (val: string) => val === activeSynObject.name
    return (
      <div>
        <Header/>
        <div className="container">
          <h2 id="explore-portal" className="uppercase">Explore Portal</h2>
          <ExploreButtons
            handleChanges={this.handleChange}
            isSelected={isSelected}
          />
          <div className="homeExploreContainer">
            <div id="homePageBarChart">
              <SynapseComponents.QueryWrapper
                initQueryRequest={initQueryRequest}
                rgbIndex={rgbIndex}
                facetName={facetName}
                unitDescription={unitDescription}
                facetAliases={facetAliases}
              >
                <SynapseComponents.StackedBarChart
                  loadingScreen={<div/>}
                />
              </SynapseComponents.QueryWrapper>
            </div>
            <Link to={`/Explore/${this.state.activeSynObject.name}`} id="exploreData"> Explore Data </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
