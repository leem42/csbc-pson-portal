import * as React from 'react'
import { SynapseComponents } from 'synapse-react-client'
import { synapseConfigs } from './synapseConfigs'
import { ExploreButtons } from './ExploreButtons'

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
    return (
      <div className="container">
        <ExploreButtons
          isSelected={isSelected}
          handleChanges={handleChanges}
        />
        <SynapseComponents.QueryWrapperMenu
          {...props}
        />
      </div>
    )
  }
}
