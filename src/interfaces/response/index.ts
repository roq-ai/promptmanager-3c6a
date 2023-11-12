import { ApiCallInterface } from 'interfaces/api-call';
import { GetQueryInterface } from 'interfaces';

export interface ResponseInterface {
  id?: string;
  api_call_id: string;
  data: string;
  created_at?: any;
  updated_at?: any;

  api_call?: ApiCallInterface;
  _count?: {};
}

export interface ResponseGetQueryInterface extends GetQueryInterface {
  id?: string;
  api_call_id?: string;
  data?: string;
}
