/* eslint-disable no-use-before-define */
import fetch from 'isomorphic-fetch';
import config from '../utils/config';

export class HttpHelp {
    static headers(customHeaders = {}) {
        const headers = Object.assign({
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }, customHeaders);

        return new Headers(headers);
    }

    static request(url, method = 'GET', oHeaders = this.headers(), body = {}) {
        if (!url) { return; }

        url.substring(0, 1) === '/'
            ? url = `${config.API_URL}${url}`
            : url = `${config.API_URL}/${url}`;

        let requestInit: any = {
            method: method,
            headers: oHeaders,
            mode: 'cors',
            cache: 'default'
        };

        if (method !== 'GET' && method !== 'HEAD') {
            requestInit = Object.assign({}, requestInit, { body: JSON.stringify(body) });
        }

        return new Request(url, requestInit);
    }

    static queryString(params = {}) {
        return '';
    }

    static responseHandle(response) {
        if (!response.ok) {
            this.rejectHandle('error');
            return;
        }
        const contentType = response.headers.get('content-type');
        if (/json/.test(contentType)) {
            return response.json();
        }
    }

    static rejectHandle(error) {
        console.log('fail');
    }

    static Get(requestPath, params = {}) {
        const sQuery = this.queryString(params),
            url = `${requestPath}${sQuery}`,
            oRequest = this.request(url, 'GET', this.headers());

        const that = this;
        return new Promise(function (resolve: any, reject: any) {
            fetch(oRequest).then((response: any) => {
                const data = that.responseHandle(response);
                resolve.call(that, data);
            }).catch((error: any) => {
                reject.call(that, that.rejectHandle(error));
            });
        });
    }

    static Post(requestPath, body = {}, params = {}) {
        const sQuery = this.queryString(params),
            url = `${requestPath}${sQuery}`,
            oRequest = this.request(url, 'POST', this.headers(), body);

        const that = this;
        return new Promise(function (resolve, reject) {
            fetch(oRequest).then((response: any) => {
                resolve.call(that, that.responseHandle(response));
            }).catch((error: any) => {
                reject.call(that, that.rejectHandle(error));
            });
        });
    }
}