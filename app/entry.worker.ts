/// <reference lib="WebWorker" />

import type { WorkerDataFunctionArgs } from '@remix-pwa/sw';

export {};

declare let self: ServiceWorkerGlobalScope;

self.addEventListener('install', (event) => {
  console.log('Service worker installed');

  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
  console.log('Service worker activated');

  event.waitUntil(self.clients.claim());
});

export const defaultFetchHandler = async ({
  request,
}: WorkerDataFunctionArgs) => {
  console.log('test');
  const serverHost = 'https://api.example.com';
  const url = new URL(request.url);

  if (request.method.toLowerCase() === 'get' && url.searchParams.get('_data'))
    return fetch(`${serverHost}${url.pathname}`);

  return fetch(request);
};
