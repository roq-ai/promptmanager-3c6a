import { ApiCallInterface } from 'interfaces/api-call';
import { GetQueryInterface } from 'interfaces';

export interface RequestInterface {
  id?: string;
  api_call_id: string;
  variables?: string;
  created_at?: any;
  updated_at?: any;

  api_call?: ApiCallInterface;
  _count?: {};
}

export interface RequestGetQueryInterface extends GetQueryInterface {
  id?: string;
  api_call_id?: string;
  variables?: string;
}
