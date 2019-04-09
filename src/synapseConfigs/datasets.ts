import { SynapseConstants } from 'synapse-react-client'

// tslint:disable-next-line:max-line-length
const sql = `SELECT * FROM syn18488466 WHERE ( ( "featured" = 'TRUE' ) )`

const unitDescription = 'Datasets'

export const datasets = {
  unitDescription,
  sql,
  name: 'Datasets',
  type: SynapseConstants.CSBC_DATASET,
  menuConfig: [
    {
      sql,
      unitDescription,
      facetName: 'species',
      facetAliases: {
        species: 'Species',
      }
    },
    {
      sql,
      unitDescription,
      facetName: 'Theme'
    },
    {
      sql,
      unitDescription,
      facetName: 'experimentalStrategy',
      facetAliases: {
        experimentalStrategy: 'Assay'
      }
    },
    {
      sql,
      unitDescription,
      facetName: 'platform',
      facetAliases: {
        platform: 'Platform'
      }
    },
    {
      sql,
      unitDescription,
      facetName: 'tumorType',
      facetAliases: {
        tumorType: 'Disease Type'
      }
    }
  ],
  rgbIndex: 0,
  facetName: 'tumorType',
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
  facetAliases: {
    tumorType: 'Disease Type',
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
