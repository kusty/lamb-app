import Toast from 'antd-mobile/lib/toast';
import { stringify } from 'qs';
import UTF8 from 'crypto-js/enc-utf8';
import Base64 from 'crypto-js/enc-base64';

import { SERVER } from '../constants/server';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  Toast.info(response.statusText, 1);
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function parseJSON(response) {
  return response.json();
}

export function headerAuthorization() {
  const token = '';
  return {
    Authorization: `Basic ${Base64.stringify(UTF8.parse(`${new Date().getTime()}:${token}`))}`,
  };
}

export default function request(url, options) {
  const defaultOptions = {
    credentials: 'include',
    headers: headerAuthorization(),
  };
  const newOptions = { ...defaultOptions, ...options };
  if (newOptions.method === 'POST' || newOptions.method === 'GET') {
    newOptions.body = stringify(newOptions.body);
    newOptions.headers = {
      ...newOptions.headers,
      'Content-Type': 'application/x-www-form-urlencoded',
    };
  }
  console.log(newOptions);
  return fetch(SERVER.APIURL + url, newOptions)
    .then(checkStatus)
    .then(parseJSON)
    .then((res) => {
      if (res.status !== 200) {
        Toast.info(res.msg, 3);
      }
      return res;
    })
    .catch((error) => {
      if (error.code) {
        Toast.info(error.message, 1);
      }
      if ('stack' in error && 'message' in error) {
        Toast.info(error.message, 1);
      }
      return error;
    });
}
