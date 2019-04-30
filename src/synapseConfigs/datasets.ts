import { SynapseConstants } from 'synapse-react-client'
import { Config } from './config'
const sql = 'SELECT * FROM syn18488466'
const unitDescription = 'Datasets'
const synapseId = 'syn18488466'

export const datasets: Config = {
  unitDescription,
  sql: `SELECT * FROM syn18488466 WHERE ( ( "featured" = 'TRUE' ) )`,
  name: 'Datasets',
  type: SynapseConstants.CSBC_DATASET,
  menuConfig: [
    {
      sql,
      synapseId,
      unitDescription,
      facetName: 'species',
      facetAliases: {
        species: 'Species',
      }
    },
    {
      sql,
      synapseId,
      unitDescription,
      facetName: 'Theme'
    },
    {
      sql,
      synapseId,
      unitDescription,
      facetName: 'experimentalStrategy',
      facetAliases: {
        experimentalStrategy: 'Assay'
      }
    },
    {
      sql,
      synapseId,
      unitDescription,
      facetName: 'platform',
      facetAliases: {
        platform: 'Platform'
      }
    },
    {
      sql,
      synapseId,
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
    partMask: SynapseConstants.BUNDLE_MASK_QUERY_FACETS
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
