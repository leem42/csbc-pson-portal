import * as React from 'react'
import { SynapseComponents } from 'synapse-react-client'
import { synapseConfigs } from './synapseConfigs'
import { ExploreButtons } from './ExploreButtons'
import { BarLoader } from 'react-spinners'

export default class Explore extends React.Component<{}, {}> {

  constructor(props: any) {
    super(props)
    this.getPropsFromHash = this.getPropsFromHash.bind(this)
  }

  getPropsFromHash() {
    const hash = window.location.hash
    switch (hash) {
      case '#/Explore/Grants':
        return synapseConfigs['grants']
      case '#/Explore/Publications':
        return synapseConfigs['publications']
      default:
        console.error('getPropsFromHash failed')
        return {}
    }
  }

  render () {
    const props = this.getPropsFromHash()
    const handleChanges = (val: string) => window.location.hash = `Explore/${val}`
    const isSelected = (val: string) => val === window.location.hash.substring('#/Explore/'.length)
    const isOnPublications = window.location.hash.includes('Publications')
    // adding this class lets us target in the css the Experimental Strategy div to enlarge it
    const optionalPubClass = isOnPublications ? 'publication' : ''
    return (
      <div className={`container ${optionalPubClass}`}>
        <ExploreButtons
          isSelected={isSelected}
          handleChanges={handleChanges}
        />
        <SynapseComponents.QueryWrapperMenu
          loadingScreen={<div className="bar-loader"><BarLoader color="#47337D" loading={true} /></div>}
          {...props}
        />
      </div>
    )
  }
}
