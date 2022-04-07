import axios from 'axios';
import { getGridURL, getHTTPHeaders, to } from './utils';
import { APIResponse, BulkCrudObject, MethodConfig } from './types';

export async function bulkCrud<GridDataModel>(
  bulkCrudObj: BulkCrudObject<GridDataModel>,
  gridId: string,
  config: MethodConfig = {}
): Promise<APIResponse> {
  return to(
    axios.post(
      getGridURL('rows_columns/bulk_crud', gridId, config),
      bulkCrudObj,
      getHTTPHeaders(config)
    )
  );
}
