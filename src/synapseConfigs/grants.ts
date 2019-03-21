import { SynapseConstants } from 'synapse-react-client'

const sql = `SELECT * FROM syn10142562 WHERE ( "grantType" = 'U54' OR "grantType" = 'U01' )`

export const grants = {
  name: 'grants',
  type: SynapseConstants.CSBC_PROJECT,
  menuConfig: [
    {
      sql,
      facetName: 'consortium',
      facetAliases: {
        consortium: 'Program',
      },
      unitDescription: 'programs'
    },
    {
      sql,
      facetName: 'grantType',
      facetAliases: {
        grantType: 'Grant Type',
      },
      unitDescription: 'grants'
    }
  ],
  rgbIndex: 3,
  unitDescription: 'grants',
  facetName: 'grantType',
  initQueryRequest : {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS
      | SynapseConstants.BUNDLE_MASK_QUERY_FACETS
      | SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    query: {
      sql,
      isConsistent: false,
      limit: 25,
      offset: 0,
    }
  }
}
