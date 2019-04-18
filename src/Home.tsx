import * as React from 'react'
import { Header } from './Header'
import { synapseConfigs } from './synapseConfigs'
import { ExploreButtons } from './ExploreButtons'
import { SynapseComponents } from 'synapse-react-client'
import { Link } from 'react-router-dom'
import { BarLoader } from 'react-spinners'

type HomeState = {
  activeSynObject: any
}

const CARD_LIMIT = 3

class Home extends React.Component<{}, HomeState> {

  constructor(props: any) {
    super(props)
    this.state = {
      activeSynObject: synapseConfigs.grants
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
    const { name } = this.state.activeSynObject
    const nameLinkLocation = name === 'Files' ? 'Data' : name
    return (
      <div>
        <Header/>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
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
                      loadingScreen={<div className="bar-loader"><BarLoader color="#47337D" loading={true} /></div>}
                    />
                  </SynapseComponents.QueryWrapper>
                </div>
                <Link to={`/Explore/${nameLinkLocation}`} id="exploreData"> Explore {name} </Link>
              </div>

              <div className="newContainer">
                <h2 className="title"> NEW STUDIES </h2>
                <SynapseComponents.CardContainerLogic
                  type={synapseConfigs.studies.type}
                  sql={synapseConfigs.studies.sql}
                  limit={CARD_LIMIT}
                />
                <Link to={'/Explore/Studies'} className="viewAll center-content"> View All </Link>
              </div>

              <div className="newContainer">
                <h2 className="title"> NEW PUBLICATIONS </h2>
                <SynapseComponents.CardContainerLogic
                  type={synapseConfigs.publications.type}
                  sql={synapseConfigs.publications.sql}
                  limit={CARD_LIMIT}
                />
                <Link to={'/Explore/Publications'} className="viewAll center-content"> View All </Link>
              </div>

              <div className="newContainer">
                <h2 className="title"> NEW DATASETS </h2>
                <SynapseComponents.CardContainerLogic
                  type={synapseConfigs.datasets.type}
                  sql={synapseConfigs.datasets.sql}
                  limit={CARD_LIMIT}
                />
                <Link to={'/Explore/Datasets'} className="viewAll center-content"> View All </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
