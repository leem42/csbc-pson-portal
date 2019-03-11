import * as React from 'react'
import { SynapseComponents, SynapseConstants } from 'synapse-react-client'

export default class Explore extends React.Component<{}, {}> {

  constructor(props: any) {
    super(props)
  }

  render () {
    return (
      <div className="container">
        <SynapseComponents.QueryWrapperMenu
          type={SynapseConstants.CSBC_PROJECT}
          menuConfig={[
            {
              facetName: 'consortium',
              sql: `SELECT * FROM syn10142562 WHERE ( "grantType" = 'U54' OR "grantType" = 'U01' )`,
              facetAliases: {
                consortium: 'Program',
              },
              unitDescription: 'programs'
            },
            {
              facetName: 'grantType',
              sql: `SELECT * FROM syn10142562 WHERE ( "grantType" = 'U54' OR "grantType" = 'U01' )`,
              facetAliases: {
                grantType: 'Grant Type',
              },
              unitDescription: 'grants'
            }
          ]
        }
          rgbIndex={0}
          unitDescription="grants"
          loadingScreen={<div/>}
          filter="diseaseFocus"
        />
      </div>
    )
  }
}
