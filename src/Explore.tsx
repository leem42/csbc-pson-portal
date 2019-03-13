import * as React from 'react'
import { SynapseComponents, SynapseConstants } from 'synapse-react-client'
import { synapseConfigs } from './synapseConfigs'

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
      default:
        console.error('getPropsFromHash failed')
        return {}
    }
  }

  render () {
    const props = this.getPropsFromHash()
    return (
      <div className="container">
        <SynapseComponents.QueryWrapperMenu
          {...props}
        />
      </div>
    )
  }
}
