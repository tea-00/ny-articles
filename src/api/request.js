import axios from 'axios';

const config = {
  baseURL: 'https://api.nytimes.com/svc/search/v2/',
  headers: { 'Content-Type': 'application/json' },
  params: { 'api-key': 'B3y088D4i6YlCIXqWecnQtqne6bakukY' }
};

// Instance of axios to be used for all API requests.
export const api = axios.create(config);
