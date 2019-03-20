import * as React from 'react'
import { SynapseComponents, SynapseConstants } from 'synapse-react-client'
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
      default:
        console.error('getPropsFromHash failed')
        return {}
    }
  }

  render () {
    const props = this.getPropsFromHash()
    const fn = (val: string) => { console.log(val) }
    const isSelected = (val: string) => 'hello'
    return (
      <div className="container">
        <ExploreButtons
          isSelected={isSelected}
          handleChanges={fn}
        />
        <SynapseComponents.QueryWrapperMenu
          {...props}
        />
      </div>
    )
  }
}
