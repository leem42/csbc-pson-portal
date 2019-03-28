import { SynapseConstants } from 'synapse-react-client'

const sql = `SELECT * FROM syn10142562 WHERE ( "grantType" = 'U54' OR "grantType" = 'U01' )`
const unitDescription = 'studies'

export const studies = {
  unitDescription,
  name: 'Studies',
  type: SynapseConstants.CSBC_PROJECT,
  menuConfig: [
    {
      unitDescription,
      facetName: 'consortium',
      sql: `SELECT * FROM syn10142562 WHERE ( "grantType" = 'U54' OR "grantType" = 'U01' )`,
      facetAliases: {
        consortium: 'Program',
      }
    },
    {
      unitDescription,
      facetName: 'grantType',
      sql: `SELECT * FROM syn10142562 WHERE ( "grantType" = 'U54' OR "grantType" = 'U01' )`,
      facetAliases: {
        grantType: 'Grant Type',
      }
    }
  ],
  rgbIndex: 0,
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
