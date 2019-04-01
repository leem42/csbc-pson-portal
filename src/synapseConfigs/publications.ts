import { SynapseConstants } from 'synapse-react-client'

const sql = 'SELECT * FROM syn10923842'
const unitDescription = 'Publications'

export const publications = {
  unitDescription,
  name: 'Publications',
  type: SynapseConstants.CSBC_PUBLICATION,
  menuConfig: [
    {
      unitDescription,
      sql,
      facetName: 'Publication Year',
    },
    {
      sql,
      unitDescription,
      facetName: 'Consortium',
      facetAliases: {
        Consortium: 'Program',
      },
    },
    {
      sql,
      unitDescription,
      facetName: 'grantType',
      facetAliases: {
        grantType: 'Grant Type',
      },
    },
    {
      sql,
      unitDescription,
      facetName: 'diseaseType',
      facetAliases: {
        diseaseType: 'Disease',
      },
    },
    {
      sql,
      unitDescription,
      facetName: 'Theme',
    },
    {
      sql,
      unitDescription,
      facetName: 'experimentalStrategy',
      facetAliases: {
        experimentalStrategy: 'Experimental Strategy',
      },
    },
  ],
  rgbIndex: 1,
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
  },
  countQuery : {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    partMask: SynapseConstants.BUNDLE_MASK_QUERY_COUNT,
    query: {
      sql,
      isConsistent: false,
      limit: 25,
      offset: 0,
    }
  }
}
