import { ApiCallInterface } from 'interfaces/api-call';
import { GetQueryInterface } from 'interfaces';

export interface PromptInterface {
  id?: string;
  message: string;
  options: string;
  created_at?: any;
  updated_at?: any;
  api_call?: ApiCallInterface[];

  _count?: {
    api_call?: number;
  };
}

export interface PromptGetQueryInterface extends GetQueryInterface {
  id?: string;
  message?: string;
  options?: string;
}
