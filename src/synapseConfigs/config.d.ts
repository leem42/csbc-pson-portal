import { SynapseConstants } from 'synapse-react-client'
import { MenuConfig } from 'synapse-react-client/dist/containers/QueryWrapperMenu'
import { QueryBundleRequest } from 'synapse-react-client/dist/utils/jsonResponses/Table/QueryBundleRequest';

type FacetAlias = {
  [string]: string
}

export type Config = {
  unitDescription: string
  sql?: string // only some show cards on home
  name: string
  type: string
  menuConfig: MenuConfig []
  rgbIndex: number,
  facetName: string
  initQueryRequest: QueryBundleRequest
  facetAliases: FacetAlias
  countQuery: QueryBundleRequest 
}
