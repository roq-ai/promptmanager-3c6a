import { RequestInterface } from 'interfaces/request';
import { ResponseInterface } from 'interfaces/response';
import { PromptInterface } from 'interfaces/prompt';
import { GetQueryInterface } from 'interfaces';

export interface ApiCallInterface {
  id?: string;
  prompt_id: string;
  created_at?: any;
  updated_at?: any;
  request?: RequestInterface[];
  response?: ResponseInterface[];
  prompt?: PromptInterface;
  _count?: {
    request?: number;
    response?: number;
  };
}

export interface ApiCallGetQueryInterface extends GetQueryInterface {
  id?: string;
  prompt_id?: string;
}
