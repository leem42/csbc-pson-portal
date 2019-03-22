import { SynapseConstants } from 'synapse-react-client'

const sql = `SELECT * FROM syn10142562 WHERE ( "grantType" = 'U54' OR "grantType" = 'U01' )`

export const datasets = {
  name: 'Datasets',
  type: SynapseConstants.CSBC_PROJECT,
  menuConfig: [
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
      unitDescription: 'datasets'
    }
  ],
  rgbIndex: 0,
  unitDescription: 'datasets',
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
