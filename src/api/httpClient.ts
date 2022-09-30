/* eslint-disable @typescript-eslint/ban-ts-comment */
import axios, {AxiosResponse, AxiosError} from 'axios';
import aws4Interceptor from './aws4Interceptor';
import { SignatureV4 } from '@aws-sdk/signature-v4';
import { Sha256 } from '@aws-crypto/sha256-js';


const sigv4 = new SignatureV4({
  service: 'execute-api',
  region: 'us-east-1',
  credentials: {
    accessKeyId: localStorage.getItem('accessKeyId') || '',
    secretAccessKey: localStorage.getItem('secretAccessKey') || '',
    sessionToken: localStorage.getItem('sessionToken') || '',
  },
  sha256: Sha256,
});

export enum HttpMethod {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
  Patch = 'PATCH',
  Delete = 'DELETE',
}

export interface InterceptorOptions {
  service: string;
  region: string;
}

export interface ICredentials {
  accessKeyId: string;
  secretAccessKey: string;
  sessionToken?: string;
}

const interceptor = aws4Interceptor(
  {
    region: "us-east-1",
    service: "execute-api",
  },
  {
    accessKeyId: localStorage.getItem('accessKeyId') || '',
    secretAccessKey: localStorage.getItem('secretAccessKey') || '',
    sessionToken: localStorage.getItem('sessionToken') || ''
  }
);

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  console.error(`[request error] [${JSON.stringify(error)}]`);
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  // console.info(`[response] [${JSON.stringify(response)}]`);
  return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  console.error(`[response error] [${JSON.stringify(error)}]`);
  // const originalRequest = error.config;
  return Promise.reject(error);
};

axios.interceptors.request.use(interceptor, onRequestError);
axios.interceptors.response.use(onResponse, onResponseError);

export const httpClient = (url: string, method: HttpMethod, bodyData: any) => {
  return new Promise((resolve, reject) => {
    const baseURL = process.env.REACT_APP_BASE_API_URL;
    const hostName = process.env.REACT_APP_HOSTNAME || '';
    const params: any = {method, url: `${baseURL}${url}`};

    const signed = sigv4.sign({
      method: method,
      hostname: hostName,
      path: url,
      protocol: 'https',
      headers: {
        'Content-Type': 'application/json',
        host: hostName, // compulsory
      },
    });
    if(bodyData) {
      params.body = bodyData
    }
    try {
      //makeCognitoRequest(idToken || '').then((result:any) => {
        const data = axios({
          ...signed,
          data: JSON.stringify(params.body),
          method: method,
          url: `${baseURL}${url}`, // compulsory
        });
        data.then((response) => {
          console.log(response)
          console.log('Successfully received data: ', response);
          resolve(response);
        });
     //});
    } catch (error) {
      console.log('An error occurred', error);
      resolve(error);
    }
  });
};
