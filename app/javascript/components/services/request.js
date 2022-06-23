import axios from 'axios';

const token = document.querySelector('[name=csrf-token').content;
axios.defaults.headers.common['X-CSRF-TOKEN'] = token;

const client = axios.create({
    baseURL: '/api/v1/'
});

export function create(params, endpoint) {
    return client.post(endpoint, params);
}

export function update(params, endpoint) {
    return client.put(endpoint, params);
}
