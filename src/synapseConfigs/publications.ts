import { SynapseConstants } from 'synapse-react-client'

const sql = `SELECT * FROM syn10923842 WHERE ( ( "grantType" = 'U54' OR "grantType" = 'U01' ) AND ( "Consortium" = 'PS-ON' OR "Consortium" = 'CSBC' OR "Consortium" = 'PS-ON,CSBC' ) )`

export const publications = {
  name: 'publications',
  type: SynapseConstants.CSBC_PUBLICATION,
  menuConfig: [
    {
      sql,
      facetName: 'diseaseType',
      facetAliases: {
        diseaseType: 'Disease Type',
      },
      unitDescription: 'diseases'
    },
    {
      sql,
      facetName: 'experimentalStrategy',
      facetAliases: {
        experimentalStrategy: 'Experimental',
      },
      unitDescription: 'strategies'
    },
    {
      sql,
      facetName: 'site',
      facetAliases: {
        site: 'Site',
      },
      unitDescription: 'sites'
    },
    {
      sql,
      facetName: 'tissue_or_organ',
      facetAliases: {
        tissue_or_organ: 'Tissue',
      },
      unitDescription: 'Tissue'
    },
    {
      sql,
      facetName: 'year',
      facetAliases: {
        year: 'Year',
      },
      unitDescription: 'years'
    },
    {
      sql,
      facetName: 'Consortium',
      facetAliases: {
        Consortium: 'Program',
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
  rgbIndex: 1,
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
