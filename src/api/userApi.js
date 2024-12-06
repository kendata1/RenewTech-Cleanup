import {request} from '../lib/requester.js';

const baseUrl = 'http://localhost:3030/users';

export async function register(data) {
	return await request('POST', `${baseUrl}/register`, data);
}

export async function login(data) {
	return await request('POST', `${baseUrl}/login`, data);
}

export async function logout() {
	return await request('GET', `${baseUrl}/logout`);
}
