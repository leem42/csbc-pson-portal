import * as React from 'react'
import { SynapseComponents } from 'synapse-react-client'

export default class Explore extends React.Component<{}, {}> {

  constructor(props: any) {
    super(props)
  }

  render () {
    return (
      <div className="container">
        <SynapseComponents.QueryWrapperMenu
          type="study"
          sql="SELECT * FROM syn10142562"
          menuConfig={[{
            facetName: 'grantType',
            sql:
            `SELECT * from syn10142562
            `,
            facetAliases: {
              grant: 'File ID',
              fundingAgency: 'Funding Agency',
              assay: 'Assay',
            },
            unitDescription: 'grants'
          }]}
          rgbIndex={0}
          unitDescription="grants"
          loadingScreen={<div/>}
          filter="diseaseFocus"
        />
      </div>
    )
  }
}
