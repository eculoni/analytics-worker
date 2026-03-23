// types.ts
import { DenoRequest, DenoResponse } from './interfaces';

export type RequestContext = DenoRequest & {
  headers: Record<string, string>;
  params: Record<string, string>;
  query: Record<string, string>;
  cookies: Record<string, string>;
  path: string;
};

export type ResponseContext = DenoResponse & {
  status: number;
  statusText: string;
  headers: Record<string, string>;
  body: Uint8Array | string;
};

export type WorkerEventHandler = (event: WorkerEvent) => void;
export type WorkerEvent = {
  request: RequestContext;
  response: ResponseContext;
  error: Error | null;
};

export type WorkerEvents = {
  'fetch': WorkerEventHandler;
  'error': WorkerEventHandler;
  'listen': WorkerEventHandler;
  'listen-start': WorkerEventHandler;
  'listen-stop': WorkerEventHandler;
};

export type WorkerOptions = {
  port?: number;
  hostname?: string;
  path?: string;
  protocol?: string;
};