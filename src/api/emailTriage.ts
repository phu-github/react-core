/* eslint-disable @typescript-eslint/no-explicit-any */
import {HttpMethod, httpClient} from './httpClient';

export const getTriageInboxes = (data = {}): Promise<any> => {
  return httpClient(`/inboxes`, HttpMethod.Post, data);
};

export const updateTriageInboxes = (data = {}): Promise<any> => {
  return httpClient(`/inboxes/update-triage-inbox`, HttpMethod.Post, data);
};
