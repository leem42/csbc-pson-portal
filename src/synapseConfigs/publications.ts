import { SynapseConstants } from 'synapse-react-client'

const sql = `SELECT * FROM syn10923842 WHERE ( ( "grantType" = 'U54' OR "grantType" = 'U01' ) AND ( "Consortium" = 'PS-ON' OR "Consortium" = 'CSBC' OR "Consortium" = 'PS-ON,CSBC' ) )`

export const publications = {
  name: 'publications',
  type: SynapseConstants.CSBC_PROJECT,
  menuConfig: [
    {
      sql,
      facetName: 'Consortium',
      facetAliases: {
        consortium: 'Program',
      },
      unitDescription: 'programs'
    },
    {
      sql,
      facetName: 'Consortium',
      facetAliases: {
        grantType: 'Grant Type',
      },
      unitDescription: 'publications'
    }
  ],
  rgbIndex: 0,
  unitDescription: 'publications',
  facetName: 'Consortium',
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
