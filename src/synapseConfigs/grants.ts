import { SynapseConstants } from 'synapse-react-client'

const sql = `SELECT * FROM syn10142562 WHERE ( "grantType" = 'U54' OR "grantType" = 'U01' )`
const unitDescription = 'grants'

export const grants = {
  unitDescription,
  name: 'Grants',
  type: SynapseConstants.CSBC_PROJECT,
  menuConfig: [
    {
      sql,
      unitDescription,
      facetName: 'consortium',
      facetAliases: {
        consortium: 'Program',
      }
    },
    {
      sql,
      unitDescription,
      facetName: 'grantType',
      facetAliases: {
        grantType: 'Grant Type',
      }
    }
  ],
  rgbIndex: 3,
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
