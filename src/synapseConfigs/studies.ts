import { SynapseConstants } from 'synapse-react-client'

const unitDescription = 'studies'
const sql = `SELECT * FROM syn18483791 WHERE ( ( "is.study" = 'TRUE' ) )`

export const studies = {
  unitDescription,
  sql,
  name: 'Studies',
  type: SynapseConstants.CSBC_STUDY,
  menuConfig: [
    {
      unitDescription,
      sql,
      facetName: 'grantType',
      facetAliases: {
        grantType: 'Grant Type',
      }
    },
    {
      unitDescription,
      sql,
      facetName: 'centerName',
      facetAliases: {
        centerName: 'Grant',
      }
    },
    {
      unitDescription,
      sql,
      facetName: 'consortium',
      facetAliases: {
        consortium: 'Program',
      }
    },
    {
      unitDescription,
      sql,
      facetName: 'Theme'
    },
    {
      unitDescription,
      sql,
      facetName: 'experimentalStrategy',
      facetAliases: {
        experimentalStrategy: 'Assay',
      }
    },
    {
      unitDescription,
      sql,
      facetName: 'tumorType',
      facetAliases: {
        tumorType: 'Disease Type',
      }
    },
  ],
  rgbIndex: 1,
  facetName: 'grantType',
  facetAliases: {
    grantType: 'Grant Type',
  },
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
