import { SynapseConstants } from 'synapse-react-client'

// tslint:disable-next-line:max-line-length
const sql = 'SELECT grantType AS "Grant Type", centerName AS "Grant", consortium AS "Program", species AS "Species", fileFormat AS "Data Format", experimentalStrategy AS "Assay", platform AS "Platform", tumorType AS "Disease Type", sex AS "Gender", tissue AS "Tissue" FROM syn9630847'

const facetAliases = {
  grantType: 'Grant Type',
  centerName: 'Grant',
  consortium: 'Program',
  species: 'Species',
  fileFormat: 'Data Format',
  experimentalStrategy: 'Assay',
  platform: 'Platform',
  tumorType: 'Disease Type',
  sex: 'Gender',
  tissue: 'Tissue'
}

const unitDescription = 'datasets'

export const datasets = {
  unitDescription,
  sql,
  name: 'Datasets',
  menuConfig: [
    {
      sql,
      unitDescription,
      facetAliases,
      title: 'Grant Type',
      facetName: 'grantType',
    },
    {
      sql,
      unitDescription,
      facetAliases,
      title: 'Grant',
      facetName: 'centerName',
    },
    {
      sql,
      unitDescription,
      facetAliases,
      title: 'Program',
      facetName: 'consortium',
    },
    {
      sql,
      unitDescription,
      facetAliases,
      title: 'Species',
      facetName: 'species',
    },
    {
      sql,
      unitDescription,
      facetAliases,
      title: 'Theme',
      facetName: 'Theme'
    },
    {
      sql,
      unitDescription,
      facetAliases,
      title: 'Data Format',
      facetName: 'fileFormat',
    },
    {
      sql,
      unitDescription,
      facetAliases,
      title: 'Assay',
      facetName: 'experimentalStrategy',
    },
    {
      sql,
      unitDescription,
      facetAliases,
      title: 'Platform',
      facetName: 'platform',
    },
    {
      sql,
      unitDescription,
      facetAliases,
      title: 'Disease Type',
      facetName: 'tumorType',
    },
    {
      sql,
      unitDescription,
      facetAliases,
      title: 'Gender',
      facetName: 'sex',
    },
    {
      sql,
      unitDescription,
      facetAliases,
      title: 'Tissue',
      facetName: 'tissue',
    },
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
  },
  facetAliases: {
    grantType: 'Grant Type',
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
